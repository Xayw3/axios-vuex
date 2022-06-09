<template>
  <RandomName />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RandomName from "../components/RandomName/RandomName.vue";

export default defineComponent({
  name: "JokesView",
  components: {
    RandomName,
  },
  computed: {},
  methods: {},
});
</script>
