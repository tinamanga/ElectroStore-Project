import PropTypes from 'prop-types';

function ProductCard({ name, image, category, price }) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-2" />
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-sm text-gray-600">{category}</p>
      <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
