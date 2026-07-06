export default function ContactPage() {
  return (
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
          width: "100%",
          maxWidth: "900px",
          background: "#fff",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "#1e293b",
            marginBottom: "10px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "18px",
            marginBottom: "35px",
          }}
        >
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Contact Info */}
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              background: "#f8fafc",
              padding: "25px",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ color: "#2563eb", marginBottom: "20px" }}>
              Contact Information
            </h2>

            <p style={{ marginBottom: "15px" }}>
              📧 <strong>Email:</strong> info@example.com
            </p>

            <p style={{ marginBottom: "15px" }}>
              📞 <strong>Phone:</strong> +91 98765 43210
            </p>

            <p style={{ marginBottom: "15px" }}>
              📍 <strong>Location:</strong> New Delhi, India
            </p>
          </div>

          {/* Contact Form */}
          <div
            style={{
              flex: "2",
              minWidth: "300px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
              }}
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                resize: "none",
              }}
            ></textarea>

            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "14px 30px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}