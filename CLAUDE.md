# Development Guidelines

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run format` - Format code with Prettier

## Code Style

- TypeScript with Next.js (App Router)
- Use named exports over default exports
- Strict null checks enabled
- Imports: React imports first, then external libraries, then local imports
- Formatting: semicolons, single quotes, trailing commas (as per Prettier config)
- Component names: PascalCase for components, camelCase for functions/variables
- Add explicit types (avoid `any`), especially for function parameters/returns
- Use functional components with React hooks
- Use TypeScript interfaces for component props and data structures
- MDX files for blog content with frontmatter metadata
- For error handling, use null checks and proper type guards
- Follow the existing pattern of organizing UI components in app/components
