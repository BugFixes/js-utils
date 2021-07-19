export type UrlSearchParamValue = string
  | number
  | boolean
  | Date
  | null
  | undefined
  | (string | number | boolean | Date | null | undefined)[]

export type UrlSearchParams = {
  [param: string]: UrlSearchParamValue,
}

export type UrlDescriptor = {
  hash: string,
  hostname: string,
  password: string,
  pathname: string,
  port: string,
  protocol: string,
  searchParams: UrlSearchParams,
  username: string,
}
