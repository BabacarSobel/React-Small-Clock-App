/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@store': path.resolve(__dirname, './src/store')
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setupTests.ts',
        coverage: {
            provider: 'v8',
            exclude: [
                '**/*.config.*',
                './src/vite-env.d.ts',
                './src/main.tsx', // Template file.
                './src/store/store.ts', // Slices are tested. Only configuration mostly
            ],
        }
    },
})
