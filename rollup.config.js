import nodeResolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: './index.js',
    output: {
      format: 'iife',
      file: 'dist/type-is-object.js',
      name: 'isObject'
    },
    plugins: [nodeResolve()]
  },
  {
    input: './index.js',
    output: {
      format: 'cjs',
      file: 'index.cjs.js'
    },
    plugins: [nodeResolve()]
  }
];
