const typescript = require('@rollup/plugin-typescript')
const commonjs = require('@rollup/plugin-commonjs')
const {
  babel,
} = require('@rollup/plugin-babel')

module.exports = {
  external: [
    /@babel\/runtime/,
    /core-js/,
  ],
  plugins: [
    typescript(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      extensions: [
        '.ts',
      ],
      presets: [
        [
          '@bugfixes',
          {
            useRuntimeESModules: true,
          },
        ],
      ],
    }),
  ],
}
