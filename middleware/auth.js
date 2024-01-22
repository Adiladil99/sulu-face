import useStore from '~/stores/store';

export default defineNuxtRouteMiddleware((to) => {
    const { authenticated, role } = storeToRefs(useStore()); // make authenticated state reactive
    const token = useCookie('token'); // get token from cookies
    const roles = useCookie('role'); // get token from cookies
    console.log('roles', roles.value);
  
    if (token.value) {
      // check if value exists
      authenticated.value = true; // update the state to authenticated
      role.value = roles.value
    }
  
    // if token exists and url is /login redirect to homepage
    if (token.value && to?.name === 'login') {
      return navigateTo('/');
    }
  
    // if token doesn't exist redirect to log in
    if (!token.value && to?.name !== 'login') {
      abortNavigation();
      return navigateTo('/');
    }
  });