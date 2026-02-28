export default function Hero() {
  return (
    <section className="py-16 px-6 bg-[#FBFCFF]">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-5xl font-bold text-slate-900 mb-4">
      Discover more than <br />
      <span className="text-indigo-600">5000+ Jobs</span>
    </h1>
    <p className="text-gray-500 text-lg mb-8 max-w-md">
      Great platform for the job seeker that searching for new career heights.
    </p>
    
    {/* সার্চ বার ডিজাইন */}
    <div className="flex bg-white shadow-lg p-2 rounded-xl border max-w-4xl">
      <input type="text" placeholder="Job title or keyword" className="flex-1 p-3 outline-none border-r" />
      <input type="text" placeholder="Location" className="flex-1 p-3 outline-none" />
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium">
        Search my job
      </button>
    </div>
  </div>
</section>
  );
}