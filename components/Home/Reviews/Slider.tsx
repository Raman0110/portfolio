"use client"

import { clientReviews } from "@/Data/data";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Slider = () => {
  return (
    <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} responsive={responsive}>
      {clientReviews.map((review) => (
        <div key={review.image}>
          {/* Review Card */}
          <ReviewCard review={review} />
        </div>
      ))}
    </Carousel>
  )
}

export default Slider