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

export async function getUser(username) {
  console.log('username; ', username);
  const user = await storage.get(USER_KEY, username);
  return user;
}

export async function removeUser(userId) {
  return storage.remove(USER_KEY, userId);
}

export async function saveUser(user) {
  user.updatedAt = Date.now();
  const exists = await userExists(user);
  if (exists) {
    return storage.put(USER_KEY, user);
  }
  return storage.post(USER_KEY, user, user.username);
}

export async function userExists(user) {
  const queriedUser = await getUser(user.username);
  return queriedUser !== null;
}

export async function signupUser(user) {
  const doesUserExist = await userExists(user);
  if (doesUserExist) return false;
  await saveUser(user);
  return true;
}

export async function loginUser(user) {
  const queriedUser = await getUser(user.username);
  if (queriedUser === null) return false;
  return queriedUser.password === user.password;
}
