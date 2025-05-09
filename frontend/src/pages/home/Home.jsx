import React from 'react'

const Home = () => {
  return (
    <div className="font-sans">

      {/* HERO SECTION */}
      <section className="bg-purple-200 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl text-purple-500 font-bold mb-4">Welcome to Our Service</h1>
        <p className="text-lg md:text-xl text-purple-500 mb-6">We deliver the best digital solutions tailored to your needs.</p>
        <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white transition duration-300">
          Get Started
        </button>
      </section>

      {/* SERVICES CARDS */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Web Development", desc: "Modern, scalable, and responsive websites." },
            { title: "Mobile Apps", desc: "Build native and cross-platform mobile apps." },
            { title: "UI/UX Design", desc: "Creative and user-friendly interface design." }
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold text-purple-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE BANNER */}
      <section className="bg-purple-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6 text-lg">Subscribe to our newsletter for the latest updates and offers.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg w-full sm:w-auto flex-1 text-black focus:outline-none"
          />
          <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  )
}

export default Home;
