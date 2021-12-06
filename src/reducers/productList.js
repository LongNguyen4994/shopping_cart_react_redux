
let initialState = [
   {
      id: 1,
      image: 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg',
      name: 'iPhone 13 128GB',
      price: 9000,
      inventory: 200,
      rating: 5,
   },
   {
      id: 2,
      image: "https://cdn.tgdd.vn/Products/Images/42/251879/samsung-galaxy-a52s-5g-mint-600x600.jpg",
      name: 'Samsung A52s 5G 256GB',
      price: 8000,
      inventory: 200,
      rating: 4,
   },
   {
      id: 3,
      image: "https://cdn.tgdd.vn/Products/Images/42/236187/oppo-reno6-pro-blue-1-600x600.jpg",
      name: 'OPPO Reno6 Pro 5G',
      price: 7000,
      inventory: 200,
      rating: 4,
   },
   {
      id: 4,
      image: "https://cdn.tgdd.vn/Products/Images/42/115343/vivo-y21-white-01-1-600x600.jpg",
      name: 'Vivo Y21',
      price: 5000,
      inventory: 200,
      rating: 3,
   }
]

const productList = (state = initialState, action) => {
   switch (action.type) {
      
      default: return [...state];
   }
}

export default productList;