<template>
  <main>
    <settings-tabs
      :options="options"
      @update="options = { ...options, ...$event }"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      options: {
        rows: 4,
        columns: 4,
        isAddRemoving: true,
        color: 'aqua',
        icon: 'flux',
      },
    }
  },
}
</script>
