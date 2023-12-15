import { GenericParams } from '@redwoodjs/router'

export type Route = (
  params?: {
    [x: string]: string | number | boolean
    [x: number]: string | number | boolean
  } & GenericParams
) => string
