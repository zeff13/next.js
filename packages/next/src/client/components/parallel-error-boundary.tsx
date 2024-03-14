interface ParallelBoundaryProps {
  // notFound?: React.ReactNode
  // notFoundStyles?: React.ReactNode
  // asNotFound?: boolean
  children: React.ReactNode
}

interface ParallelErrorBoundaryProps extends ParallelBoundaryProps {
  // pathname: string
  // missingSlots: Set<string>
}

interface ParallelErrorBoundaryState {
  // notFoundTriggered: boolean
  // previousPathname: string
}

class ParallelErrorBoundary extends React.Component<
  ParallelErrorBoundaryProps,
  ParallelErrorBoundaryState
> {
  constructor(props: ParallelBoundaryProps) {
    super(props)
    this.state = {
      // notFoundTriggered: !!props.asNotFound,
      // previousPathname: props.pathname,
    }
  }
}
