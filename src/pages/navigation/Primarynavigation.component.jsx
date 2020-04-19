import React from 'react';
import {Link} from 'react-router-dom';
import '../../sassStyle/layout/navigation.styles.scss';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';


// class Navigation extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state={
// //             currentUser:null
// //         }
// //     }

// //    unsubscribeFromAuth=null;

// //   componentDidMount(){
// //     this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
// //       this.setState({currentUser:user});
// //       console.log(user);
// //     })
// //   };

// //   componentWillUnmount(){
// //     this.unsubscribeFromAuth();
// //   }

//     render(){
//         return(
//             <div className='navigation'>
//                 <input type='checkbox' className='navigation__checkbox' id='navi-toggle'/>
//                 <label className='navigation__btn' htmlFor='navi-toggle'>
//                     <span className='navigation__icon'>&nbsp;</span>
//                 </label>
//                 <div className='navigation__background'>&nbsp;</div>
//                 <nav className='navigation__nav'>
//                     <ul className='navigation__list'>
//                         <li className='navigation__item'><Link to='/shop' className='navigation__link'>Shop</Link></li>
//                         <li className='navigation__item'><Link to='/shop' className='navigation__link'>contact</Link></li>
//                         {
//                             this.state.currentUser?
//                             <div className='navigation__item' onClick={()=>auth.signOut()}>SIGN OUT</div>
//                             :
//                             <li className='navigation__item'><Link to='/signin' className='navigation__link'>sign in</Link></li>
//                         }
//                         {/* <li className='navigation__item'><Link to='shop' className='navigation__link'>sign in</Link></li> */}
//                     </ul>
//                 </nav>
//             </div>
//         )
//     }
// };

const Navigation=({currentUser})=>(
    <div className='navigation'>
        <input type='checkbox' className='navigation__checkbox' id='navi-toggle'/>
        <label className='navigation__btn' htmlFor='navi-toggle'>
            <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className='navigation__background'>&nbsp;</div>
        <nav className='navigation__nav'>
            <ul className='navigation__list'>
                <li className='navigation__item'><Link to='shop' className='navigation__link'>Shop</Link></li>
                <li className='navigation__item'><Link to='shop' className='navigation__link'>contact</Link></li>
                {
                    currentUser?
                    <div className='navigation__item' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <li className='navigation__item'><Link to='signin' className='navigation__link'>sign in</Link></li>
                }
                {/* <li className='navigation__item'><Link to='shop' className='navigation__link'>sign in</Link></li> */}
            </ul>
        </nav>
    </div>
);

const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Navigation);