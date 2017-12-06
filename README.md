# xspeedit [![CircleCI](https://circleci.com/gh/adbayb/xspeedit.svg?style=shield)](https://circleci.com/gh/adbayb/xspeedit) [![Coverage Status](https://coveralls.io/repos/github/adbayb/xspeedit/badge.svg?branch=master)](https://coveralls.io/github/adbayb/xspeedit?branch=master) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/adbayb/xspeedit/blob/master/LICENSE) [![GitHub package version](https://img.shields.io/badge/package-0.1.0-orange.svg)](https://github.com/adbayb/xspeedit/releases)


Parce qu'il est important de minimiser l'utilisation de carton

<p align="center">
	<img width="400" src="https://user-images.githubusercontent.com/10498826/33670967-9c622d14-daa6-11e7-92d3-486286e117fd.png"
	alt="screenshot" />
</p>

# Sommaire

- [Documentation fonctionnelle](#documentation-fonctionnelle)
	* [Contexte](#contexte)
	* [Spécification fonctionnelle](#spécification-fonctionnelle)
- [Documentation technique](#documentation-technique)
	* [Introduction](#introduction)
	* [Prise en main](#prise-en-main-et-lancement-des-applications)
	* [Consommation de la librairie xspeedit-core](#consommation-de-la-librairie-xspeedit-core)
	* [Documentation des Apis et Composants](#documentation-des-apis-et-composants)
	* [Pourquoi une architecture en monorepo ?](#pourquoi-une-architecture-en-monorepo)
	* [Pipeline CI/CD](#pipeline-cicd)
- [Liens utiles](#liens-utiles)
- [License](#license)

# Documentation fonctionnelle

## Contexte

XspeedIt est une société d'import / export ayant robotisé toute sa chaîne d'emballage de colis.
Elle souhaite trouver un algorithme permettant à ses robots d'optimiser le nombre de cartons d'emballage utilisés.

Les articles à emballer sont de taille variable, représentée par un entier compris entre 1 et 9.
Chaque carton a une capacité de contenance de 10.
Ainsi, un carton peut par exemple contenir un article de taille 3, un article de taille 1, et un article de taille 6.

La chaîne d'articles à emballer est représentée par une suite de chiffres, chacun représentant un article par sa taille.
Après traitement par le robot d'emballage, la chaîne est séparée par des "/" pour représenter les articles contenus dans un carton.

*Exemple*
```python
Chaîne d'articles en entrée : 163841689525773
Chaîne d'articles emballés  : 163/8/41/6/8/9/52/5/7/73
```

L'algorithme actuel du robot d'emballage est très basique.
Il prend les articles les uns après les autres, et les mets dans un carton.
Si la taille totale dépasse la contenance du carton, le robot met l'article dans le carton suivant.

## Spécification fonctionnelle

Implémenter une application qui permettrait de maximiser le nombre d'articles par carton, en utilisant un langage pouvant être exécuté sur une JVM 1.7 minimum ou en node.js.
L'ordre des cartons et des articles n'a pas d'importance.

*Exemple*
```python
Articles      : 163841689525773
Robot actuel  : 163/8/41/6/8/9/52/5/7/73 => 10 cartons utilisés
Robot optimisé: 163/82/46/19/8/55/73/7   => 8  cartons utilisés
```

# Documentation technique

## Introduction

Le projet consiste en un monorepo contenant 3 packages: *xspeedit-core*, *xspeedit-widget* ainsi que
*xspeedit-node*.

Le package principal, **xspeedit-core**, est la librarie définissant l'ensemble de la logique
d'empaquetage des articles dans les cartons.

Deux packages applicatifs consomment cette librairie:

* **xspeedit-widget** ([Accessible ici](https://xspeedit.surge.sh/)): application isomorphique React. Cette
	dernière fournit une interface front permettant la saisie des articles ainsi qu'une visualisation
	graphique de l'empaquetage des articles:

<p align="center">
	<img width="400"  src="https://user-images.githubusercontent.com/10498826/33671048-da273112-daa6-11e7-99f4-1180a5717a92.png"
	alt="screenshot" />
</p>

* **xspeedit-node**: application backend Node.js:

<p align="center">
	<img width="500" src="https://user-images.githubusercontent.com/10498826/33672821-7a9b0d2c-daab-11e7-8ef0-0d77648370f2.png"
	alt="screenshot" />
</p>

## Prise en main et lancement des applications

Pour lancer les différentes applications, il est nécessaire de suivre les étapes suivantes:

- [x] `git clone https://github.com/adbayb/xspeedit.git`
- [x] `cd xspeedit`
- [x] `npm install` (installe l'ensemble des dépendances des différents packages du monorepo)

Puis:

Pour démarrer l'application frontend react:
- [x] `npm run start:widget`

Pour démarrer l'application backend node:
- [x] `npm run start:node`

**NB:** Les packages sont automatiquement transpilés en fonction de l'environnement node local via `babel-preset-env` (les fonctionnalités nécessaires manquantes sont automatiquement ajoutées au bundle généré). Cependant, nous conseillons d'utiliser une version Node.js LTS à minima **>= 6.X** ([voir le champs "engines" du package.json](./package.json)).

## Consommation de la librairie xspeedit-core dans un projet externe

La librairie `xspeedit-core` peut-être consommée à la fois comme module CommonJS ou bien comme module ES2015 (et bénéficier dans ce dernier cas, en fonction du bundler, du tree shaking).

Suivant votre environnement de développement, il suffit de:

Dans le dossier root de `xspeedit`:
- [x] `cd ./packages/xspeedit-core && npm link` (permet de générer un lien global vers le package `xspeedit-core`)

A la racine de votre projet contenant votre `package.json`:
- [x] `npm link xspeedit-core`

En fonction de la configuration de votre bundler (webpack/rollup...), ce dernier va consommer le point d'entrée spécifié soit dans le champs `module` (module ES2015), soit dans le champs `main` (module CommonJS pour un projet server side) / `browser` (module CommonJS pour un projet client side) du package.json situé dans `xspeedit/packages/xspeedit-core`

## Documentation des Apis et Composants

**xspeedit** génère automatiquement la documentation à la fin de [la pipeline CI/CD](#pipeline-cicd).

Les différentes documentations sont listées ci-dessus:
- [Apis de la librairie xspeedit-core (JSDoc)](https://xspeedit-core.surge.sh/Packager.html)
- [Styleguide composants du package xspeedit-widget (react-styleguidist)](https://xspeedit-core.surge.sh/Packager.html)

## Pourquoi une architecture en monorepo ?

Jongler sur un projet multi-packages entre différents dépôts git est fastidieux.

La structure multi-packages de **xspeedit** conduit naturellement à la mise en place d'un monorepo.

En effet, cette architecture présente plusieurs avantages:

- Centraliser la configuration et les tâches (lint, test, formattage, pipeline d'intégration continue/de déploiement continu...)
- Coordiner facilement les modifications entre package
- Centraliser la gestion de git (pull request, issues...)

## Processus de développement et contribution

Les contributions sont bienvenue.

Pour faciliter la contribution, l'uniformiser ainsi que garantir la qualité de code, le monorepo **xspeedit** contient différents outils:

- [Prettier](https://prettier.io/): formattage de code
- [ESLint](https://eslint.org/): linter
- [Jest](https://eslint.org/): test unitaire ainsi que génération de rapport de couverture de test (nous fixons **un minimum de 80%** de couverture de tests sur l'ensemble du monorepo)
- [Commitizen](http://commitizen.github.io/cz-cli/): formattage du commit suivant un périmètre via `git cz`
- [lint-staged](https://github.com/okonet/lint-staged): lancement de la vérification de la qualité de code (le projet lance la vérification statique du code (via le linter), les tests unitaires, la couverture de test ainsi que le formattage du code)
- [husky](https://github.com/typicode/husky): configuré comme hook de precommit (ce dernier lance `lint-staged`)

## Pipeline CI/CD

Le projet utilise [CircleCI](https://circleci.com/gh/adbayb/xspeedit) comme plateforme CI/CD

Le pipeline d'intégration et de livraison continue est définit comme suit:

<p align="center">
	<img width="300" src="https://user-images.githubusercontent.com/10498826/33667209-8bc97c46-da9c-11e7-9d20-ef1a85fb2a88.png"
	alt="screenshot" />
</p>

Il est à noter que l'étape `Test coverage` se charge de générer et transmettre la couverture de test au service [Coveralls](https://coveralls.io/github/adbayb/xspeedit).

# Liens utiles

- [Application web](https://xspeedit.surge.sh)
- [Apis de la librairie xspeedit-core](https://xspeedit-core.surge.sh/Packager.html)
- [Styleguide des composants du package xspeedit-widget](https://xspeedit-core.surge.sh/Packager.html)
- [Plateforme CI/CD du projet](https://circleci.com/gh/adbayb/xspeedit)
- [Plateforme de couverture de tests du projet](https://coveralls.io/github/adbayb/xspeedit)

# Licence

[MIT](./LICENSE "License MIT")
