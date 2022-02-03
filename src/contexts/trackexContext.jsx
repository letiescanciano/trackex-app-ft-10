import React, { createContext } from 'react'

export const TrackexContext = createContext()

const TrackexProvider = ({ children }) => {
  console.log('TrackexProvider')
  const categories = {
    eating_out: 'Eating out',
    clothes: 'Clothes',
    electronics: 'Electronics',
    groceries: 'Groceries',
    salary: 'Salary',
  }

  const types = {
    expense: 'Expense',
    income: 'Income',
  }
  return (
    <TrackexContext.Provider value={{ categories, types }}>
      {children}
    </TrackexContext.Provider>
  )
}

export { TrackexProvider }
