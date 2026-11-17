
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    message.textContent = "Signing in...";

    const { data, error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

    if (error) {
      message.textContent = error.message;
      return;
    }

    const { data: profile, error: profileError } =
      await supabaseClient
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

    if (profileError || !profile) {
      await supabaseClient.auth.signOut();
      message.textContent = "Your school account is not configured.";
      return;
    }

    if (profile.role === "admin") {
      window.location.href = "admin.html";
    } else if (profile.role === "teacher") {
      window.location.href = "teacher.html";
    } else if (profile.role === "student") {
      window.location.href = "student.html";
    } else {
      await supabaseClient.auth.signOut();
      message.textContent = "Unknown account role.";
    }
  });
}
