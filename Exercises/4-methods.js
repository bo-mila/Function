'use strict';

const methods = iface => {
  const items = [];
  for (const item in iface) {
    if (typeof iface[item] === 'function') {
      items.push([item, iface[item].length]);
    }
  }
  console.log(items);
  return items;
};

module.exports = { methods };
