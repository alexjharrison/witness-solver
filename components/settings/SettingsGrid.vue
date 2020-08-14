<template>
  <div class="d-flex justify-content-around align-items-center">
    <div>
      <p>Rows</p>
      <b-form-spinbutton
        vertical
        :min="1"
        :value="rows"
        @change="$emit('update', { rows: $event })"
      />
    </div>
    <div>
      <p>Columns</p>
      <b-form-spinbutton
        vertical
        :min="1"
        :value="columns"
        @change="$emit('update', { columns: $event })"
      />
    </div>
    <b-button variant="danger" size="lg">Clear</b-button>
  </div>
</template>

<script>
export default {
  props: {
    rows: { type: Number, required: true },
    columns: { type: Number, required: true },
  },
}
</script>

<style>
.tab-pane {
  height: 160px;
}
</style>
