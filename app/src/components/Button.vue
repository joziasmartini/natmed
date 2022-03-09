<template>
  <a
    href="#"
    :class="{
      button: true,
      primary: primary,
      secondary: secondary
    }">
    {{ text }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    text: String,
    primary: Boolean,
    secondary: Boolean,
  },
});
</script>

<style scoped lang="sass">
.button
  display: block
  margin: 0 auto
  font-size: 14px
  padding: 10px
  max-width: 300px
  color: white
  border-radius: 50px
  text-decoration: none

.primary
  background: green

.secondary
  background: white
</style>
