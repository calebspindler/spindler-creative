import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import NotFound from './NotFound';
import KhaDoPhoto from './projects/kha-do-photo';

// React-router for a bookmarkable and shareable navigation
const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/work' component={Work} />
        <Route path='/kha-do-photo' component={KhaDoPhoto} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;