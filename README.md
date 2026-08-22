# AuriOS — Documentation

Site de documentation d'AuriOS, publié automatiquement avec
[Jekyll](https://jekyllrb.com) et [GitHub Pages](https://pages.github.com).
Thème type « docs » avec barre de recherche, sommaire latéral et mode
clair/sombre.

> **Ce dépôt ne contient que le thème du site.** Le contenu des pages
> (les fichiers Markdown) est maintenu dans un dépôt séparé :
> **[Auri-OS/docs](https://github.com/Auri-OS/docs)**. À chaque build, ces
> fichiers sont récupérés et rendus par ce thème.

## Ajouter ou modifier une page

Le contenu vit dans le dépôt [Auri-OS/docs](https://github.com/Auri-OS/docs),
pas ici. Pour ajouter ou modifier une page :

1. Va dans le dépôt [Auri-OS/docs](https://github.com/Auri-OS/docs).
2. Crée ou modifie un fichier `ma-page.md` avec son en-tête (front matter) :

   ```markdown
   ---
   title: Titre de la page
   permalink: /ma-page/
   ---

   Ton contenu en Markdown ici.
   ```

3. Si tu ajoutes une nouvelle page, référence son `permalink` dans le sommaire
   [`_data/nav.yml`](_data/nav.yml) **de ce dépôt**.
4. Un push sur `Auri-OS/docs` ne reconstruit pas le site automatiquement :
   relance le workflow ici (push sur `main` ou **Actions → Run workflow**).

## Le sommaire (sidebar)

L'ordre et les sections de la navigation de gauche sont définis dans
[`_data/nav.yml`](_data/nav.yml). Chaque entrée pointe vers le `permalink`
d'une page.

## Mise en ligne (une seule fois)

1. Pousse ce dépôt sur GitHub.
2. Va dans **Settings → Pages**.
3. Dans **Build and deployment → Source**, choisis **GitHub Actions**.
4. Le workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
   déploie le site à chaque push sur `main`.

> Dépôt de type projet (`github.com/auri-os/aurios`) : mets
> `baseurl: "/aurios"` dans [`_config.yml`](_config.yml).
> Dépôt `auri-os.github.io` : laisse `baseurl: ""`.

## Aperçu en local (optionnel)

Récupère d'abord le contenu depuis [Auri-OS/docs](https://github.com/Auri-OS/docs),
puis lance le serveur :

```bash
bundle install
./bin/fetch-docs.sh   # copie les Markdown de Auri-OS/docs dans _docs/
bundle exec jekyll serve
```

Puis ouvre <http://localhost:4000>.

> Les fichiers `_docs/*.md` sont ignorés par git (voir `.gitignore`) : ils sont
> récupérés à la volée depuis `Auri-OS/docs` au build.

## Structure

```
_config.yml          Configuration du site
_data/nav.yml        Sommaire de la sidebar
_layouts/doc.html    Gabarit de page de documentation
_includes/           Barre supérieure, sidebar, sommaire, pied de page
_docs/               Contenu récupéré depuis Auri-OS/docs (ignoré par git)
bin/fetch-docs.sh    Récupère le contenu Markdown pour l'aperçu local
assets/css/          Thème (styles)
assets/js/           Recherche, sommaire dynamique, thème, Mermaid
```
