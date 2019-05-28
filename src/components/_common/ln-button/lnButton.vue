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
    onClick: function () {
      this.$emit('onClick')
    }
  }
}
</script>
