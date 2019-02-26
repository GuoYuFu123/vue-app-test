import store from '@/store'

const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const rectWidth = this.isMobileHandle()  
      store.commit('SET_MOBILE', rectWidth)  
  },
  methods: {
      isMobileHandle() {
      const rect = body.getBoundingClientRect()
      return rect.width
    },
    resizeHandler() {
      if (!document.hidden) {
          const rectWidth = this.isMobileHandle()
          store.commit('SET_MOBILE', rectWidth)
      }
    }
  }
}
