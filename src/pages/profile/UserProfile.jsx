const UserProfile = () => {
  const handleLogout = () => {
    // Logic for logging out the user
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    window.location.href = "/auth"; 
  };


  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      <h2>User Profile</h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;

