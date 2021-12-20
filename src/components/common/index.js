export const urlToId = (url) => {
  const reverse = url.split('').reverse().join('').slice(1);
  const id = reverse.slice(0, reverse.indexOf('/'));
  return id.split('').reverse().join('');
};
