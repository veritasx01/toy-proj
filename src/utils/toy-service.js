import { base64Id, randomIntRange, getRandomSubset } from './helpers';
import * as storage from './async-storage';

const TOY_KEY = 'TOY_KEY';

createToys();

export async function queryToys(filterBy = {}) {
  let queryResult = await storage.query(TOY_KEY);
  return queryResult;
}

export async function getToy(toyId) {
  const toy = await storage.get(TOY_KEY, toyId);
  return toy;
}

export async function removeToy(toyId) {
  return storage.remove(TOY_KEY, toyId);
}

export async function saveToy(toy) {
  toy.updatedAt = Date.now();
  return storage.put(TOY_KEY, toy);
}

function getFilterFromSearchParams(searchParams) {
  const filterBy = {};
  for (const field in searchParams) {
    filterBy[field] = searchParams.get(field) || '';
  }
  return filterBy;
}

function createToy() {
  return generateDummyToys(1)[0];
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function createToys(amount = 5) {
  let toys = loadFromStorage(TOY_KEY);
  if (!toys || !toys.length) {
    toys = generateDummyToys(amount);
    saveToStorage(TOY_KEY, toys);
  }
}

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
      createdAt: Date.now(),
      inStock: true,
    });
  }
  return dummyList;
}
