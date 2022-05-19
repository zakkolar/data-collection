import {dataStorage as ds} from "../backend/dataStorage";

export const state = () => ({
  events: ds.retrieve('articleEvents') || []
})

export const mutations = {
  logEvent(state, event){
    state.events.push(event);
  },
  clearLog(state){
    state.events = []
  }
}

export const getters = {
  getEvents(state) {
    return state.events;
  }
}

export const actions = {
  logEvent({state, commit}, event){
    commit('logEvent', event);
    ds.store('articleEvents', state.events)
  },
  clearLog({state, commit}){
    commit('clearLog');
    ds.unset('articleEvents');
  }
}
