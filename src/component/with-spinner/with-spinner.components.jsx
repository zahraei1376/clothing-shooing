import React from 'react';
import MySpinner from '../MySpinner/MySpinner.component';

const WithSpinner = WrapeComponent => ({ isLoading, ...OtherProps }) => {
    return isLoading ? <MySpinner /> : <WrapeComponent  {...OtherProps} />
};

export default WithSpinner;