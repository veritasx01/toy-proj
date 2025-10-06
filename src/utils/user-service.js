import * as storage from './async-storage';
import { base64Id } from './helpers';

const USER_KEY = 'USER_KEY';

export function loadUsers(key = USER_KEY) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

export function overwriteUsers(key = USER_KEY, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export async function getUser(userId) {
  const user = await storage.get(USER_KEY, userId);
  return user;
}

export async function removeUser(userId) {
  return storage.remove(USER_KEY, userId);
}

export async function saveUser(user) {
  user.updatedAt = Date.now();
  return storage.put(USER_KEY, user);
}

export async function userExists(user) {
  const queriedUser = await getUser(user._id);
  return queriedUser !== null;
}
