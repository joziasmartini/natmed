<template>
  <label :for="id">
    {{ labelText }}
    <input
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :id="id"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    id: String,
    labelText: String,
    modelValue: String,
  },
});
</script>

<style scoped lang="sass">

</style>
