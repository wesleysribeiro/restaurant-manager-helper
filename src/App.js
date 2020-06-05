import React from 'react';
import './App.css';

class App extends React.Component {
  render = () => (
    <div className="App"> 
      <div className="container-content">
        <div className="side-bar">
          <nav>
            <ul>
              <li><a href=""><i className="glyphicon glyphicon-home"></i><span className="menu-item-label">Home</span></a></li>
              <li><a href=""><i className="glyphicon glyphicon-user"></i><span className="menu-item-label">Perfil</span></a></li>
              <li><a href=""><i className="glyphicon glyphicon-list"></i><span className="menu-item-label">Meus restaurantes</span></a></li>
              <li><a href=""><i className="glyphicon glyphicon-user"></i><span className="menu-item-label">Inserir Pratos</span></a></li>
              <li><a href=""><i className="glyphicon glyphicon-stats"></i><span className="menu-item-label">Visualizar Indicadores</span></a></li>
              <li><a href=""><i className="glyphicon glyphicon-log-out"></i><span className="menu-item-label">Sair da conta</span></a></li>
            </ul>
          </nav>
        </div>
        <div className="content-frame">
          <h1>SGR - Sistema de Gerenciamento de Restaurantes</h1>
          <footer>
            <p className="copyright"> © {(new Date()).getFullYear()}. Desenvolvido por </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
