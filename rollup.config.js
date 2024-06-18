import packageJson from './package.json' assert { type: 'json' };
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true }
    ],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    ouput: {
      file: packageJson.types,
      format: 'esm'
    },
    plugins: [dts()]
  }
];
