/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '1/2': '50vh',
        '100' : "600px",
        '1200' : "900px",
        '100' : "100rem",
        '126' : "126rem",
        '252' : "252rem"
      },

      letterSpacing: {
        spasi: '.7em',
      }
    },
  },
  plugins: [],
}

