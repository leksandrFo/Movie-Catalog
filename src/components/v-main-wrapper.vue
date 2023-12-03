<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'v-main-wrapper',
  props: {},
  data() {
    return {
      title: 'main wrapper'
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods: {},
  watch: {},
  mounted() {
    console.log('Hello')
  }

}

</script>
<style>
  .v-main-wrapper {
    justify-content: center;
    align-content: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>