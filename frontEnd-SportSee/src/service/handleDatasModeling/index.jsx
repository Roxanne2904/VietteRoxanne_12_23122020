export function formatNumber(number, type) {
  switch (type) {
    case 'calories':
      return `${number.toLocaleString('en-US')}kCal`

    default:
      return `${number.toLocaleString('en-US')}g`
  }
}
