module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#0A192F',
        'light-primary': '#172a45',
        white: '#E6F1FF',
        'dark-white': '#A8B2D1',
        accent: '#64FFDA',
        'red-accent': '#FF1744',
        'dark-gray': '#8892b0',
      },
      fontFamily: {
        body: ['Nunito'],
        mont: ['Montserrat'],
        didact: ['Didact Gotic'],
      },
      fontSize: {
        huge: '6rem'
      },
      margin: {
        '14': '3.2rem'
      },
      spacing: {
        img: '295px',
      },
      fill: {
        current: '#A8B2D1',
      }
    },
  },
  variants: {},
  plugins: [],
}
