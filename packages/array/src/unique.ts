export function unique<T>(array: T): T {
  // @ts-expect-error We don't know the type of array being received
  return Array.from(new Set(array))
}
