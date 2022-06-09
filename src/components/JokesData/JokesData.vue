<template>
  <div class="jokes">
    <div class="filter-wrapper">
      <div class="categories-wrapper">
        <h2 class="title">Categories</h2>
        <div class="btns">
          <button
            v-for="category in categories"
            :key="category"
            class="btn"
            @click="jokeCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
      <div class="flags-wrapper">
        <h2 class="title">Flags</h2>
        <div class="btns">
          <button
            v-for="flagName in flagsFilter"
            :key="flagName"
            class="btn"
            @click="flag = flagName"
          >
            {{ flagName }}
          </button>
        </div>
      </div>
    </div>
    <div class="jokes-wrapper">
      <div class="joke" v-for="{ joke, id } in filteredJokes" :key="id">
        <p class="joke-text">{{ joke }}</p>
        <router-link class="btn joke-link" :to="'/' + id">
          more info
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("./jokes-data.scss");
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "JokesData",
  data: () => ({
    jokeId: "",
    jokeCategory: "Pun",
    flagsFilter: [
      "all",
      "explicit",
      "nsfw",
      "political",
      "racist",
      "religious",
      "sexist",
    ],
    flag: "all",
    categories: ["Any", "Programming", "Dark", "Pun"],
  }),
  components: {},
  computed: {
    setJokeCategory() {
      if (this.jokeCategory === "Dark") {
        return this.darkJokes;
      } else if (this.jokeCategory === "Programming") {
        return this.programmingJokes;
      } else if (this.jokeCategory === "Pun") {
        return this.punJokes;
      } else {
        return this.jokes;
      }
    },
    filteredJokes() {
      if (this.flag === "explicit") {
        return this.setJokeCategory.filter(
          (el: any) => el.flags.explicit === true
        );
      } else if (this.flag === "nsfw") {
        return this.setJokeCategory.filter((el: any) => el.flags.nsfw === true);
      } else if (this.flag === "political") {
        return this.setJokeCategory.filter(
          (el: any) => el.flags.political === true
        );
      } else if (this.flag === "racist") {
        return this.setJokeCategory.filter(
          (el: any) => el.flags.racist === true
        );
      } else if (this.flag === "religious") {
        return this.setJokeCategory.filter(
          (el: any) => el.flags.religious === true
        );
      } else if (this.flag === "sexist") {
        return this.setJokeCategory.filter(
          (el: any) => el.flags.sexist === true
        );
      } else {
        return this.setJokeCategory;
      }
    },
    ...mapGetters("jokeModule", [
      "jokes",
      "darkJokes",
      "punJokes",
      "programmingJokes",
    ]),
  },
  methods: {
    ...mapActions("jokeModule", [
      "getJokesFromApi",
      "getDarkJokesFromApi",
      "getPunJokesFromApi",
      "getProgrammingJokesFromApi",
    ]),
  },
  mounted() {
    this.getPunJokesFromApi();
    this.getDarkJokesFromApi();
    this.getProgrammingJokesFromApi();
    this.getJokesFromApi();
  },
});
</script>
