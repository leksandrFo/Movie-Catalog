<template>
  <div class="v-catalog">
    <h1>Каталог</h1>
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">Добавлено фильмов: {{ CART.length }}</div>
    </router-link>
    
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="movie in MOVIES.docs"
        :key="movie.id"
        :movie_data="movie"
        @addToCart="addToCart"
        @removeFromCart="removeFromCart"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "./v-catalog-item";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "v-catalog",
  components: {VCatalogItem},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
        'MOVIES',
        'CART',
    ])
  },
  methods: {
    ...mapActions([
          'GET_MOVIE_FROM_API',
          'ADD_TO_CART',
          'DELETE_FROM_CART'
      ]),
    addToCart(data){
      this.ADD_TO_CART(data)
    },
    removeFromCart(data){
      this.DELETE_FROM_CART(data)
    }
  },
  mounted() {
    this.GET_MOVIE_FROM_API()
  }
}
</script>

<style lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &__link_to_cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding;
      border: solid 1px green;
    }
  }

</style>