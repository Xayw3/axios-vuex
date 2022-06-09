<template>
  <button @click="clearPickedNamesMutation">set</button>
  <button
    :disabled="notPickedNames.length > 0 ? false : true"
    @click="getRandomNameMutation"
  >
    get
  </button>
  <div>{{ randomName.name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "JokesData",
  data: () => ({}),
  components: {},
  computed: {
    ...mapState("namesModule", ["names", "randomName"]),
    ...mapGetters("namesModule", ["notPickedNames"]),
  },
  methods: {
    ...mapMutations("namesModule", [
      "getRandomNameMutation",
      "clearPickedNamesMutation",
    ]),
  },
});
</script>
