interface ResultsProps {
  selfIncome: number
  payeIncome: number
  otherIncome: number
  expenses: number
  studentLoan: string | null
}

function Results({
  selfIncome,
  payeIncome,
  otherIncome,
  expenses,
  studentLoan,
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

  const netIncome = selfIncome + payeIncome + otherIncome - expenses

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

  // Calculate ACC earner fee:

  const accMinimumIncome = 44250
  const accMaximumIncome = 142283

  const earnerLevyRate = 0.016
  const workLevyRate = 0.01
  const workingSaferLevyRate = 0.0008
  const studentLoanRate = 0.12
  // const studentLoanThreshold = 24128 - note that this is for the 2025 year
  const studentLoanThreshold = 22828 // note that this is for 2024, but it seems that hnry are using this value while also using 2025/26 tax rates

  let earnerLevy = 0

  if (selfIncome < accMinimumIncome) {
    earnerLevy = accMinimumIncome * earnerLevyRate
  } else if (selfIncome > accMaximumIncome) {
    earnerLevy = accMaximumIncome * earnerLevyRate
  } else {
    earnerLevy = selfIncome * earnerLevyRate
  }

  return (
    <div className="results-component">
      <p>Effective income tax rate: {round(effectiveTaxRate, 2)}%</p>

      <h3>Self-employed and other:</h3>
      <p>
        - Income tax: $
        {round(
          (effectiveTaxRate / 100) * (selfIncome + otherIncome - expenses),
          2,
        )}
      </p>
      <p>
        - Student loan: $
        {studentLoan === 'yes' && netIncome >= studentLoanThreshold
          ? round(studentLoanRate * (netIncome - studentLoanThreshold), 2)
          : 0}
      </p>
      <p>
        Your self-employed taxes are: $
        {round((effectiveTaxRate / 100) * selfIncome, 2)}
      </p>
      {selfIncome <= accMinimumIncome && (
        <p>
          Your income is less than the minimum threshold, so the minimum value
          of $44,250 has been used to calculate your earner levy
        </p>
      )}
      {selfIncome >= accMaximumIncome && (
        <p>
          Your income is greater than the maximum threshold, so the maximum
          value of $142,283 has been used to calculate your earner levy
        </p>
      )}
      <p>Your self-emplyed ACC earner levy is ${round(earnerLevy, 2)}</p>
      <p>
        Your self-employed ACC work levy is $
        {round(selfIncome * workLevyRate, 2)}
      </p>
      <p>
        Your self-employed ACC working safer levy is $
        {round(selfIncome * workingSaferLevyRate, 2)}
      </p>

      <p>Total tax is equal to: ${tax}</p>
    </div>
  )
}

export default Results
