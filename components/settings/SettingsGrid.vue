<template>
  <div>
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
      <b-button variant="danger" size="lg" @click="$nuxt.$emit('reset')"
        >Clear</b-button
      >
    </div>
    <h3 class="text-center">Click the start and end points</h3>
  </div>
</template>

<script>
export default {
  props: {
    rows: { type: Number, required: true },
    columns: { type: Number, required: true },
  },
  mounted() {
    this.$nuxt.$on('reset', () => {
      this.$emit('update', { rows: 4 })
      this.$emit('update', { columns: 4 })
    })
  },
}
</script>

<style>
.tab-pane {
  height: 160px;
}
</style>
