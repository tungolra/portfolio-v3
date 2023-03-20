import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");

    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // const isFormValid =
  //   name && subject && email && message && email.includes("@");
  return (
    <div id="contact" className="">
      <h1 className="mb-10 text-center text-4xl font-bold py-10">Contact</h1>
      <div className="flex min-h-screen items-center justify-center ">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2 md:pr-4">
            <p class="mb-2 text-lg font-medium">Socials here:</p>
            <ul class="space-y-2 text-gray-600">
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          </div>
        </div>

        <form
          className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="subject"
              type="text"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="block w-full resize-none rounded-md border border-gray-300 p-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              id="message"
              name="message"
              rows="5"
              placeholder="Your message"
              value={form.message}
              onChange={handleInputChange}
              required
              style={{ resize: "vertical" }}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`focus:shadow-outline rounded bg-indigo-500 py-2 px-4 font-bold text-white focus:outline-none 
                `}
              // ${isFormValid ? "" : "cursor-not-allowed opacity-50"}
              type="submit"
              // disabled={!isFormValid || status === "pending"}
            >
              {status === "pending" ? "Sending..." : "Send"}
            </button>
            {status === "error" && (
              <p className="text-sm italic text-red-500">
                Something went wrong.
              </p>
            )}
            {status === "success" && (
              <p className="text-sm italic text-green-500">
                Message sent successfully.
              </p>
            )}
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-between bg-gray-100 p-4 md:flex-row">
        <div>
          <p>&copy; Ralph Tungol {new Date().getFullYear()}</p>
        </div>
        <div className="flex flex-row items-center">
          <p>This portfolio is powered by:</p>
          <div className="ml-2 flex flex-row items-center">
            <img
              className="mr-1 h-4 w-4"
              src="@/public/vercel.svg"
              alt="placeholder1"
            />
            <img
              className="mr-1 h-4 w-4"
              src="placeholder2.png"
              alt="placeholder2"
            />
            <img
              className="mr-1 h-4 w-4"
              src="placeholder3.png"
              alt="placeholder3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
