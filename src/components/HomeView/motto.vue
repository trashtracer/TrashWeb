<template>
    <div class="content" >
        <div class="center" :class="mobileclass">
            <p>We hate <c class="red">waste</c>.<br>
                So we created a <c class="gold">recycling game</c> for the people.
            </p>
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
p {
    font-size: 5.5vw;
    font-weight: bold;
    margin-top: 30px;
}
</style>