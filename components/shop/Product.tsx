const ProductList = () => {
    const products = [
      { id: 1, name: "Mahabharat Book", image: "assets/img/products/5.jpg", price: "29$" },
      { id: 2, name: "Char Veda", image: "assets/img/products/6.jpg", price: "29$" },
      { id: 3, name: "Yajur Veda", image: "assets/img/products/7.jpg", price: "29$" },
      { id: 4, name: "Righ Veda", image: "assets/img/products/8.jpg", price: "29$" },
      { id: 5, name: "Shyam Veda", image: "assets/img/products/9.jpg", price: "29$" },
      { id: 6, name: "Work Bench", image: "assets/img/products/10.jpg", price: "29$" },
      { id: 7, name: "Candle", image: "assets/img/products/11.jpg", price: "29$" },
      { id: 8, name: "Righ Veda", image: "assets/img/products/8.jpg", price: "29$" },
      { id: 9, name: "Shyam Veda", image: "assets/img/products/9.jpg", price: "29$" },
     
    ];
  
    return (
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 masonry-item">
            <div className="sigma_product">
              <div className="sigma_product-thumb">
                <a href="/product-details">
                  <img src={product.image} alt="product" />
                </a>
                <div className="sigma_product-controls">
                  <a href="#" data-toggle="tooltip" title="Wishlist">
                    <i className="far fa-heart" />
                  </a>
                  <a href="/product-details" data-toggle="tooltip" title="Add To Cart">
                    <i className="far fa-shopping-basket" />
                  </a>
                  <a href="#" data-toggle="tooltip" title="Quick View">
                    <i data-bs-toggle="modal" data-bs-target="#quickViewModal" className="far fa-eye" />
                  </a>
                </div>
              </div>
              <div className="sigma_product-body">
                <h5 className="sigma_product-title">
                  <a href="/product-details">{product.name}</a>
                </h5>
                <div className="sigma_product-price">
                  <span>{product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;