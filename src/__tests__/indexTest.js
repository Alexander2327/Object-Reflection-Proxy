/* eslint-disable linebreak-style */
import orderByProps from '../index';

test('test function orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const testArray = ['name', 'level'];
  const res = orderByProps(obj, testArray);
  expect(res).toEqual(result);
});
