import isError from '../../lib/is-error'
import {
  createNextjsWarningCustomError,
  type NextWarningCustomError,
} from './next-warning-custom-error'

export const PARALLEL_ROUTE_DEFAULT_PATH =
  'next/dist/client/components/parallel-route-default.js'

const PARALLEL_ROUTE_ERROR = 'PARALLEL_ROUTE_ERROR'

const parallelRouteError = createNextjsWarningCustomError({
  message: 'Parallel Route Error',
  title: 'Parallel Route Error',
  digest: PARALLEL_ROUTE_ERROR,
})

export function isParallelRouteError(
  err: unknown
): err is NextWarningCustomError {
  return isError(err) && (err as any).digest === PARALLEL_ROUTE_ERROR
}

export default function ParallelRouteDefault() {
  throw parallelRouteError
}
