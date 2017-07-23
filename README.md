# to_sentence
A JavaScript port of the Ruby activesupport `#to_sentence` method.

---

Converts an array to a comma-separated (or whatever-separated) sentence where the final element is joined by the connector word.

Also re-opens pendantic debate over the [Oxford comma](https://thewritelife.com/is-the-oxford-comma-necessary/).

### Install

```sh
npm install to_sentence
```

### Usage

    to_sentence(array, options) ==> String
    
where `options` is an object with any or all of the following keys:

`words_connector` - the string used to join elements 0 through `array.length - 2` in an array with more than two elements (defaults to “, ”)
`two_words_connector` - the string used to join the elements in an array with exactly two elements (defaults to “ and ”)
`last_word_connector` - the string used to join `array.length - 2` and `array.length - 1` in an array with more than two elements (defaults to “, and ”)
`locale` - not yet implemented

Passing any other option will cause the method to throw an Error.

### Examples

```js
const to_sentence = require('to_sentence');

to_sentence([]);                
    // => ''

to_sentence(['Nelson Mandela']);
    // => 'Nelson Mandela'
    
to_sentence(['Nelson Mandela', 'an 800-year-old demigod'])
    // => 'Nelson Mandela and an 800-year-old demigod'
    
to_sentence(['Nelson Mandela', 'an 800-year-old demigod', 'a dildo collector'])
    // => 'Nelson Mandela, an 800-year-old demigod, and a dildo collector'

```

https://twitter.com/alex_macdonald/status/593581559325839360

### Contributing

Pull requests welcome.

### Author

[Jay Harris](https://github.com/jaywritescode)

### License

Copyright © 2017, Jay Harris.
