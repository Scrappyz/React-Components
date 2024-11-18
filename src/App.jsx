import React from "react";
import Form from "./components/Form/Form.jsx";

function App() {
  const frameStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const fields = [
    {
      id: "user",
      label: "Username",
      placeholder: "Username",
      type: "text"
    },
    {
      id: "pw",
      label: "Password",
      placeholder: "Password",
      type: "password",
      showPasswordText: "Show Password"
    }
  ];

  let inputs = {};

  const getInputs = (values) => {
    inputs = values;
    alert(inputs.user);
  }

  return (
    <div style={frameStyle}>
      <Form title={"Login"} fields={fields} submitButton={{label: "Submit", onSubmit: getInputs}} />
    </div>
  )
}

export default App
