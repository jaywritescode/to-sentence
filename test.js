'use strict'

require('mocha');
const { expect } = require('chai');
const to_sentence = require('./');

describe('#to_sentence', function() {
  it('converts a plain array to a sentence', function() {
    expect(to_sentence([])).to.equal("");
    expect(to_sentence(["one"])).to.equal("one");
    expect(to_sentence(["one", "two"])).to.equal("one and two");
    expect(to_sentence(["one", "two", "three"])).to.equal("one, two, and three");
  });

  it('applies the two-words connector', function() {
    expect(to_sentence(["one", "two", "three"], {
      words_connector: " "
    })).to.equal("one two, and three");
    expect(to_sentence(["one", "two", "three"], {
      words_connector: " & "
    })).to.equal("one & two, and three");
    expect(to_sentence(["one", "two", "three"], {
      words_connector: null
    })).to.equal("onetwo, and three");
  });

  it('applies the last-word connector', function() {
    expect(to_sentence(["one", "two", "three"], {
      last_word_connector: ", and also "
    })).to.equal("one, two, and also three");
    expect(to_sentence(["one", "two", "three"], {
      last_word_connector: null
    })).to.equal("one, twothree");
    expect(to_sentence(["one", "two", "three"], {
      last_word_connector: " "
    })).to.equal("one, two three");
    expect(to_sentence(["one", "two", "three"], {
      last_word_connector: " and "
    })).to.equal("one, two and three");
  });

  it('applies the two-word connector', function() {
    expect(to_sentence(["one", "two"], {
      two_words_connector: " "
    })).to.equal("one two");
  });

  it('stringifies one non-string element', function() {
    expect(to_sentence([1])).to.equal("1");
  });

  it('works with "blank" elements', function() {
    expect(to_sentence([null, "one", "", "two", "three"])).to.equal(", one, , two, and three");
  });

  it('throws an error with invalid options', function() {
    expect(to_sentence.bind(null, ["one", "two"], {
      passing: "invalid option"
    })).to.throw("passing");
  });

  it('always returns a string', function() {
    expect(to_sentence([1])).to.be.a('string');
    expect(to_sentence([1, "two"])).to.be.a('string');
    expect(to_sentence([1, "two", "three"])).to.be.a('string');
  });
});
