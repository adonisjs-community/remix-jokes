module.exports = {
  purge: ['resources/views/**/*.edge'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'translucent-light': 'hsl(0 0% 100% / 10%)',
      'translucent-dark': 'hsl(0 0% 0% / 10%)',
      'eggplant': {
        900: 'hsl(278, 73%, 19%)',
        600: 'hsl(277, 85%, 38%)',
      },
      'yellow': {
        500: 'hsl(48, 100%, 50%)',
        600: 'hsl(48, 100%, 45%)',
      },
      'red': {
        700: 'hsla(356, 77%, 59%, 0.747)',
        600: 'hsl(356, 100%, 71%)',
      },
    },
    backgroundImage: {
      'eggplant-gradient': `radial-gradient(
        circle,
        rgba(152, 11, 238, 1) 0%,
        rgba(118, 15, 181, 1) 35%,
        rgba(58, 13, 85, 1) 100%
      )`,
    },
    fontFamily: {
      body: ['-apple-system', '"Segoe UI"', 'Helvetica Neue', 'Helvetica'],
      display: ['baloo'],
    },
    boxShadow: {
      'DEFAULT': '0 0.2rem 1rem rgb(0 0 0 / 50%)',
      'button': '0 3px 0 0 hsl(48, 100%, 30%)',
      'raised-button': '0 4px 0 0 hsl(48, 100%, 30%)',
    },
    extend: {
      maxWidth: {
        xxs: '12rem',
      },
      outline: {
        DEFAULT: ['2px solid hsl(48, 100%, 50%)', '2px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
