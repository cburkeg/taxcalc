import { useState } from 'react'
import Input from './Inputs'
import Results from './Results'

function App() {
  const [selfIncome, setSelfIncome] = useState<number | string>(0)
  const [payeIncome, setPayeIncome] = useState<number | string>(0)
  const [otherIncome, setOtherIncome] = useState<number | string>(0)
  const [expenses, setExpenses] = useState<number | string>(0)
  const [studentLoan, setStudentLoan] = useState<string | null>(null)
  const [kiwisaverContribution, setKiwisaverContribution] = useState<number>(0)

  return (
    <>
      <div className="app">
        <div className="hero">
          <div>
            <img src="/images/hnry-logo-combinedv2.svg"></img>
          </div>
          <h1>
            Kia ora, this is Conor Burke-Govey, your new junioe developer ;)
          </h1>
        </div>
        <div className="main">
          <h2>Tax calculator</h2>
          <div>
            <Input
              selfIncome={selfIncome}
              setSelfIncome={setSelfIncome}
              payeIncome={payeIncome}
              setPayeIncome={setPayeIncome}
              otherIncome={otherIncome}
              setOtherIncome={setOtherIncome}
              expenses={expenses}
              setExpenses={setExpenses}
              studentLoan={studentLoan}
              setStudentLoan={setStudentLoan}
              setKiwisaverContribution={setKiwisaverContribution}
            />
            <Results
              selfIncome={Number(selfIncome)}
              payeIncome={Number(payeIncome)}
              otherIncome={Number(otherIncome)}
              expenses={Number(expenses)}
              studentLoan={studentLoan}
              kiwisaverContribution={kiwisaverContribution}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
