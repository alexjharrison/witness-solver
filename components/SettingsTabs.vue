<template>
  <b-tabs content-class="mt-3" justified class="setttings">
    <b-tab title="Grid">
      <settings-grid
        :rows="options.rows"
        :columns="options.columns"
        @update="$emit('update', $event)"
      />
    </b-tab>
    <b-tab title="Walls"
      ><settings-wall
        :is-add-removing="options.isAddRemoving"
        @update="$emit('update', $event)"
    /></b-tab>
    <b-tab title="Contents"
      ><settings-contents
        :color="options.color"
        :icon="options.icon"
        @update="$emit('update', $event)"
    /></b-tab>
  </b-tabs>
</template>

<script>
export default {
  props: { options: { type: Object, required: true } },
}
</script>

<style scoped>
.settings > * {
  height: 2px;
  overflow: hidden;
}
</style>
