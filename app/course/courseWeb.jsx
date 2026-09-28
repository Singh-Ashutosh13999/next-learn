"use client";
import { useState } from "react";
import { Star, Users, Clock, Code } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the basics of React and build interactive components",
    instructor: "John Doe",
    price: 49.99,
    rating: 4.8,
    students: 1250,
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=250&fit=crop",
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 2,
    title: "Advanced Next.js",
    description: "Master Next.js with server-side rendering and API routes",
    instructor: "Jane Smith",
    price: 79.99,
    rating: 4.9,
    students: 890,
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    tags: ["Next.js", "Node.js", "Full Stack"],
  },
  {
    id: 3,
    title: "Tailwind CSS Mastery",
    description: "Create beautiful and responsive designs with Tailwind CSS",
    instructor: "Mike Johnson",
    price: 39.99,
    rating: 4.7,
    students: 2100,
    duration: "6 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    tags: ["CSS", "Design", "Tailwind"],
  },
  {
    id: 4,
    title: "TypeScript for Professionals",
    description: "Write type-safe code and build scalable applications",
    instructor: "Sarah Williams",
    price: 59.99,
    rating: 4.8,
    students: 1650,
    duration: "9 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    tags: ["TypeScript", "JavaScript", "Backend"],
  },
  {
    id: 5,
    title: "Database Design & SQL",
    description: "Learn database design patterns and master SQL queries",
    instructor: "David Chen",
    price: 69.99,
    rating: 4.9,
    students: 1450,
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3b3f4?w=400&h=250&fit=crop",
    tags: ["Database", "SQL", "Backend"],
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    description: "Optimize your web apps for speed and user experience",
    instructor: "Emma Davis",
    price: 89.99,
    rating: 4.6,
    students: 756,
    duration: "7 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    tags: ["Performance", "Optimization", "Web"],
  },
];

export default function CourseWeb() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [showQR, setShowQR] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-8 h-8" />
            <h1 className="text-4xl sm:text-5xl font-bold">Learning Courses</h1>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl">
            Discover world-class courses taught by industry experts. Master new skills and advance your career.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-500 rounded-full text-sm font-medium">Popular</span>
            <span className="px-4 py-2 bg-blue-500 bg-opacity-50 rounded-full text-sm font-medium">Trending</span>
            <span className="px-4 py-2 bg-blue-500 bg-opacity-50 rounded-full text-sm font-medium">New</span>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {course.level}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(course.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                  <span className="text-sm text-gray-500">({course.students} students)</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Instructor */}
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-semibold text-gray-700">Instructor:</span> {course.instructor}
                </p>

                {/* Course Info */}
                <div className="flex gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    ${course.price}
                  </div>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Courses?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of experience
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Study at your own pace, anytime and anywhere you want
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certificates</h3>
              <p className="text-gray-600">
                Get recognized certifications upon course completion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative transform transition-all">
            {/* Header with Course Image as Background */}
            <div className="relative h-32 bg-blue-700">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
              <button
                onClick={() => { setSelectedCourse(null); setShowQR(false); }}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-1.5 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <h2 className="text-xl font-bold line-clamp-1">{selectedCourse.title}</h2>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-medium opacity-90">{selectedCourse.level}</span>
                  <span className="text-lg font-bold">${selectedCourse.price}</span>
                </div>
              </div>
            </div>

            {/* Form or QR Section */}
            <div className="p-6 pt-5">
              {showQR ? (
                <div className="text-center py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scan to Pay</h3>
                  <p className="text-sm text-gray-500 mb-6">Amount: ${selectedCourse.price}</p>
                  <div className="bg-gray-100 p-4 rounded-xl inline-block mb-6">
                    <img src="/qr-code.jpeg" alt="Payment QR Code" className="w-48 h-48 mx-auto mix-blend-multiply" />
                  </div>
                  <p className="text-xs text-gray-500 mb-6">Scan with any UPI/Payment app to complete your enrollment.</p>
                  <button onClick={() => { setShowSuccess(true); setTimeout(() => setShowSuccess(false), 5000); setShowQR(false); setSelectedCourse(null); setFormData({ name: '', phone: '', email: '' }); }} className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5 pb-4 border-b border-gray-100 flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500" /> {selectedCourse.duration}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-blue-500" /> {selectedCourse.instructor}</span>
                  </div>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();

                      // Show the QR code immediately
                      setShowQR(true);

                      const formData = new FormData(e.target);
                      const data = {
                        name: formData.get('name'),
                        phone: formData.get('phone'),
                        email: formData.get('email'),
                        course: selectedCourse.title
                      };

                      try {
                        // Attempt to send email in the background
                        fetch('/api/send', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(data),
                        });
                      } catch (error) {
                        console.error('Error sending email:', error);
                      }
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                      <input id="name" name="name" required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number</label>
                      <input id="phone" name="phone" required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                      <input id="email" name="email" required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none" placeholder="john@example.com" />
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 mt-6 flex justify-center items-center gap-2">
                      Complete Enrollment <span className="text-blue-300 font-normal">|</span> ${selectedCourse.price}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modern Success Toast */}
      {showSuccess && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[60] animate-in slide-in-from-top fade-in duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 border border-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-semibold text-lg">Thanks for payment sir!</span>
          </div>
        </div>
      )}
    </div>
  );
}