
import Dashboard from "../dashboard/page";
export default function AboutPage() {
  return (
    <> 
        
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "#fff",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "#0f172a",
            marginBottom: "15px",
          }}
        >
          About Us
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Welcome to our website! We are passionate about creating modern,
          responsive, and user-friendly web applications using React and
          Next.js. Our goal is to provide high-quality digital experiences with
          clean design and excellent performance.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "220px",
              background: "#f8fafc",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#2563eb",
                marginBottom: "10px",
              }}
            >
              🎯 Our Mission
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              Build fast, scalable, and beautiful web applications that solve
              real-world problems.
            </p>
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "220px",
              background: "#f8fafc",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#16a34a",
                marginBottom: "10px",
              }}
            >
              💡 Our Vision
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              Deliver innovative solutions with modern technologies while
              keeping the user experience simple and enjoyable.
            </p>
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "220px",
              background: "#f8fafc",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#dc2626",
                marginBottom: "10px",
              }}
            >
              🚀 Why Choose Us
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              We focus on clean code, responsive design, SEO, performance, and
              the latest web technologies like Next.js.
            </p>
          </div>
        </div>

        <button
          style={{
            marginTop: "40px",
            padding: "14px 35px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Learn More
        </button>
      </div>
    </div>
    </>
  );
}