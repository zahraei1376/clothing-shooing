import React from 'react';

import Spinner from '../spinner/spinner.component';
import MySpinner from '../MySpinner/MySpinner.component';

const WithSpinner = WrapeComponent => ({isLoading , ...OtherProps})=>{
    return isLoading ? <MySpinner/> : <WrapeComponent  {...OtherProps} />
};

export default WithSpinner;
// //////////////////////////////////////////////////
// import { SpinnerContainer,SpinnerOverlay } from './with-spinner.styles';

// const WithSpinner = WrapeComponent =>({isLoading , ...OtherProps}) => {
//     return isLoading ? (
//             <SpinnerOverlay>
//                 <SpinnerContainer />
//             </SpinnerOverlay>
//         ) : (
//             <WrapeComponent  {...OtherProps} />
//         );
// };

// /////////////////////////////////////////////////////
// const WithSpinner = wrapeComponent =>{
//     const spinner = ({isLoading , ...OtherProps}) =>{
//     return isLoading ? (
//             <SpinnerOverlay>
//                 <SpinnerContainer />
//             </SpinnerOverlay>
//         ) :
//         (
//             <wrapeComponent  {...OtherProps} />
//         );
//     }
//     return spinner;
// };