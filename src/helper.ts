export function group(sortedValues: number[]): number[][] {
  let matrix: number[][] = [[]];

  let stack: number[] = [];

  for (const value of sortedValues) {
    if (stack.length === 0) {
      stack.push(value)
      continue
    }

    if (stack[stack.length - 1] == value) {
      stack.push(value);
      continue
    } else {
      if (stack.length === 0) return;
      matrix.push(stack);
      stack = [value]
    }
  }

  return matrix.slice(1)
}