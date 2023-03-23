import { TestimonialSlider } from "@/lib/custom";

const recommendations = [
  {
    name: "Justin Chapman",
    title: "Software Engineering Instructional Associate",
    company: "General Assembly Canada",
    quote:
      "His ability to work well under pressure and manage his time effectively enabled him to complete projects on time and to a high standard. He collaborated well with his teammates, making sure that he took the time to assist and support whenever possible. His strong work ethic and self-motivation, coupled with his communication skills and collaborative efforts, would make Ralph an excellent addition to any team.",
  },
  {
    name: "Martin Nicola",
    title: "Associate Instructor",
    company: "General Assembly Canada",
    quote:
      "As his co-instructor, I can speak with conviction and say Ralph was consistently among the top students in his class and one of the hardest working students that I’ve ever come across. \n Among his attributes, he has strong attention to detail, Ralph is able to work well with others and his analytical skills and productivity are far beyond expectation. Do not pass up on this outstanding candidate!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="recommendations"
      className="mb-10 flex flex-col justify-center"
    >
      <h2 className="mb-10 w-full px-4 text-center text-4xl font-bold uppercase tracking-widest text-blue-500">
        Testimonials
      </h2>
      <TestimonialSlider data={recommendations} />
    </section>
  );
}
