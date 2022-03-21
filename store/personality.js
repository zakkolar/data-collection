export const state = () => ({
  color: null,
  entertainment: null,
  number: null,
})

export const mutations = {
  setColor(state, color){
    state.color = color
  },

  setEntertainment(state, entertainment){
    state.entertainment = entertainment
  },

  setNumber(state, number){
    state.number = number
  }
}
