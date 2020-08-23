import { make } from 'vuex-pathify'

const defaultState = () => ({
  sidebarIsOpen: false,
  sidebarIsLocked: false,
})

export default {
  namespace: true,
  state() {
    return defaultState()
  },
  mutations: {
    ...make.mutations(defaultState()),
  },
  actions: {
    ...make.actions(defaultState()),
  },
  getters: {
    ...make.getters(defaultState()),
  },
}
