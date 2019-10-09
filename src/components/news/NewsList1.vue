<template>
  <div>
    <p>
      count:{{ $store.getters.count }}
    </p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: "NewsList1",
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style scoped>

</style>
