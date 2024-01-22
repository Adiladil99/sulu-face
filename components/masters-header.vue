<script setup>
import lists from "@/data/categories.json";
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import useStore from '~/stores/store';

const { requestUser } = useStore(); // use authenticateUser action from  auth store
const { authenticated, userData } = storeToRefs(useStore());

if (authenticated) {
  requestUser()
}

const authClient = ref(false);
const authMaster = ref(false);
const res = await useFetchBack("categories", {
  method: "get"
})
const categories = res?.value?.data


const closeAuth = () => {
  authClient.value = false;
  authMaster.value = false;
  document.documentElement.style.overflowY = "auto";
};
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header__top">
        <NuxtLink to="/" style="margin: 0; padding: 0">
          <img class="header__top-logo" src="~/assets/logo.png" />
        </NuxtLink>
        <div class="header__top-right">
          <NuxtLink to="/basket" class="tooltip-container">
            <span class="tooltip dshow">Корзина</span>
            <span class="text">
              <div class="borde-back">
                <div class="icon1">
                  <Icon name="uil:shopping-basket" color="white" size="20" />
                </div>
              </div>
            </span>
          </NuxtLink>
          <NuxtLink to="/favourites" class="tooltip-container">
            <span class="tooltip dshow">Избранные</span>
            <span class="text">
              <div class="borde-back">
                <div class="icon1">
                  <Icon name="uil:heart" color="white" size="20" />
                </div>
              </div>
            </span>
          </NuxtLink>
          <div @click="authClient = true" class="tooltip-container mshow">
            <span class="text">
              <div class="borde-back">
                <div class="icon1">
                  <Icon name="uil:user" color="white" size="20" />
                </div>
              </div>
            </span>
          </div>
          <div class="dshow">
            <Icon name="uil:location-point" color="#E85A4F" />
            Алматы
          </div>
          <NuxtLink
            to="/contacts"
            class="dshow"
            style="color: #ececec; text-decoration: none"
          >
            <p>Контакты</p>
          </NuxtLink>
          <template v-if="!authenticated">
            <div
              @click="authMaster = true"
              class="dshow"
              style="cursor: pointer;"
            >
              <p>Стать партнером</p>
            </div>
            <button @click="authClient = true" class="dshow">Войти</button>
          </template>
          <template v-else>
            <NuxtLink to="/profile">
              <button class="dshow">Профиль</button>
            </NuxtLink>
          </template>
        </div>
      </div>
      <div class="header-bottom dshow">
        <NuxtLink
          :to="`/c/${item.slug}`"
          v-for="item in categories"
          :key="item.id"
          >{{ item.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
  <AuthClient v-if="authClient" :is-open="authClient" @close="closeAuth" />
  <AuthMaster v-if="authMaster" :is-open="authMaster" @close="closeAuth" />
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  background: #100f0b;
  z-index: 999;
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
      width: 250px;
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
        background: #9e0e06;
        &:hover {
          cursor: pointer;
          background: rgb(154, 34, 26);
        }
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
      color: #fffffd;
    }
  }
  @media screen and (max-width: 992px) {
    padding: 8px 0;
    &__top {
      &-logo {
        width: 180px;
      }
      &-right {
        gap: 15px;
      }
    }
  }
  @media screen and (max-width: 340px) {
    &__top {
      &-logo {
        width: 150px;
      }
    }
  }
}
/* This is an example, feel free to delete this code */
.tooltip-container {
  z-index: 2;
  position: relative;
  background-color: #320020;
  background-image: linear-gradient(
    225deg,
    #320020 0%,
    #23001e 50%,
    #0e0d2f 100%
  );
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  /*padding: 0.7em 1.8em;*/
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
}
.tooltip-container .borde-back {
  width: 44px;
  height: 44px;
  background-color: #1e1c21;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: none;
  @media screen and (max-width: 500px) {
    width: 36px;
    height: 36px;
  }
}

.tooltip-container .icon1 {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
}

.tooltip {
  position: absolute;
  top: -2;
  z-index: 9;
  left: -60px; /* Altere a posição inicial para a esquerda, fora da tela */
  transform: translateX(
    -32%
  ); /* Usando translateX para controlar a transição da esquerda para a direita */
  width: 150px;
  height: 50px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s;
  border-radius: 50px;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  display: flex;
  align-items: center;
  padding-right: 16px;
  padding-left: 20px;
  color: #fff;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 800px;
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 0.6em;
  width: 0.6em;
  right: -0.2em; /* Mude para a direita */
  top: 50%; /* Altere o topo para o meio da tooltip */
  transform: translateY(-50%) rotate(45deg); /* Use translateY para centralizar verticalmente */
  background: var(--background);
}

.tooltip-container:hover .tooltip {
  right: 100%; /* Altere para a posição desejada (a direita) */
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  z-index: -10;
}
.tooltip-container:hover {
  transition: 0.5s linear;
}
</style>
