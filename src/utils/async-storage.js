import { base64Id } from './helpers';

// TODO: add batch get, post, put, remove
// by checking if the input is an array,
// or with different batch funcs

export function query(entityType, delay = 10) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  return new Promise((resolve) => setTimeout(() => resolve(entities), delay));
}

export async function get(entityType, entityId) {
  const entities = await query(entityType);
  const entity = entities.find((entity) => entity._id === entityId);
  return entity || null;
}

export async function post(entityType, newEntity) {
  newEntity._id = base64Id();
  const entities = await query(entityType);
  entities.push(newEntity);
  _save(entityType, entities);
  return newEntity;
}

export async function put(entityType, updatedEntity) {
  const entities = await query(entityType);
  const idx = entities.findIndex((ent) => ent._id === updatedEntity._id);
  if (idx < 0) console.log("idx!!!");
  if (idx < 0) return null;
  const entityToUpdate = { ...entities[idx], ...updatedEntity };
  entities.splice(idx, 1, entityToUpdate);
  _save(entityType, entities);
  return entityToUpdate;
}

export async function remove(entityType, entityId) {
  const entities = await query(entityType);
  const idx = entities.findIndex((ent) => ent._id === entityId);
  if (idx < 0) return null;
  const deletedEntity = entities[idx];
  entities.splice(idx, 1);
  _save(entityType, entities);
  return deletedEntity;
}

// Private functions

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
