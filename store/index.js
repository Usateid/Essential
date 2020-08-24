import pathify, { make } from 'vuex-pathify'
export const strict = false
// pathify.options.deep = 2

const defaultState = () => ({})

export default {
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
  plugins: [pathify.plugin],
}
