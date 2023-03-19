<template>
    <div class="content">
        <div class="center" :class="mobileclass">
            <p style="text-align: right; font-size: 5.5vw; font-weight: bold; margin-top: 30px;">But why should you <br><u
                    style="color: var(--primary-color);">implement</u> our <br>
                <c style="color: purple;">game</c> into
                <br>your
                <c style="color: #4287f5;">{{ building }}</c>?
            </p>
        </div>
    </div>
    <div class="content" style="margin-top: 30px">
        <div class="center" :class="mobileclass">
            <div class="row" :class="mobileclass">
                <div class="column" :class="mobileclass">
                    <i class="fa-solid fa-chess-king small-icon" v-if="state.isPC"></i>
                    <div class="text">
                        <p style="font-weight: bold;">Challenge</p>
                        <p>A little fun challenge for the people.</p>
                    </div>
                </div>
                <div class="column" :class="mobileclass">
                    <i class="fa-brands fa-github-alt small-icon" v-if="state.isPC"></i>
                    <div class="text">
                        <p style="font-weight: bold;">Open source</p>
                        <p>All the code that runs all of this is on github.</p>
                    </div>
                </div>
                <div class="column" :class="mobileclass">
                    <i class="fa-solid fa-face-smile small-icon" v-if="state.isPC"></i>
                    <div class="text">
                        <p style="font-weight: bold;">Cleanliness</p>
                        <p>This can improve drastically your environment clenliness.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { inject, computed } from 'vue'
export default {
    data() {
        return {
            building: 'building'
        }
    },
    mounted() {
        const words = ['building', 'office', 'school', 'store', 'shopping centre']
        setInterval(() => {
            this.building = words[(Math.floor(Math.random() * words.length) + 1) - 1]
        }, 5000)
    },
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
.column {
    display: flex;
    align-items: center;
    width: auto;
    margin-right: 10px;
}

.row.state-mobile {
    display: block;
}
.column.state-mobile {
    background-color: rgba(147, 69, 69, 0.7);
    color: white;
    padding: 10px;
    margin-top: 10px;
    border-radius: 8px;
}
.small-icon {
    background-color: rgb(200, 200, 200);
    padding: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 30px;
    margin-right: 10px;
    display: inline-block;
}
</style>