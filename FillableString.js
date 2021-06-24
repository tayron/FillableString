'use strict';

module.exports = class FillableString {
  static POSITION_LEFT = 'left'
  static POSITION_RIGHT = 'right'

  constructor() {
    this._string = ''
  }

  fill = function (string, size, position) {
    if (size > 0 && position === FillableString.POSITION_LEFT) {
      this._concatLeft(string, size)
    }

    if (size > 0 && position === FillableString.POSITION_RIGHT) {                
      this._concatRight(string, size)
    }    

    if (!size && this._string !== undefined) {
      this._string += string
    }
  }

  completeWith = function(string, size, position) {
    if (size > 0 && position === FillableString.POSITION_LEFT) {
      this._string = this._string.padStart(size, string)
    }

    if (size > 0 && position === FillableString.POSITION_RIGHT) {                
      this._string = this._string.padEnd(size, string)      
    } 
  }

  getString = function () {
    return this._string
  }

  _concatRight = function (string, size) {
    for (var i = 0; i <= size -1; i++) {
      this._string += string
    }
  }

  _concatLeft = function (string, size) {
    let text = ''
    for (var i = 0; i <= size -1; i++) {
      text += string
    }

    this._string = text + this._string
  }  

  removeSpecialCharacter = function() {    
    this._string = this._string.replace(/[^a-zA-Z ]/g, "")
  }

  removeWhiteSpaces = function() {
    this._string = this._string.replace(/\s/g,'')
  }  
}
