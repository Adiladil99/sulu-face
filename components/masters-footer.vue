<template>
  <div class="footer">
    <div class="footer__top container">
      <div class="footer__top-logo">
        <p>masters.kz</p>
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
          <Icon name="uil:instagram-alt" color="rgb(78, 7, 114)" size="32" />
          <Icon name="uil:whatsapp-alt" color="rgb(78, 7, 114)" size="32" />
          <Icon name="uil:telegram" color="rgb(78, 7, 114)" size="32" />
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
  background: white;
  padding: 28px 0 14px 0;
  border-top: 1px solid rgb(193, 191, 191, 0.4);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  &__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    &-logo {
      max-width: 250px;
      p {
        font-size: 28px;
        font-weight: 500;
      }
      span {
        font-size: 14px;
        color: gray;
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
          color: gray;
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
}
</style>
