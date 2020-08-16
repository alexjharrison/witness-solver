export const state = () => ({
  rows: 4,
  columns: 4,
  tab: 'Grid',
  color: 'aqua',
  icon: 'flux',
})

export const mutations = {
  setState(state, values) {
    for (const [key, value] of Object.entries(values)) {
      state[key] = value
    }
  },
}
