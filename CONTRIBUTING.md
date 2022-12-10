## Getting Started

- Make sure you have a [GitHub account](https://github.com/signup/free).
- Submit an [issue](https://github.com/asif-jalil/scroll-carousel/issues), assuming one does not already exist.
  - Clearly describe the issue including steps to reproduce when it is a bug.
  - Make sure you fill in the earliest version that you know has the issue.
- Fork the repository on GitHub.

## Making Changes

- Create a topic branch from where you want to base your work.
  - This is usually the master branch.
  - Only target release branches if you are certain your fix must be on that branch.
  - To quickly create a topic branch and checkout based on master; `git checkout -b feature/your-feature`. Better avoid working directly on the `master` branch, to avoid conflicts if you pull in updates from origin.
  - For feature create branch `feature/your-feature` and for bug fixing branch `fix/your-branch`
- Your change should only be in the `src` folder.
- Follow the code style. Spaces in brackets, semicolons, trailing commas.
- For development, use `npm start`. This will start the development server and you can see your change what you did in the `example` & `src` folder.
- Make commits of logical units.
- Check for unnecessary whitespace before committing.
- Use descriptive commit messages and reference the #issue number.

## Submitting Changes

- Push your changes to a topic branch in your fork of the repository.
- Submit a pull request to the repository

