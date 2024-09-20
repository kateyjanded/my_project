<template>
  <div class="sidebar">
    <div class="user-profile">
      <img src="@/assets/avatar.png" alt="User Avatar" class="avatar" />
      <p>User Afolabi</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  width: 20%;
  background-color: #e6f2ff;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
}

.user-profile {
  text-align: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
