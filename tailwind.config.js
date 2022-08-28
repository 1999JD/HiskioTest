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
      width: {
        'fit': 'fit-content'
      },
      minHeight: {
        14: '3.5rem'
      },
      colors: {
        primary: {
          DEFAULT: '#178fac',
          pale: '#eff5f8'
        },
        yellow: {
          DEFAULT: '#ffa81d'
        },
        gray: {
          50: '#fafafa',
          100: '#8C8C8C',
          200: '#D9D9D9',
          300: '#f5f5f5',
          500: '#595959',
          700: '#434343'

        },

      },
      maxWidth: {
        'container': '1200px'
      },
      maxHeight: {
        '96vh': '96vh'
      },
      borderRadius: {
        '2lg': '10px'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'disabled', 'hover'],
    outline: ['active', 'focus'],
    borderColor: ['hover', 'active', 'focus'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}