{ zlib, zig-toolchain }:
(zlib.override { static = true; shared = false; }).overrideAttrs (final: prev: {
  preConfigure = prev.preConfigure + zig-toolchain.env;
  doCheck = false;
})
