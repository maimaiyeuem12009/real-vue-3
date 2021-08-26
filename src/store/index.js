import { createStore } from 'vuex'
import EvenService from "@/service/EvenService";

export default createStore({
  state: {
    user: 'Nam Nguyen',
    events: [],
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event){
      state.events.push(event)
    },
    ADD_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EvenService.postEvent(event).then(() => {
        commit('ADD_EVENT',event)
      }).catch(e => {
        throw(e)
      })
    },
    fetchEvents({ commit }) {
      return EvenService.getEvents().then((response) => {
        commit('ADD_EVENTS',response.data)
      }).catch(e => {
        throw(e)
      })
    },
    fetchEvent( {commit,state}, id) {
      const existingEvent = state.events.find(event => event.id === id)
      if (existingEvent){
        return existingEvent
      }else {
        return EvenService.getEvent(id).then(response => {
          commit('SET_EVENT', response.data)
        }).catch(e => {
          throw(e)
        })
      }
    }
  },
  modules: {
  }
})
