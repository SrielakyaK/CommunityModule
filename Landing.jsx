import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import bgImage from "../assets/bgimage.png";

function Landing() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      <Navbar onSignIn={() => setShowLogin(true)} />

      <main className="max-w-7xl mx-auto px-6 py-8">

        <section
          className="relative h-[550px] rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/55"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">

            <h1 className="text-6xl font-bold text-white">
              MCC–MRF Innovation Park
            </h1>

            <p className="text-xl text-gray-200 mt-6 max-w-4xl leading-relaxed">
              Connecting students, alumni, startups, founders,
              mentors and recruiters through innovation,
              collaboration and entrepreneurship.
            </p>

            <button
              onClick={() => setShowLogin(true)}
              className="mt-10 bg-[#A61C3C] hover:bg-[#8E1834] text-white px-8 py-4 rounded-md font-semibold transition"
            >
              Explore Communities
            </button>

          </div>
        </section>

        <section className="mt-16">

          <h2 className="text-3xl font-bold text-[#1B1B52] mb-8">
            Platform Participants
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-[#A61C3C] text-lg">
                Students
              </h3>

              <p className="mt-3 text-gray-600">
                Learn, collaborate and innovate through communities,
                projects and opportunities.
              </p>
            </div>

            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-[#A61C3C] text-lg">
                Alumni
              </h3>

              <p className="mt-3 text-gray-600">
                Mentor students, share industry expertise and support innovation.
              </p>
            </div>

            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-[#A61C3C] text-lg">
                Startups
              </h3>

              <p className="mt-3 text-gray-600">
                Recruit talent, showcase ideas and collaborate with the ecosystem.
              </p>
            </div>

            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-[#A61C3C] text-lg">
                Mentors
              </h3>

              <p className="mt-3 text-gray-600">
                Guide founders and innovators through mentorship and industry knowledge.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
        />
      )}

    </div>
  );
}

export default Landing;