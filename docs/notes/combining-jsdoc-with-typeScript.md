---
title: Why do i recommend using JSDoc now
lang: en
description: In the current mainstream situation of TypeScript, I still recommend using JSDoc in projects. 
date: 2024-06-06 17:48:00
---

> I would like to write this article in English. The most important purpose is to improve my English reading and  writing abilities.

In the current mainstream situation of TypeScript, I still recommend using JSDoc in projects. Some people may think that TypeScript completely covers the JSDoc capabilities we need, and continuing to use it is adding insult to injury. I will do my best to express my views clearly and let you see the other side of it.

## What is JSDoc

### Getting started

JSDoc 3 is an API documentation generator for JavaScript, similar to Javadoc or phpDocumentor. You add documentation comments directly to your source code, right alongside the code itself. The JSDoc tool will scan your source code and generate an HTML documentation website for you.

### Setup

JSDoc supports stable version of Node.js 12.0.0 and later. You can install JSDoc globally or in your project's node_modules folder.

**Global**

```zsh
npm install -g jsdoc
```

**Local**

```zsh
npm install --save-dev jsdoc
```

### Adding documentation comments to your code

JSDoc's purpose is to document the API of your JavaScript application or library. It is assumed that you will want to document things like modules, namespaces, classes, methods, method, parameters, and so on.

JSDoc's annotation parsing rules. JSDoc comments should generally be placed immediately before the code being documented. Each comment must start with a `/*` sequence in order to be recognized by the JSDoc parser. Comments beginning with `/*`, `/***`, or more than 3 stars will be ignored. This is a feature to allow you to suppress parsing of comment blocks.

**Let's take a simple example.**

#### The simplest documentation is just a description

```ts
/** This is a description of the foo function. */
function foo(){}
```

Adding a description is simple - just type the description you want in the documentation comment.

#### Use a JSDoc tag to describe your code 

For example, if the function is a constructor for a class, you can indicate this by adding a `@constructor` tag.

```ts
/**
 * Represents a book.
 * @constructor
 */
function Bool(){title, author}
```

#### Adding more information with tags

```ts
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}
```

If you want to learn more about built-in tags, please move to the [manual](https://jsdoc.app/#block-tags).

### Generating a website

Once your code is commented, you can use the JSDoc 3 tool to generate an HTML website from you source file.

By default, JSDoc uses the built-in "default" template to turn the documentation into HTML. You can edit this template to suit your own needs or create an entirely new template if that is what you prefer.

#### Running the documentation generator on the command line

```zsh
jsdoc index.js
```

The command will create a directory named `out/` in the current working directory. Within that directory, you will find the generated HTML pages.

## Why is JSDoc rarely used in TypeScript projects

### TypeScript's type system

**TypeScript is JavaScript with syntax for types.**

In TypeScript projects, there is often a sound type definition, which allows developers to roughly understand the functional logic during development. This weakens the effectiveness of JSDoc, and more people choose to understand the functional logic through the features of TypeScript.

### More detailed documentation

Most projects nowadays have docs directories for generating detailed documents. The content of this type of document is more malleable than JSDoc generated documents, and the introduction is also more intuitive.

### During functional refactoring

In coding, when a certain function needs to be redesigned due to certain uncertain factors. Not only do we need to update the type definitions of TypeScript, but we also need to maintain JSDoc. It can make developers feel forced to do the same job twice, increasing their mental burden.

## Why do I still propose using JSDoc

### Good annotation specification

In addition to generating documents, JSDoc's annotation convention is a good annotation specification.

In collaborative development, each developer's coding style and habits vary. When a project's specifications are not standardized, it can be difficult to read and maintain.

At this point, JSDoc is a good choice. Its annotation rules are the most intuitive, and the built-in tags also conform to JavaScript keywords, with clear semantics.

### Combining JSDoc with TypeScript

As mentioned earlier, the combination of the two will increase the topic of maintenance difficulty. But the author believes that there is mutual assistance between the two.

#### Role positioning of both parties

- TypeScript serves as a constraint, constraining users to use it correctly.
- JSDoc is a more detailed explanation that informs other collaborators of relevant information. It plays a crucial role in maintenance and invocation.

#### Combining the two in the code

```ts
type ISelectXxxByYyyParams = {pageSize: number, pageNumber: number}
type ISelectXxxByYyyReturn = Array<{id: string, name: string}>
type ISelectXxxByYyy = (params: ISelectXxxByYyyParams) => ISelectXxxByYyyReturn

/**
 * @name xxxxx
 * @param {ISelectXxxByYyyParams} params
 * @return {ISelectXxxByYyyReturn} xxxYyyList
 */
 const selectXxxByYyy: ISelectXxxByYyy:  = (params) => {
   ...
   return xxxYyyList
 }
```

In fact, variable types in JSDoc can be directly defined using TypeScript type interfaces. In fact, when refactoring code, only one type definition needs to be maintained. Because they are related.

## End

This article is just an attempt to explain my personal experience and viewpoint. Of course, you can hold different opinions and do not need to agree with me at all. I hope this can clearly express my thoughts and perhaps provide you with some inspiration.
