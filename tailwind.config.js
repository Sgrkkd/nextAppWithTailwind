module.exports = {
  content: [
    './src/components/**/*.js',
    './pages/**/*.js'],
  theme: {
    minHeight: {
      '60vh': '60vh'
    }
  },
  variants: {},
  plugins: [
    require( 'tailwindcss' ),
    require( 'precss' ),
    require( 'autoprefixer' )
  ]
}