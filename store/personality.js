import {dataStorage as ds} from "../backend/dataStorage";

export const state = () => ({
  color: ds.retrieve('color'),
  entertainment: ds.retrieve('entertainment'),
  number: ds.retrieve('number'),
})

export const mutations = {
  color(state, color){
    state.color = color
  },
  entertainment(state, entertainment){
    state.entertainment = entertainment
  },
  number(state, number){
    state.number = number?.replace(/69/g, "68").replace(/420/,"429") || null
  }
}

export const actions = {
  color({commit}, color) {
    commit('color', color)
    ds.store('color', color)
  },
  entertainment({commit}, entertainment){
    commit('entertainment', entertainment)
    ds.store('entertainment', entertainment)
  },
  number({commit}, number) {
    commit('number', number)
    ds.store('number', number)
  }
}

// export const getters = {
//   number: state => state.number,
//   color: state => state.color,
//   entertainment: state => state.entertainment,
//
// }
