import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'
import { useState } from 'react'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >=1;

  function handleChange(event, field){
    setUserInput(prevInvest => {
        return {
            ...prevInvest,
            [field]: +event.target.value
        }
    })
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className='center'>Please enter a duration greater than or equal to 1</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
