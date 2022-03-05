/**
 * Custom an integer number with his unit measure.
 * @param { Number } number Number as an Integer.
 * @param { String } unit Unit of the unit of measure.
 * @returns { String } return the number and his unit as a string.
 */

export function formatUnit(number, unit) {
  switch (unit) {
    case 'calories':
      return `${number.toLocaleString('en-US')}kCal`

    case 'kilogram':
      return `${number.toLocaleString('en-US')}kg`
    default:
      return `${number.toLocaleString('en-US')}g`
  }
}
