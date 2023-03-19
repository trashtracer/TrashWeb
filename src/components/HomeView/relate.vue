<template>
  <div class="content">
    <div class="center" :class="mobileclass">
      <div class="container" :class="mobileclass">
        <p class="sidetitle" :class="mobileclass">How does this relate to reducing waste?</p>
        <p class="text" :class="mobileclass">We believe that presenting recycling and waste reduction as a game can engage
          people
          of all ages and backgrounds. Our alternate-reality-game aims to reduce waste by encouraging people to
          reuse
          materials to create new things. By making it fun and engaging, we hope to inspire more people to take an
          active role in creating a cleaner, more sustainable world.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
export default {
  setup() {
    const state = inject('state')
    const mobileclass = computed(() => {
      return state.isPC ? 'state-pc' : 'state-mobile'
    })

    return { state, mobileclass }
  },
}
</script>

<style scoped>
.center {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  height: 400px;
  background-color: rgb(113, 240, 221);
  -webkit-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.05);
  background-image: url('https://i.imgur.com/f5DdGL8.png');
  background-position: calc(100% + 300px) calc(100% + 350px);
  background-repeat: no-repeat;
}

.center.state-mobile {
  justify-content: center;
}
.sidetitle {
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  color: rgb(20, 20, 20);
}

.text {
  max-width: 60%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.text.state-mobile {
  max-width: 100%;
}

.container {
  margin-left: 50px;
}

.container.state-mobile {
  margin: 0;
  text-align: center;
}
</style>
