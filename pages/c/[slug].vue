<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
<template>
    <div class="category">
        {{route}}
    </div>
</template>
<style lang="scss" scoped>
    .category {

    }
</style>