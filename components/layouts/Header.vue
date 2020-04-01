<template>
  <header class="common_layout flex">
    <h1><nuxt-link to="/">inomady</nuxt-link></h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: $blue;

  a {
    letter-spacing: 0;
    font-size: 28px;
    color: #fff;
  }
}

@media screen and (max-width: 768px) {
  header {
    height: 50px;
    a {
      font-size: 22px;
    }
  }
}
</style>
