const INITIAL={
    sections:[
        {
            title:'hats',
            // imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            imageUrl:'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id:1,
            linkUrl:'shop/hats'
        },
        {
            title:'jackets',
            // imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
            imageUrl:'https://images.unsplash.com/photo-1543274747-e969ff86c466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id:2,
            linkUrl:'shop/jackets'
        },
        {
            title:'sneakers',
            // imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
            imageUrl:'https://images.unsplash.com/photo-1577983127195-95ada1fa7387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id:3,
            linkUrl:'shop/sneakers'
        },
        {
            title:'womens',
            // imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            imageUrl:'https://images.unsplash.com/photo-1589682835112-169d39a60b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            size:'large',
            id:4,
            linkUrl:'shop/womens'
        },
        {
            title:'mens',
            // imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
            imageUrl:'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            size:'large',
            id:5,
            linkUrl:'shop/mens'  
        },
    ]
};

const directoryReducer=(state=INITIAL , action)=>{
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;