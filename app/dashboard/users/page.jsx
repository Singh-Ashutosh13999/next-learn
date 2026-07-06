"use client";

export default function User() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Overview of your profile and recent activity</p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-lg border border-blue-200 bg-white px-4 py-2 text-blue-600 shadow-sm hover:bg-blue-50">Edit Profile</button>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">New Post</button>
          </div>
        </header>

        <main className="grid gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <section className="col-span-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <img src="https://i.pravatar.cc/150" alt="User avatar" className="h-28 w-28 rounded-full border-4 border-blue-500 object-cover shadow-md" />
              <h2 className="mt-4 text-lg font-semibold text-gray-800">Ashutosh Singh</h2>
              <p className="text-sm text-gray-500">Frontend Developer</p>

              <div className="mt-4 flex w-full justify-center gap-3">
                <button className="rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Message</button>
                <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">Follow</button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Location</span>
                <span className="text-sm font-medium text-gray-700">India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Member since</span>
                <span className="text-sm font-medium text-gray-700">Jan 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Role</span>
                <span className="text-sm font-medium text-gray-700">Frontend Developer</span>
              </div>
            </div>
          </section>

          {/* Stats + Activity */}
          <section className="col-span-2 space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
                <div className="text-sm text-gray-500">Posts</div>
                <div className="mt-2 text-2xl font-semibold text-gray-800">128</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
                <div className="text-sm text-gray-500">Followers</div>
                <div className="mt-2 text-2xl font-semibold text-gray-800">4.2k</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
                <div className="text-sm text-gray-500">Following</div>
                <div className="mt-2 text-2xl font-semibold text-gray-800">312</div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <ul className="mt-4 divide-y">
                <li className="flex items-start gap-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">P</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Posted a new article</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">C</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Commented on a post</div>
                    <div className="text-xs text-gray-500">Yesterday</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">L</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Liked a comment</div>
                    <div className="text-xs text-gray-500">3 days ago</div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}