export default function DashboardProducts() {
  const products = [
    { name: "Nova Headphones", stock: 24, price: "$129", status: "In Stock" },
    { name: "Luma Smart Lamp", stock: 8, price: "$79", status: "Low Stock" },
    { name: "Aero Backpack", stock: 15, price: "$95", status: "In Stock" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Product Dashboard
            </p>
            <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Manage your products like a pro
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Track inventory, sales, and product updates from a clean and responsive workspace.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700">
            + Add Product
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Products</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">128</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Active Listings</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">96</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Revenue</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">$24.8K</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Product Inventory</h2>
                <p className="text-sm text-slate-500">Recent products and stock status</p>
              </div>
              <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                View All
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">{product.name}</h3>
                    <p className="text-sm text-slate-500">{product.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      {product.status}
                    </span>
                    <span className="text-sm text-slate-600">Stock: {product.stock}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Highlights</h2>
            <p className="mt-1 text-sm text-slate-500">Top product focus for this week</p>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-700">Best Seller</p>
                <p className="mt-1 text-lg font-bold text-slate-900">Nova Headphones</p>
                <p className="text-sm text-slate-600">High demand with strong customer satisfaction.</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-700">Needs Attention</p>
                <p className="mt-1 text-lg font-bold text-slate-900">Luma Smart Lamp</p>
                <p className="text-sm text-slate-600">Low stock and should be restocked soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}