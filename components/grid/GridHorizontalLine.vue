<template>
  <div
    class="horizontal-line"
    :style="{ backgroundColor, color }"
    @click="handleClick"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      backgroundColor: '#ccc',
      color: 'black',
    }
  },
  mounted() {
    this.$nuxt.$on('reset', () => {
      this.text = ''
      this.color = 'black'
      this.backgroundColor = '#ccc'
    })
  },
  methods: {
    handleClick() {
      const { tab, icon, color } = this.$store.state
      if (tab === 'Grid') {
      } else if (tab === 'Modify Walls') {
        this.backgroundColor =
          this.backgroundColor === 'black' ? '#ccc' : 'black'
      } else if (tab === 'Contents' && icon === 'dot') {
        this.color = color
        this.text = this.text ? '' : '●'
      } else if (tab === 'Solve') {
        if (this.backgroundColor === '#ccc') this.backgroundColor = 'lightgreen'
        else if (this.backgroundColor === 'lightgreen')
          this.backgroundColor = 'lightcoral'
        else if (this.backgroundColor === 'lightcoral')
          this.backgroundColor = '#ccc'
      }
    },
  },
}
</script>

<style scoped>
.horizontal-line {
  width: var(--box-size);
  height: 12px;
  background-color: lightgreen;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
