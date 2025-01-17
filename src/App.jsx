import "./App.css";
import styled from "styled-components";
import React from "react"
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom"
import { FormCard } from "./components/FormCard";
import { Form } from "./components/FormEvent/Form"
import { Table } from "./components/TableDetails/TableNew"


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;



function App() {
  return (
    <>
      <Router>
        <header>
          <Link to="/Form">Event Form</Link>
        </header>
        <header>
          <Link to="/Table"> Table Section</Link>
        </header>
        <hr></hr>
        <Routes>
          <Route exact path='/' element={
            <AppContainer>
              <FormCard />
              <FormCard />
              <FormCard />
              <FormCard />
            </AppContainer>}>
          </Route>
          <Route path="/Form" element={<Form/>}>
          </Route>
          <Route path="/Table" element={<Table/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
