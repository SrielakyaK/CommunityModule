import logo from "../assets/mcclogo.png";
function Navbar({ onSignIn }) {
  return (
    <>
      <div className="bg-[#A61C3C] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <span>MCC Innovation Ecosystem Platform</span>
          <span>MCC - MRF Innovation Park</span>
        </div>
      </div>

      <nav className="bg-[#1B1B52] text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between h-24">

            <div className="flex items-center gap-4">

              <img
  src={logo}
  alt="MCC Logo"
  className="w-16 h-16 object-contain bg-white p-1 rounded"
/>

              <div>
                <h1 className="text-2xl font-semibold">
                  MCC Innovation Ecosystem
                </h1>

                <p className="text-sm text-gray-300">
                  Community & Collaboration Platform
                </p>
              </div>

            </div>

            <div className="hidden lg:flex gap-10 text-lg">

              <button className="hover:text-yellow-400">
                Home
              </button>

              <button className="hover:text-yellow-400">
                Communities
              </button>

              <button className="hover:text-yellow-400">
                Events
              </button>

              <button className="hover:text-yellow-400">
                Courses
              </button>

              <button className="hover:text-yellow-400">
                Startups
              </button>

            </div>

            <button
              onClick={onSignIn}
              className="bg-[#A61C3C] hover:bg-[#8E1834] px-6 py-3 rounded text-white font-medium"
            >
              Sign In
            </button>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;