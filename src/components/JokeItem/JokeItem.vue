<template>
  <div class="joke-item">
    <h2>{{ this.joke.joke }}</h2>
    <h3>ID: {{ this.joke.id }}</h3>
    <h3>Category: {{ this.joke.category }}</h3>
  </div>
</template>

<style lang="scss">
@import url("./joke-item.scss");
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "JokesItem",
  components: {},
  computed: {
    ...mapGetters("jokeModule", ["joke"]),
  },
  methods: {
    ...mapActions("jokeModule", ["getJokeWithId"]),
  },
  mounted() {
    this.getJokeWithId(this.$route.params.id);
  },
});
</script>
