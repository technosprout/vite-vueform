import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ],
  build: {
    lib: {
      entry: 'src/components/customelement.js',
      name: 'custom-element',
      // the proper extensions will be added
      fileName: 'custom-element'
      

    }
  },
  define: {
    'process.env': process.env
  }
})