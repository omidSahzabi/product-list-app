import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import Filter from "../components/Filter"

export default function ProductList() {

const [products , setProducts] = useState([])
const [filteredProducts , setFilteredProducts] = useState([])
const [isLoading , setIsLoading] = useState(true)

useEffect(()=>{
    fetchProducst()
},[])

    const fetchProducst = async () => {
        setIsLoading(true)
        try{
            const res = await 
            fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
            setFilteredProducts(data)
        }catch(err){
            console.error('error fetching data:' , err)
        }finally{
            setIsLoading(false)
        }
    }

  return (
    <div className="container my-4">
        <h1 className="text-center">Products :</h1>
        {isLoading ? <h1 className="fs-2 text-center my-5">Loading...</h1> :
        <div className="row">
            <Filter setFilteredProducst={setFilteredProducts} products={products} />
            {filteredProducts.map((product)=> (
                <div key={product.id} className="col-md-4 pb-3">
                    <ProductCard product={product}/>
                </div>
            ))}
        </div>
        }
    </div>
  )
}
