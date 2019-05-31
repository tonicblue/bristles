# bristles
> *Handlebars helper bundle but with features to annoy the MVC and MVVM purists*

## Introduction
I have been using and abusing Handlebars with a lot of custom helpers for a long time. I decided to organise, formalise, and improve everything I have needed and might need. These helpers go beyond frontend stuff as I am working on a framework that relies heavily on templating and configuration so we have things for:

* templating and parsing JSON,
* assigning variables,
* invoking partials dynamically,
* more complex conditionals,
* `switch/case` and `else if` blocks,
* filtering and sorting arrays,
* mapping array items to any other helper, and
* much, much more

Every helper is designed to always return an expected type so as not to cause any problems. Many of these features go against the ideals behind `mustache` and `handlebars` which is cool. I totally get the reasoning behind getting your context sorted before rendering your views. This is more for weird templating as data processing/meta-programming work.

## Development
This is still very much a work in progress and not really usable although the project is moving quickly and should reach a stable usable release in the coming weeks (written 2019-05-31).

Here are the goals for the project in terms of development:

* all helpers documented and with `typedoc`,
* robust tests for each helper that will be used to generate the "usage examples" in the docs,
* a playground to quickly test and get your head around how all this can be used,
* have a comprehensive but generic enough set of helpers that on-going work will be minimal bug fixing and optimisations, and
* slowly remove dependancies.

This `README.md` is really here to help me stake the claim of the name `bristles` while I get everything in order and finish off what is required for the first proper release. It will eventually resemble proper documentation.
