const ShopData={
  hats:{
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://images.unsplash.com/photo-1563208723-89b0a8cec3a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        // imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://images.unsplash.com/photo-1568247724494-d8c84660dc03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        // imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://images.unsplash.com/photo-1565465295423-68c959a599ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        // imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        // imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        imageUrl: 'https://images.unsplash.com/photo-1516369033203-ba1a9f0e3b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        // imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1576533071143-28014b3839cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        // imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        imageUrl: 'https://images.unsplash.com/photo-1579778320741-aaaf2fa061d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        // imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        imageUrl: 'https://images.unsplash.com/photo-1491617636265-a676d2700d7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        // imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        imageUrl: 'https://images.unsplash.com/photo-1562413254-2a4986837278?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        // imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        imageUrl: 'https://images.unsplash.com/photo-1510965168540-03ea63c46e22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 16
      }
    ]
  },
  sneakers:{
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        // imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        imageUrl: 'https://images.unsplash.com/photo-1562424995-2efe650421dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        // imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        imageUrl: 'https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        // imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        imageUrl: 'https://images.unsplash.com/photo-1584386450584-c6d766612a45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        // imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        imageUrl: 'https://images.unsplash.com/photo-1521774971864-62e842046145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price:160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        // imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        imageUrl: 'https://images.unsplash.com/photo-1537636568536-a2e00b44cb85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        // imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        imageUrl: 'https://images.unsplash.com/photo-1578608712688-36b5be8823dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        // imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        imageUrl: 'https://images.unsplash.com/photo-1541627772938-6fb8d44f9678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 200
      }
    ]
  },
  jackets:{
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        imageUrl: 'https://images.unsplash.com/photo-1542482378-4e3530c8e525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        // imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        imageUrl: 'https://images.unsplash.com/photo-1515614466515-e512e497a047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        // imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        imageUrl: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        // imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        // imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 185
      }
    ]
  },
  womens:{
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        imageUrl: 'https://images.unsplash.com/photo-1582041148887-67274b989ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        // imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        // imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        imageUrl: 'https://images.unsplash.com/photo-1563801360261-e2f395a6da86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price:80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        // imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        imageUrl: 'https://images.unsplash.com/photo-1564957779922-6e601eda9548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        // imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        imageUrl: 'https://images.unsplash.com/photo-1586079615844-c0abfb04dc79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        // imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        imageUrl: 'https://images.unsplash.com/photo-1554033842-d4f5ad6b1863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        // imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        imageUrl: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      }
    ]
  },
  mens:{
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        imageUrl: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        // imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        imageUrl: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        // imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        imageUrl: 'https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        // imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        imageUrl: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        // imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        imageUrl: 'https://images.unsplash.com/photo-1515664069236-68a74c369d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        // imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        imageUrl: 'https://images.unsplash.com/photo-1586973952242-eb482207bb50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      }
    ]
  }
};

export default ShopData;