import React from "react";
import NewProduct from "../../Components/NewProduct/NewProduct";
import AddProduct from "../../Components/AddProduct/AddProduct"
import './Services.css'


const Services = () => {


  return (
    <div className="services-container">
       <AddProduct/>
        <br />

      <NewProduct/>

    </div>
  )
}

export default Services





















// const Services = () => {

//   const [ id, setId ] = useState(30)

// const [data, setData] = useState(
//   {title: "",
//   price: Number(),
//   id: Number(),
//   discountPercentage: Number(),
//   brand:"",
//   category:"",
//   stock: Number(),
//   rating: Number(),
//   description:"",
//   thumbnail:"",
//   images: [],
// })

// const newProducts = []
// const idGen = () => {
//   const ID = [newProducts.length -1].id +31
// }


// const [allBrands, setAllBrands] = useState([]);
// const [allCategories, setAllCategories] = useState([]);

  // useEffect (() => {
  //     const endPoint = 'https://dummyjson.com/products'
  //       axios.get(endPoint)
  //         .then((res) => {
  //             const productBrand = res.data.products.map(product => product.brand.toLowerCase())

  //             const brands = [...new Set(productBrand)]
  //             setAllBrands(brands.map(brand => brand.toUpperCase()));

  //             // const productCategory = res.data.products.map(product => product.category)
  //             // const categories = [...new Set(productCategory)]
  //             // setAllCategories(categories);

  //           })
  //           .catch(err => console.log(`Error: ${err}`))

  //     }, [])



//     const endPoint = 'https://dummyjson.com/products'

//   const handleData = (e) => {


//   }


//   const handleImageUrls = (e) => {
//     data.images.push(e.target.value)
//   }

//   const handleData = (e) => {

//   }


//   return (
//     <div >
//         <div className="form-group">
//           <label>Title:</label>
//           <input type="text" className="form-control" name="title" value={data.title} onChange={handleChange}/>
//         </div>
//         <div className="form-group">
//           <label>Description:</label>
//           <input type="text" className="form-control" name="description" value={data.description} onChange={handleChange}/>
//         </div>
//         <div className="form-group">
//           <label>Price:</label>
//           <input type="number" className="form-control" name="price" value={data.price} onChange={handleChange}/>
//         </div>
//         <div className="form-group">
//           <label>Discount:</label>
//           <input type="number" className="form-control" name="discountPercentage" value={data.discount} onChange={handleChange}/>
//         </div>
//         <div className="form-group">
//           <label>Rating:</label>
//           <input type="number" className="form-control" name="rating" value={data.rating} onChange={handleChange}/>
//         </div>
//         <div className="form-group">
//           <label>Stock:</label>
//           <input type="number" className="form-control" name="stock" value={data.stock} onChange={handleChange}/>
//         </div>
//         <div className="form-group">
//           <label>Thumbnail:</label>
//           <input type="text" className="form-control" name="thumbnail" value={data.thumbnail} onChange={handleChange}/>
//         </div>
//         <div className="form-group">
//           <label>Select brand:</label>
//           <select className="form-control" name="brand" value={data.brand} onChange={handleChange}>
//             <option>Apple</option>
//             <option>Samsung</option>
//             <option>Huawei</option>
//             <option>Infinity</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Select category:</label>
//           <select className="form-control" name="category" value={data.category} onChange={handleChange}>
//             <option>Apple</option>
//             <option>Samsung</option>
//             <option>Huawei</option>
//             <option>Infinity</option>
//           </select>
//         </div>


//         <div className="form-group">
//           <label>Image URL:</label>
//           <input type="text" className="form-control" name="img1" value={data.images.img1} onChange={handleImageUrls}/>
//         </div>
//         <div className="form-group">
//           <label>Image URL:</label>
//           <input type="text" className="form-control" name="img2" value={data.images.img2} onChange={handleImageUrls}/>
//         </div>
//         <div className="form-group">
//           <label>Image URL:</label>
//           <input type="text" className="form-control" name="img3" value={data.images.img3} onChange={handleImageUrls}/>
//         </div>
//         <button type='submit' onSubmit={handleSubmit}>Submit</button>



//         <Link to={`/product/${data.id}`}>
//           <SendBtn onClick={submitForm}/>
//         </Link>

//       </form>

//         {/* {(data && data.length >= 1) ? */}
//           <div className='newProducts'>
//             <div className='product-img-cont'>
//                 <img src={data.thumbnail} alt="pic-img" />
//             </div>
//             <div className='product-info'>
//               <h1 className='product-name'>{data.title}</h1>
//               <p className='product-detail'>{data.description}</p>
//               <MoreBtn />
//             </div>
//           </div>
//           {/* : ""
//       } */}


//   </div>
//   )
// }

// export default Services
