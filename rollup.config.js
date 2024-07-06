import packageJson from './package.json' assert { type: 'json' };
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
const plugins = [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })];
export default [
  {
    //外部引入依赖
    external: ['react', 'react-dom'],
    //入口文件
    input: 'src/index.ts',
    //导出文件
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true }
    ],
    plugins: [
      ...plugins,
      //css文件处理
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
    //导出ds.ts文件
    ouput: {
      file: packageJson.types,
      format: 'esm'
    },
    plugins: [...plugins, dts()]
  }
];
