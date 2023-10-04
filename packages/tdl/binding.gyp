{
    'variables': {
        'openssl_fips': ''
    },
    'targets': [{
        'target_name': 'td',
        'cflags!': [ '-fno-exceptions' ],
        'cflags_cc!': [ '-fno-exceptions' ],
        'cflags': [ '-Wall', '-Wextra' ],
        'cflags_cc': [ '-Wall', '-Wextra', '-std=c++14' ],
        'sources': [
            'addon/td.cpp'
        ],
        'include_dirs': [
            "<!@(node -p \"require('node-addon-api').include\")"
        ],
        'dependencies': [
            "<!(node -p \"require('node-addon-api').gyp\")"
        ],
        'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
        'conditions': [
            ['OS=="win"', {
                'sources': [
                    'addon/win32-dlfcn.cpp'
                ]
            }],
            ['OS=="mac"', {
                'cflags+': [ '-fvisibility=hidden' ],
                'xcode_settings': {
                    'GCC_SYMBOLS_PRIVATE_EXTERN': 'YES', # -fvisibility=hidden
                    'WARNING_CFLAGS': [ '-Wall', '-Wextra' ],
                    'OTHER_CPLUSPLUSFLAGS': [ '-std=c++14' ],
                    'MACOSX_DEPLOYMENT_TARGET': '10.14'
                }
            }]
        ]
    }]
}
