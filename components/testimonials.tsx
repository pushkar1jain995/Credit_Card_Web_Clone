"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    name: "Sarah Johnson",
    designation: "Small Business Owner",
    quote: "I love the low interest rates and the easy application process. It's been a great experience!",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    rating: 5,
  },
  {
    name: "Michael Chen",
    designation: "Tech Executive",
    quote: "The rewards program is fantastic, and the customer service is always helpful and responsive.",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 4,
  },
  {
    name: "Emma Thompson",
    designation: "Travel Enthusiast",
    quote: "I appreciate the transparent fees and the flexible payment options. It makes managing my finances so much easier.",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    rating: 5,
  }
];


export function Testimonials() {
  return (
    <section className=" bg-black/5 dark:bg-white/5">
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
