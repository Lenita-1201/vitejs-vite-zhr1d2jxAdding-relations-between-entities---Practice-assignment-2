import { useState } from "react";

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  const styles = {
    widget: {
      marginTop: "8px",
    },
    star: {
      fontSize: "24px",
      cursor: "pointer",
      color: "#ccc",
    },
    filledStar: {
      color: "#f5c518",
    },
    button: {
      marginTop: "8px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#646cff",
      color: "white",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#535bf2",
    },
  };

  return (
    <div style={styles.widget}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            ...styles.star,
            ...(star <= (hoveredRating || rating) ? styles.filledStar : {}),
          }}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
        >
          ★
        </span>
      ))}
      <button
        style={styles.button}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = styles.button.backgroundColor)
        }
        onClick={handleSubmit}
      >
        Submit Rating
      </button>
    </div>
  );
}

export default RatingWidget;