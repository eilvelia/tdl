{
    'variables': {
        'openssl_fips': ''
    },
    'targets': [{
        'target_name': 'td',
        'cflags': [ '-Wall', '-Wextra', '-ffunction-sections', '-fdata-sections', '-fvisibility=hidden', '-flto' ],
        'cflags_cc': [ '-Wall', '-Wextra', '-std=c++14', '-ffunction-sections', '-fdata-sections', '-fvisibility=hidden', '-fvisibility-inlines-hidden', '-fno-rtti', '-flto' ],
        'ldflags': [ '-Wl,--gc-sections', '-flto' ],
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
                'xcode_settings': {
                    'MACOSX_DEPLOYMENT_TARGET': '11.0',
                    'GCC_SYMBOLS_PRIVATE_EXTERN': 'YES', # -fvisibility=hidden
                    'WARNING_CFLAGS': [ '-Wall', '-Wextra' ],
                    'OTHER_CPLUSPLUSFLAGS': [ '-std=c++14', '-fvisibility-inlines-hidden', '-fno-rtti' ],
                    'DEAD_CODE_STRIPPING': 'YES',
                    'LLVM_LTO': 'YES'
                }
            }]
        ]
    }]
}
