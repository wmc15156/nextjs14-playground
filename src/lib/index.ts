export const fetchData = (delay: number) =>
  new Promise(resolve => setTimeout(() => resolve('data'), delay));
