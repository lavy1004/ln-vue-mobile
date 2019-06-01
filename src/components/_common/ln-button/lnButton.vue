<template>
  <button
    :class="classObject"
    :disabled="disabled"
    class="mu-btn"
    type="button"
    @click="onClick">{{ title }}
    <slot />
  </button>
</template>

<script>
export default {
  name: 'lnButton',
  props: {
    title: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    classObject: {
      type: Object,
      default: null
    },
    mode: {
      type:Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onClick () {
      this.$emit('onClick2')
    },
    changeMode () {
      this.mode = !this.mode
      let params = this.mode
      this.$store.commit('changeMode', params)
    }
  }
}
</script>
