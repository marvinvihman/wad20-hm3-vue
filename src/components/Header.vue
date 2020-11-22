<template>
  <nav>
    <div class="logo-container">
      <img src="@/images/logo.png" alt="postIt">
    </div>
    <div class="search-container">
      <input type="text" name="search"><button type="button">Search</button>
    </div>
    <div class="avatar-container">
      <img class="avatar">
      <div class="drop-down-container">
        <span id="user-name">John Doe</span>
        <span id="user-email"></span>
        <span class="separator"></span>
        <span>
              <router-link to="/browse">Browse</router-link>
            </span>
        <span class="separator"></span>
        <span>
              <router-link to="/login">Log out</router-link>
            </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped src="@/css/style.css">
</style>