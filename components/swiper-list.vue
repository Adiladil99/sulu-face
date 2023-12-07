<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
const breakpoints_cards = {
  280: {
    slidesPerView: 1.3,
    spaceBetween: 15,
  },
  500: {
    slidesPerView: 2.2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 18,
  },
};
</script>
<template>
    <div class="swiplist">
        <div class="swiplist__top">
            <p class="swiplist__top-title">{{ props.title }}</p>
            <div class="swiplist__top-buttons">
            <button class="swiplist__top-buttons-left" :class="`${props.name}-left`">
                <Icon name="uil:arrow-left" color="white" size="24" />
            </button>
            <button class="swiplist__top-buttons-right" :class="`${props.name}-right`">
                <Icon name="uil:arrow-right" color="white" size="24" />
            </button>
            </div>
        </div>
        <div class="swiplist__swiper">
            <Swiper
                :modules="[SwiperAutoplay, SwiperNavigation]"
                :breakpoints="breakpoints_cards"
                :navigation="{
                    prevEl: `.${props.name}-left`,
                    nextEl: `.${props.name}-right`,
                    disabledClass: 'notActive',
                }"
                :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true,
                }"
                style="padding: 5px;"
                >
                <SwiperSlide
                    class="swiplist__swiper-elem"
                    @click="$router.push(`/p/${slide.id}`)"
                    v-for="slide in props.data"
                    :key="slide"
                >
                    <cart-block :data="slide" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .swiplist {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
        &__top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;
            font-weight: 500;
            &-buttons {
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
                    background: rgb(169, 34, 25);
                }
            }
            }
        }
        &__swiper {
            &-elem {
                height: auto;
            }
        }
    }
</style>