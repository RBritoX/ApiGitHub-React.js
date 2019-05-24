import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Repos from './components/Repos';


class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "",
        client_secret: "",
        sort: "created: asc"
      },
      user: [],
      repos: []
    }
  }

  getUser = (e) => {
    const user = e.target.value;
    const { url, client_id, client_secret, sort } = this.state.github;
    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data }));

    axios
      .get(
        `${url}/${user}/repos?sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  }

  renderProfile = () => {
    const { user, repos } = this.state;

    return (
      <div className="row">
        <div className="col-md-4">
          <Profile user={user} />
        </div>
        <div className="col-md-8">
          {repos.map(repos => <Repos key={repos.name} repo={repos} />)}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App" >
        <Navbar />
        <div className="container">
          <div className="search card card-body mb-3">
            <h1>Pesquisar Usuários do GitHub</h1>
            <p className="lead">Digite um nome para encontrar usuários e repositórios</p>
            <input onChange={this.getUser} className="form-control" placeholder="Digite o nome de um usuário..." required />
          </div>

          {this.state.user.length !== 0 ? this.renderProfile() : null}
        </div>
      </div>
    );
  }
}

export default App;
