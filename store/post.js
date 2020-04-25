const posts = [
  {
    title: 'Post title',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: '23'
  },
  {
    title: 'Post title',
    date: new Date(),
    views: 1,
    comments: [1, 22],
    _id: '253'
  }
]

export const actions = {
  async fetchAdmin() {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 10)
    })
  },
  async remove(id) {},
  async update({ ctx }, { id, text }) {},
  async create({ commit }, { title, text, image }) {
    try {
      const formData = new FormData()

      formData.append('title', title)
      formData.append('text', text)
      formData.append('image', image, image.name)

      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 10)
      })
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  async fetchAdminById({ ctx }, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((post) => post._id === id))
      }, 10)
    })
  }
}
