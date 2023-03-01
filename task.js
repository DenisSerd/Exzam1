const products = [
    {
      name: "Холодильник",
      price: 20000,
      category: "бытовая техника",
      available: true,
      photo: "https://example.com/fridge.jpg",
      reviews: [
        { author: "Иван", text: "Хороший холодильник", rating: 4 },
        { author: "Петр", text: "Не очень...", rating: 2 },
        { author: "Мария", text: "Мне понравился", rating: 5 }
      ]
    },
    {
      name: "Ноутбук",
      price: 50000,
      category: "электроника",
      available: true,
      photo: "https://example.com/notebook.jpg",
      reviews: [
        { author: "Иван", text: "Отличный ноутбук!", rating: 5 },
        { author: "Петр", text: "Не очень...", rating: 2 },
        { author: "Мария", text: "Мне понравился", rating: 4 },
        { author: "Алексей", text: "Очень хороший ноутбук", rating: 5 }
      ]
    },
    {
      name: "Телевизор",
      price: 30000,
      category: "электроника",
      available: true,
      photo: "https://example.com/tv.jpg",
      reviews: [
        { author: "Александра", text: "Отличный телевизор!", rating: 5 },
        { author: "Денис", text: "Неплохой выбор", rating: 3 },
        { author: "Сергей", text: "Хороший телевизор", rating: 4 },
        { author: "Наталья", text: "Классный телек", rating: 5 }
      ]
    },
    {
      name: "Стиральная машина",
      price: 15000,
      category: "бытовая техника",
      available: false,
      photo: "https://example.com/washer.jpg",
      reviews: []
    },
    {
        name: "Диван",
        price: 35000,
        category: "мебель",
        available: true,
        photo: "https://example.com/sofa.jpg",
        reviews: [
          { author: "Ольга", text: "Очень удобный диван", rating: 5 },
          { author: "Андрей", text: "Не понравилось", rating: 2 },
          { author: "Светлана", text: "Красивый диван", rating: 4 }
        ]
      },
      {
        name: "Микроволновка",
        price: 7000,
        category: "бытовая техника",
        available: true,
        photo: "https://example.com/microwave.jpg",
        reviews: [
          { author: "Иван", text: "Хорошая микроволновка", rating: 4 },
          { author: "Мария", text: "Мне нравится", rating: 5 }
        ]
      },
      {
        name: "Шкаф",
        price: 45000,
        category: "мебель",
        available: false,
        photo: "https://example.com/closet.jpg",
        reviews: []
      },
      {
        name: "Кофеварка",
        price: 10000,
        category: "бытовая техника",
        available: true,
        photo: "https://example.com/coffee-maker.jpg",
        reviews: [
          { author: "Анна", text: "Отличная кофеварка", rating: 5 },
          { author: "Сергей", text: "Неплохо", rating: 3 }
        ]
      }
  ];
  const filterProductsByCategoryAndPrice =(products,category,priceRange)=> {
    let array =[];
    let array2 =[];
    array = products.filter(item => item.category==category)
    array = array.filter(item => item.price >= priceRange[0] && item.price<=priceRange[1] )
    array2 = array.map(item => item.reviews.map(item=>item.rating))
    array2 = array2.flat()
    let sum = 0;
    let sredZ =0;
    sum = array2.reduce((acum,curr) => acum+curr)
    sredZ = sum / array2.length;
    array = array.map(item => item.averageRating = sredZ && item)
    return array
  }
console.log(filterProductsByCategoryAndPrice(products,'электроника', [10000, 40000]))