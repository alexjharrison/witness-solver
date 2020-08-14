<template>
  <div class="text-center contents">
    <h3 class="mb-3">Click to add item into box</h3>
    <div
      class="item-list d-flex align-items-center justify-content-between mb-2 p-3"
    >
      <p class="mb-0">Choose Item:</p>
      <settings-contents-icon
        v-for="icon in icons"
        :key="icon.name"
        class="mx-auto"
        v-bind="icon"
        :color="selectedColor"
        :selected-icon="selectedIcon"
        @update-icon="selectedIcon = $event"
      />
    </div>
    <div
      class="color-row d-flex align-items-center justify-content-between p-3"
    >
      <p class="mb-0">Choose Color:</p>
      <settings-contents-color
        v-for="color in colors"
        :key="color"
        :color="color"
        :selected-color="selectedColor"
        @update="$emit('update', { selectedColor: $event })"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'white',
        'lightgray',
        'black',
        'aqua',
        'blue',
        'lightgreen',
        'green',
        'pink',
        'plum',
        'purple',
        'yellow',
        'orange',
      ],
      icons: [
        {
          text: 'ⲗ',
          name: 'flux',
        },
        {
          text: '✸',
          name: 'star',
        },
        {
          text: '●',
          name: 'dot',
        },
        {
          text: '◼',
          name: 'box',
        },
      ],
      selectedColor: 'white',
      selectedIcon: 'box',
    }
  },
  methods: {
    getStyle(color) {
      const size = color === this.selectedColor ? '30px' : '20px'
      return { backgroundColor: color, width: size, height: size }
    },
  },
}
</script>

<style scoped>
.color-row {
  height: 35px;
}
.color-box {
  border: 1px solid #777;
  cursor: pointer;
  transition: all 0.3s ease-out;
  border-radius: 5px;
}
p {
  font-size: 20px;
}
</style>
