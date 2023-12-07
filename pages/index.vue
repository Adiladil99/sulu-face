<script setup>
import lists from "@/data/categories.json";
import faqs from "@/data/faqs.json";
import reviews from "@/data/reviews.json";
import { storeToRefs } from "pinia";
import useStore from "~/stores/store";

const breakpoints_reviews = {
  280: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 18,
  },
};

const breakpoints_category = {
  280: {
    slidesPerView: 1.5,
    spaceBetween: 15,
  },
  // when window width is >= 480px
  350: {
    slidesPerView: 2.2,
    spaceBetween: 15,
  },
  // when window width is >= 640px
  500: {
    slidesPerView: 2.5,
    spaceBetween: 15,
  },
  640: {
    slidesPerView: 3.5,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 4.5,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 6,
    spaceBetween: 18,
  },
};
const activeFaq = ref();
const servicesList = useStore();
const { getServicesId } = storeToRefs(servicesList);
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
            <Icon name="uil:arrow-left" color="white" size="24" />
          </button>
          <button class="home__categories-right">
            <Icon name="uil:arrow-right" color="white" size="24" />
          </button>
        </div>
      </div>
      <div class="home__categories-list">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :breakpoints="breakpoints_category"
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
    <swiper-list title="Стрижка волос" name="strizh" :data="getServicesId(1)" />
    <swiper-list
      title="Ногтевой сервис"
      name="nogtev"
      :data="getServicesId(2)"
    />
    <swiper-list
      title="Уход за телом"
      name="uhodtelo"
      :data="getServicesId(3)"
    />
    <swiper-list title="Макияж" name="makiyazh" :data="getServicesId(4)" />
    <div class="home__reviews">
      <div class="title">
        <p>Последние отзывы</p>
        <div class="title__buttons">
          <button class="home__reviews-left">
            <Icon name="uil:arrow-left" color="white" size="24" />
          </button>
          <button class="home__reviews-right">
            <Icon name="uil:arrow-right" color="white" size="24" />
          </button>
        </div>
      </div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :breakpoints="breakpoints_reviews"
        :navigation="{
          prevEl: '.home__reviews-left',
          nextEl: '.home__reviews-right',
          disabledClass: 'notActive',
        }"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide
          class="home__reviews-elem"
          v-for="item in reviews"
          :key="item"
        >
          <div class="home__reviews-elem-top">
            <span>Клиент:</span>
            <p>{{ item.client }}</p>
            <span>{{ item.datetime }}</span>
          </div>
          <div class="home__reviews-elem-top">
            <span>Оценка:</span>
            <p>
              <NuxtRating
                ratingSize="40"
                :read-only="false"
                :ratingValue="1.2"
              />
            </p>
          </div>
          <div class="home__reviews-elem-comment">
            <img
              src="~/assets/icons/quote.png"
              style="transform: rotate(180deg)"
              class="home__reviews-elem-comment-img1"
            />
            <p>{{ item.comment }}</p>
            <img
              src="~/assets/icons/quote.png"
              class="home__reviews-elem-comment-img2"
            />
          </div>
          <div class="home__reviews-elem-top">
            <span>Название услуги:</span>
            <p>{{ item.name }}</p>
          </div>
          <div class="home__reviews-elem-top">
            <span>Мастер:</span>
            <p>{{ item.specialist }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <p class="title h2title">Вопросы и ответы</p>
    <div class="home__faqs">
      <div
        class="home__faqs-item"
        v-for="(item, index) in faqs"
        :key="`faq-` + index"
      >
        <div
          class="home__faqs-item-top"
          @click="
            activeFaq === item.id ? (activeFaq = null) : (activeFaq = item.id)
          "
        >
          <Icon
            name="uil:angle-right"
            :class="{ activearrow: activeFaq === item.id }"
            color="#fffffd"
            size="24"
          />
          <p>{{ item.question }}</p>
        </div>
        <Transition name="openfaq">
          <div class="home__faqs-item-answer" v-show="activeFaq === item.id">
            {{ item.answer }}
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding-bottom: 60px;
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
    @media screen and (max-width: 992px) {
      height: 250px;
    }
    @media screen and (max-width: 768px) {
      height: 180px;
    }
    @media screen and (max-width: 580px) {
      height: 120px;
    }
  }
  &__categories {
    margin-top: 50px;
    &-list {
      width: 100%;
      &-elem {
        position: relative;
        width: 170px;
        background: #1f1f1f;
        height: 140px;
        padding: 16px 25px 0 16px;
        border-radius: 16px;
        border: 1px solid #323230;
        text-decoration: none;
        color: #fffffd;
        font-size: 14px;
        font-weight: 600;
        &:hover {
          background: #343434;
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
        background: #9d0f03;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        &:hover {
          cursor: pointer;
          background: rgb(151, 33, 24);
        }
      }
    }
  }
  &__reviews {
    margin-top: 40px;
    &-elem {
      background: #1f1f1f;
      padding: 14px 14px 20px 14px;
      height: auto;
      display: flex;
      flex-direction: column;
      border-radius: 16px;
      border: 1px solid rgb(227, 227, 227);
      &-top {
        display: flex;
        margin-bottom: 5px;
        justify-content: space-between;
        align-items: center;
        p {
          flex-grow: 1;
          margin-left: 5px;
          font-size: 14px;
        }
        span {
          font-size: 14px;
          color: gray;
        }
      }
      &-comment {
        margin: 15px 0;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        img {
          width: 28px;
          height: 28px;
        }
        p {
          padding-left: 30px;
          font-size: 18px;
          font-style: italic;
        }
        &-img2 {
          display: flex;
          align-self: flex-end;
          margin-right: 40px;
        }
      }
    }
  }
  .h2title {
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  &__faqs {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    margin: 0 auto;
    width: 700px;
    &-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
      &-top {
        background: #5c0100;
        color: #fffffd;
        width: 100%;
        padding: 12px 20px;
        border-radius: 20px;
        display: flex;
        transition: all 0.5s ease;
        align-items: center;
        svg {
          transition: all 0.5s ease;
        }
        .activearrow {
          transform: rotate(90deg);
        }
        &:hover {
          cursor: pointer;
          background: #b55348;
          color: white;
          transform: scale(1.02);
        }
      }
      &-answer {
        padding-left: 23px;
      }
    }
    @media screen and (max-width: 768px) {
      width: 90vw;
      font-size: 14px;
    }
  }
}

.openfaq-enter-active {
  animation: openfaq-in 0.7s;
}
.openfaq-leave-active {
  animation: openfaq-in 0.7s reverse;
}

@keyframes openfaq-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
    height: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
    height: 60px;
  }
}
</style>
