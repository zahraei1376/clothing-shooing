import React from 'react';
import {Link} from 'react-router-dom';
// import Secondarynavigation from './Secondarynavigation.component';
import '../../sassStyle/components/Secondaryheader.styles.scss';

const Secondaryheader=()=>(
    <div className='header'>
        <Link to='/'> 
        <p>link</p>
            {/* <svg  className='header__logo'>
                <use xlinkHref={'#icons-sun'}/>
            </svg> */}
        </Link>
        <div className='header__options'>
            <Link to='/shop' className='header__option'>shop</Link>
            <Link to='/shop' className='header__option'>contact</Link>
            <Link to='/signin' className='header__option'>sign in</Link>
        </div>
    </div>
);

export default Secondaryheader;
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