{ openssl, zig-toolchain }:
(openssl.override { static = true; }).overrideAttrs (final: prev: {
  preConfigure = zig-toolchain.env;
  doCheck = false;
})
