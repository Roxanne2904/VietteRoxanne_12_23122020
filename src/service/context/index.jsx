import React, { useState, createContext } from 'react'
import PropType from 'prop-types'

export const DatasKindContext = createContext()

/**
 * It setting up a provider that contains a function to toggle a state with a booleen.
 * This state will be usefull to know which kind of datas we want to fetch.
 * @returns { HTMLElements } DatasProvider's component with the toogle function and the state in props value.
 */

export const DatasKindProvider = ({ children }) => {
  const [booleen_boolDatasKind, setDatasKind] = useState(false)
  const toggleDatasKind = () => {
    setDatasKind(booleen_boolDatasKind === true ? false : true)
  }

  return (
    <DatasKindContext.Provider
      value={{ booleen_boolDatasKind, toggleDatasKind }}
    >
      {children}
    </DatasKindContext.Provider>
  )
}

DatasKindProvider.propTypes = {
  children: PropType.arrayOf(PropType.element).isRequired,
}
