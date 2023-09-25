# UCC Food App UI
The user interface for the UCC Food App.

## Getting started

### Pre-requisites
1. Install Node.js 18+ LTS and `pnpm`
  - Using Node.js: `npm i -g pnpm`
  - Using [Volta](https://volta.sh/): `volta install node@latest pnpm`

## Setting up the repository
- Clone this repository
- Set your Git configuration to automatically rebase on pull. This will prevent merge commits from appearing in the repository, keeping the commit history clean.
  ```
  git config --global pull.rebase true
  ```
- Install dependencies:
  ```
  pnpm i
  ```
- Start development server:
  ```
  pnpm dev
  ```

## Development requirements
- Lint and format code before `git add` with `pnpm lint`.
- Use `pnpm cz` to commit changes instead of `git commit`.

# Resources
- [Inspired Figma design](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoZpC1xrjFs46Cnsn7vpRcn%2FFood-App---FoodHub-(Community)-(Community)%3Ftype%3Ddesign%26node-id%3D108-0%26t%3DTFMqf0SHoK4UMnrX-0)