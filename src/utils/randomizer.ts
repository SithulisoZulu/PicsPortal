
/**
 * Randomizes the order of elements in an array.
 * 
 * @param array - The array to be randomized.
 * @returns A new array with the elements randomly ordered.
 */export function randomize(array: {}[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

