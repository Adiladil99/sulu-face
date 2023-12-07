<template>
  <div class="modal-wrapper" v-show="isOpen">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal">
      <img
        src="~/assets/icons/x.png"
        alt="left"
        @click="closeModal"
        class="modal-x"
      />
      <!-- <img class="close-modal" :src="require('@/assets/icons/x.png')" @click="closeModal" alt="user-plus" /> -->
      <div class="modal-content">
        <div class="form-container">
          <p class="title">Войти</p>
          <form class="form">
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Пароль" />
            <p class="page-link">
            </p>
            <button class="form-btn">Войти</button>
          </form>
          <p class="sign-up-label">
            У вас нет учетной записи?<span class="sign-up-link"> Регистрация</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

watch((isOpen) => {
  console.log(props.isOpen);
  props.isOpen ? (document.documentElement.style.overflowY = "hidden") : null;
});
</script>

<style lang="scss" scoped>
.upload {
  display: flex;
  align-items: center;
  gap: 20px;
  &-images {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-grow: 1;
    width: 70%;
    overflow-x: auto;
    overflow-y: hidden;
    div {
      width: 90px;
      height: 90px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.add-avatar,
.add-photos {
  width: 60px;
  height: 60px;
  background: #f2f2f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
}
.add-photos {
  width: 90px;
  height: 90px;
  border-radius: 0%;
}
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-overlay {
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  background-color: white;
  margin-top: 8vh;
  overflow-y: auto;
  border-radius: 14px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  animation: modal-appear 0.5s;
  position: relative;
  z-index: 66;
  &:-webkit-scrollbar {
    width: 3px !important;
    height: 2px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    max-height: 100%;
  }
  &-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}

.modal-back {
  position: absolute;
  top: 35px;
  left: 15px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
}
.modal-x {
  position: absolute;
  width: 14px;
  height: 14px;
  top: 15px;
  right: 15px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}

@keyframes modal-appear {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.form-container {
  width: 350px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px 40px 30px;
  @media screen and (max-width: 390px) {
    width: 95vw;
  }
}

.title {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 10px 0 30px 0;
  font-size: 28px;
  font-weight: 800;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 15px;
}

.input {
  border-radius: 20px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
}

.page-link {
  text-decoration: underline;
  margin: 0;
  text-align: end;
  color: #747474;
  text-decoration-color: #747474;
}

.page-link-label {
  cursor: pointer;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 9px;
  font-weight: 700;
}

.page-link-label:hover {
  color: #000;
}

.form-btn {
  padding: 10px 15px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: #E85A4F;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form-btn:active {
  box-shadow: none;
}

.sign-up-label {
  margin: 0;
  font-size: 10px;
  color: #747474;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.sign-up-link {
  margin-left: 1px;
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: teal;
  color: teal;
  cursor: pointer;
  font-weight: 800;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  gap: 15px;
}

.apple-login-button,
.google-login-button {
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 11px;
  gap: 5px;
}

.apple-login-button {
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
}

.google-login-button {
  border: 2px solid #747474;
}

.apple-icon,
.google-icon {
  font-size: 18px;
  margin-bottom: 1px;
}
</style>
