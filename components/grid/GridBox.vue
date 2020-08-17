<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="box" :style="{ color }" @click="handleClick" v-html="text"></div>
</template>

<script>
export default {
  props: {
    row: { type: Number, required: true },
    col: { type: Number, required: true },
  },
  data() {
    return {
      text: '',
      color: 'black',
    }
  },
  mounted() {
    this.$nuxt.$on('reset', () => {
      this.text = ''
      this.color = 'black'
    })
  },
  methods: {
    handleClick() {
      const { tab, icon, color } = this.$store.state
      if (tab === 'Contents' && icon !== 'dot') {
        if (this.text) {
          this.text = ''
          return
        }
        this.color = color
        if (icon === 'flux') this.text = 'ⲗ'
        else if (icon === 'star') this.text = '✸'
        else if (icon === 'box') this.text = '&#9634'
      }
    },
  },
}
</script>

<style scoped>
.box {
  width: var(--box-size);
  height: var(--box-size);
  margin: auto;
  font-size: var(--box-size);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
