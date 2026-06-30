import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/bgimage.png";
function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F8F5]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Welcome Section */}

        <div className="border-b pb-8">

          <h1 className="text-4xl font-bold text-[#1B1B52]">
            Dashboard
          </h1>

          <p className="text-gray-600 mt-3">
            Welcome to the MCC Innovation Ecosystem Platform.
          </p>

        </div>

        {/* Quick Actions */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div
            onClick={() => navigate("/communities")}
            className="bg-white border cursor-pointer hover:shadow-md p-6"
          >
            <h2 className="font-semibold text-[#1B1B52]">
              Communities
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              Join communities and participate in discussions.
            </p>
          </div>

          <div className="bg-white border p-6">
            <h2 className="font-semibold text-[#1B1B52]">
              Events
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              Hackathons, workshops and networking events.
            </p>
          </div>

          <div className="bg-white border p-6">
            <h2 className="font-semibold text-[#1B1B52]">
              Courses
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              Upskill through innovation and entrepreneurship programs.
            </p>
          </div>

          <div className="bg-white border p-6">
            <h2 className="font-semibold text-[#1B1B52]">
              Notifications
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              Stay updated with community activity.
            </p>
          </div>

        </div>

        {/* My Communities */}

        <section className="mt-12">

          <h2 className="text-2xl font-semibold text-[#1B1B52]">
            My Communities
          </h2>

          <div className="bg-white border mt-4 p-6">

            <div className="flex justify-between items-center">

              <div>
                <h3 className="font-semibold">
                  AI & Machine Learning
                </h3>

                <p className="text-sm text-gray-500">
                  Active Community
                </p>
              </div>

              <button
                onClick={() => navigate("/community-feed")}
                className="bg-[#1B1B52] text-white px-5 py-2"
              >
                Open
              </button>

            </div>

          </div>

        </section>

        {/* Recent Activity */}

        <section className="mt-12">

          <h2 className="text-2xl font-semibold text-[#1B1B52]">
            Recent Activity
          </h2>

          <div className="bg-white border mt-4">

            <div className="p-4 border-b">
              Priya S posted in AI & Machine Learning
            </div>

            <div className="p-4 border-b">
              Arun K shared NLP learning resources
            </div>

            <div className="p-4">
              New project opportunity posted
            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Dashboard;