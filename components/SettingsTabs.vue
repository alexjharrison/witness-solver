<template>
  <b-tabs
    content-class="mt-3"
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
    <b-tab title="Modify Walls">
      <h3 class="my-5 text-center">Click a wall to modify it</h3>
    </b-tab>
    <b-tab title="Contents"
      ><settings-contents
        :selected-color="options.color"
        :selected-icon="options.icon"
        @update="$emit('update', $event)"
    /></b-tab>
    <b-tab class="my-5 text-center" title="Solve">
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
