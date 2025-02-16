import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Quantum Quorum</h1>
          <p className="text-xl text-gray-200">Revolutionizing Legal Tech with AI</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* About Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-400 text-center mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-300">Our Mission</h3>
              <p className="text-lg text-gray-300">
                At Quantum Quorum, we are dedicated to revolutionizing the legal industry through cutting-edge AI
                technology. Our mission is to make legal advice accessible, efficient, and affordable for everyone.
              </p>
            </div>
            <div className="relative h-64 md:h-80 bg-gray-700 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://source.unsplash.com/random/800x600?law"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-blue-400 text-center mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "Pushing the boundaries of legal tech" },
              { title: "Integrity", description: "Upholding the highest ethical standards" },
              { title: "Accessibility", description: "Making legal advice available to all" },
            ].map((value, index) => (
              <div
                key={value.title}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              >
                <h4 className="text-xl font-semibold text-blue-300 mb-2">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Our Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-blue-400 text-center mb-8">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Soham Bhaye", role: "AI Developer", image: "https://source.unsplash.com/random/150x150?man" },
              { name: "Sujal Shah", role: "Frontend Developer", image: "https://source.unsplash.com/random/150x150?man" },
              { name: "Oshnikdeep Tiwari", role: "Backend Developer", image: "https://source.unsplash.com/random/150x150?man" },
              { name: "Pushkar Mhatre", role: "UI/UX Designer", image: "https://source.unsplash.com/random/150x150?man" },
            ].map((member) => (
              <div
                key={member.name}
                className="text-center bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
                />
                <h4 className="text-xl font-semibold text-blue-300">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Our Journey Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-blue-400 text-center mb-8">Our Journey</h3>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-300 mb-4">
              Founded in 2023, Quantum Quorum has been at the forefront of the legal tech revolution. Our journey began
              with a simple idea: to make legal advice as accessible as a conversation with a friend.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Over the years, we've grown from a small team of four to a leader in AI-powered legal solutions. We've helped
              thousands of clients navigate complex legal issues and democratized access to legal information.
            </p>
            <p className="text-lg text-gray-300">
              Today, we continue to innovate and push the boundaries of what's possible in legal tech. Our team of legal
              experts and AI specialists work tirelessly to improve our services and expand our reach.
            </p>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 text-center mt-12 shadow-lg">
        <p className="text-gray-200">© {new Date().getFullYear()} Quantum Quorum. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;