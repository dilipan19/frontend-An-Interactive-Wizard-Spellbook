export function quickSort(arr: any[], key: string): any[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left: any[] = [];
  const right: any[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][key] < pivot[key]) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left, key), pivot, ...quickSort(right, key)];
}
