const __africa = require('./africa')

/**
 * Read package configuration from the home directory, or ask questions with
 * readline interface to create a new configuration in `~/.${packageName}rc`
 * @param {string} packageName The name of the package.
 * @param {!_reloquent.Questions} questions An object with questions to be passed to reloquent.
 * @param {!_africa.Config} [config] The configuration object to configure additional functionality.
 * @param {boolean} [config.force=false] Ask questions and update the configuration file even if it already exists. Default `false`.
 * @param {string} [config.homedir="os.homedir()"] In which directory to save and search for configuration file. Default `os.homedir()`.
 * @param {number} [config.questionsTimeout] How log to wait in ms before timing out. Will wait forever by default.
 * @param {boolean} [config.local=false] Whether to read a local config file in the current working directory rather than in the `HOMEDIR`. When initialising, the default values will be taken from the home config if it exists so that it is easy to extend `.rc` files. Default `false`.
 * @param {function(string): string} [config.rcNameFunction] Function used to generate the `.rc` name. Default: packageName => `.${packageName}rc`.
 */
function africa(packageName, questions, config) {
  return __africa(packageName, questions, config)
}

module.exports = africa

/* typal types/index.xml closure noSuppress */
/**
 * @typedef {_africa.Config} Config `＠record` The configuration object to configure additional functionality.
 */
/**
 * @typedef {Object} _africa.Config `＠record` The configuration object to configure additional functionality.
 * @prop {boolean} [force=false] Ask questions and update the configuration file even if it already exists. Default `false`.
 * @prop {string} [homedir="os.homedir()"] In which directory to save and search for configuration file. Default `os.homedir()`.
 * @prop {number} [questionsTimeout] How log to wait in ms before timing out. Will wait forever by default.
 * @prop {boolean} [local=false] Whether to read a local config file in the current working directory rather than in the `HOMEDIR`. When initialising, the default values will be taken from the home config if it exists so that it is easy to extend `.rc` files. Default `false`.
 * @prop {function(string): string} [rcNameFunction] Function used to generate the `.rc` name. Default: packageName => `.${packageName}rc`.
 */
