<template>
  <div class="d-flex walls-tab">
    <div class="m-auto text-center">
      <h3 class="mb-3">Click a wall to modify it</h3>
      <b-form-radio-group
        size="lg"
        :checked="isAddRemoving"
        @change="$emit('update', { isAddRemoving: $event })"
      >
        <b-form-radio :value="true">Add/Remove</b-form-radio>
        <b-form-radio :value="false">Select/Unselect</b-form-radio>
      </b-form-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAddRemoving: { type: Boolean, required: true },
  },
}
</script>
