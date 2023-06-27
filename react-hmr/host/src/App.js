import React, { Suspense } from 'libs/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'libs/react-router-dom';

import Heading1 from 'remote1/Heading1';
import Heading2 from 'remote2/Heading2';

const Button = React.lazy(() => import('remote1/Button'));

const App = () => {
  return (
    <Router>
      <div>
        <div
          style={{
            margin: '10px',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: 'greenyellow',
          }}
        >
          <h1>HOST</h1>
          HOST ONL SUPPORTS LIVE RELOAD. GO TO http://localhost:3001 to try out HMR
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/heading">Heading</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={'loading...'}>
          <Switch>
            <Route path="/button">
              <Button />
            </Route>
            <Route path="/heading">
              <Heading1 />
              <Heading2 />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
