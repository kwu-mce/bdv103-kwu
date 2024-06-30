import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {

        environment: 'node',
        globals: true,
        include: ['test/**/*.test.ts'],
        includeSource: ['src/**/*.{js,ts}'],
        setupFiles: ['./test/setupMongoTest.ts']
    },
});