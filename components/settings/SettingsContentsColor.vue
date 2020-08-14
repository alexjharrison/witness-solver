<template>
  <div
    :class="className"
    :style="{ backgroundColor: color }"
    class="color-box mx-auto"
    @click="$emit('update', color)"
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

<style scoped>
.color-box {
  cursor: pointer;
  transition: all 0.3s ease-out;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  box-shadow: 3px 3px 5px #ccc;
  border-color: #777;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
}
.embiggen {
  width: 30px;
  height: 30px;
  box-shadow: 3px 3px 5px #666;
}
</style>
