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

  const adjustedTaxBrackets = {
    bracket1: 15600 - (payeIncome - expenses),
    bracket2: 53500 - (payeIncome - expenses),
    bracket3: 78100 - (payeIncome - expenses),
    bracket4: 180000 - payeIncome,
  }

  let currentBracket = 'bracket5'
  for (const bracket of Object.keys(adjustedTaxBrackets)) {
    if (adjustedTaxBrackets[bracket] > 0) {
      currentBracket = bracket
      break
    }
  }

  const taxRates = {
    bracket1: 10.5,
    bracket2: 17.5,
    bracket3: 30,
    bracket4: 33,
    bracket5: 39,
  }

  const netSelfIncome = selfIncome + otherIncome - expenses

  let selfIncomeTax = 0

  if (currentBracket == 'bracket5') {
    selfIncomeTax = netSelfIncome * taxRates[currentBracket]
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

  const selfEmployedAndOtherTax = round(
    (effectiveTaxRate / 100) * (selfIncome + otherIncome - expenses),
    2,
  )

  const studentLoanContributions =
    studentLoan == 'yes' && netIncome >= studentLoanThreshold
      ? round(studentLoanRate * (netIncome - studentLoanThreshold), 2)
      : 0

  let earnerLevy = 0

  if (selfIncome < accMinimumIncome) {
    earnerLevy = round(accMinimumIncome * earnerLevyRate, 2)
  } else if (selfIncome > accMaximumIncome) {
    earnerLevy = round(accMaximumIncome * earnerLevyRate, 2)
  } else {
    earnerLevy = round(selfIncome * earnerLevyRate, 2)
  }

  const workLevy = round(selfIncome * workLevyRate, 2)

  const workingSaferLevy = round(selfIncome * workingSaferLevyRate, 2)

  const accTotalLevy = round(earnerLevy + workLevy + workingSaferLevy, 2)

  const totalPayments =
    selfEmployedAndOtherTax + studentLoanContributions + accTotalLevy

  return (
    <div className="results-component">
      <p>The current bracket is {currentBracket}</p>
      <p>Effective income tax rate: {round(effectiveTaxRate, 2)}%</p>

      <h3>Self-employed and other:</h3>
      <p>
        {' '}
        - Income tax:{' '}
        {selfEmployedAndOtherTax.toLocaleString('en-NZ', {
          style: 'currency',
          currency: 'NZD',
        })}
      </p>
      {studentLoan == 'yes' && (
        <p>
          - Student Loan repayments:{' '}
          {studentLoanContributions.toLocaleString('en-NZ', {
            style: 'currency',
            currency: 'NZD',
          })}{' '}
          {netIncome < studentLoanThreshold &&
            `(your net income is below the repayment threshold of ${studentLoanThreshold.toLocaleString(
              'en-NZ',
              {
                style: 'currency',
                currency: 'NZD',
              },
            )})`}
        </p>
      )}
      <h3>Self-employed</h3>
      {/* <p>
        Your self-employed taxes are: $
        {round((effectiveTaxRate / 100) * selfIncome, 2)}
      </p> */}
      <h4>Estimated ACC levies:</h4>
      <p>
        Your total estimated ACC levy is equal to{' '}
        {accTotalLevy.toLocaleString('en-NZ', {
          style: 'currency',
          currency: 'NZD',
        })}
      </p>
      <p>This total comprises:</p>

      <p>- a self-emplyed ACC earner levy of ${earnerLevy}</p>
      {selfIncome <= accMinimumIncome && (
        <p>
          (your income is less than the minimum threshold, so the minimum liable
          income of $44,250 has been used to calculate your earner levy)
        </p>
      )}
      {selfIncome >= accMaximumIncome && (
        <p>
          (your income is greater than the maximum threshold, so the maximum
          liable income of $142,283 has been used to calculate your earner levy)
        </p>
      )}
      <p>
        - a self-employed ACC Work levy of{' '}
        {workLevy.toLocaleString('en-NZ', {
          style: 'currency',
          currency: 'NZD',
        })}
      </p>
      <p>
        - a self-employed Working Safer levy of{' '}
        {workingSaferLevy.toLocaleString('en-NZ', {
          style: 'currency',
          currency: 'NZD',
        })}
      </p>
      <h3>Estimated total:</h3>
      <p>
        {totalPayments.toLocaleString('en-NZ', {
          style: 'currency',
          currency: 'NZD',
        })}
      </p>
    </div>
  )
}

export default Results
