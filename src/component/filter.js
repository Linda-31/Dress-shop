import { useState } from 'react';

function Filter({ onApply }) {
  const initialFilters = {
    colors: [],
    sizes: [],
    minPrice: '',
    maxPrice: '',
    rating: ''
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleCheckboxChange = (e, key) => {
    const { value, checked } = e.target;
    setFilters((prev) => {
      const updated = checked
        ? [...prev[key], value]
        : prev[key].filter((v) => v !== value);
      return { ...prev, [key]: updated };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setFilters((prev) => ({ ...prev, rating: e.target.value }));
  };

  const applyFilters = () => {
    onApply(filters);
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    onApply(initialFilters);
  };

  return (
    <div className="p-4 border rounded bg-light" style={{ maxWidth: 250, maxHeight: 690 }}>
      <h5>Filters</h5>

      {/* Color Filter */}
      <div className="mt-3">
        <label className="form-label fw-bold">Color</label>
        {['Red', 'Blue', 'Black', 'White'].map(color => (
          <div className="form-check" key={color}>
            <input
              className="form-check-input"
              type="checkbox"
              value={color.toLowerCase()}
              id={`color-${color}`}
              checked={filters.colors.includes(color.toLowerCase())}
              onChange={(e) => handleCheckboxChange(e, 'colors')}
            />
            <label className="form-check-label" htmlFor={`color-${color}`}>
              {color}
            </label>
          </div>
        ))}
      </div>

      {/* Size Filter */}
      <div className="mt-3">
        <label className="form-label fw-bold">Size</label>
        {['S', 'M', 'L', 'XL'].map(size => (
          <div className="form-check" key={size}>
            <input
              className="form-check-input"
              type="checkbox"
              value={size}
              id={`size-${size}`}
              checked={filters.sizes.includes(size)}
              onChange={(e) => handleCheckboxChange(e, 'sizes')}
            />
            <label className="form-check-label" htmlFor={`size-${size}`}>
              {size}
            </label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mt-3">
        <label className="form-label fw-bold">Price Range ($)</label>
        <input type="range" className="form-range" min="0" max="5" id="customRange2" />
        <div className="d-flex gap-2">
          <input
            type="number"
            className="form-control"
            placeholder="Min"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleInputChange}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Max"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Customer Ratings */}
      <div className="mt-3">
        <label className="form-label fw-bold">Customer Rating</label>
        {[4, 3, 2, 1].map(r => (
          <div className="form-check" key={r}>
            <input
              className="form-check-input"
              type="radio"
              name="rating"
              value={r}
              id={`rating-${r}`}
              checked={filters.rating === String(r)}
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor={`rating-${r}`}>
              {r} Stars & Up
            </label>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <button className="btn btn-primary w-100 mt-4" onClick={applyFilters}>
        Apply Filters
      </button>
      <button className="btn btn-outline-secondary w-100 mt-2" onClick={clearFilters}>
        Clear All
      </button>
    </div>
  );
}

export default Filter;

