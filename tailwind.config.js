module.exports = {
  theme: {
    fontFamily: {
      main: ['Open Sans', 'sans-serif']
    },

    extend: {
      colors: {
        blue: {
          500: '#0E1271'
        },

        gray: {
          100: '#ECEEF1',
          300: '#E5E5E5',
          500: '#939EAB',
          700: '#85888B',
          800: '#2E2E2E'
        },

        yellow: {
          500: '#EAAA00'
        }
      }
    }
  },
  variants: {
    display: ['responsive', 'hover', 'focus']
  },
  plugins: [
    function({ addComponents, theme }) {
      const button = {
        '.btn': {
          alignItems: 'center',
          border: '1px solid transparent',
          borderRadius: '9999px',
          display: 'inline-flex',
          fontSize: '0.875rem',
          fontWeight: 'bold',
          height: '50px',
          justifyContent: 'center',
          letterSpacing: '1px',
          paddingBottom: '1rem',
          paddingTop: '1rem',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease-out',
          '-moz-osx-font-smoothing': 'grayscale',
          '-webkit-font-smoothing': 'antialiased',

          '&:disabled': {
            cursor: 'not-allowed',
            opacity: '0.5'
          },
          '@media (min-width: 1024px)': {
            border: '1px solid white',
            paddingLeft: '4rem',
            paddingRight: '4rem',
          }
        }
      };

      addComponents(button);
    }
  ]
};
