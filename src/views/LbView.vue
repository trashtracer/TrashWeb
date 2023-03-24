<template>
    <div class="content rainbow">
        <div class="title">
            <div>
                <p>Leaderboard</p>
                <div class="selector">
                    <button style="border-bottom-right-radius: 0; border-top-right-radius: 0;" class="selectorbutton"
                        :class="{ active: selected === 'plastic' }" @click="changeSelected('plastic')">Plastic</button>
                    <button style="border-radius: 0;" class="selectorbutton" :class="{ active: selected === 'paper' }"
                        @click="changeSelected('paper')">Paper</button>
                    <button style="border-bottom-left-radius: 0; border-top-left-radius: 0;" class="selectorbutton"
                        :class="{ active: selected === 'tot' }" @click="changeSelected('tot')">All</button>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="center" :class="mobileclass">
            <div class="container">
                <div class="player guide">
                    <div class="left">
                        <p>Rank</p>
                        <p>Name</p>
                    </div>
                    <div class="right">
                        <p>Plastic</p>
                        <p>Paper</p>
                        <p>Total</p>
                    </div>
                </div>
                <div class="error" v-if="error">
                    <i class="fa-solid fa-ban"></i>
                    <p>Something is wrong with the TrashAPI, please notify an admin</p>
                </div>
                <div class="player" v-for="(player, index) in players" :key="index">

                    <div class="left">
                        <p>#{{ index + 1 }}</p>
                        <RouterLink :to="`/user/${player.id}`" class="userlink">
                            <p>{{ player.name }}</p>
                        </RouterLink>
                    </div>
                    <div class="right">
                        <p>{{ player.plastic }}</p>
                        <p>{{ player.paper }}</p>
                        <p>{{ player.tot }}</p>
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
            players: [],
            error: false,
            selected: 'tot'
        }
    },
    created() {
        this.getData()
    },
    methods: {
        async getData() {
            try {
                this.players = [];
                const response = await fetch(`https://api.trashtracer.lol/lb/${this.selected}`);
                const data = await response.json();
                this.error = false;
                this.players = data;
            } catch (error) {
                this.error = true;
                console.error(error);
            }
        },
        changeSelected(a) {
            this.selected = a
            this.getData()
        }
    },
    setup() {
        const state = inject('state')
        const mobileclass = computed(() => {
            return state.isPC ? 'state-pc' : 'state-mobile'
        })
        return { state, mobileclass }
    },
    computed: {
        isCurrentRoute() {
            return (route) => {
                return this.$route.path === route
            }
        }
    },
}
</script>

<style scoped>
.rainbow {
    background: rgb(63, 94, 251);
    background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
}

.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: clamp(50px, 4vw, 60px);
    font-weight: bold;
    width: 100%;
    color: white;
    padding-top: 50px;
    padding-bottom: 50px;
}

.center.state-mobile {
    width: 95%;
}

.container {
    background-color: white;
    padding: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 15px;
    -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.3);
}


.player {
    display: flex;
    justify-content: space-between;
    background: rgba(63, 94, 251, 0.295);
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: var(--text-black);
    border-radius: 15px;
    text-align: center;
}

.error {
    background: rgba(251, 63, 63, 0.295);
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: var(--text-black);
    border-radius: 15px;
    text-align: center;
}
.player.guide {
    background: none;
}

.left {
    display: flex;
    width: 150px;
    justify-content: space-between;
}

.right {
    display: flex;
    width: 200px;
    justify-content: space-around;
}

.selectorbutton,
button {
    background-color: none;
    border-radius: 15px;
    border: none;
    cursor: pointer;
}

.selectorbutton.active {
    background-color: #6858da;
    color: white;
}

.selector {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 15px;
    height: 50px;
    background-color: white;
    -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
}

.selectorbutton {
    width: 33%;
}

.userlink {
    color: var(--text-black);
}
</style>