# Portfolio v2

This is my personal portfolio website built with [Astro](https://astro.build/), a modern static site generator that delivers lightning-fast performance.

## Prerequisites

This project uses [asdf](https://asdf-vm.com/) for managing tool versions.

For asdf installation, please refer to the [official documentation](https://asdf-vm.com/guide/getting-started.html).

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/tttocklll/portfolio.git
cd portfolio/v2
```

2. Install required tool versions using asdf:

```bash
asdf install
asdf reshim
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The site will be available at http://localhost:4321

## Building for Production

```bash
npm run build
```

This will generate static files in the `dist` directory.

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # UI components
│   ├── layouts/     # Page layouts
│   └── pages/       # Page components
└── astro.config.mjs # Astro configuration
```

## Technologies

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

[MIT](LICENSE)
