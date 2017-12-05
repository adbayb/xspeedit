# xspeedit [![CircleCI](https://circleci.com/gh/adbayb/xspeedit.svg?style=shield)](https://circleci.com/gh/adbayb/xspeedit) [![Coverage Status](https://coveralls.io/repos/github/adbayb/xspeedit/badge.svg?branch=master)](https://coveralls.io/github/adbayb/xspeedit?branch=master) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/adbayb/xspeedit/blob/master/LICENSE) [![GitHub package version](https://img.shields.io/badge/package-0.1.0-orange.svg)](https://github.com/adbayb/xspeedit/releases)

Parce qu'il est important de lutter contre le gaspillage de carton

# Spécifications:

// TODO

# Introduction:

Le projet consiste en un monorepo contenant 3 packages: xspeedit-core, xspeedit-widget ainsi que
xspeedit-node.

Le package principal, xspeedit-core, est la librarie définissant l'ensemble de la logique
d'empaquettage des articles dans les cartons.

Deux packages applicatifs consomme cette librairie:

* xspeedit-widget (todo: lien de l'application hostée): application isomorphique React. Cette
	dernière fournit une interface front permettant la saisie des articles ainsi qu'une visualisation
	graphique de l'empaquetage des articles.

* xspeedit-node: application backend Node.js.

# Consommation de la librairie core:

// TODO

# Pourquoi la création d'un monorepo ?

La création d'un monorepo permet de mutualiser la configuration (test, pipeline ci), le code...

// TODO : rechercher les avantages d'un monorepo...

# Lancement projet:

Docker ?

npm start pour chaque package

# Pipeline CI :

// TODO screeshot circle ci steps ou le faire via un outil

Test coverage 100%

# Documentations techniques:

* Styleguide (banque de composants xspeedit-widget):

* Apis core (xspeedit-core):

# Liens utiles:
