<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar">
        <img src="@/assets/icons8-male-user-96 (1).png" alt="User Avatar" />
      </div>
      <form @submit.prevent="login">
        <div class="input-group">
          <div class="image-class">
            <i class="fa fa-user icon"></i>
          </div>
          <input type="email" v-model="email" placeholder="Email ID" required />
        </div>
        <div class="input-group">
          <div class="image-class">
            <i class="fa fa-lock icon"></i>
          </div>
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="options">
          <label>
            <input type="checkbox" v-model="rememberMe" /> Remember me
          </label>
          <a href="#" class="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    login() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Remember me:", this.rememberMe);
      // Implement login logic here
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e6f2ff 0%, #7ab2ed 100%);
}

.login-box {
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border: 1px solid #007bff;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.avatar {
  margin-bottom: 20px;
}

.avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.image-class {
  background: #111;
  padding: 10px;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
}

.input-group input {
  border: none;
  outline: none;
  background: none;
  color: #fff;
  width: 100%;
  padding: 10px;
}

.icon {
  color: #fff;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #fff;
}

.options .forgot-password {
  color: #111;
  text-decoration: none;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #ff7e00;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #ff9500;
}
</style>
