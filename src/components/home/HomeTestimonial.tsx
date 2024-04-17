"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const HomeTestimonial = ({ testimonial }: any) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef(currentTestimonial);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonial.length);
  };

  const selectTestimonial = (index: any) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    testimonialRef.current = currentTestimonial;
  }, [currentTestimonial]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((testimonialRef.current + 1) % testimonial.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [testimonial.length]); // Add testimonial.length to the dependency array


  return (
    <div className="h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#404b3d" }}>
      <div className="flex  flex-col items-center">
        <h2 className="text-3xl text-green-500 text-center sm:text-xl font-mono mb-2">What Our Customer Says</h2>
        {testimonial.map(({ id, image, description, author }: any, index: any) => (
          <div key={id} className={`w-full max-w-screen-md p-4 rounded-lg shadow mb-4 flex flex-col items-center ${currentTestimonial === index ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <Image src={image} alt={author} width={150} height={150} className="w-24 h-24 rounded-full mb-4" />
            <p className="text-pink-200 font-semibold text-center mb-2">{author}</p>
            <p className="text-white text-center">{description}</p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        {testimonial.map((_: any, index: any) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${currentTestimonial === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => selectTestimonial(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeTestimonial;
