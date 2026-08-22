---
title: Contributing
permalink: /contributing/
---

Contributions to AuriOS are welcome: bug fixes, new features, documentation.

## Development environment

The project uses **Visual Studio Code** with automatic code formatting.

Install `clang-format` (formats C/Assembly code):

```bash
# macOS
brew install clang-format
# Debian / Ubuntu
sudo apt install clang-format
# Fedora / RHEL
sudo dnf install clang-tools-extra
# Arch
sudo pacman -S clang
```

Add the VS Code **clang-format** extension: the code is formatted on every save
(Ctrl/Cmd + S) thanks to the `.clang-format` file already present in the repo.

## Contribution flow

1. **Fork** the repository, then clone your fork.
2. Create a branch **from `develop`**:

   ```bash
   git checkout develop
   git checkout -b feature/feature-name
   ```

   Branch prefixes in use: `feat/`, `fix/`, `ref/`.

3. Implement your change.
4. **Commit** with a clear message. If you are working on an _issue_, always
   mention its number:

   ```bash
   git commit -m "feat: implement PMM bitmap (#12)"
   ```

5. **Push**, then open a **Pull Request against the `develop` branch** (not
   `main`).

## Best practices

- Follow the project's coding style (clang-format handles it).
- Write clear commit messages.
- Document your code when necessary.
- Make sure your changes do not break existing functionality.

> Please do not target `AuriOS:main` but `AuriOS:develop` in your Pull Requests.
