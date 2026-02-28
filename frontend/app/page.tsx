"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]); 
  const [loading, setLoading] = useState(true);
  
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/jobs");
        const data = await response.json();
        setJobs(data);
        setFilteredJobs(data); 
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleSearch = () => {
    const filtered = jobs.filter((job: any) => {
      const titleMatch = job.title.toLowerCase().includes(searchTitle.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(searchLocation.toLowerCase());
      return titleMatch && locationMatch;
    });
    setFilteredJobs(filtered);
    
    const element = document.getElementById("featured-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const categories = [
    { name: "Design", count: "235 jobs available", icon: "🎨" },
    { name: "Sales", count: "756 jobs available", icon: "📈" },
    { name: "Marketing", count: "140 jobs available", icon: "📢", active: true },
    { name: "Finance", count: "325 jobs available", icon: "💰" },
    { name: "Technology", count: "436 jobs available", icon: "💻" },
    { name: "Engineering", count: "542 jobs available", icon: "⚙️" },
    { name: "Business", count: "211 jobs available", icon: "💼" },
    { name: "Human Resource", count: "346 jobs available", icon: "👥" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#202430]">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-5 px-6 md:px-20 bg-white border-b border-gray-50">
        <div className="flex items-center gap-10">
          <div className="text-2xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4B4EFC] rounded-full flex items-center justify-center text-white text-xs font-bold">Q</div>
            QuickHire
          </div>
          <div className="hidden md:flex gap-6 text-[#515B6F] font-medium text-sm">
            <Link href="/" className="text-[#4B4EFC]">Find Jobs</Link>
            <Link href="#" className="hover:text-[#4B4EFC]">Browse Companies</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[#4B4EFC] font-bold px-4 py-2 text-sm">Login</button>
          <button className="bg-[#4B4EFC] text-white px-6 py-2 rounded-sm font-bold text-sm hover:bg-blue-700 transition">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#F8F9FF] pt-16 pb-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover <br /> more than <br />
              <span className="text-[#4B4EFC] border-b-4 border-blue-200">5000+ Jobs</span>
            </h1>
            <p className="mt-6 text-gray-500 max-w-md text-lg">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>
            
            {/* Search Bar - Fixed */}
            <div className="mt-10 p-2 bg-white shadow-xl flex flex-col md:flex-row items-center gap-2 max-w-3xl rounded-sm">
              <div className="flex items-center flex-1 px-4 w-full border-r border-gray-100">
                <span className="mr-2">🔍</span>
                <input 
                  type="text" 
                  placeholder="Job title or keyword" 
                  className="w-full p-4 outline-none text-sm"
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                />
              </div>
              <div className="flex items-center flex-1 px-4 w-full">
                <span className="mr-2">📍</span>
                <input 
                  type="text" 
                  placeholder="Location (e.g. Madrid)" 
                  className="w-full p-4 outline-none text-sm"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              <button 
                onClick={handleSearch}
                className="bg-[#4B4EFC] text-white px-8 py-4 font-bold w-full md:w-auto hover:bg-blue-700 transition active:scale-95"
              >
                Search my job
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
             <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000" className="w-[450px] h-[550px] object-cover border-[12px] border-white shadow-2xl" alt="Hero" />
          </div>
        </div>
      </section>

      {/* --- Section 1: Explore by Category --- */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Explore by <span className="text-blue-600">category</span></h2>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className={`p-8 border border-gray-100 group hover:shadow-lg transition-all cursor-pointer ${cat.active ? 'bg-[#4B4EFC] text-white' : 'bg-white hover:border-[#4B4EFC]'}`}>
              <div className="text-3xl mb-6">{cat.icon}</div>
              <h3 className="font-bold text-xl mb-2">{cat.name}</h3>
              <p className={`text-sm ${cat.active ? 'text-blue-100' : 'text-gray-400'}`}>{cat.count} →</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Featured Jobs - Fixed Filtering Display --- */}
      <section id="featured-section" className="py-10 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured <span className="text-blue-600">jobs</span></h2>
          <span className="text-blue-600 font-bold text-sm">Showing {filteredJobs.length} results</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {loading ? (
            <p className="col-span-full text-center py-10">Loading jobs...</p>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job: any) => (
              <Link href={`/jobs/${job.id}`} key={job.id} className="p-6 border border-gray-100 hover:shadow-xl hover:border-[#4B4EFC] transition-all block bg-white">
                <div className="flex justify-between mb-4">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center font-bold text-blue-600 border border-gray-100 uppercase">{job.company[0]}</div>
                  <span className="px-2 py-1 border border-blue-600 text-blue-600 text-[10px] font-bold uppercase rounded-sm">{job.type}</span>
                </div>
                <h3 className="font-bold text-lg mb-1 truncate">{job.title}</h3>
                <p className="text-xs text-gray-400 mb-4">{job.company} • {job.location}</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full">{job.category || "General"}</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-gray-50 rounded-lg">
              <p className="text-gray-500 font-medium">No jobs found matching "{searchTitle}"</p>
              <button onClick={() => setFilteredJobs(jobs)} className="text-[#4B4EFC] mt-2 underline">Clear search</button>
            </div>
          )}
        </div>
      </section>

      {/* --- Section 3: Latest Jobs Open --- */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto border-t border-gray-50">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest <span className="text-blue-600">jobs open</span></h2>
          <span className="text-blue-600 font-bold text-sm cursor-pointer">Show all jobs →</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.slice(0, 8).map((job: any) => (
            <Link 
              href={`/jobs/${job.id}`} 
              key={job.id} 
              className="flex items-center justify-between p-6 border border-gray-100 hover:border-blue-600 hover:shadow-md transition-all bg-white group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center font-bold text-blue-600 group-hover:bg-blue-50 uppercase">{job.company[0]}</div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  <p className="text-sm text-gray-400">{job.company} • {job.location}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full">Full-Time</span>
                <span className="px-3 py-1 border border-orange-200 text-orange-600 text-[10px] font-bold rounded-full">{job.category || "Marketing"}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#202430] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-6">QuickHire</div>
            <p className="text-gray-400 text-sm">Great platform for the job seeker searching for new career heights.</p>
          </div>
          <div className="grid grid-cols-2 col-span-2 gap-8">
             <div>
              <h4 className="font-bold mb-6">About</h4>
              <ul className="text-gray-400 text-sm space-y-4">
                <li>Companies</li>
                <li>Pricing</li>
                <li>Terms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="text-gray-400 text-sm space-y-4">
                <li>Help Docs</li>
                <li>Guide</li>
                <li>Updates</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Get job notifications</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="p-3 bg-white/5 border border-white/10 flex-1 outline-none text-sm" />
              <button className="bg-blue-600 px-4 font-bold text-sm hover:bg-blue-700 transition">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}