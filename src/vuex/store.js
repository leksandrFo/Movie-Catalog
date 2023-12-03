import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
let cartIds = window.localStorage.getItem('cartIds');

let store = new Vuex.Store({
  state: {
    movies: [],
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    cartIds: cartIds ? JSON.parse(cartIds) : []
  },
  mutations: {
    SET_MOVIE_TO_STATE: (state, movies) => {
      state.movies = movies;
    },
    SAVE_CART(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
      window.localStorage.setItem('cartIds', state.cartIds);
    },
    SET_CART: (state, movie) => {
      if (!state.cart.includes(movie)) {
        state.cart.push(movie);
        state.cartCount++;
        state.cartIds.push(movie.id);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
      state.cartCount--;
      state.cartIds.splice(index, 1);
    },
  },
  actions: {
    GET_MOVIE_FROM_API({commit}) {
      // 'https://api.kinopoisk.dev/v1.4/movie' with filters
      return axios('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=description&selectFields=shortDescription&selectFields=year&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=persons', {
        method: 'GET',
        headers: {
          'X-API-KEY': '17410FM-1VAMEES-MEJW1FE-3DHYH3K'
        }
      })
      .then((movies)=>{
          commit('SET_MOVIE_TO_STATE', movies.data);
          return movies;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    ADD_TO_CART({commit}, movie) {
      commit('SET_CART', movie);
      this.commit('SAVE_CART');
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index);
      this.commit('SAVE_CART');
    }
  },
  getters: {
    MOVIES(state) {
      return state.movies;
    },
    CART(state) {
      return state.cart;
    }
  }
});

export default store;
