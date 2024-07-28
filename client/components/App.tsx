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
            <img src="/images/hnry-logo-combinedv2.svg" alt="cnr x hnry"></img>
          </div>
          <h1>Kia ora! 👋 </h1>
          <h1>
            My name&apos;s Conor, and I&apos;d love to join Hnry as a graduate
            engineer!
          </h1>
          <div>
            <p>
              {' '}
              I&apos;d make a great member of your team because I have:
              <ul>
                <li>a quantitative background in physics and maths,</li>
                <li>
                  experience working in highly regulated environments, and{' '}
                </li>
                <li>
                  strong communication and collaboration skills from my career
                  as a patent attorney.
                </li>
              </ul>
              You can see examples of my work below, including my tax calculator
              that&apos;s based on Hnry&apos;s (with a few differences). This
              was a lot of fun to make on my own, but I&apos;d prefer to build
              even cooler stuff with you all!
            </p>
          </div>
        </div>
        <div className="taxcalc">
          <h1>
            Tax calculator{' '}
            <a
              href="https://github.com/cburkeg/taxcalc"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/github-mark.svg"
                alt="github link"
                height={'28px'}
              />
            </a>
          </h1>
          <p>
            Note: this calculator is built purely for fun, so don&apos;t use it
            for anything important. Seriously!
          </p>
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
        <div className="portfolio">
          <div>
            <h1>Portfolio</h1>
            <div className="item">
              <div className="thumbnail">
                <a
                  href="http://tabletalk.pushed.nz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/tabletalk2.png"
                    alt="A preview of the table show in TableTalk"
                  ></img>
                </a>
              </div>
              <div className="description">
                <h2>
                  <a
                    href="http://tabletalk.pushed.nz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Table Talk
                  </a>{' '}
                  <a
                    href="https://github.com/cburkeg/TableTalk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/github-mark.svg"
                      alt="github link"
                      height={'28px'}
                    />
                  </a>
                </h2>
                <p>
                  TableTalk is a front-end interface for managing and
                  interacting with data from a back-end database. The interface
                  supports all CRUD operations. Data that is displayed can be
                  filtered by field and value.
                </p>
                <p>
                  The interface was originally designed for inventory management
                  but can be used with JSON data of any shape. The deployed
                  website uses placeholder seed data generated with ChatGPT, so
                  please feel free to try out the CRUD tools!
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thumbnail">
                <img src="/images/tabletalk.png"></img>
              </div>
              <div className="description">
                <h2>Table Talk </h2>
                <p>
                  This is where the portfolio will go. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Adipisci libero, obcaecati
                  aspernatur provident perferendis incidunt quos inventore sed,
                  earum quisquam dolorem dolor quidem repellat! Omnis architecto
                  pariatur unde ex laudantium!
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thumbnail">
                <img src="/images/tabletalk.png"></img>
              </div>
              <div className="description">
                <h2>Table Talk</h2>
                <p>
                  This is where the portfolio will go. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Adipisci libero, obcaecati
                  aspernatur provident perferendis incidunt quos inventore sed,
                  earum quisquam dolorem dolor quidem repellat! Omnis architecto
                  pariatur unde ex laudantium!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">This is where the footer will go.</div>
      </div>
    </>
  )
}

export default App
