import React from 'react';

import { SpinnerContainer,SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrapeComponent =>({isLoading , ...OtherProps}) => {
    return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrapeComponent  {...OtherProps} />
        );
};


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
export default WithSpinner;