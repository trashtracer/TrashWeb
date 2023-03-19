<template>
    <div class="nav">
        <div class="container" :class="mobileclass">
            <div class="left">
                <RouterLink to='/' class="logo"><i class="fa-solid fa-recycle" :class="mobileclass"></i>
                    <c :class="{ 'active': isCurrentRoute('/') }">TrashTracer</c>
                </RouterLink>
            </div>
            <div class="right">
                <RouterLink to='/download'><i class="fa-solid fa-arrow-down downloadtext"></i>
                    <c v-if="state.isPC" class="downloadtext">Download the app</c>
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="mobilealert" v-if="!state.isPC">
        Hey user! it seems like you are viewing from a mobile device, please switch to a desktop/laptop for a better experience.
    </div>
</template>

<script>
import { inject, computed } from 'vue'
export default {
    name: 'navbar',
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
.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: var(--background-secondary);
}

.container {
    display: flex;
    font-size: 18px;
    align-items: center;
    justify-content: space-between;

}

.container.state-pc {
    width: 60%;
}

.container.state-mobile {
    width: 95%;
}

i {
    vertical-align: middle;
    padding-right: 10px;
}

i.downloadtext {
    margin: 0;
    padding-right: 5px;
    padding-left: 5px;
}

a {
    text-decoration: none;
    background-color: white;
    color: var(--text-black);
    border-radius: 8px;
    padding: 10px;
}

.logo {
    color: white;
    text-decoration: none;
    background: none;
    font-weight: 500;
    font-size: 25px;
}

.active {
    color: var(--primary-color);
}

.downloadtext {
    margin-left: 10px;
}

.mobilealert {
    text-align: center;
    background-color: orange;
    padding: 5px;
}
</style>