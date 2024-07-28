// import { useState } from 'react'

import { ChangeEvent } from 'react'

interface InputProps {
  selfIncome: number | string
  setSelfIncome: React.Dispatch<React.SetStateAction<number | string>>
  payeIncome: number | string
  setPayeIncome: React.Dispatch<React.SetStateAction<number | string>>
  otherIncome: number | string
  setOtherIncome: React.Dispatch<React.SetStateAction<number | string>>
  expenses: number | string
  setExpenses: React.Dispatch<React.SetStateAction<number | string>>
  studentLoan: string | null
  setStudentLoan: React.Dispatch<React.SetStateAction<string | null>>
  setKiwisaverContribution: React.Dispatch<React.SetStateAction<number>>
}

const Input = ({
  selfIncome,
  setSelfIncome,
  payeIncome,
  setPayeIncome,
  otherIncome,
  setOtherIncome,
  expenses,
  setExpenses,
  studentLoan,
  setStudentLoan,
  setKiwisaverContribution,
}: InputProps) => {
  const validateInput = (
    event: ChangeEvent<HTMLInputElement>,
    state: number | string,
    setState: React.Dispatch<React.SetStateAction<number | string>>,
  ) => {
    const value = event.target.value

    if (value == '') {
      setState(0)
    } else if (value.length == 1) {
      const isValid = /^[0-9]$/.test(value)

      if (isValid) {
        setState(Number(value))
      } else {
        setState(0)
        event.target.value = '0'
      }
    } else if (value.length > 1) {
      if (value[0] == '0') {
        const isValid = /^[0-9]$/.test(value[1])

        if (isValid) {
          setState(value[1])
          event.target.value = value[1]
        } else {
          event.target.value = String(state)
        }
      } else {
        const isValid = /^[1-9][0-9]*$/.test(value)

        if (isValid) {
          setState(Number(value))
        } else {
          event.target.value = String(state)
        }
      }
    }
  }

  return (
    <div className="input-component">
      <div>
        <h2>Tax calculator for Financial Year 2025/26</h2>
        <p>
          This financial year from all my self-employed, contracting and
          freelancing income, excluding GST, I will earn:
        </p>
        <input
          aria-label="Self-employed income (before tax)"
          type="text"
          key="selfemployedincomeinput"
          name="selfemployedincomeinput"
          onChange={(event) => validateInput(event, selfIncome, setSelfIncome)}
        ></input>
      </div>
      <div>
        <p>My annual salary from my permanent/PAYE job is</p>
        <input
          aria-label="Annual salary from PAYE job (before tax)"
          type="text"
          key="payeincomeinput"
          name="payeincomeinput"
          onChange={(event) => validateInput(event, payeIncome, setPayeIncome)}
        ></input>
      </div>
      <div>
        <p>
          The estimated total of my other income (including rental income) will
          be
        </p>
        <input
          aria-label="Annual other income (before tax)"
          type="text"
          key="otherincomeinput"
          name="otherincomeinput"
          onChange={(event) =>
            validateInput(event, otherIncome, setOtherIncome)
          }
        ></input>
      </div>
      <div>
        <p>My total expenses will be</p>
        <input
          aria-label="Annual expenses"
          type="text"
          key="expensesinput"
          name="expensesinput"
          onChange={(event) => validateInput(event, expenses, setExpenses)}
        ></input>
      </div>
      <div className="radiobuttongroup">
        <p>Do you have a Student Loan?</p>
        <label>
          <input
            aria-label="Student loan radio button"
            type="radio"
            id="studentloaninputyes"
            name="studentloaninput"
            value="yes"
            checked={studentLoan == 'yes'}
            onChange={(event) => setStudentLoan(event.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            aria-label="Student loan radio button"
            type="radio"
            id="studentloaninputno"
            name="studentloaninput"
            value="no"
            checked={studentLoan == 'no'}
            onChange={(event) => setStudentLoan(event.target.value)}
          />
          No
        </label>
      </div>
      <div>
        {' '}
        <p>I would like to make voluntary KiwiSaver contributions of:</p>
        <select
          aria-label="Kiwisaver voluntary contribution"
          key={'kiwisaverinput'}
          name="kiwisaverinput"
          defaultValue={0}
          onChange={(event) =>
            setKiwisaverContribution(Number(event.target.value))
          }
        >
          <option value={0}>0%</option>
          <option value={0.03}>3%</option>
          <option value={0.04}>4%</option>
          <option value={0.06}>6%</option>
          <option value={0.08}>8%</option>
          <option value={0.1}>10%</option>
        </select>
      </div>
    </div>
  )
}

export default Input
