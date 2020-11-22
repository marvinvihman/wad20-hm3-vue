<template>
  <body>
  <header>
  </header>
  <section class="main-container">
    <div v-for="post in posts" :key="post.id">
      <div class="post">
        <span class="post-author">
          <span class="post-author-info">
            <img :src="post.author.avatar" :alt="post.author.firstname + ' ' + post.author.lastname">
            <small>{{ post.author.firstname }} {{ post.author.lastname }}</small>
          </span>
          <small>{{ post.createTime }}</small>
        </span>
        <template v-if="post.media !== null">
          <div v-if="post.media.type === 'image'" class="post-image">
            <img :src="post.media.url" :alt="post.text | altText">
          </div>
          <div v-else-if="post.media.type === 'video'" class="post-image">
            <video controls>
              <source :src="post.media.url" :alt="post.text | altText">
            </video>
          </div>
        </template>
        <div class="post-title">
          <h3>{{ post.text }}</h3>
        </div>
        <div class="post-actions">
          <button type="button" class="like-button" @click="liked($event.target)">{{ post.likes }}</button>
        </div>
      </div>
    </div>
  </section>
  </body>
</template>

<script>


import store from "@/store";

export default {
  store,
  filters: {
    altText: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toLowerCase().replace(/ /g, "-")
    }
  },
  computed: {
    posts(){
      return this.$store.getters["post/posts"]
    }
  },
  mounted() {
    this.$store.dispatch("post/getPosts")
  },
  methods: {
    liked: function(button){
      button.classList.toggle("liked")
    }
  },
name: "Main"
}
</script>
