export default function Filter({setFilteredProducst , products}) {

    const handleFilter = (category) => {
        if(category === 'all'){
            setFilteredProducst(products)
        }else{
            const filtered = products.filter((product) =>
             product.category === category
            )
            setFilteredProducst(filtered)
        }
    }



    const handleSort = (e) => {
        const sortType = e.target.value;
        if (sortType === 'price'){
            const sorted = [...products]
            .sort((a , b) => a.price - b.price )
        setFilteredProducst(sorted)
        }else(
            setFilteredProducst(products)
        )
       
    }
  return (
    <div className='mb-4'>
        <div className="mb-2 p-2">
        <button className="btn btn-outline-primary me-2 mb-2"
        onClick={()=> handleFilter("men's clothing")}> Men's clothes</button>
         <button className="btn btn-outline-primary me-2  mb-2"
        onClick={()=> handleFilter("women's clothing")}> Women's clothes</button>
         <button className="btn btn-outline-primary me-2  mb-2"
        onClick={()=> handleFilter("electronics")}>Electronics</button>
         <button className="btn btn-outline-primary me-2  mb-2"
        onClick={()=> handleFilter("jewelery")}>Accsesory</button>
        </div>
        <label htmlFor="sort" className='form-label'>
            sort by :
        </label>
        <select id="sort" 
        className='form-select'
        onChange={handleSort}
        >
            <option value="default"> Default</option>
            <option value="price"> price</option>
        </select>
      
    </div>
  )
}
