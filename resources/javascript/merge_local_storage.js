export default function mergeLocalStorage(key, value) {
  const prevData = JSON.parse(localStorage.getItem(key));
  const nextData = Object.assign(prevData, value);

  localStorage.setItem(
    key,
    JSON.stringify(nextData)
  );

  return nextData;
}
