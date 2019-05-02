{
    "targets": [{
        "target_name": "td",
        "cflags!": [ "-fno-exceptions" ],
        "cflags_cc!": [ "-fno-exceptions" ],
        "sources": [
            "td.cpp"
        ],
        'include_dirs': [
            "<!@(node -p \"require('node-addon-api').include\")"
        ],
        # 'libraries': [],
        'link_settings': {
            'libraries': [
                '-ltdjson',
                '-L<!@(pwd)',
                '-Wl,-rpath,<!@(pwd)'
            ]
        },
        'dependencies': [
            "<!(node -p \"require('node-addon-api').gyp\")"
        ],
        'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ]
    }]
}
