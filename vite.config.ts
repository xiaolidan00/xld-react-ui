import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  // const env=loadEnv(mode, process.cwd())
  return defineConfig({
    base: mode === 'development' ? '/' : '/xld-react-ui',
    plugins: [react()]
  });
};
