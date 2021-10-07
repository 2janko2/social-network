import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { Redirect, Switch, withRouter } from 'react-router';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/commons/preloader/preloader';
import store from './redux/redux-store';
import { BrowserRouter } from "react-router-dom";
import { withSuspence } from './hoc/withSuspence';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("An error has occured");
    // console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }


  render() {

    if (!this.props.initialized) { return <Preloader /> }


    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">

          <Switch>

            <Route exact path='/'
              render={() => <Redirect to={"/profile"} />} />

            <Route path='/dialogs'
              render={withSuspence(DialogsContainer)} />

            <Route path='/profile/:userId?'
              render={withSuspence(ProfileContainer)} />

            <Route path='/users'
              render={() => <UsersContainer />} />

            <Route path='/login'
              render={() => <Login />} />

            <Route path='*'
              render={() => <div> 404 Not Found </div>} />
          </Switch>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}
export default SamuraiJSApp