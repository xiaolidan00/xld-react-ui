import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  // const env=loadEnv(mode, process.cwd())
  return defineConfig({
    base: mode === 'development' ? '/' : '/xld-react-ui',
    plugins: [react()]
  });
};
