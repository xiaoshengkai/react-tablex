export default {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testRegex: '/test/.*\\.(test|spec)\\.(tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  // collectCoverageFrom: ['src/*.{js,ts}', 'src/**/*.{js,ts}'],
  collectCoverageFrom: [
    'src/*.{js,ts,tsx}',
    'src/**/*.{js,ts,tsx}',
    '!src/components/VirtualTable/*.{js,ts,tsx}',
    '!src/components/VirtualTable/**/*.{js,ts,tsx}',
  ],
  moduleNameMapper: {
    // 处理普通 CSS
    '\\.(css|less)$': 'identity-obj-proxy',
    // 处理 CSS Modules（可选）
    '\\.module\\.(css|less)$': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
};
