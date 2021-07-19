/**
 * Any JavaScript primitive data type
 */
export type Primitive = string | number | bigint | boolean | null | undefined | symbol

/**
 * An object that only has primitives as values
 */
export type DeflatedObject = {
  [key: string]: Primitive | Function,
}

/**
 * An object that can have nested objects as values and can be deflated
 */
export type InflatedObject = {
  [key: string]: Primitive | Function | InflatedObject,
}
