import queryString from 'query-string'

export const state = () => ({
  posts: [],
  post: {},
  paginate: {},
  queryParams: {}
})

export const mutations = {
  setPost(state, payload) {
    state.post = payload
  },

  setPosts(state, payload) {
    state.posts = payload
  },

  paginate(state, payload) {
    state.paginate = payload
  },

  queryParams(state, payload) {
    payload.page = payload.page || 1
    state.queryParams = Object.assign({}, queryString.parse(queryString.stringify(payload)))
  }
}

export const actions = {
  getPosts({ commit, state }) {
    return this.$axios.$get(`http://localhost:8080/posts?${queryString.stringify(state.queryParams)}`)
      .then(data => {
        commit('setPosts', data.docs)
        commit('paginate', {
          totalDocs: data.totalDocs,
          limit: data.limit,
          hasPrevPage: data.hasPrevPage,
          hasNextPage: data.hasNextPage,
          page: data.page,
          totalPages: data.totalPages,
          pagingCounter: data.pagingCounter,
          prevPage: data.prevPage,
          nextPage: data.nextPage
        })
      })
  },

  getPost({ commit }, payload) {
    return this.$axios.$get(`http://localhost:8080/posts/${payload}`)
      .then(data => commit('setPost', data))
  },

  deletePost({ commit, dispatch }, paylod) {
    this.$axios.$delete(`http://localhost:8080/posts/${paylod}`)
      .then(resp => {
        if (resp) {
          dispatch('getPosts')
        }
      })
  }
}

export const getters = {
  posts: state => state.posts,
  post: state => state.post,
  paginate: state => state.paginate,
  queryParams: state => queryString.stringify(state.queryParams),
}
