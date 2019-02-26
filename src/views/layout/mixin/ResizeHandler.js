import store from '@/store'

const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobileHandle()  
      store.commit('SET_MOBILE', isMobile)  
  },
  methods: {
      isMobileHandle() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH   //1027
    },
    resizeHandler() {
      if (!document.hidden) {
          const isMobile = this.isMobileHandle()
          store.commit('SET_MOBILE', isMobile)
      }
    }
  }
}
