{
  stdenv,
  lib,
  openssl,
  zlib,
  cmake,
  gperf,
  apple-sdk_14,
  buildPackages,

  rev,
}:
# Based on https://github.com/NixOS/nixpkgs/blob/af51e23ce535b1bfa8484021ff3913d876e09082/pkgs/development/libraries/tdlib/default.nix
stdenv.mkDerivation {
  pname = "tdlib";
  version = "0.0";

  src = builtins.fetchTarball "https://github.com/tdlib/td/archive/${rev}.tar.gz";

  buildInputs = [
    (openssl.override { static = true; }).dev
    (zlib.override { static = true; shared = false; })
  ] ++ lib.optionals stdenv.hostPlatform.isDarwin [ apple-sdk_14 ];

  nativeBuildInputs = [
    cmake
    gperf
  ];

  depsBuildBuild = [ buildPackages.stdenv.cc ];

  # Note: Even if we compile for the same architecture, the hostPlatform
  # compiler can be zig cc targeting a different glibc version that doesn't
  # produce runnable executables
  preConfigure = ''
    cmake -B native-build \
      -DCMAKE_C_COMPILER=$CC_FOR_BUILD \
      -DCMAKE_CXX_COMPILER=$CXX_FOR_BUILD \
      -DCMAKE_AR=$(command -v $AR_FOR_BUILD) \
      -DCMAKE_RANLIB=$(command -v $RANLIB_FOR_BUILD) \
      -DCMAKE_STRIP=$(command -v $STRIP_FOR_BUILD) \
      -DTD_GENERATE_SOURCE_FILES=ON .
    cmake --build native-build -j $NIX_BUILD_CORES
  '';

  cmakeFlags = [
    "-DCMAKE_BUILD_TYPE=Release"
    "-DOPENSSL_USE_STATIC_LIBS=TRUE"
    "-DZLIB_USE_STATIC_LIBS=TRUE"
    "-DCMAKE_CROSSCOMPILING=TRUE"
  ] ++ lib.optionals stdenv.hostPlatform.isLinux [
    "-DCMAKE_SYSTEM_NAME=Linux"
  ] ++ lib.optionals stdenv.hostPlatform.isDarwin [
    "-DCMAKE_SYSTEM_NAME=Darwin"
  ];

  buildPhase = ''
    runHook preBuild
    cmake --build . --target tdjson -j $NIX_BUILD_CORES
    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall
    mkdir -p $out/lib
  '' + (if stdenv.hostPlatform.isDarwin then ''
    cp -L libtdjson.dylib $out/lib
  '' else ''
    cp -L libtdjson.so $out/lib
  '') + ''
    runHook postInstall
  '';

  # https://github.com/tdlib/td/issues/1974
  postPatch = ''
    substituteInPlace CMake/GeneratePkgConfig.cmake \
      --replace 'function(generate_pkgconfig' \
                'include(GNUInstallDirs)
                 function(generate_pkgconfig' \
      --replace '\$'{prefix}/'$'{CMAKE_INSTALL_LIBDIR} '$'{CMAKE_INSTALL_FULL_LIBDIR} \
      --replace '\$'{prefix}/'$'{CMAKE_INSTALL_INCLUDEDIR} '$'{CMAKE_INSTALL_FULL_INCLUDEDIR}
  '' + lib.optionalString (stdenv.hostPlatform.isDarwin && stdenv.hostPlatform.isAarch64) ''
    sed -i "/vptr/d" test/CMakeLists.txt
  '';
}
