<template>
  <div >
    <div class="layerWrap" @click="cancelClick" :class="classObjectWrap">
      <div
        ref="popLayer"
        class="ly-in"
        :class="classObject"
        >
        <div
          v-if="!!title"
          class="ly-hd">
          {{ title }}
        </div>
        <slot name="ico"/>
        <div class="ly-body">
          <slot name="main"/>
        </div>
        <div
          class="ly-btn">
          <button
            v-if="!!cancelInput"
            type="button"
            class="btn2"
            @click="cancelClick">{{ cancelInput }}</button>
          <button
            v-if="!!confirmInput"
            type="button"
            class="btn2 custom_clr"
            @click="confirmClick">{{ confirmInput }}</button>
          <button
            v-if="!!deleteInput"
            type="button"
            class="btn2 custom_clr"
            @click="deleteClickClick">{{ deleteInput }}</button>
        </div>
      </div>
    </div>
    <div id="dim" @click="cancelClick"/>
  </div>
</template>

<script>
export default {
  name: 'lnPopup',
  props: {
    classObjectWrap: {
      type: String,
      default: null
    },
    classObject: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    cancelInput: {
      type: String,
      default: null
    },
    confirmInput: {
      type: String,
      default: null
    },
    cancelable: {
      type: Boolean,
      default: true
    },
    deleteInput: {
      type: String,
      default: null
    }
  },
  data () {
    return {
    }
  },
  created () {
    if (this.cancelable && typeof window !== 'undefined') {
      document.addEventListener('click', this.clickedOutside)
    }
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', this.clickedOutside)
    }
  },
  methods: {
    clickedOutside (event) {
      const el = event.target

      if (el === this.$refs.popLayer) return
      // All children from popLayer
      if (this.$refs.popLayer !== undefined) {
        const children = this.$refs.popLayer.querySelectorAll('*')
        for (const child of children) {
          if (el === child) {
            return
          }
        }
      }

      // this.$emit('cancelClick')
    },
    cancelClick () {
      this.$emit('cancelClick')
    },
    confirmClick () {
      this.$emit('confirmClick')
    },
    deleteClickClick () {
      this.$emit('deleteClick')
    }
  }
}
</script>
