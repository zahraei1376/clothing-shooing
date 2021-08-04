import React , {lazy ,Suspense} from 'react';
import {GlobalStyle} from './global.styles';
import MySpinner  from './component/MySpinner/MySpinner.component';

import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { Helmet} from 'react-helmet';

// import HomePage from './pages/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import CheckoutPage from './pages/checkout/checkout.component';
import {setCurrentUser} from './redux/user/user.action';
import Spinner from './component/spinner/spinner.component';
import ErrorBoundary from './component/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage.component'));
const ShopPage = lazy( ()=> import('./pages/shop/shop.component'));
const SignInSignUp = lazy( ()=> import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy( ()=> import('./pages/checkout/checkout.component'));

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }

  render(){

    return (
      <div>
        <GlobalStyle/>
        {/* <PrimaryHeader /> */}
        <Helmet>
            <meta charset="utf-8" />
            <title>Zz CLOTHING</title>
            {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Website for online clothing sales"
            />
        </Helmet>
        <ErrorBoundary>
          <Switch>
            <Suspense fallback={<MySpinner/>}>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={()=>
                this.props.currentUser ? (
                <Redirect to='/'/>
                ):(
                <SignInSignUp />
                )}/>
              </Suspense>
          </Switch>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps=(user)=>({
  currentUser:user.currentUser
})

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
