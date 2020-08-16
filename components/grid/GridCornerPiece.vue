<template>
  <div
    class="grid-corner"
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
      color: 'black',
      backgroundColor: '#ccc',
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
        if (this.backgroundColor === '#ccc') this.backgroundColor = '#ffc107'
        else if (this.backgroundColor === '#ffc107')
          this.backgroundColor = '#28a745'
        else if (this.backgroundColor === '#28a745')
          this.backgroundColor = '#ccc'
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
.grid-corner {
  width: 12px;
  height: 12px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
