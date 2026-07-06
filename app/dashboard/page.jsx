export default function Dashboard() {
  return (

    <div>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Users</h2>
          <p className="text-4xl font-bold mt-3">1,240</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Orders</h2>
          <p className="text-4xl font-bold mt-3">856</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Products</h2>
          <p className="text-4xl font-bold mt-3">340</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-4xl font-bold mt-3">$12,500</p>
        </div>

      </div>

    </div>

  );
}