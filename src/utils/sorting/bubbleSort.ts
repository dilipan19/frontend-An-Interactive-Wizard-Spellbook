export function bubbleSort(arr: any[], key: string): any[] {
  const data = [...arr];
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < data.length - 1; i++) {
      if (data[i][key] > data[i + 1][key]) {
        [data[i], data[i + 1]] = [data[i + 1], data[i]];
        swapped = true;
      }
    }
  }

  return data;
}
