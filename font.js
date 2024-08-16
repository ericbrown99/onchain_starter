const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    '@font-face': [
      {
        fontFamily: 'MyFont',
        fontWeight: '400',
        src: `url('/fonts/MyFont.woff2') format('woff2'),
              url('/fonts/MyFont.woff') format('woff'),
              url('/fonts/MyFont.ttf') format('truetype')`,
      },
      // Add more font weights or styles if needed
    ],
  });
});
