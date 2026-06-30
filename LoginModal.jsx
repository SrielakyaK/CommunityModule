import { useNavigate } from "react-router-dom";

function LoginModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-lg w-full max-w-md p-8">

        <h2 className="text-2xl font-bold text-[#1B1B52]">
          Sign In
        </h2>

        <p className="text-gray-600 mt-2">
          Access the MCC Innovation Ecosystem Platform
        </p>

        <select className="w-full border rounded p-3 mt-6">
          <option>Student</option>
          <option>Alumni</option>
          <option>Founder</option>
          <option>Mentor</option>
          <option>Recruiter</option>
          <option>Startup Admin</option>
        </select>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded p-3 mt-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-3 mt-4"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-[#A61C3C] text-white py-3 rounded mt-6"
        >
          Login
        </button>

        <button
          onClick={onClose}
          className="w-full border py-3 rounded mt-3"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default LoginModal;