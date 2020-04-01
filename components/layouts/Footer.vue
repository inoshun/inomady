<template>
  <footer class="common_layout flex">
    <span>Copyright © 2020 inomady All Rights Reserved.</span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: $gray;

  span {
    letter-spacing: 0;
    font-size: 13px;
  }
}

@media screen and (max-width: 768px) {
  footer {
    height: 40px;

    span {
      font-size: 11px;
    }
  }
}
</style>
