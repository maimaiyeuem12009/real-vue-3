import EvenService from "@/service/EvenService";

export default {
    namespaced: true,
    state: {
        events: [],
        currentEvent: {},
        totalEvent: 0
    },
    mutations: {
        ADD_EVENT(state, event){
            state.events.push(event)
        },
        SET_EVENT(state, event) {
            state.currentEvent = event
        },
        SET_EVENTS(state, events) {
            state.events = events
        },
        SET_TOTAL(state, total){
            state.totalEvent = total
        }

    },
    actions: {
        createEvent({ commit }, event) {
            return EvenService.postEvent(event).then(() => {
                commit('ADD_EVENT',event)
            }).catch(e => {
                throw(e)
            })
        },
        fetchEvents({ commit }, content) {
            return EvenService.getEvents(content.perPage, content.page).then((response) => {
                commit('SET_EVENTS',response.data)
                console.log('SET_TOTAL', response.headers['x-total-count'])
                commit('SET_TOTAL', response.headers['x-total-count'])
            }).catch(e => {
                throw(e)
            })
        },
        fetchEvent( {commit,state}, id) {
            const existingEvent = state.events.find((event) => String(event.id) === id)
            if (existingEvent){
                commit('SET_EVENT', existingEvent)
            }else {
                return EvenService.getEvent(id).then(response => {
                    commit('SET_EVENT', response.data)
                }).catch(e => {
                    throw(e)
                })
            }
        }
    }
}