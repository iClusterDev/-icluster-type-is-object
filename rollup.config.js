import nodeResolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: './index.js',
    output: {
      format: 'iife',
      file: 'browser/type-is-object.js',
      name: 'typeIsObject'
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
