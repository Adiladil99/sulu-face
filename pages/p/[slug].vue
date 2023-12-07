<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
<template>
    <div class="product">
        {{route}}
    </div>
</template>
<style lang="scss" scoped>
    .product {

    }
</style>