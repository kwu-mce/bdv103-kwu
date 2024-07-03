import { defineConfig } from 'vitest/config';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    test: {

        environment: 'node',
        globals: true,
        include: ['test/**/*.test.ts'],
        includeSource: ['src/**/*.{js,ts}'],
        setupFiles: ['./test/setupMongoTest.ts'],
        exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'],
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
});