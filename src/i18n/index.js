// import config from 'config'

let language = window.navigator.language.toLowerCase()

// locales
const lans = ['zh-cn', 'en']

language = ~lans.indexOf(language) ? language : 'en'

module.exports = require(`./${language}/labels.js`)
