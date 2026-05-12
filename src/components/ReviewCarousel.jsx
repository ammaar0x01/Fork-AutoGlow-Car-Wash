import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import butterfly from "../assets/images/cars/home/suv.png";
import googleLogo from "../assets/icons/image.png";


export default function ReviewCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Customer Reviews
          </h1>
          <p className="text-lg text-gray-600">
            See what our customers are saying about our services
          </p>
        </div>

        <Slider {...settings} className="review-slider">
          {reviews.map(({ name, date, location, rating, text }, index) => (
            <div key={index} className="px-2"> {/* Padding for slide spacing */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[250px] flex flex-col">
                
                {/* Review Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={butterfly}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  />
                  <div className="flex-1">
                    <strong className="block text-gray-900 font-semibold leading-tight">
                      {name}
                    </strong>
                    <div className="text-xs text-gray-500 mt-1">
                      <span>{date}</span> • <span>{location}</span>
                    </div>
                  </div>
                  <img
                    src={googleLogo}
                    alt="Google Logo"
                    className="w-6 h-6 object-contain opacity-80"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 italic leading-relaxed flex-1">
                  "{text}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Lucy Smith",
    date: "Sep 10, 2024",
    location: "Cape Town",
    rating: 5,
    text: "Best booking system! So convenient having my car cleaned while at work.",
  },
  {
    name: "James Johnson",
    date: "Aug 22, 2024",
    location: "Durban",
    rating: 4,
    text: "Quick, reliable, and convenient service. My car has never looked better!",
  },
  {
    name: "Anele Moyo",
    date: "Jul 30, 2024",
    location: "Johannesburg",
    rating: 5,
    text: "Professional and always on time. Worth every penny!",
  },
  {
    name: "Sarah Lee",
    date: "Jun 15, 2024",
    location: "Pretoria",
    rating: 5,
    text: "Excellent service and friendly staff. My car looks fantastic after every visit!",
  },
  {
    name: "Michael Brown",
    date: "May 12, 2024",
    location: "Port Elizabeth",
    rating: 4,
    text: "Very efficient and trustworthy. Highly recommend their mobile cleaning service.",
  },
  {
    name: "Nandi Khumalo",
    date: "Apr 08, 2024",
    location: "Bloemfontein",
    rating: 5,
    text: "Convenient and affordable. I love that they come to my office to clean my car.",
  },
];
