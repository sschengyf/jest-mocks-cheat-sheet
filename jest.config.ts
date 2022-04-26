import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.[jt]s$': 'ts-jest',
  },
};

export default config;
