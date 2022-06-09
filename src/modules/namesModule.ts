export interface State {
  names: NamesData[];
  randomName: NamesData;
  name: string;
  getLength: number;
}

export interface NamesData {
  id: number;
  name: string;
  picked: boolean;
}

export default {
  namespaced: true,
  state: {
    names: [
      {
        id: 1,
        name: "Alberts",
        picked: false,
      },
      {
        id: 2,
        name: "Arnis",
        picked: false,
      },
      {
        id: 3,
        name: "Artis",
        picked: false,
      },
      {
        id: 4,
        name: "Artūrs",
        picked: false,
      },
      {
        id: 5,
        name: "Bogdans",
        picked: false,
      },
      {
        id: 6,
        name: "Edgars",
        picked: false,
      },
      {
        id: 7,
        name: "Elvis",
        picked: false,
      },
      {
        id: 8,
        name: "Haralds",
        picked: false,
      },
      {
        id: 9,
        name: "Ieva",
        picked: false,
      },
      {
        id: 10,
        name: "Ilona",
        picked: false,
      },
      {
        id: 11,
        name: "Inta",
        picked: false,
      },
      {
        id: 12,
        name: "Jānis",
        picked: false,
      },
      {
        id: 13,
        name: "Ņikita",
        picked: false,
      },
      {
        id: 14,
        name: "Niklāvs",
        picked: false,
      },
      {
        id: 15,
        name: "Regīna",
        picked: false,
      },
      {
        id: 16,
        name: "Ričards",
        picked: false,
      },
      {
        id: 17,
        name: "Rihards",
        picked: false,
      },
      {
        id: 18,
        name: "Roberts",
        picked: false,
      },
    ],
    randomName: {},
  },
  getters: {
    notPickedNames(state: State) {
      return state.names.filter(({ picked }) => !picked);
    },
  },
  actions: {
    clearPickedNames({ commit }: any) {
      commit("clearPickedNamesMutation");
    },
    getRandomName({ commit }: any) {
      commit("getRandomNameMutation");
    },
  },
  mutations: {
    getRandomNameMutation(state: State) {
      const notPickedNames = state.names.filter((name) => !name.picked);

      const randomize = Math.floor(Math.random() * notPickedNames.length);

      const setRandomName = notPickedNames[randomize];
      setRandomName.picked = true;

      state.randomName = setRandomName;
    },
    clearPickedNamesMutation(state: State) {
      const clearNames = state.names.map((el) => {
        if (el.picked === true) {
          el.picked = false;
        } else {
          el.picked = false;
        }
        return el;
      });

      state.names = clearNames;
    },
  },
};
