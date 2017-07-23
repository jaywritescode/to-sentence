'use strict';

module.exports = function to_sentence(arr, options) {
  const defaults = {
    words_connector: ', ',
    two_words_connector: ' and ',
    last_word_connector: ', and ',
  };
  const default_keys = Object.keys(defaults);

  Object.keys(options).forEach((key) => {
    if (!default_keys.includes(key)) {
      throw new Error(`Invalid option: ${key}`);
    }
  });

  const opts = Object.assign({}, defaults, options)

  switch(arr.length) {
  case 0:
    return "";
  case 1:
    return arr[0].toString();
  case 2:
    return `${arr[0]}${opts.two_words_connector}${arr[1]}`;
  default:
    return `${arr.slice(0, -1).join(opts.words_connector)}${opts.last_word_connector}${arr.slice(-1)}`;
  }
}
