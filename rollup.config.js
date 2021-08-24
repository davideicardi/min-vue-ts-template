import vue from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace';
import css from 'rollup-plugin-css-only';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/main.ts',
  output: {
    file: './public/bundle.js',
    format: 'esm'
  },
  plugins: [
    // Enable typescript
    typescript({
      tsconfig: "./tsconfig.json"
    }),
    // Enable .vue parsing
    vue({ css: false }),
    // Allow to replace code parts
    //  this is used to set vue build mode: production/development
    replace({
      'process.env.NODE_ENV': JSON.stringify( process.env.BUILD || "development" )
    }),
    // Extract css
    css({ output: './public/bundle.css' }),
  ]
}