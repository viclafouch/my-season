module.exports = {
  plugins: ['react-native'],
  extends: ['@viclafouch/eslint-config-viclafouch'],
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0
  }
}
