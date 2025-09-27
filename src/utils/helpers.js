export function randomIntRange(start, end) {
  return Math.floor(start + Math.random() * (end - start));
}

export function base64Id(length = 8) {
  let id = '';
  const base64Alphabet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';
  const alphaLength = base64Alphabet.length;
  for (let i = 0; i < length; i++) {
    id += base64Alphabet.charAt(randomIntRange(0, alphaLength));
  }
  return id;
}
