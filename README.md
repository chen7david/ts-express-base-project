# ts-base-project

This is a typescript based project with testing and linting and docker pre-configured.

## Project Commands

```bash
npm run start
npm run build
npm run dev
npm run format
npm run test
npm run db:up
npm run db:down
npm run db:drop
npm run db:latest
npm run db:seed
npm run knex migrate:make create-users-table
npm run knex seed:make 01-users
npm run knex seed:run
npm run check-types
npm run check-format
npm run check-lint
npm run check-all
npm run docker:dev:up
npm run docker:dev:down
npm run docker:prod:up
npm run docker:prod:down
```

## Installed Dependencies

- <code>typescript</code>: enables you to compile typescript code
- <code>ts-node</code>: compiles typescript code on the fly
- <code>jest</code>: library for unit and integration testing
- <code>ts-jest</code>: enable jest to work with typescript
- <code>supertest</code>: enables you to make network request in your tests
- <code>dotenv</code>: loads environment variables
- <code>nodemon</code>: automatically restarts your server on save
- <code>husky</code>: enables you to run checks before commits to your repository
- <code>prettier</code>: auto formats your code
- <code>eslint</code>: enforces predefined coding standards
- <code>eslint-config-standard-with-typescript</code>: supports eslint
- <code>eslint-plugin-import</code>: supports eslint
- <code>eslint-plugin-n</code>: supports eslint
- <code>eslint-plugin-promise</code>: supports eslint
- <code>@types/jest</code>: adds types to vanilla js npm package
- <code>@types/node</code>: adds types to vanilla js npm package
- <code>@types/supertest</code>: adds types to vanilla js npm package
- <code>@typescript-eslint/eslint-plugin</code>: adds types to vanilla js npm package
