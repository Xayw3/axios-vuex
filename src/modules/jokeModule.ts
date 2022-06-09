import axios from "axios";

export interface JokesState {
  jokes: Jokes[];
  darkJokes: Jokes[];
  punJokes: Jokes[];
  programmingJokes: Jokes[];
  joke: Jokes;
}

export interface Jokes {
  category: string;
  flags: Flags;
  id: number;
  joke: string;
  lang: string;
  safe: boolean;
  type: string;
}

export interface Flags {
  explicit: boolean;
  nsfw: boolean;
  political: boolean;
  racist: boolean;
  religious: boolean;
  sexist: boolean;
}

export default {
  namespaced: true,
  state: {
    darkJokes: [],
    punJokes: [],
    programmingJokes: [],
    jokes: [],
    joke: {},
  },
  getters: {
    jokes(state: JokesState) {
      return state.jokes;
    },
    darkJokes(state: JokesState) {
      return state.darkJokes;
    },
    punJokes(state: JokesState) {
      return state.punJokes;
    },
    programmingJokes(state: JokesState) {
      return state.programmingJokes;
    },
    joke(state: JokesState) {
      return state.joke;
    },
  },
  mutations: {
    setJokes: (state: JokesState, jokes: Jokes[]) => {
      state.jokes = jokes;
    },
    setDarkJokes: (state: JokesState, darkJokes: Jokes[]) => {
      state.darkJokes = darkJokes;
    },
    setPunJokes: (state: JokesState, jokes: Jokes[]) => {
      state.punJokes = jokes;
    },
    setProgrammingJokes: (state: JokesState, jokes: Jokes[]) => {
      state.programmingJokes = jokes;
    },
    setJoke: (state: JokesState, joke: Jokes) => {
      state.joke = joke;
    },
  },
  actions: {
    getJokesFromApi({ commit }: any) {
      return axios(`https://v2.jokeapi.dev/joke/Any?type=single&amount=10`, {
        method: "get",
      }).then((jokes) => {
        commit("setJokes", jokes.data.jokes);
        return jokes;
      });
    },
    getDarkJokesFromApi({ commit }: any) {
      return axios(`https://v2.jokeapi.dev/joke/Dark?type=single&amount=10`, {
        method: "get",
      }).then((darkJokes) => {
        commit("setDarkJokes", darkJokes.data.jokes);
        return darkJokes;
      });
    },
    getPunJokesFromApi({ commit }: any) {
      return axios(`https://v2.jokeapi.dev/joke/Pun?type=single&amount=10`, {
        method: "get",
      }).then((jokes) => {
        commit("setPunJokes", jokes.data.jokes);
        return jokes;
      });
    },
    getProgrammingJokesFromApi({ commit }: any) {
      return axios(
        `https://v2.jokeapi.dev/joke/Programming?type=single&amount=10`,
        {
          method: "get",
        }
      ).then((jokes) => {
        commit("setProgrammingJokes", jokes.data.jokes);
        return jokes;
      });
    },
    getJokeWithId({ commit }: any, id: string) {
      return axios(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`, {
        method: "get",
      }).then((joke) => {
        commit("setJoke", joke.data);
        return joke;
      });
    },
  },
};
