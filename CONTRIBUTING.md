# Contributing

## Welcome to Readmail!

First off, thank you for considering contributing to Readmail. It's people like you that make this project such a great tool.

### Why you should read these guidelines?

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes and helping you finalize your pull requests.

### What can you contribute?

We love to receive contributions! There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into Readmail itself.

## How to contribute

We are looking to recreate email template sets that have the same design as if they belonged to a brand.

### Learn to use React Email

Readmail uses the React Email library. Please read their [documentation](https://react.email/) before contributing.

### How to name each .tsx file?

The naming convention for a `.tsx` file is as follows: purpose + set name.

For example: if the purpose is to verify email and the name of the set is GetSquare, the `.tsx` file will have the name `verify-email-getsquare`.

### Generate the HTML document

After creating each `.tsx` file you must generate the corresponding HTML and name each one using the same convention as for naming a `.tsx` file.

These documents must be saved in a folder that has the name of the set and this folder must be inside the `generated-email-templates` directory.
