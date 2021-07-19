export function splitIntoChunks(str: string, chunkLength: number): string[] {
  const output: string[] = []
  const strLength = str.length

  for (let i = 0; i < strLength; i += chunkLength) {
    output.push(str.substring(i, i + chunkLength))
  }

  return output
}
