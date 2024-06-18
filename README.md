# 基础react-ui库测试

# 安装typescript

全局安装typescript

```bash
npm add -g typescript
```

初始化ts项目，生成tsconfig.json

```bash
tsc --init
```

# 修改tsconfig.json里面的配置项

# 添加组件

# 修改package.json

# 配置rollup.congfig.js

# 发布到npm

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

# 使用库

```tsx
import { Button } from 'xld-react-ui';
<Button text="hello"></Button>
```
