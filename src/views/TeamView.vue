<template>
  <div class="section">
    <div class="content">
      <div class="center" :class="mobileclass">
        <div class="banner">
          <div>
            <p class="title"><i class="fa-solid fa-ban" v-if="state.isPC"></i><span class="bold">505</span> Forbidden
            </p>
            <p class="subtitle">This page isn't finished yet.</p><br>
            <router-link to="/">Go home</router-link>
          </div>
        </div>
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
.section {
  background-color: #d73030;
}

.title {
  text-align: center;
  font-size: 60px;
  margin-top: 15px;
}

.title.state-mobile {
  text-align: left;
}

.bold {
  font-weight: bold;
}

.banner {
  display: flex;
  align-items: center;
  font-size: 25px;
  height: 400px;
  color: white;
}

a {
  background-color: white;
  padding: 10px;
  color: rgb(20, 20, 20);
  text-decoration: none;
  border-radius: 8px;
}

a:hover {
  background-color: rgb(240, 240, 240);
}

i {
  margin-right: 15px;
}
</style>
