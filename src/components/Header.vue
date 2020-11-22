<template>
  <nav>
    <div class="logo-container">
      <img src="@/images/logo.png" alt="postIt">
    </div>
    <div class="search-container">
      <input type="text" name="search"><button type="button">Search</button>
    </div>
    <div class="avatar-container">
      <img :src="user.photoURL" @click="toggle = !toggle" class="avatar">
      <div v-show="toggle" class="drop-down-container">
        <span v-show="toggle" id="user-name">{{ user.firstname }}</span>
        <span id="user-email">{{ user.email }}</span>
        <span class="separator"></span>
        <span>
              <router-link to="/browse">Browse</router-link>
            </span>
        <span class="separator"></span>
        <span>
              <router-link to="/">Log out</router-link>
            </span>
      </div>
    </div>
  </nav>
</template>

<script>
import store from '@/store'

export default {
  store,
  computed: {
    user(){
      return this.$store.getters["user/user"]
    }
  },
  mounted() {
    this.$store.dispatch("user/getUser")
  },
  name: "Header",
  data(){
    return {
      toggle: false,
    }
  },
}

</script>
