import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars == 0.5;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

    return (
      <div className="text-yellow-700 text-lg">
        {Array(filledStars).fill(<span className="filled-star">★</span>)}
        {halfStar && <span className="half-star">★</span>}
        {Array(emptyStars).fill(<span className="empty-star">☆</span>)}
      </div>
    ); 
  };
  return (
    <div className='px-4'>
      <div className='py-3 lg:py-10 text-center lg:px-80 space-y-2 lg:space-y-3 text-gray-600'>
        <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">What our clients say</h2>
        <h5 className='text-base lg:text-xl'>We provide comprehensive legal solutions, including contract drafting and negotiation, mergers and acquisitions.</h5>
      </div>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-16 text-gray-800'>
        {feedbacks.map((feedback) => (
            <div key={feedback.id} className='flex flex-col text-sm md:text-base italic'>
                <p>{feedback.comment}</p>
                <div className='flex flex-row space-x-5 px-5 pt-3'>
                    <img src={feedback.avatar} alt={feedback.alt} className="object-center w-[50px] h-[50px] rounded-full"/>
                    <div className="">
                        <h6 className='text-base'>{feedback.client}</h6>
                        {renderStars(feedback.rating)}

                    </div>
                </div>
            </div>
        ))}
      </section>
    </div>
  )
}

export default Testimonials

const feedbacks = [
    {
        id:1,
        client: "Marcel Jackson",
        rating: 5,
        alt: ".",
        avatar: "/assets/testimonial1.jpg",
        comment: "I cannot express enough gratitude for the exceptional legal services. From the moment I reached out for help with my complex legal matter, LOI displayed an unwavering commitment to my case. Their expertise and deep understanding of the law were evident as they navigated the intricacies of my situation with precision and skill."
    },
    {
        id:2,
        client: "Tatiana Donin",
        rating: 5,
        alt: ".",
        avatar: "/assets/testimonial2.jpg",
        comment: "Choosing LOI for my legal representation was one of the best decisions I've made. Their exceptional legal services exceeded my expectations in every way. From the very start, their unwavering commitment to my case was evident, and their profound knowledge of the law was evident in every step they took."
    },
    {
        id:3,
        client: "Giana Press",
        rating: 4,
        alt: ".",
        avatar: "/assets/testimonial3.jpg",
        comment: "I am incredibly grateful for the exceptional legal services offered by LOI. From the moment I sought their assistance with my intricate legal matter, their commitment to my case was unparalleled."
    },
    {
        id:4,
        client: "Will Gouse",
        rating: 4.5,
        alt: ".",
        avatar: "/assets/testimonial4.jpg",
        comment: "I want to express my deepest appreciation for the exceptional legal services provided by LOI. I am truly grateful for their outstanding professionalism and would confidently recommend LOI to anyone seeking top-notch legal representation."
    },
]