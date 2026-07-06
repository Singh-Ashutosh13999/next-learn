async function getData() {
 const res = await fetch("/api/demo");
  return res.json();
}

export default async function Demo() {
  const users = await getData();
  return (
  
  <div
    style={{
      minHeight: "100vh",
      background: "#f3f4f6",
      padding: "50px",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        color: "#1f2937",
        marginBottom: "40px",
        fontSize: "40px",
      }}
    >
      Users List
    </h1>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {users.map((item) => (
        <div
          key={item.id}
          style={{
            width: "300px",
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Image */}

          <div
            style={{
              background: "#2563eb",
              padding: "25px",
            }}
          >
            <img
              src={`https://i.pravatar.cc/150?u=${item.id}`}
              alt={item.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "4px solid white",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Card Content */}

          <div
            style={{
              padding: "25px",
            }}
          >
            <h2
              style={{
                color: "#111827",
                marginBottom: "10px",
              }}
            >
              {item.name}
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "17px",
                marginBottom: "20px",
              }}
            >
              📍 {item.city}
            </p>

            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "12px 28px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
 
  );
}