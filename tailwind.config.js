module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontSize: {
      xs: ['12px'],
      sm: ['14px'],
      base: ['16px'],
      lg: ['18px'],
      xl: ['20px'],
      '2xl': ['24px'],
      '3xl': ['30px'],
    },
    extend: {
      fontFamily: {
        'primary': ['Noto Sans TC', '微軟正黑體', 'sans-serif']
      },
      maxWidth: {
        'container': '1200px'
      },
      borderRadius: {
        '2lg': '10px'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'disabled', 'hover'],
    outline: ['active', 'focus'],
    borderWidth: ['focus'],
    borderColor: ['hover', 'active', 'focus'],
  },
}