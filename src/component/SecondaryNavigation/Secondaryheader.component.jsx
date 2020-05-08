import React from 'react';
import {Link} from 'react-router-dom';
import { createStructuredSelector} from 'reselect';
// import Secondarynavigation from './Secondarynavigation.component';
import '../../sassStyle/components/Secondaryheader.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CardIcon from '../card-icon/card-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


class Secondaryheader extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         currentUser:null
    //     }
    // }

    // unsubscribeFromAuth=null;

    // componentDidMount(){
    //     auth.onAuthStateChanged(user=>{
    //         this.setState({currentUser:user});
    //         console.log(user);
    //     })
    // }

    // componentWillUnmount(){
    //     this.unsubscribeFromAuth();
    // }

    render(){
        return(
            <div className='header'>
                <Link to='/'> 
                    <svg  className='header_logo' xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8.999c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM21.231 9.365c-0.325-0.105-0.618-0.272-0.869-0.493-0.404 0.744-0.902 1.507-1.439 2.272-0.835-1.073-1.788-2.156-2.851-3.219-1.055-1.055-2.142-2.012-3.226-2.854 2.577-1.816 5.054-2.909 6.817-2.909 0.716 0 1.264 0.185 1.628 0.549 0.396 0.396 0.571 1.018 0.54 1.806 0.057-0.004 0.11-0.018 0.168-0.018 0.288 0 0.562 0.059 0.819 0.148 0.062-1.121-0.204-2.027-0.82-2.644-0.559-0.559-1.344-0.842-2.335-0.842-2.043 0-4.812 1.219-7.662 3.277-2.85-2.058-5.619-3.278-7.662-3.278-0.212 0-0.411 0.020-0.604 0.046 0.273 0.264 0.479 0.59 0.61 0.955 1.763 0.002 4.238 1.095 6.813 2.91-1.086 0.844-2.174 1.801-3.228 2.856-1.050 1.051-2.007 2.14-2.856 3.234-0.855-1.211-1.56-2.412-2.065-3.553-0.346-0.779-0.577-1.494-0.712-2.14-0.099 0.013-0.195 0.031-0.297 0.031-0.258 0-0.502-0.051-0.736-0.123 0.134 0.796 0.405 1.678 0.831 2.638 0.567 1.281 1.365 2.632 2.345 3.988-0.979 1.354-1.775 2.705-2.343 3.985-1.209 2.727-1.241 4.861-0.091 6.011 0.559 0.559 1.344 0.842 2.335 0.842 3.020 0 7.626-2.656 11.735-6.767 1.053-1.054 2.011-2.146 2.859-3.243 2.77 3.914 3.564 7.25 2.355 8.459-0.364 0.364-0.912 0.549-1.628 0.549-0.943 0-2.095-0.318-3.354-0.887-0.133 0.32-0.33 0.604-0.575 0.842 1.458 0.675 2.804 1.045 3.929 1.045 0.991 0 1.776-0.283 2.335-0.842 1.738-1.738 0.641-5.731-2.449-10.011 0.635-0.881 1.215-1.761 1.683-2.62zM4.341 21.84c-0.716 0-1.264-0.185-1.628-0.549-0.825-0.825-0.717-2.61 0.298-4.898 0.505-1.14 1.209-2.339 2.062-3.55 0.849 1.093 1.805 2.182 2.854 3.23 1.061 1.061 2.154 2.001 3.246 2.846-2.583 1.824-5.067 2.921-6.832 2.921zM15.369 15.366c-1.094 1.094-2.232 2.082-3.364 2.942-1.135-0.862-2.274-1.847-3.371-2.942-1.094-1.094-2.079-2.229-2.943-3.364 0.864-1.137 1.852-2.273 2.946-3.368 1.093-1.094 2.232-2.082 3.365-2.944 1.132 0.861 2.27 1.849 3.363 2.942 1.136 1.136 2.114 2.265 2.952 3.36-0.864 1.14-1.851 2.277-2.948 3.374zM22 5.999c-0.553 0-1 0.447-1 1s0.447 1 1 1 1-0.447 1-1-0.447-1-1-1zM14 18.999c-0.553 0-1 0.447-1 1s0.447 1 1 1 1-0.447 1-1-0.447-1-1-1zM2 3.999c0.553 0 1-0.447 1-1s-0.447-1-1-1-1 0.447-1 1 0.447 1 1 1z" className='header_logo-path'></path>
                    </svg>
                </Link>
                <div className='header__options'>
                    <Link to='/shop' className='header__option'>shop</Link>
                    <Link to='/shop' className='header__option'>contact</Link>
                    {
                        this.props.currentUser?
                        <div className='header__option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                        :
                        <Link to='/signin' className='header__option'>sign in</Link>
                    }
                    <CardIcon/>
                    
                </div>

                {
                    this.props.hidden ?
                    null
                    :
                    <Cart/>
                }
            </div>
        )
    }
}
////////////////////////////////////////////////
// const mapStateToProps=(state)=>({
//     currentUser:state.user.currentUser
// })
////////////////////////////////////////////////
// const mapStateToProps=({user:{currentUser},cart:{hidden} })=>({
//     currentUser,
//     hidden
// })
////////////////////////////////////////////////
// const mapStateToProps=(state)=>({
//     currentUser:selectCurrentUser(state),
//     hidden:selectCartHidden(state)
// })
////////////////////////////////////////////////
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Secondaryheader);
// class Secondaryheader extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             Links:[
//             {
//                 id:1,
//                 linkk:'/shop',
//                 text:'SHOP'
//             },
//             {
//                 id:2,
//                 linkk:'/shop',
//                 text:'CONTCT'
//             },
//             {
//                 id:3,
//                 linkk:'/shop',
//                 text:'SHOP'
//             },
//         ]}
//     }

//     render(){
//         const {Links}=this.state;
//         return(
//             <div className="header">
//                 {Links.map(({id,...otherPropsLink})=>{
//                     return(
//                         <div className="header__options">
//                             <Secondarynavigation key={id} {...otherPropsLink}/>
//                         </div>
//                     )
//                 })}
//             </div>
//         );
//     }
// }

// export default Secondaryheader;