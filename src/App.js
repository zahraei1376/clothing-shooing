import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './component/error-boundary/error-boundary.component';
import MySpinner from './component/MySpinner/MySpinner.component';
import { GlobalStyle } from './global.styles';
import { setCurrentUser } from './redux/user/user.action';

const HomePage = lazy(() => import('./pages/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  render() {

    return (
      <div>
        <GlobalStyle />
        <Helmet>
          <meta charset="utf-8" />
          <title>Zz CLOTHING</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Website for online clothing sales"
          />
        </Helmet>
        <ErrorBoundary>
          <Switch>
            <Suspense fallback={<MySpinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInSignUp />
                )} />
            </Suspense>
          </Switch>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = (user) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
