<template>
  <div
    class="box d-flex align-items-center justify-content-center"
    :style="{ borderColor: color }"
    :class="className"
    @click="$emit('update-icon', name)"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    name: { type: String, required: true },
    color: { type: String, required: true },
    selectedIcon: { type: String, required: true },
  },
  computed: {
    className() {
      return this.name === this.selectedIcon ? 'embiggen' : ''
    },
  },
}
</script>

<style scoped>
.box {
  font-size: 26px;
  color: #444;
  transition: all 0.3s ease-out;
  cursor: pointer;
  height: 40px;
  width: 40px;
  box-shadow: 3px 3px 5px #ccc;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
}
.embiggen {
  transform: scale(1.3);
  box-shadow: 3px 3px 5px #666;
}
</style>
