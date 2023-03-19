<template>
    <div class="content">
        <div class="center" :class="mobileclass">
            <p class="title">So? What are the objectives of the game?</p>
            <div class="row" :class="mobileclass">
                <div class="column" :class="mobileclass">
                    <img src="../../assets/gameobj/1.png" v-if="state.isPC">
                    <p class="bold">Throw away trash in the correct bins</p>
                    <p>To promote responsible waste management, we reward players with XP for correctly disposing of their
                        trash.
                    </p>
                </div>
                <div class="column" :class="mobileclass">
                    <img src="../../assets/gameobj/2.png" v-if="state.isPC">
                    <p class="bold">Reuse trash/waste</p>
                    <p>Players will earn extra XP for reusing or repurposing items instead of throwing them away.</p>
                </div>
                <div class="column" :class="mobileclass">
                    <img src="../../assets/gameobj/3.png" v-if="state.isPC">
                    <p class="bold">We need your help</p>
                    <p>Help us in creating a fun game by installing smart bins and displays that show useful information.
                        Contact
                        us to get involved.</p>
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
    font-size: 5.5vw;
    font-weight: bold;
    margin-top: 30px;
}

.row {
    margin-top: 15px;
    justify-content: space-evenly;
}

.row.state-mobile {
    display: block;
}

.column {
    max-width: 30%;
}

.column.state-mobile {
    background-color: rgb(220, 220, 220);
    border-radius: 8px;
    margin-top: 10px;
    max-width: 100%;
    padding: 10px;
}

img {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
}

</style>