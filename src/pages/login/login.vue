<template >
    <div class="container">
        <div class="sing">
            <h1>Login</h1>
            <p>Fill all field for create an account.</p>
        </div>
        <div class="partInput">
            <form class="form">
                <input class="input" type="text" placeholder="User name">
                <input class="input" type="password" placeholder="password">
                <button @click="btnClick" class="btn">Login</button>
            </form>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const btnClick = (e) => {
    e.preventDefault()
    router.push({ name: 'home' })
}
</script>
<style scoped>
.partInput {
    display: flex;
    justify-content: center;
    margin-top: 250px;

}

.form {
    width: 900px;
    display: flex;
    flex-wrap: wrap;
}

.input {
    padding: 15px 20px;
    outline: none;
    width: 50%;
    font-size: 15px;
    background-color: black;
    outline: none;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
}

.sing {
    text-align: center;
    margin-left: -150px;
    margin-top: 100px;
}

.sing h1 {
    font-size: 50px;
}

.sing p {
    font-size: 20px;
}

.input:focus {
    background-color: #fafcf5;
}

.btn {
    width: 100%;
    cursor: pointer;
    background-color: blue;
    color: #fff;
    outline: none;
    border-radius: 10px;
    border: none;
    padding: 15px 0;
    /* margin-bottom: 10px; */
}
</style>