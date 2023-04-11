<template>
    <div class="wropper">
        <ul>
            <li class="logo">Marico</li>
            <li v-for="item in links" class="link">
                <router-link class="links" :to="item.href">{{ item.name }}</router-link>
            </li>
            <li class="enter">
                <router-link class="links" to="/login">login</router-link>
                <span><router-link class="links" to="/">Sign Up</router-link></span>
            </li>
        </ul>
    </div>
</template>
<script setup>

const props = defineProps({
    links: {
        type: Array
    }
})

</script>
<style scoped>
.wropper {
    padding-top: 10px;
    align-items: center;
}

.links:active {
    color: red;
}

li {
    list-style: none;
}

.logo {
    font-size: 30px;
}

.links {
    text-decoration: none;
    font-size: 20px;
    color: #fff;
}

ul {
    display: flex;
    justify-content: space-between;
}

.link {
    display: flex;
    gap: 10px;
}

.enter {
    display: flex;
    align-items: center;
    gap: 10px;
}

.enter span {
    padding: 10px 50px;
    border-radius: 7px;
    background-color: #306EF7;
}
</style>