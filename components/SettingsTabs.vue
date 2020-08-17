<template>
  <b-tabs
    content-class="mt-3 mb-5"
    justified
    class="setttings"
    @input="$emit('update', { tab: tabs[$event] })"
  >
    <b-tab title="Grid">
      <settings-grid
        :rows="options.rows"
        :columns="options.columns"
        @update="$emit('update', $event)"
      />
    </b-tab>
    <b-tab title="Modify Walls" class="p-5">
      <h3 class="text-center">Click a wall to modify it</h3>
    </b-tab>
    <b-tab title="Contents"
      ><settings-contents
        :selected-color="options.color"
        :selected-icon="options.icon"
        @update="$emit('update', $event)"
    /></b-tab>
    <b-tab class="text-center p-5" title="Solve">
      <h3>Tap a wall to select it</h3>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  props: { options: { type: Object, required: true } },
  data() {
    return {
      tabs: ['Grid', 'Modify Walls', 'Contents', 'Solve'],
    }
  },
}
</script>

<style scoped>
.settings > * {
  height: 200px;
  overflow: hidden;
}
</style>
