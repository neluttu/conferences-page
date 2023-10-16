/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','styles.css'],
  theme: {
    extend: {
        fontFamily: {
            'nunito': ['Nunito', 'sans-serif'],
            'rubik': ['Rubik', 'sans-serif'],
            'poppins': ['Poppins', 'sans-serif'],
            'merriweather': ['Merriweather', 'sans-serif'],
            'lato': ['Lato', 'sans-serif'],
            'montserrat': ['Montserrat', 'sans-serif'],
            'sourcesans3': ['Source Sans 3', 'sans-serif'],
            'noto': ['Noto Sans', 'sans-serif'],
            'roboto': ['Roboto', 'sans-serif'],
            'oswald': ['Oswald', 'sans-serif']
        },
    },
  },
  plugins: [],
}