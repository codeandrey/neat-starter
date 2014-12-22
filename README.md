# Wordpress Starter Theme: Neat Starter

A starting point for Wordpress Themes, built on [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/)

Forked from Andrew Croce's Magnificent [Wordpress Foundation Starter Theme](https://bitbucket.org/andrewcroce/wordpress-foundation-starter-theme)

It is recommended to be used as a submodule of [WordPress-Skeleton, Fork](https://bitbucket.org/andrewcroce/wordpress-skeleton)

## Requirements

  * [Node.js](http://nodejs.org)
  * [bower](http://bower.io): `npm install bower -g`

## Recommended Plugins

The theme will prompt you to install these plugins automatically. Thanks to Thomas Griffen's [Plugin Activation Class](https://github.com/thomasgriffin/TGM-Plugin-Activation).

  * [Advanced Custom Fields](http://www.advancedcustomfields.com/) - The gold standard for creating custom fields written by Elliot Condon.
  * [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/) - Not strictly necessary, but it makes creating custom post types and taxonomies a breeze.
  * [iThemes Security](https://wordpress.org/plugins/better-wp-security/) - Formerly Better WP Security. A good idea, in general. Unless you want hackers.

##Installation

  * Modernizr, Bourbon, and Normalize are packaged as bower components. Although every effort is made to keep these up to date, feel free to run `bower update` to be sure you're up to date.
  * Update Neat if you wish.

##Use It

This theme presumes you have a working knowledge of how to create Wordpress themes.

  * [Learn about theme development](http://codex.wordpress.org/Theme_Development)
  * [Handy cheat sheet for template hierarchy and file naming](http://codex.wordpress.org/images/9/96/wp-template-hierarchy.jpg)

##Theme Class File

*theme.class.php*

This file contains and initializes our main theme class. All theme setup and customizations should go here.

##Theme Functions File

*functions.php*

This file is loaded by Wordpress when the theme is loaded, so we bootstrap here.

It is also used as the name suggests, to create theme functions to be used in template files.
