import RatingWidget from "./Ratingwidget";
function ProductCard({ product, onRatingSubmit }) {
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      textAlign: 'left',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)}</p>
      <RatingWidget
        productId={product.id}
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
}

export default ProductCard;