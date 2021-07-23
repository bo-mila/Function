'use strict';

const generateKey = (length, possible) => {
  const len = possible.length;
  let str = '';
  for (let i = 0; i < length; i++) {
    const ind = Math.floor(Math.random() * len);
    str += possible[ind];
  }
  return str;
};

module.exports = { generateKey };
