'use strict';

module.exports = class FillableString {
  static get POSITION_LEFT () {
    return 'left'
  }

  static get POSITION_RIGHT () {
    return 'right'
  }

  constructor (string) {
    this._string = string !== undefined ? string : ''
  }

  fillAndCompleteWith (string, fillable, size, position) {
    let fillableString = string

    if (size > 0 && position === FillableString.POSITION_LEFT) {
      fillableString = fillableString.padStart(size, fillable)
    }

    if (size > 0 && position === FillableString.POSITION_RIGHT) {
      fillableString = fillableString.padEnd(size, fillable)
    }

    this._string += fillableString
  }

  fill (string, size, position) {
    if (size > 0 & !position) {
      this._concatRight(string, size)
    }

    if (size > 0 && position === FillableString.POSITION_LEFT) {
      this._concatLeft(string, size)
    }

    if (size > 0 && position === FillableString.POSITION_RIGHT) {
      this._concatRight(string, size)
    }

    if (!size && !position && this._string !== undefined) {
      this._string += string
    }
  }

  completeWith (string, size, position) {
    if (size > 0 && position === FillableString.POSITION_LEFT) {
      this._string = this._string.padStart(size, string)
    }

    if (size > 0 && position === FillableString.POSITION_RIGHT) {
      this._string = this._string.padEnd(size, string)
    }
  }

  insertBefore (stringToFind, stringToAdd) {
    const stringToReplace = stringToAdd + stringToFind
    if (this._string !== '') {
      this._string = this._string.replace(stringToFind, stringToReplace)
    }
  }

  insertAfter (stringToFind, stringToAdd) {
    const stringToReplace = stringToFind + stringToAdd
    if (this._string !== '') {
      this._string = this._string.replace(stringToFind, stringToReplace)
    }
  }

  getString () {
    return this._string
  }

  _concatRight (string, size) {
    for (var i = 0; i <= size - 1; i++) {
      this._string += string
    }
  }

  _concatLeft (string, size) {
    let text = ''
    for (var i = 0; i <= size - 1; i++) {
      text += string
    }

    this._string = text + this._string
  }

  removeSpecialCharacter () {
    this._string = this._string.replace(/[^a-zA-Z0-9 ]/g, '')
  }

  removeWhiteSpaces () {
    this._string = this._string.replace(/\s/g, '')
  }

  getByPosition (start, end) {
    return this._string.substring((start - 1), end);
  }
}
