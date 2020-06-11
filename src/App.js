import React from 'react';
import './App.css';
import Dishes from './Dishes.js';
import Content from './Content.js';
import MENU_ITEM_CODES from './constants';

const {HOME, PROFILE, DISHES, RESTAURANTS, INDICATORS, EXIT} = MENU_ITEM_CODES;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        CURRENT_CONTENT: HOME
    }
  }

  onMenuItemClicked = (event) => {
    console.log('onMenuItemClicked: ', event.currentTarget);
    this.setState({CURRENT_CONTENT: event.currentTarget.id});
    console.log(this.state);
  }

  render = () => {
    console.log('Render called with state: ', this.state);
    return (
    <div className="App"> 
      <div className="container-content">
        <div className="side-bar">
          <nav>
            <ul>
              <li id={HOME} onClick={this.onMenuItemClicked}><a><i className="glyphicon glyphicon-home"></i><span className="menu-item-label">Home</span></a></li>
              <li id={PROFILE} onClick={this.onMenuItemClicked}><a><i className="glyphicon glyphicon-user"></i><span className="menu-item-label">Perfil</span></a></li>
              <li id={DISHES} onClick={this.onMenuItemClicked}><a><i className="glyphicon glyphicon-apple"></i><span className="menu-item-label">Inserir Pratos</span></a></li>
              <li id={RESTAURANTS} onClick={this.onMenuItemClicked}><a><i className="glyphicon glyphicon-list"></i><span className="menu-item-label">Meus restaurantes</span></a></li>
              <li id={INDICATORS} onClick={this.onMenuItemClicked}><a><i className="glyphicon glyphicon-stats"></i><span className="menu-item-label">Visualizar Indicadores</span></a></li>
              <li id={EXIT}onClick={this.onMenuItemClicked}><a><i className="glyphicon glyphicon-log-out"></i><span className="menu-item-label">Sair da conta</span></a></li>
            </ul>
          </nav>
        </div>
        <div className="content-frame">
          <h1>SGR - Sistema de Gerenciamento de Restaurantes</h1>
          <Content value={this.state.CURRENT_CONTENT}/>
          <footer>
            <p className="copyright"> © {(new Date()).getFullYear()}. Desenvolvido por </p>
          </footer>
        </div>
      </div>
    </div>
  );
    }
}

export default App;
