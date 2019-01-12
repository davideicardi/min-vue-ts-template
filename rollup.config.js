import vuePlugin from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  input: './src/main.js',
  output: {
    file: './public/bundle.js',
    // Browser format (Immediately-invoked function expression)
    format: 'iife'
  },
  plugins: [
    // Allow to replace code parts
    //  this is used to set vue build mode: production/development
    replace({
      'process.env.NODE_ENV': JSON.stringify( process.env.BUILD || "development" )
    }),
    // Enable .vue parsing
    vuePlugin(/* options */),
    // Enable to import modules via "import"
    resolve(),
    // Enable to import modules via "require"
    commonjs()
  ]
}