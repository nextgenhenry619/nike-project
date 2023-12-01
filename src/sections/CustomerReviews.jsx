import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
  <h3 className="font-palanquin text-center text-4xl font-semibold">
    What Our<span className="text-coral-red"> Customers </span> 
    are saying?
  </h3>
  <p className="info-text m-auto mt-8 text-center">Hear genuine stories from our satisfied customers...</p>
  <div className="mt-16 flex flex-1 justify-evenly items-center max-lg:flex-col gap-8">
    {reviews.map((review) => (
      <ReviewCard 
        key={review.customerName}
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}
      />
    ))}
  </div>
    </section>
    )
}

export default CustomerReviews