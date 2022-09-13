import axios from 'axios'

export default async function fetchProducts() {

await axios.get('https://dummyjson.com/products')
  .then(response => {
  const products = response.data.products;
  return products;
})
.catch( err => console.log(`Error: ${err}`) );
}
