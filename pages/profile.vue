<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import useStore from '~/stores/store';

const router = useRouter()
const { logUserOut } = useStore(); // use authenticateUser action from  auth store
const { authenticated, userData } = storeToRefs(useStore());

definePageMeta({
    middleware: 'auth' // this should match the name of the file inside the middleware directory 
})

const logOutUser = () => {
    logUserOut();
    router.push('/');

}
</script>
<template>
    <div class="profile">
        {{userData}}
        <button @click="logOutUser">Log out</button>
    </div>
</template>
<style lang="scss" scoped>
    .profile {

    }
</style>