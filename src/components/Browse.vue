<template>
  <body>
  <section class="main-container">
    <div v-for="profile in profiles" :key="profile.id">
      <div class="profile">
        <img :src="profile.avatar" :alt="profile.firstname + ' ' + profile.lastname">
        <h2>{{ profile.firstname + " " + profile.lastname }}</h2>
        <button class="follow-button">Follow</button>
      </div>
    </div>
  </section>
  </body>
</template>

<script>
import store from "@/store";

export default {
  store,
  computed: {
    profiles(){
      return this.$store.getters["profiles/profiles"]
    }
  },
  mounted() {
    this.$store.dispatch("profiles/getProfiles")
  },
  methods: {
    liked: function(button){
      button.classList.toggle("followed")
    }
  },
  name: "Browse"
}
</script>
