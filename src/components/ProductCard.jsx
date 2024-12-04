import LazyLoad from "react-lazy-load";

export default function ProductCard({product}) {
  return (
    <div className="card h-100">
     <LazyLoad>
      <img 
      src={product.image}
      className="card-img-top pt-2"
      alt={product.title}
      style={{ height : '12rem' , objectFit : 'contain'}}
    />
    </LazyLoad>
    <div className="card-body" >
        <h5 className="card-title border-bottom pb-2">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text text-success">{product.price}$</p>
        <button className="btn btn-primary"> view more</button>
    </div>
      
    </div>
  )
}
