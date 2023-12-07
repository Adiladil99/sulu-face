<script setup>
import { storeToRefs } from "pinia";
import useStore from "~/stores/store";

const useStoreData = useStore()
const { isFavourite } = storeToRefs(useStoreData)

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const toggleFavourites = () => {
  if (isFavourite.value(props.data.id)) {
    useStoreData.removeFavourites(props.data.id)
  } else {
    useStoreData.addFavourites(props.data)
  }
}
</script>
<template>
  <div class="cartblock">
    <img :src="`/_nuxt/assets/images/stocks/${props.data.id}.jpeg`" />
    <p>{{ props.data.fio }}</p>
    <span>{{ props.data.address }}</span>
    <div class="cartblock__emotion">
      <div class="cartblock__emotion-item">
        <Icon name="uil:heart-sign" color="rgb(78, 7, 114)" size="20" />
        {{ props.data.like }}
      </div>
      <div class="cartblock__emotion-item">
        <Icon
          name="uil:comment-alt-message"
          color="rgb(78, 7, 114)"
          size="20"
        />
        {{ props.data.comment }}
      </div>
      <div class="cartblock__emotion-item">
        <Icon name="uil:pricetag-alt" color="rgb(78, 7, 114)" size="20" />
        {{ props.data.price }}
      </div>
      <input
        value="favorite-button"
        @click.stop="toggleFavourites()"
        :name="`isLike-` + props.data.id"
        :checked="isFavourite(props.data.id)"
        :id="`isLike-` + props.data.id"
        class="favorite"
        type="checkbox"
      />
      <label class="container1" @click.stop="toggleFavourites" for="favorite">
        <svg
          class="feather feather-heart"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="white"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ></path>
        </svg>
      </label>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cartblock {
  padding: 8px 8px 20px 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 16px;
  background: white;
  border: 1px solid rgb(227, 227, 227);
  p {
    margin: 10px 0;
    flex-grow: 1;
  }
  span {
    font-size: 14px;
    color: rgb(120, 120, 120);
    margin-bottom: 8px;
  }
  img {
    border-radius: 8px;
    height: 180px;
    object-fit: cover;
  }
  &__emotion {
    display: flex;
    align-items: center;
    gap: 12px;
    &-item {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 14px;
      font-weight: 600;
    }
  }
  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 1px 0px 9px 1px rgba(34, 60, 80, 0.15);
    -moz-box-shadow: 1px 0px 9px 1px rgba(34, 60, 80, 0.15);
    box-shadow: 1px 0px 9px 1px rgba(34, 60, 80, 0.15);
    transition: all 0.3s ease;
  }
}
.container1 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 20px;
  gap: 14px;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
}

.favorite {
  display: none;
}
.container1 svg {
  fill: white;
  stroke: white;
}
.favorite:checked + .container1 svg {
  fill: hsl(0deg 100% 50%);
  stroke: hsl(0deg 100% 50%);
  animation: heartButton 1s;
  path {
    stroke: hsl(0deg 100% 50%);
  }
}

@keyframes heartButton {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.3);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}

.favorite + .container1 .action {
  position: relative;
  overflow: hidden;
  display: grid;
}

.favorite + .container1 .action span {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  transition: all 0.5s;
}

.favorite + .container1 .action span.option-1 {
  transform: translate(0px, 0%);
  opacity: 1;
}

.favorite:checked + .container1 .action span.option-1 {
  transform: translate(0px, -100%);
  opacity: 0;
}

.favorite + .container1 .action span.option-2 {
  transform: translate(0px, 100%);
  opacity: 0;
}

.favorite:checked + .container1 .action span.option-2 {
  transform: translate(0px, 0%);
  opacity: 1;
}
</style>
