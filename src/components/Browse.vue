<template>
  <body>
  <header>
    <nav>
      <div class="logo-container">
        <img src="res/images/logo.png" alt="postIt">
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
              <a href="browse.html">Browse</a>
            </span>
          <span class="separator"></span>
          <span>
              <a href="login.html">Log Out</a>
            </span>
        </div>
      </div>
    </nav>
  </header>
  <section class="main-container"></section>
  </body>
</template>

<script>
export default {
name: "Browse"
}
</script>

<style scoped>

</style>