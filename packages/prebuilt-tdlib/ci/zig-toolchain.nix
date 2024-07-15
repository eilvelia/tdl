{ pkgs ? import <nixpkgs> {}, target }:
# See also https://gist.github.com/Cloudef/acb74ff9e36ab41709479240596ab501
let
  write-zig-compiler-wrapper = cmd:
    pkgs.writeShellScript "zig-${cmd}" ''
      ZIG_LOCAL_CACHE_DIR="$TMPDIR/zig-cache-${target}" \
      ZIG_GLOBAL_CACHE_DIR="$ZIG_LOCAL_CACHE_DIR" \
      ${pkgs.zig}/bin/zig ${cmd} -target ${target} -s "$@"
    '';
  write-zig-wrapper = cmd:
    pkgs.writeShellScript "zig-${cmd}" ''
      ZIG_LOCAL_CACHE_DIR="$TMPDIR/zig-cache-${target}" \
      ZIG_GLOBAL_CACHE_DIR="$ZIG_LOCAL_CACHE_DIR" \
      ${pkgs.zig}/bin/zig ${cmd} "$@"
    '';
in
rec {
  zig-cc = write-zig-compiler-wrapper "cc";
  zig-cxx = write-zig-compiler-wrapper "c++";
  zig-ar = write-zig-wrapper "ar";
  zig-ranlib = write-zig-wrapper "ranlib";
  env = ''
    export CC="${zig-cc}"
    export CXX="${zig-cxx}"
    export AR="${zig-ar}"
    export RANLIB="${zig-ranlib}"
  '';
}
