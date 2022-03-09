<template>
  <div class="home">
    <Title title="Title test" />
    <Button text="Button test" primary />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from '@/components/Title.vue';
import Button from '@/components/Button.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Title,
    Button,
  },
});
</script>
