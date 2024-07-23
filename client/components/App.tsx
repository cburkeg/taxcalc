import { useState } from 'react'
import Input from './Inputs'
import Results from './Results'

function App() {
  const [selfIncome, setSelfIncome] = useState<number | string>(0)
  const [payeIncome, setPayeIncome] = useState<number | string>(0)
  const [otherIncome, setOtherIncome] = useState<number | string>(0)
  const [expenses, setExpenses] = useState<number | string>(0)
  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">Tax calculator</h1>
        <Input
          selfIncome={selfIncome}
          setSelfIncome={setSelfIncome}
          payeIncome={payeIncome}
          setPayeIncome={setPayeIncome}
          otherIncome={otherIncome}
          setOtherIncome={setOtherIncome}
          expenses={expenses}
          setExpenses={setExpenses}
        />
        <Results />
      </div>
    </>
  )
}

export default App
