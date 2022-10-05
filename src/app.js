import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Form />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
