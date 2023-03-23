<template>
    <div class="title">
        <h1>404 Not Found</h1>
        <p>Oops, looks like you took a wrong turn somewhere. Don't worry, we won't tell anyone. Just head back to the
            <RouterLink to="/">homepage</RouterLink> and pretend this never happened. We won't judge.
        </p>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
};
</script>

<style scoped>
.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: bold;
    width: 100%;
    color: white;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    background: #ff4545;
}

h1 {
    margin: 0;
}

p {
    font-size: 32px;
    width: 80%;
}

a {
    color: white;
}
</style>
