/**
 * Custom an integer number with his unit measure.
 * @param { Number } number Number as an Integer.
 * @param { String } unit Unit of the unit of measure.
 * @returns { String } It return the number and his unit as a string.
 */

export function formatUnit(number, unit) {
  switch (unit) {
    case 'calories':
      return `${number.toLocaleString('en-US')}kCal`

    case 'kilogram':
      return `${number.toLocaleString('en-US')}kg`
    case `sessionLength`:
      return `${number.toLocaleString('en-US')} min`
    default:
      return `${number.toLocaleString('en-US')}g`
  }
}

/**
 * From performance's datas, in data's key,
 * it custom kind key's values to string (french translation).
 * @param { Object[] } array Array From data's key in datas.
 * @param { Number } array[].value Number as an integer.
 * @param { Number } array[].kind Number as an integer.
 * @param { Object } obj Obj from kind's key in datas.
 * @param { String } obj.kind
 * @param { Object } datas
 * @param { Object[] } datas.data equal to "array" from parameters.
 * @param { Object } datas.kind equal to "obj" from parameters.
 * @param { Number } datas.userId Number as an integer.
 * @returns { Object } it return array[ ].kind as a String (ex: 1 became "endurance").
 * { Object.<data: Array.<Object.<value: Number, kind: String>, kind: Object, userId: Number>}
 */

export function formatKind(array, obj, datas) {
  let array_arrCustomKind

  array_arrCustomKind =
    array !== undefined &&
    array.map((el) => {
      let object_objKeyKind = { ...el, key: `${obj[el.kind]}` }

      switch (object_objKeyKind.key) {
        case `cardio`:
          return { ...object_objKeyKind, kind: 'Cardio' }
        case `energy`:
          return { ...object_objKeyKind, kind: 'Energie' }
        case `endurance`:
          return { ...object_objKeyKind, kind: 'Endurance' }
        case `strength`:
          return { ...object_objKeyKind, kind: 'Force' }
        case `speed`:
          return { ...object_objKeyKind, kind: 'Vitesse' }
        case `intensity`:
          return { ...object_objKeyKind, kind: 'Intensité' }
        default:
          return null
      }
    })

  return (
    datas !== undefined && {
      ...datas,
      data: array_arrCustomKind,
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
