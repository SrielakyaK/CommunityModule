function Login() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* Left Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0F4C81] via-[#164E7A] to-[#7A1E2C] text-white p-12 flex flex-col justify-center">

          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-xl">
            <h3 className="text-lg font-semibold tracking-wider text-yellow-400">
              MCC Innovation Ecosystem Platform
            </h3>

            <h1 className="mt-6 text-6xl font-extrabold leading-tight">
              CONNECT.
              <br />
              COLLABORATE.
              <br />
              INNOVATE.
            </h1>

            <p className="mt-8 text-lg text-slate-200 leading-relaxed">
              Bringing together students, alumni, startups, founders,
              mentors, recruiters and innovators under one ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div>
                <h2 className="text-4xl font-bold">5000+</h2>
                <p className="text-slate-300">Students</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">200+</h2>
                <p className="text-slate-300">Alumni</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">50+</h2>
                <p className="text-slate-300">Startups</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">100+</h2>
                <p className="text-slate-300">Mentors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-10 bg-white">

          <div className="w-full max-w-md">

            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-800">
                Welcome Back
              </h2>
              <p className="text-slate-500 mt-2">
                Sign in to continue
              </p>
            </div>

            <form className="space-y-5">

              <input
                type="email"
                placeholder="MCC Email Address"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 border rounded-xl"
              />

              <select className="w-full p-4 border rounded-xl">
                <option>Student</option>
                <option>Alumni</option>
                <option>Founder</option>
                <option>Mentor</option>
                <option>Recruiter</option>
              </select>

              <button
                className="w-full bg-[#7A1E2C] hover:bg-[#5A1420] text-white py-4 rounded-xl font-semibold transition"
              >
                Login
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;