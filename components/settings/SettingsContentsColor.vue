<template>
  <div
    :class="className"
    class="color-box mx-auto"
    @click="selectedColor = color"
  />
</template>

<script>
export default {
  props: {
    color: { type: String, required: true },
    selectedColor: { type: String, required: true },
  },
  computed: {
    className() {
      return this.color === this.selectedColor ? 'embiggen' : ''
    },
  },
}
</script>
