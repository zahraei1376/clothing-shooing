import React from 'react';
import './App.scss';
import {Switch,Route,Redirect} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';
import {connect} from 'react-redux';

import HomePage from './pages/homepage.component';
import ShopData from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import PrimaryHeader from './component/Primaryheader/Primaryheader.component';
import {setCurrentUser} from './redux/user/user.action';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        {/* <PrimaryHeader /> */}
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopData}/>
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={()=>
            this.props.currentUser ? (
            <Redirect to='/'/>
            ):(
            <SignInSignUp />
            )}/>
        </Switch>
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
