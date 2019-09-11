export default function compare(a, b) {
  const firstTitle = a.title.toUpperCase();
  const secondTitle = b.title.toUpperCase();

  let comparison = 0;
  if (firstTitle > secondTitle) {
    comparison = 1;
  } else if (firstTitle < secondTitle) {
    comparison = -1;
  }
  return comparison;
}
