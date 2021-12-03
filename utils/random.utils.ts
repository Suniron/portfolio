/**
 * Returns a random number between min (inclusive) and max (inclusive)
 */
export const getRandomNumberBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
