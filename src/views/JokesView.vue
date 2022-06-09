<template>
  <JokesData />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JokesData from "../components/JokesData/JokesData.vue";

export default defineComponent({
  name: "JokesView",
  components: {
    JokesData,
  },
  computed: {},
  methods: {},
});
</script>
