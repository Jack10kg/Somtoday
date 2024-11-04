// ==UserScript==
// @name        Somtoday Redirect
// @description Redirect Somtoday naar de oude versie/site
// @match       https://leerling.somtoday.nl/*
// @grant       none
// @version     1.0
// @author      https://github.com/jack10kg
// @run-at document-start
// ==/UserScript==

location = Object.assign(new URL('https://leerling.somtoday.nl/'), { protocol: 'http:', host: 'elo.somtoday.nl' });