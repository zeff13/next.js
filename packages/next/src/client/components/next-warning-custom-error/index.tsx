export type NextWarningCustomError = Error & {
  details: {
    title: string
    digest: string
  }
}

export function createNextjsWarningCustomError({
  message,
  title,
  digest,
}: {
  message: string
  title: string
  digest: string
}): NextWarningCustomError {
  const error = new Error(message) as NextWarningCustomError
  error.details = {
    title,
    digest,
  }
  return error
}

export const PARALLEL_ROUTE_ERROR = 'PARALLEL_ROUTE_ERROR'
export const MISSING_HTML_TAGS = 'MISSING_HTML_TAGS'

const customErrorsSet = new Set([PARALLEL_ROUTE_ERROR, MISSING_HTML_TAGS])
export function isSimpleNextjsWarningError(error: Error) {
  const digest = (error as any).details?.digest
  return customErrorsSet.has(digest)
}

export function getNextjsWarningTitle(error: Error) {
  return (error as any).details?.title
}
