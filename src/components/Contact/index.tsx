import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-black2">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Contact Form Section */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-md bg-black2 px-10 py-12 shadow-md sm:p-[55px] lg:mb-0 lg:px-10 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-5 text-3xl font-extrabold text-white sm:text-4xl">
                Let’s Talk
              </h2>
              <p className="mb-10 text-lg font-medium text-gray-400">
                Drop us a message, and our team will get back to you as soon as possible.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="john doe"
                        className="w-full rounded-md border border-gray-900 bg-black2 px-5 py-3 text-base text-gray-200 placeholder-gray-500 outline-none focus:border-white focus:ring-2 focus:ring-white"
                      />
                    </div>
                  </div>
                  {/* Email Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full rounded-md border border-gray-900 bg-black2 px-5 py-3 text-base text-gray-200 placeholder-gray-500 outline-none focus:border-white focus:ring-2 focus:ring-white"
                      />
                    </div>
                  </div>
                  {/* Message Field */}
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="message"
                        className="w-full rounded-md border border-gray-900 bg-black2 px-5 py-3 text-base text-gray-200 placeholder-gray-500 outline-none focus:border-white focus:ring-2 focus:ring-white"
                      ></textarea>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button className="w-full rounded-md border border-gray-700 bg-white px-8 py-4 text-lg font-semibold text-black2 shadow-md transition duration-300 hover:bg-black2 hover:text-white focus:ring-2 focus:ring-white">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full px-3 -ml-4 lg:w-5/12 xl:w-4/12 ">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
