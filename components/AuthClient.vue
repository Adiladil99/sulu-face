<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import useStore from '~/stores/store';

const router = useRouter()
const { authenticateUser } = useStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useStore());

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    surname: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string(),
    birthday: yup.date(),
    phone: yup.string().required(),
    password: yup.string().min(6).required(),
    passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match').required()
  }),
});

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});


const onSubmit = handleSubmit(async values => {
  const result = await useFetchBack("auth-client/register", {
    body: values,
    method: "post"
  })
});

const onLoginSubmit = async values => {
  await authenticateUser(values, 'client'); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/profile');
    emit("close");
  }
  // const result = await useFetchBack("auth-client/login", {
  //   body: values,
  //   method: "post"
  // })
  // console.log(result);
};


const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [surname, surnameAttrs] = defineField('surname');
const [phone, phoneAttrs] = defineField('phone');
const [gender, genderAttrs] = defineField('gender');
const [birthday, birthdayAttrs] = defineField('birthday');
const [name, nameAttrs] = defineField('name');
const [passwordConfirmation, passwordConfirmationAttrs] = defineField('passwordConfirmation');

const props = defineProps({
  isOpen: {
    type: Boolean,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

const step = ref('log')

watch((isOpen) => {
  console.log(props.isOpen);
  props.isOpen ? (document.documentElement.style.overflowY = "hidden") : null;
});
</script>

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
        <div class="form-container" v-if="step === 'log'">
          <p class="title">Войти</p>
          <Form :validation-schema="schema" class="form" @submit="onLoginSubmit">
            <Field name="email" class="input" v-model="email" />
            <ErrorMessage name="email" />
            <Field name="password" type="password" v-model="password" class="input" />
            <ErrorMessage name="password" />
            <!-- <input type="email" class="input" placeholder="Email" v-model="email" v-bind="emailAttrs" />
            <input type="password" class="input" placeholder="Пароль"  v-model="password" v-bind="passwordAttrs" />
            <p class="page-link"></p> -->
            <button type="submit" class="form-btn">Войти</button>
          </Form>
          <p class="sign-up-label">
            У вас нет учетной записи?<span
              @click="step = 'reg'"
              class="sign-up-link"
            >
              Регистрация</span
            >
          </p>
        </div>
        <div class="form-container" v-else>
          <p class="title">Регистрация</p>
          <Form class="form" @submit="onSubmit">
            <input type="text" class="input" placeholder="Фамилия" v-model="surname" v-bind="surnameAttrs"/>
            <input type="text" class="input" placeholder="Имя" v-model="name" v-bind="nameAttrs" />
            <input type="email" class="input" placeholder="Email" v-model="email" v-bind="emailAttrs" />
            <div>{{ errors.email }}</div>
            <input type="text" class="input" placeholder="Phone" v-model="phone" v-bind="phoneAttrs" />
            <input type="date" class="input" placeholder="Дата рождения" v-model="birthday" />
            <div class="genders">
              <div class="genders-item">
                <input type="radio" name="gender" id="gen1" value="male" v-model="gender" />
                <label for="gen1">Мужской</label>
              </div>
              <div class="genders-item">
                <input type="radio" name="gender" id="gen2" value="female" v-model="gender" />
                <label for="gen2">Женский</label>
              </div>
            </div>
            <input type="password" class="input" v-model="password" v-bind="passwordAttrs" placeholder="Пароль" />
            <input type="password" class="input" v-model="passwordConfirmation" v-bind="passwordConfirmationAttrs" placeholder="Подтвердите пароль" />
            <p class="page-link"></p>
            <button type="submit" class="form-btn">Зарегистрироватся</button>
          </Form>
          <p class="sign-up-label">
            У вас уже есть учетная запись?<span
              @click="step = 'log'"
              class="sign-up-link"
            >
              Войти</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
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
  width: 400px;
  position: relative;
  z-index: 66;
  &:-webkit-scrollbar {
    width: 3px !important;
    height: 2px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    max-height: 100%;
    width: 90vw;
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
  max-width: 550px;
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
  background: #e85a4f;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form-btn:active {
  box-shadow: none;
}

.sign-up-label {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
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

.genders {
  display: flex;
  align-items: center;
  gap: 12px;
  &-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
  }
}
</style>
