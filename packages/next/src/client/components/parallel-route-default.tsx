import isError from '../../lib/is-error'
import {
  createNextjsWarningCustomError,
  type NextWarningCustomError,
} from './next-warning-custom-error'

export const PARALLEL_ROUTE_DEFAULT_PATH =
  'next/dist/client/components/parallel-route-default.js'

const PARALLEL_ROUTE_ERROR = 'PARALLEL_ROUTE_ERROR'

const parallelRouteError = createNextjsWarningCustomError({
  message:
    'No default component was found for a parallel route rendered on this page. Falling back to nearest NotFound boundary.\n' +
    'Learn more: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#defaultjs\n\n',
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
