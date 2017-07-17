import * as types from './mutationTypes'
import * as actions from './actions'

const state = {
  system: (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ? 'IOS' : 'Android'),
  article: {
    title: '',
    content: ''
  },
  news: {
    classes: false,
    correct: false,
    system: false
  },
  user: {
    headImg: '',
    bufferImg: '',
    name: '',
    school: '',
    subjectId: '',
    sex: '',
    mobile: '',
    classes: [],
    swiper: [{}],
    token: localStorage.getItem('token')
  }
}

const getters = {
  Path: (state, getters, rootState) => {
    return rootState.route.path
  },
  Query: (state, getters, rootState) => {
    return rootState.route.query
  },
  Params: (state, getters, rootState) => {
    return rootState.route.params
  },
  Route: (state, getters, rootState) => {
    return rootState.route
  },
  User: (state) => {
    return state.user
  },
  News: (state) => {
    return state.news
  },
  SwiperInfo: (state) => {
    return state.article
  },
  System: (state) => {
    return state.system
  }
}

const mutations = {
  [types.USERINFO] (state, data) {
    state.user.headImg = data.headImg
    state.user.name = data.name
    state.user.subjectId = data.subjectId
    state.user.mobile = data.mobile
    state.user.school = data.school
    state.user.sex = data.sex
    state.user.swiper = data.swiper
    state.user.classes = data.classes
  },
  [types.USERPHOTO_POST] (state, data) {
    state.user.headImg = data.headImg
  },
  [types.USERPHOTO_SET] (state, data) {
    state.user.bufferImg = data
  },
  [types.USER_TOKEN] (state, data) {
    state.user.token = data
    localStorage.setItem('token', data)
  },
  [types.USER_NEW_MESSAGE] (state, data) {
    state.news.classes = data.classes
    state.news.correct = data.correct
    state.news.system = data.system
  },
  [types.SWIPER_INFO] (state, data) {
    state.article.title = data.title
    state.article.content = data.content
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
