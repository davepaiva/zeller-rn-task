import {CodegenConfig} from '@graphql-codegen/cli';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const BASE_URL = process.env.BASE_URL;

const config: CodegenConfig = {
  schema: `${BASE_URL}/graphql`,
  documents: ['src/**/*.{ts,tsx,graphql}'],
  generates: {
    './src/types/graphql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
