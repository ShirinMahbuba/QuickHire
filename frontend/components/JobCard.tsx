export default function JobCard({ job }: any) {
  return (
    <div className="p-6 bg-white border rounded-xl hover:shadow-lg transition cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-bold italic">
          {job.company[0]}
        </div>
        <span className="px-3 py-1 border border-primary text-primary text-xs font-semibold rounded-full">
          {job.type}
        </span>
      </div>
      <h3 className="text-xl font-bold text-secondary">{job.title}</h3>
      <p className="text-grayText mt-1">{job.company} • {job.location}</p>
      <div className="mt-4 flex gap-2">
        {job.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-slate-100 text-gray-600 text-xs rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}