import React from "react";
import Form from "./components/Form/Form.jsx";

function App() {
  const frameStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div style={frameStyle}>
      <Form title={"Login"} />
    </div>
  )
}

export default App
