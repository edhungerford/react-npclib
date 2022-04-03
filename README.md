# react-npclib
A ReactJS-based gallery view of NPCs that you can host on GitHub Pages.

## Current status
Currently, `react-npclib` isn't yet at a minimum viable product. You can keep an eye on this repo in the meantime. 

## Why?
I ran out of space on Roll20 and thought it would be a good idea to help out other people who are a little code-savvy.

## How do I use this thing?
*You'll need to use Nodejs to use this, so be sure you have that installed. Then navigate to the root and `npm install`. After that, `npm run deploy` to create a build.*

If you're serious about figuring out how this thing ticks before I work out an accessible interface, you can always fork the repository. 

* `lib.js` holds the character info. 
* `vars.scss` holds color and background information.
* `vars.json` has miscellaneous variables.
* `package.json` you shouldn't need to mess with too much, but you'll want to change the `homepage` value to your GitHub Pages URL or other custom URL. (If you're using a custom URL, also write a CNAME file in /public.)
* Assuming that you want to host this on the Internet, you'll most likely want to set this up with GitHub Pages.  

If that didn't make much sense to you, watch this space and I'll have something for you soon.

## What can I expect in the future?
I hope shortly to have an HTML file that'll let you set variables such as:
* Background colors
* Fonts
* Character details
    * Names
    * Pronouns
    * Descriptions
    * Portraits

