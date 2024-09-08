import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./components/step2/Login";
import { ExistingForm } from "./components/step3/ExistingForm";
import { ExistingFormIntegration } from "./components/step3/ExistingFormIntegration";
import { IntegrateMui } from "./components/step4/IntegrateMui";
import LoginWithValidation from "./components/step6/LoginWithValidation";
import FormSchema from "./components/step7/FormSchema";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>React Hook Form</h3>
      {/* <Login /> */}
      {/* <ExistingForm /> */}
      {/* <ExistingFormIntegration /> */}
      {/* <IntegrateMui /> */}
      {/* <LoginWithValidation /> */}
      <FormSchema />
    </div>
  );
}

export default App;
