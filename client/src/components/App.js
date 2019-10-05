import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
  //checks if user is loggedin or not
  //displays content based on user login status
  componentDidMount() {

  }

  render() { 
    return (
        <div className="container">
            <BrowserRouter>
              <div>
                <Header />
                <Route exact path="/" component={Landing}></Route>
                <Route exact path="/surveys" component={Dashboard}></Route>
                <Route path="/surveys/new" component={SurveyNew} />
              </div>
            </BrowserRouter>
        </div>   
    );
  }
};

  export default App;