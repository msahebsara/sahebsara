# Sahebsara.com Personal Website

My mobile-ready personal website created using Next.js and Tailwind CSS, deployed using Vercel. Built with extensibility in mind, using JSON objects as data stores that can easily be modified to change the content of the site.

## Structure

This personal website is set up as a single-page app within Next.js (i.e. there is just one page at the root, `pages/index.js`). This page contains components, and these components may extend data found in the `data` folder to load strings, URLs and other content.

## Usage

Clone the repository and use npm to install dependencies:

```
git clone git@github.com:msahebsara/sahebsara.git && cd sahebsara
npm install
```

## Running Locally

The website can be run locally using: `npm run dev`. The result will be visible at `https://localhost:3000`
Thanks to Next.js, there is fast reload enabled by default, changes in the IDE will be near instantly visible in the browser.

## Extensibility

Strings and most constants are placed in different JSON objects within the `data` folder. This includes ones for work experiences (`experiences.js`), personal projects (`projects.js`) and profile attributes (`profile.js`). These may be modified or extended upon to add further experiences, projects or attributes, and consumed within components similar to how one would access any attribute within a JSON object.

## Acknowledgments

This site was created following the patterns found in the Next.js basics app: <a href="https://nextjs.org/learn/basics/create-nextjs-app"> nextjs.org.</a>
This site was inspired by the layout/color scheme found in <a href="https://github.com/boularbahsmail/Software-Developer-Portfolio">this</a> portfolio.
