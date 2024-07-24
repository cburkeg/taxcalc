interface ResultsProps {
  selfIncome: number
  payeIncome: number
  otherIncome: number
  expenses: number
}

function Results({
  selfIncome,
  payeIncome,
  otherIncome,
  expenses,
}: ResultsProps) {
  const taxBrackets = {
    bracket1: 15600,
    bracket2: 53500,
    bracket3: 78100,
    bracket4: 180000,
  }

  const taxRates = {
    bracket1: 10.5,
    bracket2: 17.5,
    bracket3: 30,
    bracket4: 33,
    bracket5: 39,
  }

  const netIncome =
    Number(selfIncome) +
    Number(payeIncome) +
    Number(otherIncome) -
    Number(expenses)

  let tax = 0

  if (netIncome > taxBrackets['bracket4']) {
    tax =
      (netIncome - taxBrackets['bracket4']) * (taxRates['bracket5'] / 100) +
      (taxBrackets['bracket4'] - taxBrackets['bracket3']) *
        (taxRates['bracket4'] / 100) +
      (taxBrackets['bracket3'] - taxBrackets['bracket2']) *
        (taxRates['bracket3'] / 100) +
      (taxBrackets['bracket2'] - taxBrackets['bracket1']) *
        (taxRates['bracket2'] / 100) +
      taxBrackets['bracket1'] * (taxRates['bracket1'] / 100)
  } else if (netIncome > taxBrackets['bracket3']) {
    tax =
      (netIncome - taxBrackets['bracket3']) * (taxRates['bracket4'] / 100) +
      (taxBrackets['bracket3'] - taxBrackets['bracket2']) *
        (taxRates['bracket3'] / 100) +
      (taxBrackets['bracket2'] - taxBrackets['bracket1']) *
        (taxRates['bracket2'] / 100) +
      taxBrackets['bracket1'] * (taxRates['bracket1'] / 100)
  } else if (netIncome > taxBrackets['bracket2']) {
    tax =
      (netIncome - taxBrackets['bracket2']) * (taxRates['bracket3'] / 100) +
      (taxBrackets['bracket2'] - taxBrackets['bracket1']) *
        (taxRates['bracket2'] / 100) +
      taxBrackets['bracket1'] * (taxRates['bracket1'] / 100)
  } else if (netIncome > taxBrackets['bracket1']) {
    tax =
      (netIncome - taxBrackets['bracket1']) * (taxRates['bracket2'] / 100) +
      taxBrackets['bracket1'] * (taxRates['bracket1'] / 100)
  } else {
    tax = netIncome * (taxRates['bracket1'] / 100)
  }

  const effectiveTaxRate = netIncome != 0 ? (tax / netIncome) * 100 : 0

  function round(number: number, places: number) {
    return Number(number.toFixed(places))
  }

  return (
    <>
      <p>This is the results component</p>
      <p>Tax is equal to: {tax}</p>
      <p>Effective tax rate is equal to: {effectiveTaxRate}</p>
      <p>
        Let&apos;s try round that to two decimal places using:{' '}
        {round(effectiveTaxRate, 2)}
      </p>
      <p>
        Your self-employed taxes are: {(effectiveTaxRate / 100) * selfIncome}
      </p>
    </>
  )
}

export default Results
