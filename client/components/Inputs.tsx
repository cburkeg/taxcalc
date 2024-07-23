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
}

function Input({
  selfIncome,
  setSelfIncome,
  payeIncome,
  setPayeIncome,
  otherIncome,
  setOtherIncome,
  expenses,
  setExpenses,
}: InputProps) {
  function handleEvent(
    event: ChangeEvent<HTMLInputElement>,
    state: number | string,
    setState: React.Dispatch<React.SetStateAction<number | string>>,
  ) {
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
    <div>
      <p>Hello - the self income is {selfIncome}</p>
      <p>PAYE income is {payeIncome}</p>
      <p>Other income is {otherIncome}</p>
      <p>Expenses are {expenses}</p>
      <input
        aria-label="Self-employed income (before tax)"
        type="text"
        key="selfemployedincomeinput"
        name="selfemployedincomeinput"
        onChange={(event) => handleEvent(event, selfIncome, setSelfIncome)}
      ></input>
      <input
        aria-label="Annual salary from PAYE job (before tax)"
        type="text"
        key="payeincomeinput"
        name="payeincomeinput"
        onChange={(event) => handleEvent(event, payeIncome, setPayeIncome)}
      ></input>
      <input
        aria-label="Annual other income (before tax)"
        type="text"
        key="otherincomeinput"
        name="otherincomeinput"
        onChange={(event) => handleEvent(event, otherIncome, setOtherIncome)}
      ></input>
      <input
        aria-label="Annual expenses"
        type="text"
        key="expensesinput"
        name="expensesinput"
        onChange={(event) => handleEvent(event, expenses, setExpenses)}
      ></input>
    </div>
  )
}

export default Input
