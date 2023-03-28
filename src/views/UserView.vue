<template>
    <div class="title">
        <h1>{{ player.name }} <p class="tag" v-if="player.tagtext">{{ player.tagtext }}</p>
        </h1>
    </div>
    <div class="content">
        <div class="center" :class="mobileclass">
            <div class="container pointswrapper" :class="mobileclass">
                <p style="width: 100%; padding-left: 0.5vw; "><i class="fa-solid fa-chart-simple"></i> Statistics</p>
                <div class="pointscontainer">
                    <div class="points" style="margin-top: 0;">
                        <p class="pointstitle">Plastic</p>
                        <b>{{ player.plastic }}</b>
                    </div>
                    <div class="points">
                        <p class="pointstitle">Paper</p>
                        <b>{{ player.paper }}</b>
                    </div>
                    <div class="points">
                        <p class="pointstitle">Total</p>
                        <b>{{ player.total }}</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { inject, computed } from 'vue'
export default {
    name: 'UserProfile',
    data() {
        return {
            player: []
        }
    },
    setup() {
        const state = inject('state')
        const mobileclass = computed(() => {
            return state.isPC ? 'state-pc' : 'state-mobile'
        })

        return { state, mobileclass }
    },
    mounted() {
        (async () => {
            await this.getData();
            this.setColors();
        })();
    },
    methods: {
        async getData() {
            try {
                const response = await fetch(`https://api.trashtracer.lol/user/${this.$route.params.id}`);
                const data = await response.json();
                this.player = data;
            } catch (error) {
                console.error(error);
            }
        },
        async setColors() {
            var r = document.querySelector(':root')
            if (this.player.tagcolor == "rainbow") {
                r.style.setProperty('--tagcolor', "linear-gradient(to right, hsl(0, 80%, 50%), hsl(20, 80%, 50%), hsl(40, 80%, 50%), hsl(60, 79%, 43%), hsl(80, 79%, 41%), hsl(100, 80%, 50%), hsl(120, 80%, 50%), hsl(140, 80%, 50%), hsl(160, 80%, 50%)");
            } else {
                r.style.setProperty('--tagcolor', this.player.tagcolor);
            }

        }
    },
};
</script>

<style scoped>
.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: clamp(30px, 4vw, 60px);
    font-weight: bold;
    width: 100%;
    color: white;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    background: #000000;
}

h1 {
    margin: 0;
    display: flex;
    align-items: center;
}

.tag {
    margin-left: 20px;
    background: var(--tagcolor);
    border-radius: 8px;
    font-size: clamp(15px, 0.8vw, 30px);
    padding: 8px;
    animation: rainbow 18s ease infinite;
    background-size: 1800% 1800%;
}

@keyframes rainbow {
    0% {
        background-position: 0% 82%;
    }

    50% {
        background-position: 100% 19%;
    }

    100% {
        background-position: 0% 82%;
    }
}


p {
    font-size: clamp(20px, 4vw, 30px);
    width: 80%;
}

.container {
    background-color: #f0f0f0;
    border-radius: 15px;
    padding: 5px;
    margin: 15px;
}

.pointswrapper {
    width: 30%;
    padding: 5px;
}

.pointswrapper.state-mobile {
    width: 100%;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 15px;
}

.pointscontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.points {
    display: flex;
    align-items: center;
    background-color: #fff;
    color: var(--text-black);
    padding: 5px;
    border-radius: 15px;
    max-width: 100%;
    flex-shrink: 1;
    font-size: clamp(20px, 2vw, 30px);
    margin-top: 10px;
}

.pointstitle {
    width: 100%;
    padding-left: 5px;
}

.center.state-mobile {
    display: flex;
    justify-content: center;
}
</style>
