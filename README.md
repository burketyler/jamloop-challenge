## Getting Started

This is a NextJS proof of concept application developed for the JamLoop UI challenge.

- This project uses eslint to enforce unidirectional import rules, and file naming conventions.
- Material UI has been used as a component library. MUI has an extensive list of components and it's component interface lends itself really well to creating design systems. Are there better choices for NextJS? Potentially, but that's out of scope for this POC.
- Hook forms has been used for client-side form validation.
- Zod has been used to define entities and for server-side validation as well as a resolver for hook forms.
- Prettier and eslint is used for formatting and linting. 
- Project structure follows a derivative of Bulletproof React.

### Developing
First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can log in by using these two hard-coded customer accounts:

- 1@test.com/Test123
- 2@test.com/Test123

### Building
To run a production optimized build:

```bash
pnpm build
```

You can serve the production build locally by calling:

```bash
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production-ready checklist

- Set up Storybook.
- Set up Husky and Commitizen to enforce commit message and code linting, formatting is done prior to commiting changes remotely.
- Set up import order eslint plugin to format and order imports (cleaner, feels nice).
- Improve documentation including how to effectively contribute to the repo, project structure, code conventions and standards etc.
  - This could potentially include component templates/scaffolding if necessary.
- Material UI components should be wrapped with project-defined components, this allows for easier customisation of consumption patterns as well as improve the ability to refactor in the future.
- Integrate with a real backend, instead of mocks. 
- Look at using a middleware for optimistic page permission evaluation. Right not it's all done server side, but some of that can be pushed to the client.
- Image optimization for static images to improve page load performance.
- Create clear and re-usable patterns for interacting with Forms and Server Actions/Client API calls.
- Create clear pattern for page metadata, including implementation of breadcrumbs.
- Set up testing, E2E using Cypress or Playwright, unit testing for component library/highly reusable items using React Testing Library and Vitest or Jest.
- Set up environment configuration.
