# WC Logrono 2025 Talk Plugin

This plugin demonstrates various ways to extend WordPress core blocks without creating full custom blocks, focusing on Block Bindings and the Interactivity API.

It was originally based on the [Developer Hours - Alternatives to Custom Blocks](https://www.meetup.com/es-ES/learn-wordpress-online-workshops/events/301860423/) project.

## Features

This plugin demonstrates:

- **Block Variations:** Two variations for the `core/quote` block:
  - `Quote API Editor`: Allows fetching a random quote from an API (optionally filtered by author) directly within the block editor.
  - `API Quote Frontend`: Uses Block Bindings to connect the `core/quote` block's inner paragraph to a custom source, displaying a random quote (optionally filtered by tags) on the frontend.
- **Custom Block Style:** Registers a "Hand Drawn" block style for `core/image` and `core/quote` blocks via PHP.
- **Block Bindings:** Shows how to register a custom block binding source (`qa/random-quote-tags`) and use it to dynamically render content.

_(Note: Original demo GIFs might be outdated or need regeneration based on plugin functionality)_

## Development

1.  Set up a local WordPress development environment.
2.  Clone / download this repository into your `wp-content/plugins` folder.
3.  Navigate to the `wp-content/plugins/wc-logrono-2025-talk` folder in the command line.
4.  Run `npm install` to install the plugin's dependencies (for the JavaScript build process) into a `/node_modules/` folder.
5.  Run `npm run build` to compile the JavaScript assets into the `build/` folder.
6.  Run `npm run start` to compile and watch source files for changes while developing.
7.  Login to your local WordPress development environment, navigate from Dashboard > Plugins and activate "WC Logrono 2025 Talk".

Refer to `package.json` for script details.
