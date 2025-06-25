const UserProfile = () => {
  const handleLogout = () => {
    // Logic for logging out the user
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    window.location.href = "/auth"; 
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p>This is the user profile page.</p>
      <button onClick={() => {
        handleLogout();
      }}>Logout</button>
    </div>
  );
};

export default UserProfile;
