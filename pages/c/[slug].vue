<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const res = await useFetchBack(`categories/c/${route.params.slug}`, {
  method: "get",
});
const data = res?.value?.data;
</script>
<template>
  <div class="fdflex">
    <h1>{{ data.data.name }}</h1>
    <div class="category" v-if="data">
      <div class="category__filter">
        <div class="category__filter-title">
          <Icon name="uil:filter" color="#fffffd" size="24" />
          <p>Фильтр</p>
          <Icon name="uil:angle-right" color="#fffffd" size="24" />
        </div>
        <div class="category__filter-item" v-if="data.data.childs.length">
          <div class="category__filter-item-title">Подкатегории</div>
          <div class="category__filter-item__inputs">
            <div
              class="category__filter-item__inputs-item"
              v-for="(item, index) in data.data.childs"
              :key="index"
            >
              <input type="checkbox" name="child" :id="item.slug" />
              <label :for="item.slug">{{ item.name }}</label>
            </div>
          </div>
        </div>
        <div class="category__filter-item">
          <div class="category__filter-item-title">По типу</div>
          <div class="category__filter-item__inputs">
            <div class="category__filter-item__inputs-item">
              <input type="radio" name="type" id="type_master" />
              <label for="type_master">Мастеры</label>
            </div>
            <div class="category__filter-item__inputs-item">
              <input type="radio" name="type" id="type_barber" />
              <label for="type_barber">Барберы</label>
            </div>
            <div class="category__filter-item__inputs-item">
              <input type="radio" name="type" id="type_massage" />
              <label for="type_massage">Массажисты</label>
            </div>
            <div class="category__filter-item__inputs-item">
              <input type="radio" name="type" id="type_kosmetolog" />
              <label for="type_kosmetolog">Косметолог</label>
            </div>
          </div>
        </div>
        <div class="category__filter-item">
          <div class="category__filter-item-title">По цене</div>
          <div class="category__filter-item__inputs">
            <div class="category__filter-item__inputs-item">
              <input type="checkbox" name="price" id="low_price" />
              <label for="low_price">Низкая цена</label>
            </div>
            <div class="category__filter-item__inputs-item">
              <input type="checkbox" name="price" id="norm_price" />
              <label for="norm_price">Средняя цена</label>
            </div>
            <div class="category__filter-item__inputs-item">
              <input type="checkbox" name="price" id="high_price" />
              <label for="high_price">Высокая цена</label>
            </div>
          </div>
        </div>
        <div class="category__filter-item">
          <div class="category__filter-item-title">Дополнительно</div>
          <div class="category__filter-item__inputs">
            <div class="category__filter-item__inputs-item">
              <input type="checkbox" name="dop" id="is_home" />
              <label for="is_home">Вызов на дом</label>
            </div>
            <div class="category__filter-item__inputs-item">
              <input type="checkbox" name="dop" id="is_med" />
              <label for="is_med">С мед.лицензией</label>
            </div>
          </div>
        </div>
        <button class="category__filter-button">Применить</button>
      </div>
      <div class="category__cards">
        <div class="category__cards-top">
            <div class="category__cards-top-left">{{ data.cards.length }} результатов</div>
            <div class="category__cards-top-right">
                <div class="category__cards-top-right-item">
                    <Icon
                        name="uil:map"
                        color="#9170a7"
                        size="20"
                    />
                    Показать на карте
                </div>
                <div class="category__cards-top-right-item">
                    <Icon
                        name="uil:sort-amount-down"
                        color="#9170a7"
                        size="20"
                    />
                    По рейтингу
                </div>
            </div>
        </div>
        <div class="category__cards-list" v-if="data.cards.length">
            <div class="category__cards-list-item" v-for="(item, index) in data.cards" :key="index">
                <cart-block :data="item" />
            </div>
        </div>
        <p v-else>Нет данных</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.category {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  &__filter {
    min-width: 250px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    align-items: stretch;
    gap: 12px;
    background: #1f1f1f;
    border: 1px solid #323230;
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
      font-size: 18px;
    }
    &-item {
      margin-top: 16px;
      &-title {
        font-weight: 600;
      }
      &__inputs {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        &-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
    }
    &-button {
      margin: 12px 0 8px 0;
      padding: 10px;
      background: #9e0e06;
      border: none;
      outline: none;
      color: white;
      border-radius: 12px;
    }
  }
  &__cards {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
    &-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-right {
            display: flex;
            align-items: center;
            gap: 20px;
            &-item {
                display: flex;
                align-items: center;
                gap: 8px;
                border: 1px solid #323230;
                padding: 8px 12px;
                border-radius: 12px;
                &:hover {
                    cursor: pointer;
                    background: #323230;
                }
            }
        }
    }
    &-list {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 18px;
        &-item {
            width: calc(calc(100% / 3) - 12px);
        }
    }
  }
}
.fdflex {
    display: flex;
    flex-direction: column;
    gap: 16px;
    h1 {
        font-size: 2rem;
    }
    padding-bottom: 80px;
}
</style>
