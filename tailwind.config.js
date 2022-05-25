const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./public/**/*.{html,js,php}"],
  theme: {
    extend: {
      fontSize: {
        '6.5xl': ['4rem', { lineHeight: '1' }],
      },
      maxWidth: {
        xxs: '16rem',
      },
      spacing: {
        224: '56rem',
      }
    },
    fontFamily: {
      sans: ['scandia-web', ...defaultTheme.fontFamily.sans],
      mono: ['source-code-pro', ...defaultTheme.fontFamily.mono],
    }
  },
  plugins: [],
}
