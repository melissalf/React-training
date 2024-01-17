import { useState } from "react";
import UserForm from "./components/UserForm";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

const DEFAULT_USER_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);

  function handleUserInput(propName, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [propName]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <UserForm onUserInput={handleUserInput} defaultValues={userInput} />
      {!inputIsValid && (
        <p className="center">
          Please enter an valid duration input (greater than 0)
        </p>
      )}
      {inputIsValid && <Results userData={userInput} />}
    </>
  );
}

export default App;
