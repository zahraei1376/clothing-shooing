import React from 'react';

const ShowIcon=(props)=>{
    var useTag = `<use xlink:href="../../asset/sprite.svg#${props.name}" />`;
    return <svg dangerouslySetInnerHTML={{__html: useTag }} />;
};

export default ShowIcon;