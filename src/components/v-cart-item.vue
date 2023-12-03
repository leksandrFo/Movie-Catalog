<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="cart_item_data.poster.previewUrl" alt="img">
    <div class="v-cart-item__info">
      <p class="v-cart-item__info__name">{{ cart_item_data.name }} ({{ cart_item_data.year }})</p>
      Страна:
      <p class="v-cart-item__info__country">{{ [...cart_item_data.countries].map((item)=>item.name).join(', ') }}</p>
      Жанр:
      <p class="v-cart-item__info__genre">{{ [...cart_item_data.genres].map((item)=>item.name).join(', ') }}</p>
      В главных ролях:
      <p class="v-cart-item__info__actors">{{ [...cart_item_data.persons].slice(0,5).map((item)=>item.name).join(', ') }}...</p>
      Описание:
      <p class="v-cart-item__info__description">{{ cart_item_data.description }}</p>
      <button class="v-cart-item__info__btn" @click="deleteFromCart">Удалить</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-cart-item",
  components: {

  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
  },
  watch: {},
  mounted() {
  }
}

</script>

<style lang="scss">
  .v-cart-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    text-align: left;
    &__image {
      max-width: 150px;
      max-height: 225px;
      margin-right: $margin*2;
    }
    &__info {
      align-items: flex-start;
      text-align: justify;
      > p {
        padding: 0;
        margin: 0;
        margin-bottom: 16px;
        margin-top: 8px;
      }
      &__name {
        margin: 0;
        font-size: 1.2em;
        font-weight: 600;
      }
      &__btn{
        float: right;	
        box-sizing: border-box;
        padding: 0 15px;
        outline: none;
        border: 1px solid crimson; 
        border-radius: 5px;
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        color: crimson;
        background-color: #fff;
        cursor: pointer;
        user-select: none;
        appearance: none;
        touch-action: manipulation;
      }
      &__btn:hover {
        color: #fff;
        background-color: crimson;
        border-color: crimson;
      }
      &__btn:active {
        color: #fff;
        background-color: maroon;
        border-color: maroon;
      }
      &__btn:disabled {
        pointer-events: none;
        opacity: 0.65;
      }
    }
  }
</style>