const products = {
  1: {
    name: "Produto 1",
    description: "lorem ipsum, bla bla",
    image: "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
    price: 199.0,
    promo_price: 159.0,
    percent: 12,
    categories:[1],
  },
  2: {
    name: "Produto 2",
    description: "lorem ipsum, bla bla",
    image: "../../assets/img/bikes/bike-002.jpg",
    price: 199.0,
    promo_price: 159.0,
    percent: 12,
    categories:[1,3],
  },
  3: {
    name: "Produto 3",
    description: "lorem ipsum, bla bla",
    image: "../../assets/img/bikes/bike-003.jpg",
    price: 199.0,
    promo_price: 159.0,
    percent: 12,
    categories:[2],
  },
  4: {
    name: "Produto 4",
    description: "lorem ipsum, bla bla",
    image: "../../assets/img/bikes/bike-004.jpg",
    price: 199.0,
    promo_price: 159.0,
    percent: 12,
    categories:[2,3],
  },
  5: {
    name: "Produto 5",
    description: "lorem ipsum, bla bla",
    image: "../../assets/img/bikes/bike-005.jpg",
    price: 199.0,
    promo_price: 159.0,
    percent: 12,
    categories:[1,2],
  },
  6: {
    name: "Produto 6",
    description: "lorem ipsum, bla bla",
    image: "../../assets/img/bikes/bike-006.jpg",
    price: 199.0,
    promo_price: 159.0,
    percent: 12,
    categories:[2,3],
  },
};

const categories ={
    1:{name: "Equipamentos"},
    2:{name: "Bikes"},
    3:{name: "Acessórios"},
}

module.exports = { products, categories };
