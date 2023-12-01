/**
 * sortByProperty()
 * Sorts an array of objects by a specified property.
 * @template T - The type of objects in the array.
 * @param {T[]} array - The array of objects to be sorted.
 * @param {keyof T} property - The property by which the array should be sorted.
 * @returns {T[]} - A new array containing the sorted objects.
 */
const sortByProperty = <T>(array: T[], property: keyof T): T[] => {
  return [...array].sort((a, b) => (a[property] as any).localeCompare(b[property] as any));
};

export default sortByProperty