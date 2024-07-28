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
              You can see examples of my work below, including my version of
              Hnry&apos;s 2025/2026 tax calculator (with a few differences).
              This was a lot of fun to make on my own, but I&apos;d prefer to
              build even cooler stuff with you all!
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
                    src="/images/tabletalk5.png"
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
                    TableTalk
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
                <a
                  href="https://growgrub-conor.pushed.nz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/growgrub.png" alt="Daily tasks"></img>
                </a>
              </div>
              <div className="description">
                <h2>
                  {' '}
                  <a
                    href="https://growgrub-conor.pushed.nz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Grow-grub
                  </a>{' '}
                  <a
                    href="https://github.com/cburkeg/grow-grub"
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
                  Grow-grub is a full-stack companion app for gardeners that was
                  developed as our final group project at Dev Academy. The app
                  helps users plan their gardens, track plant progress, and
                  provides care instructions and harvesting tips. It also
                  monitors watering schedules and generates reminders based on
                  each plant&apos;s needs.
                </p>
                <p>
                  The project was completed in one week by myself and six other
                  developers. We were working right up until code freeze, so
                  there are some features that are yet to be implemented!
                </p>
              </div>
            </div>

            <div className="item">
              <div className="thumbnail">
                <a
                  href="https://cburkeg.github.io/N-body-simulator/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/nbody2.png"
                    alt="Chaotic motion by N bodies interacting"
                  />
                </a>
              </div>
              <div className="description">
                <h2>
                  {' '}
                  <a
                    href="https://cburkeg.github.io/N-body-simulator/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    N-body simulator{' '}
                    <a
                      href="https://github.com/cburkeg/N-body-simulator"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/images/github-mark.svg"
                        alt="github link"
                        height={'28px'}
                      />
                    </a>
                  </a>
                </h2>
                <p>
                  This a simulation that models gravitational interactions
                  between multiple bodies in a 2D space. The simulation
                  visualises the movement of the bodies over time, and you can
                  get some cool patterns and chaotic motion if the initial
                  conditions are right. Try running the sim with N=5 at 50,000
                  steps a few times.
                </p>
                <p>
                  The simulation does not model collisions between bodies, so
                  they tend fly off at extreme angles when they get close to one
                  another. It also isn&apos;t optimised and the time complexity
                  is proportional to N squared, so be careful!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
            <h1>Go on, do it!</h1>
            <p>
              Get in touch with me! I&apos;d love to help you remove barriers
              for sole traders!
            </p>
            <div className="icons">
              <a
                href="https://github.com/cburkeg/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/github-mark-white.svg"
                  alt="github link"
                  height={'56px'}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/conor-burke-govey/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/LinkedIn_icon.svg"
                  alt="linkedin link"
                  height={'56px'}
                />
              </a>
              <a href="mailto:cburkeg@gmail.com">
                <img
                  src="/images/Gmail-icon.svg"
                  alt="github link"
                  height={'56px'}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
