<template>
    <div class="wroopper">
        <div class="text">
            <h1>Or</h1>
            <p>Sign up with...</p>
        </div>
        <div class="loginPart">
            <div v-for="item in datas" class="footerLOgin">
                <p class="p">{{ item.name }}</p>
                <!-- <p>asas</p> -->
            </div>
        </div>
        <div class="end">
            <p>Already have an account? Please Log in.</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    datas: {
        type: Array
    }
})
</script>
<style scoped>
.wroopper {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
}

.footerLOgin {
    width: 454px;
    padding: 25px 0;
    border-radius: 10px;
    border: 2px solid #fff;
    display: flex;
    align-items: center;
    gap: 20px;
}

.p {
    padding-left: 50px;
}

.loginPart {
    display: flex;
    justify-content: space-evenly;
    margin: 50px 0;
}

.text {
    text-align: center;
    margin-right: 150px;
}

.end {
    text-align: center;
    margin-right: 140px;
    padding-bottom: 10px;
}
</style>