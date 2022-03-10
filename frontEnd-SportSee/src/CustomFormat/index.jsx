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
    case `sessionLength`:
      return `${number.toLocaleString('en-US')}min`
    default:
      return `${number.toLocaleString('en-US')}g`
  }
}

/**
 * From performance's datas, in datas's array,
 * it custom kind's values to string.
 * @param { Array.<Object.<value: Number, kind: Number>> } array
 * @param { Object.<kind: String> } kind
 * @param { Object.<data: Array, kind: Object, userId: Number>} obj
 * @returns { Object.<data: Array.<Object.<value: Number, kind: String>, kind: Object, userId: Number>}
 */

export function formatKind(array, kind, obj) {
  let customKind

  customKind =
    array !== undefined &&
    array.map((el) => {
      console.log(el)
      let keyKind = { ...el, key: `${kind[el.kind]}` }

      switch (keyKind.key) {
        case `cardio`:
          return { ...keyKind, kind: 'Cardio' }
        case `energy`:
          return { ...keyKind, kind: 'Energie' }
        case `endurance`:
          return { ...keyKind, kind: 'Endurance' }
        case `strength`:
          return { ...keyKind, kind: 'Force' }
        case `speed`:
          return { ...keyKind, kind: 'Vitesse' }
        case `intensity`:
          return { ...keyKind, kind: 'Intensité' }
        default:
          return null
      }
    })

  return (
    obj !== undefined && {
      ...obj,
      data: customKind,
    }
  )
}

/**
 *
 * @param { Number } number Number as an integer.
 * @returns { String } current number becomes a string.
 */

export function formatDay(number) {
  switch (number) {
    case 1:
      return `L`
    case 2:
      return `M`
    case 3:
      return `M`
    case 4:
      return `J`
    case 5:
      return `V`
    case 6:
      return `S`
    case 7:
      return `D`
    default:
      return `?`
  }
}
