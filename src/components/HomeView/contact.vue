<template>
    <div class="content">
        <div class="center" :class="mobileclass">
            <div class="pop" style="background-color: #5B8E7D ; color: white;">
                <div class="title" style="font-weight: bold;">Ready to team up?</div>
                <p style="text-align: center;">Then contact us using one of the following methods.</p>
                <div class="row" style="margin-top: 10px">
                    <div class="contact">
                        <i class="fa-solid fa-ban"></i>
                        No contacts are avaible yet.
                    </div>
                    <!--
            <div class="contact">
              <i class="fa-solid fa-envelope"></i>
              syswhite.commercial@gmail.com
            </div>
            -->
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
.title {
  text-align: center;
  font-size: 5.5vw;
  margin-top: 15px;
}

.pop {
  background-color: rgb(215, 240, 113);
  padding: 15px;
  border-radius: 8px;
  margin-top: 60px;
  margin-bottom: 60px;
  -webkit-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.05);
}

.banner {
  display: flex;
  align-items: center;
  font-size: 25px;
  height: 400px;
}

.title {
  font-size: 60px;
}



.contact {
  background-color: aliceblue;
  color: rgb(20, 20, 20);
  border-radius: 8px;
  padding: 10px;
}
</style>