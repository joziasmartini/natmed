<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Title',
  props: {
    title: String,
  },
});
</script>

<style scoped lang="sass">
.title
  font-size: 40px
</style>
