<script setup>
import lists from "@/data/categories.json";
</script>

<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner-f">
        <img src="@/assets/images/2.jpg" />
      </div>
      <div class="home-banner-s">
        <img src="@/assets/images/marts.jpeg" />
      </div>
    </div>
    <div class="home__categories">
      <div class="title">
        <p>Категории</p>
        <div class="title__buttons">
          <button class="home__categories-left">
            <Icon name="uil:arrow-left" color="gray" size="24" />
          </button>
          <button class="home__categories-right">
            <Icon name="uil:arrow-right" color="gray" size="24" />
          </button>
        </div>
      </div>
      <div class="home__categories-list">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="6"
          :space-between="18"
          :navigation="{
            prevEl: '.home__categories-left',
            nextEl: '.home__categories-right',
            disabledClass: 'notActive',
          }"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
        >
          <SwiperSlide
            class="home__categories-list-elem"
            @click="$router.push(`/c/${slide.slug}`)"
            v-for="slide in lists"
            :key="slide"
          >
            <p>{{ slide.title }}</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  &-banner {
    width: 100%;
    display: flex;
    gap: 2%;
    height: 400px;
    align-items: stretch;
    div {
      border-radius: 20px;
      overflow: hidden;
      &:hover {
        cursor: pointer;
        transform: scale(1.02);
        transition: all 0.5s ease;
      }
    }
    &-f {
      width: 34%;
    }
    &-s {
      width: 64%;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  &__categories {
    margin-top: 50px;
    &-list {
      width: 100%;
      &-elem {
        position: relative;
        width: 170px;
        background: #f4f4f5;
        height: 140px;
        padding: 16px 25px 0 16px;
        border-radius: 16px;
        text-decoration: none;
        color: #252525;
        font-size: 14px;
        font-weight: 600;
        &:hover {
          background: #e0e0e0;
          cursor: pointer;
        }
      }
    }
  }
  .title {
    display: flex;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
    align-items: center;
    justify-content: space-between;
    &__buttons {
      display: flex;
      align-items: center;
      gap: 8px;
      button {
        border-radius: 50%;
        width: 32px;
        height: 32px;
        background: #f4f4f5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        &:hover {
          cursor: pointer;
          background: #e0e0e0;
        }
      }
    }
  }
}
.notActive {
    cursor: default;
    opacity: .3;
}
</style>
