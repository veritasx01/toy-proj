import { base64Id, randomIntRange, getRandomSubset } from './helpers.js';

export function generateDummyToys(amount = 5) {
  const dummyList = [];
  const labels = [
    'On wheels',
    'Box game',
    'Art',
    'Baby',
    'Doll',
    'Puzzle',
    'Outdoor',
    'Battery Powered',
  ];
  for (let i = 0; i < amount; i++) {
    dummyList.push({
      _id: base64Id(),
      name: `name${i}`,
      price: randomIntRange(10, 100),
      labels: getRandomSubset(labels, randomIntRange(1, 5)),
      createdAt: new Date(),
      inStock: true,
    });
  }
  return dummyList;
}
