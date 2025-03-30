import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

const Input = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const Card = ({ children }) => (
  <div className="p-4 border rounded-lg shadow-md bg-white">{children}</div>
);

const CardContent = ({ title, description }) => (
  <div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-600 text-sm mt-1">{description}</p>
  </div>
);

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  const debouncedSearch = debounce((searchTerm) => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredProducts);
  }, 500);

  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query, products]);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <Input
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="mt-4 space-y-2">
        {results.map((product) => (
          <Card key={product.id}>
            <CardContent title={product.title} description={product.description} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
