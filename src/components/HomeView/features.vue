<template>
    <div class="content">
        <div class="center pop" :class="mobileclass">
            <p class="title">our main features</p>
            <div class="row" :class="mobileclass">
                <div class="column" :class="mobileclass">
                    <div>
                        <b>Leaderboards</b><br>
                        <i class="fa-solid fa-ranking-star"></i> • Leaderboards for top recyclers.<br>
                        <i class="fa-solid fa-folder"></i> • Plastic/Paper/Both categories
                    </div>
                </div>
                <div class="column" :class="mobileclass">
                    <div>
                        <b>XP and perks</b><br>
                        <i class="fa-solid fa-explosion"></i> • Recycle to gain XP and level up.<br>
                        <i class="fa-solid fa-bomb"></i> • Unlock special perks, such as multipliers, etc.<br>
                    </div>
                </div>
                <div class="column" :class="mobileclass">
                    <div>
                        <b>Clans</b><br>
                        <i class="fa-solid fa-people-group"></i> • Create recycling clans.<br>
                        <i class="fa-solid fa-user-ninja"></i> • Compete to recycle the most against other clans.
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
.row {
    margin-top: 15px;
}

.title {
    text-align: center;
    font-size: 40px;
    margin-top: 0;
    font-weight: bold;
}

.pop {
    background-color: rgb(215, 240, 113);
    padding: 15px;
    border-radius: 8px;
    margin-top: 60px;
    margin-bottom: 60px;
    -webkit-box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 5px 15px 12px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
}

b {
    font-size: 20px;
}

.column {
    background-color: rgb(240, 240, 240);
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
}

.column.state-pc {
    margin-right: 10px;
    width: 33%;
    justify-content: center;
    text-align: center;
}

.row.state-mobile {
    display: block;
}

.column.state-mobile {
    text-align: center;
    margin-top: 10px;
    width: 100%;
}
</style>