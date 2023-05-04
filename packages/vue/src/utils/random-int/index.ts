export function randomInt(
  min: number = 0,
  max: number = Number.MAX_SAFE_INTEGER
) {
  const minCeil = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minCeil) + minCeil);
}
