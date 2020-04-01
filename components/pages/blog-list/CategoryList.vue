<template>
  <ul class="flex">
    <CategoryListItem
      v-for="category in categories"
      :key="category.category.id"
      :id="category.category.id"
    />
  </ul>
</template>

<script>
import CategoryListItem from "./CategoryListItem";

export default {
  name: "category-list",
  props: ["categories"],
  components: {
    CategoryListItem
  },
};
</script>

<style lang="scss" scoped></style>
