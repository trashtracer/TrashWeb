<template>
    <p>Made with 💖 by <RouterLink to="/team">our team</RouterLink><br>&copy; 2023 TrashTracer. All rights reserved.</p>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style scoped>
p {
    margin: 0;
    background-color: var(--background-secondary);
    color: white;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    bottom: 0;
}

a {
    color: white;
}
</style>