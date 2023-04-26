import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import GlobalStyle from "./components/Styled/Global";
import ResetStyle from "./components/Styled/Reset";



function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Form />
      
    </>
  );
}
// 
ReactDOM.render(
  <App/>,
  document.getElementById("root")

)

// ReactDOM.createRoot(rootElement).render(<App />);
// 