<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item__description">
      <p>{{ movie_data.shortDescription }}</p>
    </div>
    <img class="v-catalog-item__image" :src="movie_data.poster.previewUrl" alt="img">
    <p class="v-catalog-item__name">{{ movie_data.name || movie_data.alternativeName }} ({{ movie_data.year }})</p>
    <p class="v-catalog-item__genre">Жанр: {{ [...movie_data.genres].map((item)=>item.name).join(', ') }}</p>
    <div class="v-catalog-item__add_to_cart">
      <button class="v-catalog-item__add_to_cart__btn"
        v-bind:class="{active: $store.state.cartIds.includes(movie_data.id)}"
        @click="buttonFn(), changeClass()">{{ $store.state.cartIds.includes(movie_data.id) ? 'Удалить' : 'Буду смотреть' }}
      </button>  
    </div>
    
  </div>
</template>

<script>

export default {
  name: "v-catalog-item",
  props: {
    movie_data: {
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
  methods: {
    buttonFn(){
      this.isActive ? this.$emit('removeFromCart', this.movie_data) : this.$emit('addToCart', this.movie_data)
    },
    changeClass() {
      this.isActive = !this.isActive
    }
  },
}
</script>

<style lang="scss">
  .v-catalog-item {
    min-width: 225px;
    min-height: 430px;
    position: relative;
    display: flex;
    align-items: center;
    flex-basis: 25%;
    flex-direction: column;
    align-self: stretch;
    box-shadow: 0 0 8px 0 #e0e0e0;
    overflow: hidden;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__description {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-self: flex-start;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.4s ease-in-out;
      color: #fff;
      transform: translate(0px, -250px) rotate(0deg);
      opacity: 0;
      p {
        padding: 0 $padding*2;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 28;
        -webkit-box-orient: vertical;
      }
    }
    &__image {
      max-width: 200px;
    }
    &__name {
      font-weight: 600;
    }
    &__genre {
      padding: 0;
      margin-top: 0;
      font-size: 12px;
    }
    &__add_to_cart {
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: flex-end;
      &__btn {
        position: relative;
        display: inline-block;	
        box-sizing: border-box;
        padding: 0 15px;
        outline: none;
        border: 1px solid green; 
        border-radius: 5px;
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        color: green;
        background-color: #fff;
        cursor: pointer;
        user-select: none;
        appearance: none;
        touch-action: manipulation;
      }
      &__btn:hover {
        color: #fff;
        background-color: green;
        border-color: green;
      }
      &__btn:active {
        color: #fff;
        background-color: darkgreen;
        border-color: darkgreen;
      }
      &__btn:disabled {
        pointer-events: none;
        opacity: 0.65;
      }
      .active {
        border: 1px solid Crimson;
        color: Crimson;
      }
      .active:hover {
        color: #fff;
        background-color: Crimson;
        border-color: Crimson;
      }
      .active:active {
        color: #fff;
        background-color: maroon;
        border-color: maroon;
      }

    }
  }

  .v-catalog-item:hover {
    .v-catalog-item__description {
      opacity: 1;
      transform: translate(0px, 0px) rotate(0deg);
    }
  }

</style>