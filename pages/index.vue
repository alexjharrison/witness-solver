<template>
  <main>
    <settings-tabs
      :options="options"
      @update="options = { ...options, ...$event }"
    />
    <h1>{{ options.size }}</h1>
    <div
      v-for="row in options.rows"
      :key="-row"
      class="d-flex justify-content-center align-items-center flex-column"
    >
      <div class="d-flex">
        <div v-for="col2 in options.columns" :key="col2 * 100" class="d-flex">
          <grid-corner-piece v-if="col2 === 1" />
          <grid-horizontal-line />
          <grid-corner-piece />
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div v-for="column in options.columns" :key="column" class="d-flex">
          <grid-vertical-line v-if="column === 1" />
          <grid-box :row="row" :col="column" />
          <grid-vertical-line />
        </div>
      </div>
      <div v-if="row === options.rows" class="d-flex">
        <div v-for="col2 in options.columns" :key="col2 * 100" class="d-flex">
          <grid-corner-piece v-if="col2 === 1" />
          <grid-horizontal-line />
          <grid-corner-piece />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      options: {
        rows: 4,
        columns: 4,
        tab: 'Grid',
        color: 'aqua',
        icon: 'flux',
      },
    }
  },
  watch: {
    options: {
      deep: true,
      handler(values) {
        this.calcSize()
        this.updateStore(values)
      },
    },
  },
  mounted() {
    window.addEventListener('resize', this.calcSize)
    this.calcSize()
  },
  methods: {
    calcSize() {
      const maxWidth = window.innerWidth / this.options.columns - 18
      const maxHeight = (window.innerHeight - 325) / this.options.rows - 20
      document.documentElement.style.setProperty(
        '--box-size',
        Math.min(maxWidth, maxHeight) + 'px'
      )
    },
    updateStore(options) {
      this.$store.commit('setState', options)
    },
  },
}
</script>
