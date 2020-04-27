export const actions = {
  async fetchAdmin({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin')
    } catch (error) {
      commit('setError', error, { root: true })
    }
  },
  async fetch({ commit }) {
    try {
      return await this.$axios.$get('/api/post')
    } catch (error) {
      commit('setError', error, { root: true })
    }
  },
  async remove({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`)
    } catch (error) {
      commit('setError', error, { root: true })
    }
  },
  async update({ commit }, { id, text }) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, { text })
    } catch (error) {
      commit('setError', error, { root: true })
    }
  },
  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await this.$axios.$post('/api/post/admin', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetchAdminById({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`)
    } catch (error) {
      commit('setError', error, { root: true })
    }
  },
  async fetchById({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/${id}`)
    } catch (error) {
      commit('setError', error, { root: true })
    }
  },
  async addView({ commit }, { views, _id }) {
    try {
      return await this.$axios.$put(`/api/post/add/view/${_id}`, { views })
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  async getAnalytics({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin/get/analytics')
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  }
}
