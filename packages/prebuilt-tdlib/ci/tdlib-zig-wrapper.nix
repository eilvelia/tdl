{ pkgs ? import <nixpkgs> {}, rev, arch, abi, libcVersion ? "" }:
# Linux-only
let
  target = "${arch}-linux-${abi}" +
    (if builtins.stringLength libcVersion > 0 then ".${libcVersion}" else "");
  pkgs' = import pkgs.path { crossSystem.config = "${arch}-unknown-linux-${abi}"; };
  zig-toolchain = import ./zig-toolchain.nix {
    inherit target;
    pkgs = pkgs'.buildPackages.buildPackages;
  };
  openssl = pkgs'.openssl.overrideAttrs (final: prev: {
    preConfigure = (prev.preConfigure or "") + zig-toolchain.env;
    doCheck = false;
  });
  zlib = pkgs'.zlib.overrideAttrs (final: prev: {
    preConfigure = (prev.preConfigure or "") + zig-toolchain.env;
    doCheck = false;
  });
in
(pkgs'.callPackage ./tdlib.nix { inherit rev openssl zlib; }).overrideAttrs (final: prev: {
  preConfigure = (prev.preConfigure or "") + zig-toolchain.env;
  patches = [ ./tdlib-zig.patch ];
})
