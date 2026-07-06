export default function HomePage() {
  return (
    
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #2563eb, #4b63a5)",
          color: "white",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "550px" }}>
          <h1
            style={{
              fontSize: "55px",
              marginBottom: "20px",
            }}
          >
            Learn Next.js Like a Professional
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#e2e8f0",
            }}
          >
            Build modern, fast, and SEO-friendly web applications using
            Next.js. Learn routing, layouts, components, APIs, and much
            more through real-world projects.
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "15px 35px",
              background: "#fff",
              color: "#2563eb",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Get Started
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
            alt="Coding"
            style={{
              width: "500px",
              maxWidth: "100%",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "80px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "15px",
            color: "#1e293b",
          }}
        >
          Why Learn With Us?
        </h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Everything you need to become a modern web developer.
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "⚡ Fast Performance",
              desc: "Next.js provides optimized performance and lightning-fast loading.",
            },
            {
              title: "📈 SEO Friendly",
              desc: "Improve search engine rankings with built-in SEO features.",
            },
            {
              title: "💻 Real Projects",
              desc: "Learn by building real-world applications from scratch.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "300px",
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  color: "#2563eb",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "#1e293b",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          Start Your Next.js Journey Today
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          Join thousands of developers learning modern web development.
        </p>

        <button
          style={{
            padding: "15px 40px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Explore Courses
        </button>
      </section>
    </div>
  );
}