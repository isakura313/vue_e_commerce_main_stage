import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    books: {},
    video: {},
    cart: [],
  },
  getters: {
    books: (state) => state.books,
    video: (state) => state.video,
    cart: (state) => state.cart,
  },
  actions: {
    initVideo: ({ commit }) => {
      axios.get('/json/full.json')
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response.data);
          commit('SET_VIDEO', response.data.video);
        });
    },
    initBooks: ({ commit }) => {
      axios.get('/json/full.json')
        .then((response) => {
          commit('SET_BOOKS', response.data.books);
        });
    },
    // addCart: ({ commit, getters }, payload) => {
    //   let cart = getters.cart;
    //   cart.push(payload);
    //   commit('SET_CART', cart);
    // }
  },

  mutations: {
    SET_VIDEO(state, video) {
      state.video = video;
    },
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_CART(state, val) {
      state.cart.push(val);
    },

  },
});
