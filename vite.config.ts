
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ 注意：将下面的 'REPO_NAME' 替换为你的 GitHub 仓库名称 (例如 '/rabbit-hole-game/')
  // 如果是部署到 username.github.io 根目录，则改为 '/'
  base: '/REPO_NAME/', 
})
