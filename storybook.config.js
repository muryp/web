// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: './src',
  resolve: {
  // eslint-disable-next-line no-undef
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
