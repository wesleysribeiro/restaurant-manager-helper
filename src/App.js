import React from 'react';
import './App.css';
import Content from './Content.js';
import MENU_ITEM_CODES from './constants';
import UserReviews from './UserReviews.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const {HOME, PROFILE, DISHES, RESTAURANTS, INDICATORS, EXIT} = MENU_ITEM_CODES;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        CURRENT_CONTENT: HOME,
        loggedIn: false
    }

    this.token = '';
  }

  onMenuItemClicked = (event) => {
    console.log('onMenuItemClicked: ', event.currentTarget);
    const id = event.currentTarget.id;
    let loggedIn = this.state.loggedIn;

    if(id === EXIT)
    {
      loggedIn = false;
      this.token = ''
    }
    this.setState(
      {
        CURRENT_CONTENT: event.currentTarget.id,
        loggedIn: loggedIn
      }
    );
    console.log(this.state);
  }

  onLogin = (loggedIn, authToken) => {
    console.log('On onLogin func')
    console.log('authToken: ' + authToken)
    this.token = authToken;
    this.setState(
    {
      loggedIn
    })
  }

  render = () => {
    console.log('Render called with state: ', this.state);

    const menuActions = [
      <li id={HOME} onClick={this.onMenuItemClicked}>
        <a>
          <i className="glyphicon glyphicon-home">
          </i>
          <span className="menu-item-label">Home</span>
        </a>
      </li>
    ]

    const userActions = []

    if(this.state.loggedIn)
    {
      userActions.push(
        <li id={PROFILE} onClick={this.onMenuItemClicked} token={this.token}>
          <a>
            <i className="glyphicon glyphicon-user">
            </i><span className="menu-item-label">Perfil</span>
          </a>
        </li>)
      userActions.push(<li id={DISHES} onClick={this.onMenuItemClicked}>
          <a>
            <i className="glyphicon glyphicon-apple"></i><span className="menu-item-label">Meus pratos</span>
          </a>
        </li>
        );

      userActions.push(
        <li id={RESTAURANTS} onClick={this.onMenuItemClicked}>
          <a><i className="glyphicon glyphicon-list"></i><span className="menu-item-label">Meus restaurantes</span>
          </a>
        </li>);
      userActions.push(
        <li id={INDICATORS} onClick={this.onMenuItemClicked}>
          <a>
            <i className="glyphicon glyphicon-stats">
            </i>
            <span className="menu-item-label">Visualizar Indicadores</span>
          </a>
        </li>
        );
      userActions.push(<li id={EXIT}onClick={this.onMenuItemClicked}><a><i className="glyphicon glyphicon-log-out"></i><span className="menu-item-label">Sair da conta</span></a></li>  )
    }

    return (
        <Router>
          <Switch>
            <Route path="/home">
              <div className="App"> 
                <div className="container-content">
                  <div className="side-bar">
                    <nav>
                      <ul>
                        {menuActions}
                        {userActions}
                      </ul>
                    </nav>
                  </div>
                  <div className="content-frame">
                    <div className="main-content">
                      <h1>SGR - Sistema de Gerenciamento de Restaurantes</h1>
                      <Content value={this.state.CURRENT_CONTENT} onLogin={this.onLogin}/>
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/userReviews">
              <UserReviews/>
            </Route>
          </Switch>
        </Router>
    );
    }
}

export default App;
