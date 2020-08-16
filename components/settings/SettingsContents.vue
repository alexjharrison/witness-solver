<template>
  <div class="text-center contents">
    <h3 class="mb-3">Click to add item into box</h3>
    <div
      class="item-list d-flex align-items-center justify-content-between p-3"
    >
      <p class="mb-0">Choose Item:</p>
      <settings-contents-icon
        v-for="icon in icons"
        :key="icon.name"
        class="mx-auto"
        v-bind="icon"
        :selected-icon="selectedIcon"
        :color="selectedColor"
        @update-icon="$emit('update', { icon: $event })"
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
        @update="$emit('update', { color: $event })"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedColor: { type: String, required: true },
    selectedIcon: { type: String, required: true },
  },
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
    }
  },
}
</script>

<style scoped>
.color-row {
  height: 35px;
}
p {
  font-size: 20px;
}
</style>
