function Loading({ text = "Loading..." }) {
  return (
    <div style={{ padding: "40px", textAlign: "center", color: "#6b7280" }}>
      {text}
    </div>
  );
}

export default Loading;