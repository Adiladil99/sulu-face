<script setup>
import lists from "@/data/categories.json"
</script>

<template>
  <div class="header">
    <div class="container">
        <div class="header__top">
            <p class="header__top-logo">masters.kz</p>
            <div class="header__top-right">
                <div>
                    <Icon name="uil:location-point" color="rgb(78, 7, 114)" />
                    Алматы
                </div>
                <p>Контакты</p>
                <button>Войти</button>
            </div>
            
        </div>
        <div class="header-bottom">
            <NuxtLink :to="`/c/${item.slug}`" v-for="item in lists" :key="item.id">{{ item.title }}</NuxtLink>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
    position: sticky; 
    background: white;
    top: 0;
    padding: 14px 0;
    font-weight: 500;
    border-bottom: 1px solid rgb(193, 191, 191, 0.4);
    .container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
    }
    &__top {
        font-size: 14px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-logo {
            font-size: 28px;
            font-weight: 500;
        }
        &-right {
            display: flex;
            align-items: center;
            gap: 32px;
            div {
                display: flex;
                align-items: center;
            }
            button {
                padding: 8px 24px;
                outline: none;
                border: none;
                border-radius: 12px;
                color: white;
                font-size: 14px;
                background: rgb(78, 7, 114);
            }
        }
    }
    &-bottom {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
            text-decoration: none;
            font-size: 14px;
            color: #252525;
        }
    }
}
</style>
