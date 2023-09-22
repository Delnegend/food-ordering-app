# UCC Food App UI

The user interface for the UCC Food App.

## Requirements

-   [Node.js 18+ LTS](https://nodejs.org/en/)

# Getting started

## Installation

-   Clone the repository
-   Install dependencies
    ```bash
    pnpm i
    ```
-   Build the project
    ```bash
    pnpm build
    ```
-   Start the development server
    ```bash
    pnpm dev
    ```
-   Build and run the production server
    ```bash
    pnpm build
    pnpm preview
    ```

# Contributing Guide

## Setting up the repository

Clone this repository

-   If you're using `HTTPS`:
    ```
    git clone https://github.com/USTH-Coders-Club/UCC-Food-app-UI.git
    ```
-   If you're using `SSH`:
    ```
    git clone git@github.com:USTH-Coders-Club/UCC-Food-app-UI.git
    ```

Change to `dev` branch

```
git checkout dev
```

Set your Git configuration to automatically rebase on pull. This will prevent merge commits from appearing in the repository, keeping the commit history clean.

```
git config --global pull.rebase true
```

## Development requirements

This repository uses `pnpm` (as shown by the pnpm-lock.yaml file). `pnpm` simply gives the sanest defaults and the best performance.

Some scripts depend on `pnpm` and will not work with `npm` or `yarn` so you must use `pnpm` for this repository.

-   Installing `pnpm` if you haven't already:

    ```
    npm i -g pnpm
    ```

-   Installing dependencies:

    ```
    pnpm i
    ```

-   Before committing, make sure to run `pnpm lint` to lint and format your code.

-   Every time you want to commit something, use `pnpm cz` after adding files with `git add`. This gives you an automated prompt to fill in the details of your commit, according to the [Conventional Commits](https://www.conventionalcommits.org/en/) format.
