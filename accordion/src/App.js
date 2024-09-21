import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Accordion from './components/Accordion';
import Accordion2 from './components/Accordion2';

function App() {
  const data = [
    {
      id: 1,
      title: "Accordion One",
      content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
      display: false
    },
    {
      id: 2,
      title: "Accordion Two",
      content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
      display: false
    }
    , {
      id: 3,
      title: "Accordion Three",
      content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
      display: false
    }
  ]

  return (
    <div className="App">
      {/* Approach1 */}
      <Accordion accordionData={data} />
      {/* Approach2 */}
      {/* Another approach for the accordion component is below */}
      {/* <Accordion2 accordionData={data} /> */}
    </div>
  );
}

export default App;
