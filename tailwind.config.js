/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lmd:'860px',
      blmd:'895px',
      blmd2:'942px',
      lg: '1024px',
      lg2:'1043px',
      lg3:'1084px',
      lg4:'1105px',
      lg5:'1175px',
      lg6:'1222px',
      xl: '1280px',
      xl2: '1400px',
      xl3: '1408px',
      '2xl': '1536px',
    },
    extend: {
      transitionTimingFunction: {
        'tr-1': 'transform .6s cubic-bezier(.19,1,.22,1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [],
}

