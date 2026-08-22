# AuriOS — Documentation

AuriOS documentation site, published automatically with
[Jekyll](https://jekyllrb.com) and [GitHub Pages](https://pages.github.com).
A "docs"-style theme with a search bar, sidebar table of contents and
light/dark mode.

> **This repository only contains the site theme.** The page content
> (the Markdown files) is maintained in a separate repository:
> **[Auri-OS/docs](https://github.com/Auri-OS/docs)**. On every build, these
> files are fetched and rendered by this theme.

## Adding or editing a page

The content lives in the [Auri-OS/docs](https://github.com/Auri-OS/docs)
repository, not here. To add or edit a page:

1. Go to the [Auri-OS/docs](https://github.com/Auri-OS/docs) repository.
2. Create or edit a `my-page.md` file with its front matter:

   ```markdown
   ---
   title: Page title
   permalink: /my-page/
   ---

   Your Markdown content here.
   ```

3. If you add a new page, reference its `permalink` in the sidebar
   [`_data/nav.yml`](_data/nav.yml) **in this repository**.
4. A push to `Auri-OS/docs` rebuilds the site automatically (see
   `.github/dispatch-for-docs-repo/`). You can also trigger it here via
   **Actions → Run workflow**.

## The sidebar

The order and sections of the left-hand navigation are defined in
[`_data/nav.yml`](_data/nav.yml). Each entry points to a page `permalink`.

## Going live (one-time setup)

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. The [`.github/workflows/pages.yml`](.github/workflows/pages.yml) workflow
   deploys the site on every push to `main`.

> Project repository (`github.com/auri-os/aurios`): set
> `baseurl: "/aurios"` in [`_config.yml`](_config.yml).
> `auri-os.github.io` repository: leave `baseurl: ""`.

## Automatic rebuild on content changes

To make a push on [Auri-OS/docs](https://github.com/Auri-OS/docs)
automatically rebuild and redeploy this site, follow the instructions in
[`.github/dispatch-for-docs-repo/README.md`](.github/dispatch-for-docs-repo/README.md).

## Local preview (optional)

First fetch the content from [Auri-OS/docs](https://github.com/Auri-OS/docs),
then start the server:

```bash
bundle install
./bin/fetch-docs.sh   # copies the Markdown from Auri-OS/docs into _docs/
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

> The `_docs/*.md` files are ignored by git (see `.gitignore`): they are
> fetched on the fly from `Auri-OS/docs` at build time.

## Structure

```
_config.yml          Site configuration
_data/nav.yml        Sidebar table of contents
_layouts/doc.html    Documentation page layout
_includes/           Top bar, sidebar, table of contents, footer
_docs/               Content fetched from Auri-OS/docs (git-ignored)
bin/fetch-docs.sh    Fetches the Markdown content for local preview
assets/css/          Theme (styles)
assets/js/           Search, dynamic table of contents, theme, Mermaid
```
