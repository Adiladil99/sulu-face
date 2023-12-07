<template>
  <div class="footer">
    <div class="footer__top container">
      <div class="footer__top-logo">
        <img class="header__top-logo" src="~/assets/logo.png" />
        <span>Сервис онлайн бронирования в сфере красоты и здоровья!</span>
      </div>
      <div class="footer__top-list">
        <div>
          <NuxtLink to="/contacts">Контакты</NuxtLink>
          <NuxtLink to="/site-map">Карта сайта</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/privacy-policy">Политика конфиденциальности</NuxtLink>
          <NuxtLink to="/terms-of-use">Пользовательское соглашение</NuxtLink>
        </div>
      </div>
      <div class="footer__top-socials">
        <p>Следите за нами</p>
        <div
          style="
            margin-top: 5px;
            display: flex;
            justify-content: flex-end;
            gap: 5px;
          "
        >
          <Icon name="uil:instagram-alt" color="#E85A4F" size="32" />
          <Icon name="uil:whatsapp-alt" color="#E85A4F" size="32" />
          <Icon name="uil:telegram" color="#E85A4F" size="32" />
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <p>Все права защищены @ Masters.kz 2023</p>
        <div class="footer__bottom-cards">Cards</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  background: rgb(249,248,242);
  background: linear-gradient(90deg, rgba(249,248,242,1) 0%, rgba(240,238,230,1) 57%, rgba(231,224,215,1) 100%);
  padding: 28px 0 14px 0;
  border-top: 1px solid rgb(193, 191, 191, 0.4);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  &__top {
    display: flex;
    align-items: flex-start;
    padding-bottom: 20px;
    justify-content: space-between;
    &-logo {
      max-width: 250px;
      img {
        width: 250px;
      }
      span {
        font-size: 14px;
        color: #252525;
      }
    }
    &-list {
      display: flex;
      gap: 50px;
      font-size: 14px;
      div {
        display: flex;
        flex-direction: column;
        gap: 18px;
        a {
          text-decoration: none;
          color: rgb(21, 20, 20);
          &:hover {
            color: #252525;
          }
        }
      }
    }
  }
  &__bottom {
    border-top: 1px solid rgb(193, 191, 191, 0.4);
    font-size: 14px;
    padding-top: 12px;
    color: gray;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 992px) {
    &__top {
      flex-direction: column;
      gap: 15px;
      &-logo {
        display: flex;
        flex-direction: column;
        gap: 8px;
        img {
          width: 180px;
        }
      }
      &-list {
        flex-direction: column;
        flex-wrap: nowrap;
        gap: 10px;
        div {
          gap: 10px;
        }
      }
      &-socials {
        display: flex;
        align-items: center;
        gap: 16px;
        div {
          justify-content: flex-start;
        }
      }
    }
    &__bottom {
      .container {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }
    }
  }
}
</style>
