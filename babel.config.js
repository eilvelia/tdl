module.exports = {
  'presets': [
    ['@babel/env', {
      'targets': {
        'node': '12.0.0'
      }
    }],
    '@babel/preset-flow'
  ],
  'plugins': [
    '@babel/plugin-proposal-class-properties'
  ]
}
