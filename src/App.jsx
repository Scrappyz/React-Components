import React from "react";
import Form from "./components/Form/Form.jsx";

function App() {
  const frameStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const styles = {
    form: {
      boxShadow: "0px 5px 10px 1px lightgray",
      borderWidth: "1px",
      borderColor: "lightgray",
      borderRadius: "10px",
      width: "300px"
    },
    title: {
      fontWeight: "bold",
      fontSize: "20px",
      marginBottom: "10px"
    },
    inputBox: {
      height: "30px",
      borderColor: "lightgray",
      borderWidth: "1px",
      paddingLeft: "10px"
    },
    submitButton: {
      height: "30px",
      backgroundColor: "#dedede",
      borderWidth: "0px"
    }
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
      <Form title={"Login"} fields={fields} submitButton={{label: "Submit", onClick: getInputs}} />
    </div>
  )
}

export default App
