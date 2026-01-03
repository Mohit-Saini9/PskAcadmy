import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Aarav Patel",
      role: "Web Developer",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      review:
        "The web development courses are very practical and easy to follow. Helped me build real projects.",
    },
    {
      id: 2,
      name: "Neha Verma",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 5,
      review:
        "Clean UI and smooth animations. The UI/UX lessons are well structured and beginner-friendly.",
    },
    {
      id: 3,
      name: "Rohit Sharma",
      role: "Data Scientist",
      image: "https://i.pravatar.cc/150?img=45",
      rating: 5,
      review:
        "Data science content is simple and very useful for real-world analysis and projects.",
    },
    {
      id: 4,
      name: "Pooja Singh",
      role: "Web Developer",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      review:
        "Great platform for learning React and JavaScript. The explanations are clear and practical.",
    },
    {
      id: 5,
      name: "Kunal Mehta",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=14",
      rating: 5,
      review:
        "The platform itself is a great example of good UI/UX design. Loved the learning flow.",
    },
    {
      id: 6,
      name: "Anjali Gupta",
      role: "Data Scientist",
      image: "https://i.pravatar.cc/150?img=56",
      rating: 5,
      review:
        "Well-organized data science roadmap with practical examples. Very helpful for beginners.",
    },
    {
      id: 7,
      name: "Mohit Kumar",
      role: "Web Developer",
      image: "https://i.pravatar.cc/150?img=22",
      rating: 5,
      review:
        "Easy to navigate website and quality content. Perfect platform to start web development.",
    },
  ];

  return (
    <div className="bg-gradient-to-tr to-blue-300 from bg-blue-600 max-h-screen  pb-10">
      <div className="py-10 mx-auto  ">
        <div className="py-16 text-center  ">
          <h1 className="text-white text-2xl md:text-3xl text-center font-medium ">
            What Our Students Say
          </h1>
          <p className="text-white text-sm my-2 px-4">
            Join thousands of statisfied learners who transformed their careers
          </p>
        </div>
        <div className="no-scrollbar max-w-3xl scroll-smooth overflow-x-auto  no-scrollbar mx-auto">
          {/* <div className=" w-full max-w-4xl md:max-w-3xl mx-auto   gap-4 px-4  flex  "></div> */}

          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((r) => (
              <SwiperSlide
                key={r.id}
                className="h-full  min-w-52 max-h-72  space-y-2  mx-4 bg-white  rounded shadow p-6 "
              >
                <div className="w-auto text-sm">⭐⭐⭐⭐⭐{r.rating}</div>
                <div className="text-xs ">{r.review}</div>
                <div className="mt-4 flex gap-4 items-center">
                  <img
                    src={r.image}
                    alt="img"
                    className=" w-12 h-12 rounded-full"
                  />
                  <div className="text-xs ">
                    <p>{r.name}</p>
                    <p className="text-xs text-blue-500 font-semibold">
                      {r.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
