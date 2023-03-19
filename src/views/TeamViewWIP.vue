<template>
  <div class="content">
    <div class="center" :class="mobileclass">
      <div class="title">
        Our <u style=" background: -webkit-linear-gradient(left, #bc4e9c, #f80759); -webkit-background-clip: text;
                          -webkit-text-fill-color: transparent; text-decoration: underline; ">wonderfull</u> team.
        <p style="font-size: 2vw;">(Consisting entirely of 14-year-olds.)</p>                  
      </div>
      <div class="separator">🚀 Developers <p class="subtitle">The ones that make the stuff drawn by designers reality.</p>
      </div>
      <div class="row">
        <div class="card special">
          <img src="../assets/pfps/syswhite_pfp.png">
          <p class="text">SysWhite</p>
          <p class="skills">Backend, Frontend, Server</p>
          <div class="links">
            <a href="https://github.com"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
        <div class="card">
          <img src="../assets/pfps/peepo_pfp.png">
          <p class="text">Resonancee</p>
          <p class="skills">Backend</p>
          <div class="links">
            <a href="https://github.com"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>

      </div>
      <div style="margin-top: 50px" />
      <div class="separator">📷 Designers <p class="subtitle">The ones that think and draw the stuff you see.</p>
      </div>
      <div class="row">
        <div class="card">
          <img src="../assets/pfps/peepo_pfp.png">
          <p class="text">Peepo</p>
          <p class="skills">Designer</p>
          <div class="links">
            <a href="https://github.com"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      <div class="separator">🙏 Special thanks <p class="subtitle">People/Organizations that helped making TrashTracer reality.</p>
      </div>
      <div class="row">
        <a href="http://www.iisgalilei.eu/" target="_blank" style="text-decoration: none;">
        <div class="card">
          <p class="text">Scuola IISS Galileo Galilei</p>
          <p class="skills">Raspberry pi 3b giver</p>
        </div>
        </a>
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
  font-size: 5vw;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
}

.separator {
  text-align: center;
  font-size: 2.4rem;
  margin-top: 50px
}

.card {
  -webkit-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 10px;
  max-width: 350px;
  display: block;
}

.special {
  -webkit-box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 0px 5px 15px 12px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 0px 5px 15px 12px rgba(0, 0, 0, 0);
}

img {
  width: 350px;
  height: 400px;
  border-radius: 8px;
}

p {
  margin: 0;
}

.subtitle {
  font-size: 1.2rem;
}

.text {
  font-size: 20px;
  font-weight: bold;
}

.skills {
  font-size: 15px;
}

a {
  font-size: 30px;
  color: black;
  margin-right: 10px;
}

.row {
  margin-top: 25px;
  display: flex;
  justify-content: space-evenly;
}
</style>
