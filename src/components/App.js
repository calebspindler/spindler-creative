import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import NotFound from './NotFound';
import KhaDoPhoto from './projects/kha-do-photo';

// React-router for a bookmarkable and shareable navigation
const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />
        <Route path='/kha-do-photo' component={KhaDoPhoto} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;