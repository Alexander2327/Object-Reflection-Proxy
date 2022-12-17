/* eslint-disable linebreak-style */
/* eslint-disable no-confusing-arrow */

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(sortObj, sortList) {
  const result = [];
  const other = [];
  for (const prop in sortObj) {
    if (Object.prototype.hasOwnProperty.call(sortObj, prop) && sortList.includes(prop)) {
      const res = { key: prop, value: sortObj[prop] };
      result.push(res);
    } else {
      const res = { key: prop, value: sortObj[prop] };
      other.push(res);
    }
  }
  other.sort((a, b) => a.key > b.key ? 1 : -1);
  for (const item of other) {
    result.push(item);
  }
  return result;
}

orderByProps(obj, ['name', 'level']);
