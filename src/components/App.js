import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

// App Components
import Home from './Home';
import Work from './Work';
import WebDev from './WebDev';
import Copywriting from './Copywriting';
import OtherProjects from './OtherProjects';
import Contact from './Contact';
import NotFound from './NotFound';
import KhaDoPhoto from './projects/kha-do-photo';
import TheResolvedCollective from './projects/the-resolved-collective';

// React-router for a bookmarkable and shareable navigation
const App = () => (
  <BrowserRouter>
    <div className='App'>
    <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/work' component={Work} />
        <Route path='/web-development' component={WebDev} />
        <Route path='/copywriting' component={Copywriting} />
        <Route path='/other-projects' component={OtherProjects} />
        <Route path='/kha-do-photo' component={KhaDoPhoto} />
        <Route path='/the-resolved-collective' component={TheResolvedCollective} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;