'use strict';

exports.to_sentence = function(arr, options) {
  const  defaults = {
    words_connector: ', ',
    two_words_connector: ' and ',
    last_word_connector: ', and ',
  };

  const opts = Object.assign({}, defaults, options || {})

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
