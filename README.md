# DevelopersAria

Randy's portfolio, featuring selected projects, frontend skills, a resume, and HTML email examples.

Built with Next.js, React, TypeScript, Tailwind CSS, and GSAP.

## Local development

Use the pnpm version specified in `package.json`.

```sh
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000). No environment variables are currently required.

## Commands

| Command             | Purpose                             |
| ------------------- | ----------------------------------- |
| `pnpm dev`          | Start the development server        |
| `pnpm build`        | Create a production build           |
| `pnpm start`        | Serve the production build          |
| `pnpm lint`         | Run ESLint with no warnings allowed |
| `pnpm lint:fix`     | Fix supported lint issues           |
| `pnpm format`       | Format the project with Prettier    |
| `pnpm format:check` | Check formatting                    |

## Content

- `app/(frontpage)/_page.client.tsx`: Homepage content, projects, skills, and animations.
- `app/resume/page.tsx`: Resume viewer for `public/Software Development Resume.pdf`.
- `app/email-templates/page.tsx`: Previews of the HTML emails in `public/email-template-examples/`.
- `components/Header/`: Shared header and navigation.
- `components/Footer/index.tsx`: Homepage contact section, linked from `/#contact`.
- `app/layout.tsx`: Shared layout, font, and metadata.
- `app/globals.css`: Global styles.
