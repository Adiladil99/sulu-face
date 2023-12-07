<script setup>
import useStore from "~/stores/store";

const useStoreData = useStore()
const favourites = useStoreData.getFavourites()
</script>
<template>
    <div class="favourites">
        <div class="titlepage">Избранные</div>
        <div class="favourites__list">
            <div class="favourites__list-item" v-for="(item, index) in favourites" :key="index">
                <cart-block :data="item" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .favourites {
        padding-bottom: 40px;
        &__list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            align-items: stretch;
            &-item {
                position: relative;
                width: calc(25% - 15px);
            }
            @media screen and (max-width: 992px) {
                gap: 18px;
                &-item {
                    width: calc(calc(100% / 3) - 12px);
                }
            }
            @media screen and (max-width: 992px) {
                &-item {
                    width: calc(50% - 9px);
                }
            }
            @media screen and (max-width: 992px) {
                &-item {
                    width: 100%;
                }
            }
        }
    }
</style>