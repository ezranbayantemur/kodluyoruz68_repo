export function dataParser(values) {
  if (!values) {
    return;
  }

  const array = Object.values(values);
  return array.sort((a, b) => b.time - a.time);
}
