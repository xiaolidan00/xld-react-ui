import packageJson from './package.json' assert { type: 'json' };
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

export default [
  {
    external: ['react', 'react-dom'],

    input: 'src/index.ts',
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extensions: ['.css'],
        minimize: true,
        sourceMap: true,
        modules: true,
        inject: { insertAt: 'top' }
      })
    ]
  },
  {
    input: 'src/index.ts',
    ouput: {
      file: packageJson.types,
      format: 'esm'
    },
    plugins: [dts()],
    external: [/\.css$/]
  }
];
