import React from 'react'
import axios from 'axios'

class Auth extends React.Component {
  constructor() {
    super()
    this.state = {
      usernameInput: '',
      passwordInput: '',
      user: {}
    }
  }

  async signup() {
    let res = await axios.post('/auth/register', {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    })
    this.setState({
      user: res.data.userData
    })
  }

  async login() {
    let res = await axios.post('/auth/login', {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    })
    this.setState({
      user: res.data.userData
    })
  }

  async logout() {
    await axios.delete('/auth/logout')
    this.setState({ user: {} })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">
            Authorize <span className="header__title--emphasize">Me</span>
          </h1>
        </header>
        <div className="modal">
          <p className="modal__field">
            Username:
            <input
              onChange={e => this.setState({ usernameInput: e.target.value })}
              type="text"
            />
          </p>
          <p className="modal__field">
            Password:
            <input
              onChange={e => this.setState({ passwordInput: e.target.value })}
              type="password"
            />
          </p>
          <div className="modal__button-container">
            <button
              className="button--theme-green"
              onClick={() => this.signup()}
            >
              Signup
            </button>
            <button
              className="button--theme-green"
              onClick={() => this.login()}
            >
              Login
            </button>
            <button
              className="button--theme-green"
              onClick={() => this.logout()}
            >
              Logout
            </button>
          </div>
        </div>
        <hr />
        <p className="user-info">USER: {JSON.stringify(this.state.user)}</p>
      </div>
    )
  }
}

export default Auth