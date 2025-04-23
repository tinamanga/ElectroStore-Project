import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("/json/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      categoryFilter === "All" ? true : product.category === categoryFilter
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.name.localeCompare(b.name);
      if (sortOption === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/3"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        >
          <option value="">Sort</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
