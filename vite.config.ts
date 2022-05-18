import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    port:5008,
    proxy:{
      '/users':'http://127.0.0.1:3000/'
    }
  }
})
