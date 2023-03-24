<template>
    <div class="title">
        <h1>{{ player.name }}</h1>
        <p>The user profile page isn't finished yet.</p>
    </div>
</template>

<script>
export default {
    name: 'UserProfile',
    data() {
        return {
            player: []
        }
    },
    mounted() {
        this.getData()
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
}

p {
    font-size: clamp(20px, 4vw, 30px);
    width: 80%;
}
</style>
