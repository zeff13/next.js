function fn2() {
  throw new Error('boom')
}

function beforeExport() {
  fn2()
}

export function fn1() {
  afterExport()
}

function afterExport() {
  beforeExport()
}
