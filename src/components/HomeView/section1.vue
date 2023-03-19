<template>
    <div class="section">
        <div class="content">
            <div class="center" :class="mobileclass">
                <div class="banner">
                    <div>
                        <p class="title"><i class="fa-solid fa-recycle" v-if="state.isPC"></i><span class="bold">Trash</span>Tracer</p>
                        <p>by <router-link to="/team">our wonderful team</router-link></p>
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
    background-color: var(--primary-color);
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
    background: linear-gradient(to right, #B2FEFA, #0ED2F7);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: underline;
}

i {
    margin-right: 15px;
}
</style>
