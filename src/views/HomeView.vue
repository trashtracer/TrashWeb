<template>
  <div class="home">
    <section1 />
    <motto />
    <features />
    <relate />
    <objectives/>
    <why />
    <contacts />
  </div>
</template>

<script>
import section1 from '../components/HomeView/section1.vue'
import motto from '../components/HomeView/motto.vue'
import features from '../components/HomeView/features.vue'
import relate from '../components/HomeView/relate.vue'
import objectives from '../components/HomeView/objectives.vue'
import why from '../components/HomeView/why.vue'
import contacts from '../components/HomeView/contact.vue'
export default {
  name: 'HomeView',
  components: {
    section1,
    motto,
    features,
    relate,
    objectives,
    why,
    contacts
  },
}
</script>

<style>
p {
  margin: 0;
}

.red {
    color:red;
}

.gold {
    color: #F19A3E;
}

.bold {
  font-weight: bold;
}

.row {
  display: flex;
  justify-content: space-around;
  overflow: visible;
}
</style>