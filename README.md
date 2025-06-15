# 🚀 Impulse Astro

<div align="center">

![Astro](https://img.shields.io/badge/Astro-5.9.2-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=white)

</div>

## 📝 Description

Impulse Astro is a modern web application built with Astro, featuring mathematical content support through KaTeX integration. This project combines the power of Astro's static site generation with advanced mathematical typesetting capabilities.

## ✨ Features

- 🚀 **Fast & Modern**: Built with Astro for optimal performance
- 📊 **Math Support**: Integrated KaTeX for beautiful mathematical equations
- 🎨 **Styling**: SASS support for advanced styling capabilities
- 📱 **Responsive**: Mobile-friendly design
- 🔍 **SEO Optimized**: Built-in sitemap generation

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- [KaTeX](https://katex.org/) - Fast math typesetting
- [SASS](https://sass-lang.com/) - Advanced CSS preprocessing
- [PNPM](https://pnpm.io/) - Fast, disk space efficient package manager

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- PNPM package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/impulseastro.git
cd impulseastro
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm build
```

5. Preview the production build:
```bash
pnpm preview
```

## 📁 Project Structure

```
impulseastro/
├── src/           # Source files
├── public/        # Static assets
├── .astro/        # Astro build files
├── dist/          # Production build
└── node_modules/  # Dependencies
```

## 🔧 Configuration

The project uses several configuration files:

- `astro.config.mjs` - Astro configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue in the GitHub repository.

---

<div align="center">
Made with ❤️ using Astro
</div>

```sh
pnpm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
