import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: {
        forms: resolve(__dirname, 'src/forms'),
        nav: resolve(__dirname, 'src/nav'),
        layouts: resolve(__dirname, 'src/layouts'),
        '': resolve(__dirname, 'src/index.ts'),
      },
      name: 'ui-kit',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        `${entryName ? entryName + '/' : ''}ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
