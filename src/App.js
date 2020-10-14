import React from 'react';
import './App.css';
import Content from './Content.js';
import MENU_ITEM_CODES from './constants';

const {HOME, PROFILE, DISHES, RESTAURANTS, INDICATORS, EXIT} = MENU_ITEM_CODES;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        CURRENT_CONTENT: HOME,
        loggedIn: false
    }
  }

  onMenuItemClicked = (event) => {
    console.log('onMenuItemClicked: ', event.currentTarget);
    const id = event.currentTarget.id;
    let loggedIn = this.state.loggedIn;

    if(id === EXIT)
    {
      loggedIn = false;
    }
    this.setState(
      {
        CURRENT_CONTENT: event.currentTarget.id,
        loggedIn: loggedIn
      }
    );
    console.log(this.state);
  }

  onLogin = (loggedIn) => {
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
        <li id={PROFILE} onClick={this.onMenuItemClicked}>
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
          <h1>SGR - Sistema de Gerenciamento de Restaurantes</h1>
          <Content value={this.state.CURRENT_CONTENT} onLogin={this.onLogin}/>
        </div>
      </div>
    </div>
  );
    }
}

export default App;
