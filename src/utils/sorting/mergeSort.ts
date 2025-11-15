export function mergeSort(arr: any[], key: string): any[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), key);
  const right = mergeSort(arr.slice(mid), key);

  return merge(left, right, key);
}

function merge(left: any[], right: any[], key: string): any[] {
  const results: any[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i][key] < right[j][key]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }

  return [...results, ...left.slice(i), ...right.slice(j)];
}
