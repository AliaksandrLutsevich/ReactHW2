import React from "react";
import PeopleList from '../H9.1/h9.1'
import Inp from '../H9.2/h9.2'
import TimePicker from '../H9.3/h9.3'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/peoplelist">H9.1</Link>
            </li>
            <li>
              <Link to="/input">H9.2</Link>
            </li>
            <li>
              <Link to="/timepicker">H9.3</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/peoplelist">
            <PeopleListLink />
          </Route>
          <Route path="/timepicker">
            <TimeLink />
          </Route>
          <Route path="/input">
            <InpLink />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function InpLink() {
  return <Inp/>;
}

function PeopleListLink() {
  return <PeopleList/>;
}

function TimeLink() {
  return <TimePicker/>;
}