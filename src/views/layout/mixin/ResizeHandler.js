import store from '@/store'

const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
//   watch: {
//     $route(route) {
//       if (this.device === 'mobile' && this.sidebar.opened) {
//         // store.dispatch('closeSideBar', { withoutAnimation: false })
//       }
//     }
//   },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobile()  
      store.commit('SET_MOBILE', isMobile)  
  },
  methods: {
    isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile()
          console.log(isMobile)
          store.commit('SET_MOBILE', isMobile)
      }
    }
  }
}
