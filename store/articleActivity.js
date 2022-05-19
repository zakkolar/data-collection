import {dataStorage as ds} from "../backend/dataStorage";
import {CookieSync} from "../backend/cookieSync";

export const ARTICLE_COOKIE_NAME = 'articleData';

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
    CookieSync.set(ARTICLE_COOKIE_NAME,'true');
  },
  clearLog({state, commit}){
    commit('clearLog');
    ds.unset('articleEvents');
    CookieSync.delete(ARTICLE_COOKIE_NAME);
  }
}
