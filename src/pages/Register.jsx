if (res.data.token) {
  localStorage.setItem("token", res.data.token);
  console.log("Register success:", res.data);
  // success logic → navigate home or login
} else {
  setError("Registration failed");
}
