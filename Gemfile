source "https://rubygems.org"

# Utilise le méta-gem officiel de GitHub Pages pour rester aligné
# avec l'environnement de build de GitHub.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Dépendances utiles selon la plateforme
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Requis pour Ruby 3.4+
gem "webrick", "~> 1.8"
