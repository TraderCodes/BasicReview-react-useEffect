import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
   const [index, setIndex] = useState(0);

   const { name, job, image, text } = people[index];

   // check number function
   const checkNumner = (number) => {
      if (number > people.length - 1) {
         return 0;
      }
      if (number < 0) {
         return people.length - 1;
      }
      return number;
   };

   const randomPerson = () => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber === index) {
         randomNumber = index + 1;
      }
      return setIndex(checkNumner(randomNumber));
   };
   const prevPerson = () => {
      setIndex((index) => {
         let newIndex = index + 1;
         return checkNumner(newIndex);
      });
   };
   const nextPerson = () => {
      setIndex((index) => {
         let newIndex = index - 1;
         return checkNumner(newIndex);
      });
   };

   return (
      <article className="review">
         <div className="img-container">
            <img src={image} alt="f" className="person-img" />
            <span className="quote-icon">
               <FaQuoteRight />
            </span>
         </div>
         <h4 className="author">{name}</h4>
         <p className="job">{job}</p>
         <p className="info">{text}</p>
         <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
               <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
               <FaChevronRight />
            </button>
         </div>
         <button className="random-btn" onClick={randomPerson}>
            Random
         </button>
      </article>
   );
};
export default Review;
