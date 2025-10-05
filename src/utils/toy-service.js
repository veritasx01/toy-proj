import { base64Id, randomIntRange, getRandomSubset } from './helpers';
import * as storage from './async-storage';

const TOY_KEY = 'TOY_KEY';
export const labels = [
  'On wheels',
  'Box game',
  'Art',
  'Baby',
  'Doll',
  'Puzzle',
  'Outdoor',
  'Battery Powered',
];
createToys();

function buildMasterCondition(filterBy) {
  const conditions = [];

  if (filterBy.name) {
    conditions.push((toy) =>
      toy.name.toLowerCase().includes(filterBy.name.toLowerCase())
    );
  }

  if (filterBy.minPrice) {
    const min = Number(filterBy.minPrice);
    conditions.push((toy) => toy.price >= min);
  }

  if (filterBy.maxPrice) {
    const max = Number(filterBy.maxPrice);
    conditions.push((toy) => toy.price <= max);
  }

  if (filterBy.inStock !== undefined && filterBy.inStock !== 'any') {
    if (filterBy.inStock === 'in-stock') {
      conditions.push((toy) => toy.inStock);
    } else {
      conditions.push((toy) => !toy.inStock);
    }
  }

  return (toy) => conditions.every((cond) => cond(toy));
}

export async function queryToys(filterBy = {}) {
  let queryResult = await storage.query(TOY_KEY);
  let masterCondition = buildMasterCondition(filterBy);
  return queryResult.filter(masterCondition);
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

function loadFromStorage(key = TOY_KEY) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

function saveToStorage(key = TOY_KEY, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function createToys(amount = 5, override = false) {
  let toys = loadFromStorage(TOY_KEY);
  if (override || !toys || !toys.length) {
    toys = generateDummyToys(amount);
    saveToStorage(TOY_KEY, toys);
  }
  return toys;
}

export function generateDummyToys(amount = 5) {
  const dummyList = [];
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
