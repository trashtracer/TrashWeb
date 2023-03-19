<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import { reactive, provide, computed } from 'vue'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  watch: {
    $route(to) {
      if (to.meta.title) {
        document.title = to.meta.title + " | TrashTracer"
      } else {
        document.title = 'TrashTracer'
      }
    }
  },
  setup() {

    const state = reactive({
      isPC: true
    })

    provide('state', state)

    const checkScreenWidth = () => {
      state.isPC = window.innerWidth >= 1000
    }

    checkScreenWidth()
    window.addEventListener('resize', checkScreenWidth)

    return {}
  }
}
</script>
<style>
body {
  margin: 0;

}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
}

:root {
  --primary-color: #00b066;
  --secondary-color: #49d469;
  --background-primary: #E5FCF5;
  --background-secondary: #2f2f2f;
  --text-black: #1f1f1f;
}

.content {
  display: flex;
  justify-content: center;
}


.center {
  width: 60%;
  box-sizing: border-box;
}

.center.state-mobile {
  width: 90%;
}
</style>
