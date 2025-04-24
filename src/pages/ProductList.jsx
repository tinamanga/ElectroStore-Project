import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const assignCategory = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("phone")) return "Phone";
    if (lowerName.includes("laptop")) return "Laptop";
    if (lowerName.includes("tablet")) return "Tablet";
    if (lowerName.includes("watch")) return "Accessories";
    if (
      lowerName.includes("earbuds") ||
      lowerName.includes("speaker") ||
      lowerName.includes("mouse") ||
      lowerName.includes("keyboard") ||
      lowerName.includes("power bank") ||
      lowerName.includes("charger") ||
      lowerName.includes("stand") ||
      lowerName.includes("webcam") ||
      lowerName.includes("flash drive") ||
      lowerName.includes("hard drive")
    )
      return "Accessories";
    if (lowerName.includes("tv")) return "TV";
    if (lowerName.includes("console")) return "Gaming";
    if (lowerName.includes("vr")) return "VR";
    if (lowerName.includes("drone")) return "Drone";
    if (lowerName.includes("camera")) return "Camera";
    if (lowerName.includes("router")) return "Networking";
    return "Other";
  };

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        const productsWithCategories = data.products.map((product) => ({
          ...product,
          category: assignCategory(product.name),
        }));
        setProducts(productsWithCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      categoryFilter ? product.category === categoryFilter : true
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  if (!products.length) return <div>Loading...</div>;

  //   return (
  //     <div className="product-list-container">
  //       <div className="product-list-header">
  //         <h2 className="product-list-title">Our Products</h2>

  //         <input
  //           type="text"
  //           className="search-input"
  //           placeholder="🔍 Search products..."
  //           value={searchTerm}
  //           onChange={(e) => setSearchTerm(e.target.value)}
  //         />
  //       </div>

  //       <div className="product-grid">
  //         {filteredProducts.length > 0 ? (
  //           filteredProducts.map((product) => (
  //             <ProductCard key={product.id} product={product} />
  //           ))
  //         ) : (
  //           <p style={{ textAlign: "center" }}>❌ No products found.</p>
  //         )}
  //       </div>
  //     </div>
  //   );

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
      </div>
      <div className="product-list-container">
        <div className="filters">
          {/* Search Input */}
          <div className="filter-item">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="filter-input"
            />
          </div>

          {/* Category Filter */}
          <div className="filter-item">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Option */}
          <div className="filter-item">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="filter-select"
            >
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="">
        <div className="product-grid">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="text-center col-span-full py-12">
              <p className="text-gray-700 text-lg mt-4">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
