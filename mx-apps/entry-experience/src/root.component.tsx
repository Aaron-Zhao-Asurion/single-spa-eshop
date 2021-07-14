import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; 
import EntryRouter from "./entry-router.component";

export default function Root(props) {
  const title = props.name?.split('/')[1]?.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  return (
    <Router>
      <h1>{ title }</h1>
      <p>{ props.name } is mounted!</p>
      <EntryRouter></EntryRouter>
    </Router>
  );
}
