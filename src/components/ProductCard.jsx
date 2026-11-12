function ProductCard({ product, addToCart }) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg">
      
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-zinc-900">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Title */}
        <h2 className="mb-3 text-lg font-semibold text-white">
          {product.title}
        </h2>

        {/* Price + Quantity */}
        <div className="mb-5 flex items-center justify-between">
          
          <span className="text-2xl font-bold text-white">
            ${product.price}
          </span>

          <span className="rounded-lg bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300">
            Qty: {product.stock}
          </span>

        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:bg-zinc-200 active:scale-[0.98]"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;