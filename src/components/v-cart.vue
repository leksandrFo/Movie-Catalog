<template>
  <div class="v-cart">
    <h1>Запланированные просмотры</h1>
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_catalog">Back to the catalog</div>
    </router-link>
    <div class="v-cart__list">
      <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  computed: {},
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    }
  },
  watch: {},
  mounted() {
  }
}
</script>

<style lang="scss">
  .v-catalog {
    &__link_to_catalog {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding;
      border: solid 1px green;
    }
  }
  .v-cart {
    &__list {
      display: flex;
      flex-direction: column;
    }
  .v-cart-item {
    display: flex;
  }
  }
</style>