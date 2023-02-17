// @ts-ignore
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    "reporters": [ "default", "jest-junit" ]
}


module.exports = createJestConfig(customJestConfig)
