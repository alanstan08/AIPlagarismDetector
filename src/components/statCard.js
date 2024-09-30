function StatCard({ title, value, description, color = "text-gray-900" }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className={`text-3xl font-bold ${color}`}>{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    )
  }
  export default StatCard