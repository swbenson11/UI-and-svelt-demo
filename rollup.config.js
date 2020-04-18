import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    // //Sass into css
    // postcss({
    //   extract: 'public/material.css',
    //   minimize: production,
    //   use: [
    //     [
    //       'sass',
    //       {
    //         includePaths: [
    //           // styles folder contains the necessary "_smui-theme.scss" file.
    //           './src/**',
    //         ],
    //       },
    //     ],
    //   ],
    // }),
    //Css file into svelte components
    // css({ output: 'public/build/extra.css' }), // TODO move?
    //Svelte into JS
    svelte({
      preprocess: autoPreprocess(),
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: (css) => {
        css.write('public/build/bundle.css');
      },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    // //Run sass and autoprefixer
    // sass({
    //   processor: (css) =>
    //     postcss([autoprefixer])
    //       .process(css)
    //       .then((result) => result.css),
    // }),

    //run babel
    //production &&
    babel({
      exclude: [
        // 'node_modules/**',
        /\/core-js\//,
      ],
      extensions: ['.svelte', '.js', '.jsx', '.es6', '.es', '.mjs', '.ts'],
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        });
      }
    },
  };
}
