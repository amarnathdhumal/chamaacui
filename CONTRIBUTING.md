# Contributing to Chamaac UI

Thank you for your interest in contributing to Chamaac UI. We are dedicated to building a premium, high-quality UI library, and we value your help in making it better.

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Code of Conduct

By participating in this project, you are expected to uphold a professional and respectful standard of behavior. Harassment or abuse of any kind will not be tolerated.

## How to Contribute

### Reporting Bugs

If you find a bug, please create a distinct issue in the repository. content should include:
1. A clear, descriptive title.
2. A detailed description of the issue.
3. Steps to reproduce the behavior.
4. Expected behavior.
5. Screenshots or code snippets if applicable.
6. Your environment details (OS, Browser, etc.).

### Suggesting Enhancements

We welcome new component ideas and improvements to existing ones. When proposing an enhancement:
1. Check existing issues and pull requests to avoid duplicates.
2. Create a new issue describing the feature or improvement.
3. Explain why this enhancement would be useful to others.

### Pull Requests

1. Fork the repository and create your branch from `main`.
2. naming convention for branches: `feature/your-feature-name` or `fix/your-bug-fix`.
3. Ensure your code follows the existing style and coding standards.
4. Test your changes thoroughly.
5. Update documentation as necessary.
6. Submit a pull request to the `main` branch.
7. Provide a clear description of your changes and reference any related issues.

## Development Workflow

1. Clone your fork locally.
2. Install dependencies:
   ```bash
   bun install
   ```
3. Run the development server:
   ```bash
   bun run dev
   ```
4. Make your changes and verify them in the browser.

## Coding Standards

- **TypeScript**: We use TypeScript for all components. Ensure strict typing is maintained.
- **Styling**: Use Tailwind CSS for styling. Avoid custom CSS files unless absolutely necessary.
- **Structure**: Follow the existing directory structure. New components should be placed in the `registry/chamaac` directory.
- **Formatting**: We use Prettier for code formatting. Please ensure your code is formatted before submitting.

## Commit Messages

Please write clear and concise commit messages. Start with a verb in the imperative mood (e.g., "Add new button component", "Fix layout issue").

Thank you for contributing to Chamaac UI!
