# Linux-only
{ pkgs ? import <nixpkgs> {}, rev, arch, abi, libcVersion ? "" }:
let
  hasLibcVersion = builtins.stringLength libcVersion > 0;
  zigTarget = "${arch}-linux-${abi}" + (if hasLibcVersion then ".${libcVersion}" else "");

  pkgs' = import pkgs.path {
    crossSystem = {
      config = "${arch}-unknown-linux-${abi}";
      useZig = true;
      linker = "lld";
    };
  };
  buildPkgs = pkgs'.buildPackages;
  targetPrefix = "${arch}-unknown-linux-${abi}-";

  zigCC = buildPkgs.wrapCCWith {
    cc = buildPkgs.zig.cc-unwrapped.overrideAttrs (prev: {
      passthru = prev.passthru // {
        # https://github.com/NixOS/nixpkgs/pull/463199
        hardeningUnsupportedFlags = (prev.passthru.hardeningUnsupportedFlags or [])
          ++ [ "libcxxhardeningfast" "libcxxhardeningextensive" ];
      };
    });
    # The zig bintools wrapper only creates unprefixed tools (ar, ranlib, etc.),
    # but the nix hook expects prefixed tools like x86_64-unknown-linux-gnu-ar
    bintools = buildPkgs.zig.bintools.overrideAttrs (prev: {
      postFixup = (prev.postFixup or "") + ''
        for tool in ar ranlib objcopy readelf nm size strings strip; do
          if [ ! -e "$out/bin/${targetPrefix}$tool" ]; then
            src="${buildPkgs.zig.bintools.bintools_bin}/bin/$tool"
            if [ -e "$src" ]; then
              ln -s "$src" "$out/bin/${targetPrefix}$tool"
            fi
          fi
        done
      '';
    });
    extraPackages = [ ];
    # Add glibc version to target if necessary & always strip
    nixSupport.cc-cflags = [ "-target" zigTarget "-s" ];
  };

  stdenv = pkgs'.overrideCC pkgs'.stdenv zigCC;

  openssl = (pkgs'.openssl.override { inherit stdenv; }).overrideAttrs {
    doCheck = false;
  };

  zlib = (pkgs'.zlib.override { inherit stdenv; }).overrideAttrs {
    doCheck = false;
  };
in
(pkgs'.callPackage ./tdlib.nix { inherit rev openssl zlib stdenv; }).overrideAttrs (prev: {
  # https://github.com/ziglang/zig/issues/15113
  patches = [ ./tdlib-zig.patch ];
  # https://github.com/ziglang/zig/issues/23546
  cmakeFlags = (prev.cmakeFlags or []) ++ [ "-DCMAKE_LINK_DEPENDS_USE_LINKER=FALSE" ];
})
