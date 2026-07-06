export default function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "#fff",
        padding: "40px 60px",
        
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* Logo & About */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h2 style={{ marginBottom: "15px", color: "#3b82f6" }}>
            NextLearn
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            Learn modern web development with React and Next.js through simple,
            practical examples and real-world projects.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ minWidth: "180px" }}>
          <h3 style={{ marginBottom: "15px" }}>Quick Links</h3>

          <p style={{ marginBottom: "10px", cursor: "pointer" }}>Home</p>
          <p style={{ marginBottom: "10px", cursor: "pointer" }}>About</p>
          <p style={{ marginBottom: "10px", cursor: "pointer" }}>Services</p>
          <p style={{ cursor: "pointer" }}>Contact</p>
        </div>

        {/* Contact */}
        <div style={{ minWidth: "220px" }}>
          <h3 style={{ marginBottom: "15px" }}>Contact</h3>

          <p>Email: info@example.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0 20px",
          border: "1px solid #374151",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          margin: 0,
        }}
      >
        © 2026 NextLearn. All Rights Reserved.
      </p>
    </footer>
  );
}