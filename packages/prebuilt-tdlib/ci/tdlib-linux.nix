{ target, rev }:
let
  pkgs = if builtins.substring 0 7 target == "aarch64"
    then import <nixpkgs> { crossSystem.config = "aarch64-unknown-linux-gnu"; }
    else import <nixpkgs> {};
  inherit (pkgs) lib stdenv;
  zig-toolchain = import ./zig-toolchain.nix { inherit target; pkgs = pkgs.buildPackages.buildPackages; };
  zlib = pkgs.callPackage ./zlib-zig.nix { inherit zig-toolchain; };
  openssl = pkgs.callPackage ./openssl-zig.nix { inherit zig-toolchain; };
in
# Based on https://github.com/NixOS/nixpkgs/blob/af51e23ce535b1bfa8484021ff3913d876e09082/pkgs/development/libraries/tdlib/default.nix
stdenv.mkDerivation {
  pname = "tdlib";
  version = "0.0";

  src = builtins.fetchTarball "https://github.com/tdlib/td/archive/${rev}.tar.gz";

  buildInputs = [ openssl zlib ];
  nativeBuildInputs = with pkgs.buildPackages; [ cmake gperf ];

  preConfigure = ''
    export CC=${pkgs.buildPackages.stdenv.cc}/bin/cc
    export CXX=${pkgs.buildPackages.stdenv.cc}/bin/c++
    mkdir native-build && cd native-build
    cmake -DOPENSSL_ROOT_DIR=${pkgs.buildPackages.openssl.dev} \
      -DZLIB_ROOT=${pkgs.buildPackages.zlib.dev} \
      ..
    cmake --build . --target prepare_cross_compiling -j $NIX_BUILD_CORES
    cd ..
  '' + zig-toolchain.env;

  patches = [ ./tdlib-zig.patch ];

  cmakeFlags = [
    "-DCMAKE_BUILD_TYPE=Release"
    "-DOPENSSL_USE_STATIC_LIBS=TRUE"
    "-DZLIB_USE_STATIC_LIBS=TRUE"
    "-DCMAKE_SYSTEM_NAME=Linux"
    "-DCMAKE_CROSSCOMPILING=TRUE"
  ];

  buildPhase = ''
    cmake --build . --target tdjson -j $NIX_BUILD_CORES
  '';

  installPhase = ''
    runHook preInstall
    mkdir -p "$out"/lib
    cp -L ./libtdjson.so "$out"/lib/
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
  '' + lib.optionalString (stdenv.isDarwin && stdenv.isAarch64) ''
    sed -i "/vptr/d" test/CMakeLists.txt
  '';
}
