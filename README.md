# min-vue-ts-template

Minimal [Vue](https://vuejs.org/) + [Typescript](https://www.typescriptlang.org/) web application template. Bundled with [rollup](https://rollupjs.org/).

Features:

- Minimal dependencies
- Typescript support (except inside .vue for now)
- .vue single file compoments support
- Node.js required only for build

TODO:

- Use typescript also inside .vue files

## Usage

First time:

  npm install

Development build (typescript + rollup):

  npm run build

Files will be written inside `./public/bundle.js` folder. A Visual Studio Code is configured to run executing Ctrl+Shift+B.

For production build:

  BUILD=production npm run build

Run demo http server (using `http-server`) with:

  npm start

