import { createStore } from "vuex";
import jokeModule from "@/modules/jokeModule";
import namesModule from "@/modules/namesModule";

export default createStore({
  modules: {
    jokeModule,
    namesModule,
  },
});
