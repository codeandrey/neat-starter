# Wordpress Starter Theme: Neat Starter

A starting point for Wordpress Themes, built on [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/)

Forked from Andrew Croce's Awesome [Wordpress Foundation Starter Theme](https://bitbucket.org/andrewcroce/wordpress-foundation-starter-theme)

It is recommended to be used as a submodule of [WordPress-Skeleton](https://github.com/markjaquith/WordPress-Skeleton)

## Requirements

  * [Node.js](http://nodejs.org)
  * [Bower](http://bower.io): `$ npm install -g bower`
  * [Gulp](http://gulpjs.com/): `$ npm install -g gulp`

## Initializing

  * Run `npm install` to install dev dependencies
  * Run `gulp init` to install bower components
  * Run `gulp update` to update bower components during development
  * Default `gulp` command will watch for changes, alternatively you can run `gulp watch`

## Recommended Plugins

To utilize live reload, it's recommended that you install the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) extension for chrome.

The theme will prompt you to install the following plugins automatically thanks to Thomas Griffen's [Plugin Activation Class](https://github.com/thomasgriffin/TGM-Plugin-Activation).

  * [Advanced Custom Fields](http://www.advancedcustomfields.com/) - The gold standard for creating custom fields written by Elliot Condon.
  * [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/) - Not strictly necessary, but it makes creating custom post types and taxonomies a breeze.
  * [iThemes Security](https://wordpress.org/plugins/better-wp-security/) - Formerly Better WP Security. A good idea, in general. Unless you want hackers.

## Use It

This theme presumes you have a working knowledge of how to create Wordpress themes.

  * [Learn about theme development](http://codex.wordpress.org/Theme_Development)
  * [Handy cheat sheet for template hierarchy and file naming](http://codex.wordpress.org/images/9/96/wp-template-hierarchy.jpg)

## Theme Class File

*theme.class.php*

This file contains and initializes our main theme class. All theme setup and customizations should go here.

## Theme Functions File

*functions.php*

This file is loaded by Wordpress when the theme is loaded, so we bootstrap here.

It is also used as the name suggests, to create theme functions to be used in template files.
