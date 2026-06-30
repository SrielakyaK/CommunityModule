import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/bgimage.png";

function CommunityFeed() {
  const [activeTab, setActiveTab] = useState("discussions");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("discussions");

  const [posts, setPosts] = useState({
    discussions: [
      {
        id: 1,
        author: "Priya S",
        role: "Student",
        time: "2 hours ago",
        title: "How can I build an AI Resume Analyzer?",
        content:
          "Looking for guidance on building an AI-powered resume screening project.",
      },
      {
        id: 2,
        author: "Rahul M",
        role: "Student",
        time: "Today",
        title: "Need teammates for upcoming Hackathon",
        content:
          "Anyone interested in AI and Web Development can join our team.",
      },
    ],

    resources: [
      {
        id: 3,
        author: "Arun K",
        role: "Alumni",
        time: "Yesterday",
        title: "Free NLP Learning Resources",
        content:
          "Sharing useful NLP tutorials and project resources for beginners.",
      },
      {
        id: 4,
        author: "Meena R",
        role: "Mentor",
        time: "2 days ago",
        title: "Machine Learning Roadmap 2026",
        content:
          "A curated roadmap covering ML fundamentals, projects and deployment.",
      },
    ],

    projects: [
      {
        id: 5,
        author: "Karthik P",
        role: "Founder",
        time: "Today",
        title: "AI Resume Analyzer",
        content:
          "Looking for contributors for an AI-based resume screening platform.",
      },
      {
        id: 6,
        author: "Nisha V",
        role: "Student",
        time: "Yesterday",
        title: "Smart Attendance System",
        content:
          "Developing a smart attendance tracking platform using AI and analytics.",
      },
    ],
  });

  const [likes, setLikes] = useState({
    1: 12,
    2: 8,
    3: 15,
    4: 6,
    5: 21,
    6: 4,
  });

  const [showComment, setShowComment] = useState({});

  const publishPost = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please enter title and content");
      return;
    }

    const newPost = {
      id: Date.now(),
      author: "You",
      role: "Community Member",
      time: "Just Now",
      title,
      content,
    };

    setPosts((prev) => ({
      ...prev,
      [postType]: [newPost, ...prev[postType]],
    }));

    setLikes((prev) => ({
      ...prev,
      [newPost.id]: 0,
    }));

    setTitle("");
    setContent("");
    setActiveTab(postType);
  };

  const currentPosts = posts[activeTab];

  return (
    <div className="min-h-screen bg-[#F8F8F5]">

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Banner */}

        <div className="mb-10 overflow-hidden rounded-lg shadow">
          <img
            src={bgImage}
            alt="Innovation Park"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Community Header */}

        <section className="border-b pb-8">

          <h1 className="text-4xl font-bold text-[#1B1B52]">
            AI & Machine Learning
          </h1>

          <p className="text-gray-600 mt-3">
            Discussions, resources, projects and opportunities related to
            Artificial Intelligence and Machine Learning.
          </p>

          <div className="mt-5 flex gap-8 text-sm text-gray-600">
            <span>Members: 128</span>
            <span>Active Discussions: 24</span>
            <span>Projects: 8</span>
          </div>

          <div className="flex gap-8 mt-8">

            <button
              onClick={() => setActiveTab("discussions")}
              className={`pb-2 ${
                activeTab === "discussions"
                  ? "border-b-2 border-[#A61C3C] text-[#A61C3C] font-semibold"
                  : ""
              }`}
            >
              Discussions
            </button>

            <button
              onClick={() => setActiveTab("resources")}
              className={`pb-2 ${
                activeTab === "resources"
                  ? "border-b-2 border-[#A61C3C] text-[#A61C3C] font-semibold"
                  : ""
              }`}
            >
              Resources
            </button>

            <button
              onClick={() => setActiveTab("projects")}
              className={`pb-2 ${
                activeTab === "projects"
                  ? "border-b-2 border-[#A61C3C] text-[#A61C3C] font-semibold"
                  : ""
              }`}
            >
              Projects
            </button>

          </div>

        </section>

        {/* Create Post */}

        <section className="bg-white border mt-8 p-6 rounded-lg">

          <h2 className="text-xl font-semibold text-[#1B1B52]">
            Create Post
          </h2>

          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-3 mt-4 rounded"
          />

          <select
            value={postType}
            onChange={(e) => setPostType(e.target.value)}
            className="w-full border p-3 mt-4 rounded"
          >
            <option value="discussions">Discussion</option>
            <option value="resources">Resource</option>
            <option value="projects">Project</option>
          </select>

          <textarea
            rows="4"
            placeholder="Write your post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-3 mt-4 rounded"
          />

          <button
            onClick={publishPost}
            className="mt-4 bg-[#A61C3C] text-white px-6 py-3 rounded"
          >
            Publish Post
          </button>

        </section>

        {/* Posts */}

        {currentPosts.map((post) => (
          <section
            key={post.id}
            className="bg-white border rounded-lg border-t-4 border-[#A61C3C] mt-8 p-6"
          >
            <h3 className="font-semibold text-[#1B1B52]">
              {post.author}
            </h3>

            <p className="text-sm text-gray-500">
              {post.role} • {post.time}
            </p>

            <h2 className="text-xl font-semibold mt-4">
              {post.title}
            </h2>

            <p className="text-gray-700 mt-3">
              {post.content}
            </p>

            <div className="flex gap-8 mt-6">

              <button
                onClick={() =>
                  setLikes({
                    ...likes,
                    [post.id]: (likes[post.id] || 0) + 1,
                  })
                }
                className="text-[#1B1B52] font-medium"
              >
                👍 {likes[post.id] || 0} Likes
              </button>

              <button
                onClick={() =>
                  setShowComment({
                    ...showComment,
                    [post.id]: !showComment[post.id],
                  })
                }
                className="text-[#A61C3C] font-medium"
              >
                💬 Comment
              </button>

            </div>

            {showComment[post.id] && (
              <div className="mt-5 border-t pt-4">

                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full border p-3 rounded"
                />

                <button className="mt-3 bg-[#1B1B52] text-white px-5 py-2 rounded">
                  Post Comment
                </button>

              </div>
            )}

          </section>
        ))}

      </main>

      <Footer />

    </div>
  );
}

export default CommunityFeed;