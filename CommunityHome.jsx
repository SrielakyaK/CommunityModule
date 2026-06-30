import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const communities = [
  {
    title: "AI & Machine Learning",
    description:
      "Explore artificial intelligence, machine learning and data science discussions."
  },
  {
    title: "Cybersecurity",
    description:
      "Discuss security trends, ethical hacking and cyber awareness."
  },
  {
    title: "Entrepreneurship",
    description:
      "Connect with founders, startup enthusiasts and innovators."
  },
  {
    title: "Marketing",
    description:
      "Learn branding, digital marketing and growth strategies."
  },
  {
    title: "Software Development",
    description:
      "Share coding knowledge, projects and technical discussions."
  },
  {
    title: "Product Management",
    description:
      "Discuss product design, strategy and execution."
  },
  {
    title: "Startup Founders Club",
    description:
      "A community for startup founders and aspiring entrepreneurs."
  }
];

function CommunityHome() {
  const [search, setSearch] = useState("");
  const [joined, setJoined] = useState({});

  const filteredCommunities = communities.filter((community) =>
    community.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleJoin = (communityTitle) => {
    setJoined({
      ...joined,
      [communityTitle]: !joined[communityTitle]
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="border-b pb-6">
          <h1 className="text-4xl font-bold text-[#1B1B52]">
            Communities
          </h1>

          <p className="mt-3 text-gray-600">
            Join communities, collaborate with peers and participate in discussions.
          </p>

          <p className="mt-4 text-sm text-[#A61C3C] font-medium">
            {Object.values(joined).filter(Boolean).length} Communities Joined
          </p>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search communities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredCommunities.map((community, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-sm"
            >
              <div className="h-1 bg-[#A61C3C]"></div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#1B1B52]">
                  {community.title}
                </h2>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {community.description}
                </p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleJoin(community.title)}
                    className={`px-5 py-2 text-sm font-medium rounded ${
                      joined[community.title]
                        ? "bg-green-600 text-white"
                        : "bg-[#1B1B52] text-white"
                    }`}
                  >
                    {joined[community.title]
                      ? "✓ Joined"
                      : "Join Community"}
                  </button>

                  {joined[community.title] && (
                    <button
                      onClick={() => {
                        window.location.href =
                          "/community-feed/" +
                          community.title
                            .toLowerCase()
                            .replace(/\s+/g, "-");
                      }}
                      className="px-5 py-2 border border-[#A61C3C] text-[#A61C3C] rounded"
                    >
                      View Community
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCommunities.length === 0 && (
          <div className="mt-12 text-center text-gray-500">
            No communities found.
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default CommunityHome;
