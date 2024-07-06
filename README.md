# react基础ui库

# 1.安装typescript和babel

- 安装typescript

```bash
tslib
typescript
```

- 初始化ts项目，生成tsconfig.json

```bash
pnpm exec tsc --init
```

- 修改tsconfig.json里面的配置项

```json
"compilerOptions": {
  "target": "ESNext" ,
  "jsx": "react-jsx"
},
"include": ["src"],
  "exclude": ["src/**/*.stories.ts", "src/**/*.test.tsx"]
```

# 2.添加React组件

```bash
react
@types/react
react-dom
@types/react-dom
vite
@vitejs/plugin-react
```

需index.ts导出组件

# 3.修改package.json导出文件

```json
"type": "module",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
```

# 4.配置rollup.congfig.js

- `@rollup/plugin-commonjs`
- `@rollup/plugin-node-resolve`
- `@rollup/plugin-typescript`
- `rollup-plugin-postcss`css注入
- `rollup-plugin-dts`导出d.ts
- rollup

打包react组件

```js
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
  }
```

打包d.ts组件

```js
{
    input: 'dist/esm/types/index.d.ts',
    ouput: {
      file: packageJson.types,
      format: 'esm'
    },
    plugins: [dts()],
    external: [/\.css$/]
  }
```

# 5.发布到npm

github创建access token
<https://github.com/settings/tokens>

将token添加到.npmrc

```yaml
init-author-name=github用户名
register=https://register.npmjs.org/
@github用户名:register=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=__你的token__
```

发布到npm

```bash
npm publish
```

# 6.使用库

```tsx
import { Button } from 'xld-react-ui';
<Button text="hello"></Button>
```

# 7.storyBook

创建storyBook

```bash
pnpm add storybook -D
pnpm exec sb init
```

在src/stories文件夹里面会自动生成一些示例组件

运行或构建storyBook

```bash
 "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
```

init会自动添加一下依赖

```json
 "storybook": "^8.1.10",
"@chromatic-com/storybook": "1.5.0",
"@storybook/addon-essentials": "^8.1.10",
    "@storybook/addon-interactions": "^8.1.10",
    "@storybook/addon-links": "^8.1.10",
    "@storybook/addon-onboarding": "^8.1.10",
    "@storybook/blocks": "^8.1.10",
    "@storybook/react": "^8.1.10",
    "@storybook/react-vite": "^8.1.10",
    "@storybook/test": "^8.1.10",
```

# 8.jest测试组件

- 安装babel

```bash
@babel/preset-env
@babel/preset-react
@babel/preset-typescript
```

- 配置.babelrc

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "shippedProposals": true,
        "targets": {
          "node": "current"
        }
      }
    ],
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ]
}

```

- 安装jest库

```json
"@testing-library/jest-dom": "^6.4.6",
    "@testing-library/react": "^16.0.0",
"@types/jest": "^29.5.12",
 "babel-jest": "^29.7.0",
    "jest": "^29.7.0",
    "jest-css-modules": "^2.1.0",
    "jest-environment-jsdom": "^29.7.0",
```

- 编写test测试用例

```tsx
import '@testing-library/jest-dom';
import { screen, fireEvent, render, cleanup } from '@testing-library/react';

import Button from '../components/Button';
import styles from '../components/Button/Button.module.css';
import React from 'react';

describe('Button', () => {
  afterEach(() => cleanup());
  it('renders', () => {
    render(<Button data-testid="btn">Hello</Button>);
    const button = screen.getByTestId('btn');
    expect(button).toBeInTheDocument();
  });
  it('click', () => {
    const fn = jest.fn();
    render(
      <Button data-testid="btn1" onClick={fn}>
        Hello
      </Button>
    );
    const button = screen.getByTestId('btn1');
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it('style', () => {
    render(
      <Button data-testid="btn2" styleType="primary">
        Hello
      </Button>
    );
    const button = screen.getByTestId('btn2');
    console.log(styles.primary);
    expect(button).toHaveClass(styles.primary || 'primary');
  });
});

```

- package.json配置jest,jest中css解析用jest-css-modules

```json
"jest": {
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "\\.css$": "jest-css-modules"
    }
  },
```

- 测试命令

```json
"test": "jest --verbose",
    "test:cover": "jest --coverage",
    "test:watch": "jest --watchAll --verbose"
```

# 9.代码规范

- .prettierrc

```json
{
  "eslintIntegration": true,
  "stylelintIntegration": true,
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "none"
}

```

- 安装eslint

<https://typescript-eslint.nodejs.cn/getting-started/>

```bash
eslint --init
```

eslint.config.js

- globals 全局变量，window,document
- eslint-plugin-react
- @eslint/compat 兼容性
- @eslint/js
- typescript-eslint ts检测

.eslintrc

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-plugin-react

- 提交规范

husky在git hooks提交前执行代码检查，测试之类的

commitizen cz-conventional-changelog 命令行提示提交代码规范

lint-staged 代码检查成功才staged

```bash
pnpm add -D husky commitizen cz-conventional-changelog conventional-changelog-cli

pnpm husky init

git commit -m <type>[optional scope]: <description>

# 交互式提交代码
cz

# 生成changlog
conventional-changelog -p angular -i CHANGELOG.md -s

```
