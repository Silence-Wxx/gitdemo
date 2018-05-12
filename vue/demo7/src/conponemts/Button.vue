<template>
    <div>
        <button @click="say('world')">say hello world</button>
    </div>
</template>
<script>
    export default {
        methods: {
            say(msg) {
                alert("hello" + " " + msg);
            }
        }
    }
</script>
<style>

</style>

