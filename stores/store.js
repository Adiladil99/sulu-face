import {defineStore} from 'pinia';
import services_masters from "@/data/services_masters.json";

export default defineStore({
  id: 'store',
  state() {
    return {
      services: services_masters,
      favourites: useCookie('favourites'),
      authenticated: useCookie('token') ? true : false,
      loading: false,
      role: useCookie('role'),
      userData: false
    };
  },
  getters: {
    getServicesId: (state) => {
      return (serviceId) => state.services.filter((user) => user.category_id === serviceId)
    },
    getMastersId: (state) => {
      return (serviceId) => state.services.filter((user) => user.category_id === serviceId)
    },
    getFavourites: (state) => {
      return () =>  {
        return state.favourites
      }
    },
    isFavourite: (state) => {
      return (serviceId) =>  {
        if (state.favourites) {
          console.log(state.favourites);
          return state.favourites.some((user) => user.id === serviceId)
        } else {
          return false
        }

      }
    },
  },
  actions: {
    async authenticateUser(datas, roleInfo) {
      // useFetch from nuxt 3
      const { data, pending } = await useFetch(`https://sulu-admin.devup.kz/api/auth-${roleInfo}/login`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: datas,
      });
      this.loading = pending;

      if (data.value) {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        const role = useCookie('role'); // useCookie new hook in nuxt 3
        token.value = data?.value?.accessToken; // set token to cookie
        role.value = roleInfo
        this.authenticated = true;
        this.role = role // set authenticated  state value to true
        this.requestUser(data?.value?.accessToken)
      }
    },
    async requestUser(tokens = false) {
      const token = useCookie('token'); // get token from cookies
      const { data, pending } = await useFetch(`https://sulu-admin.devup.kz/api/auth-${this.role}/me`, {
        method: 'get',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokens ? tokens : token.value}`
        },
      });
      this.userData = data?.value?.user
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      const role = useCookie('role'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      role.value = null; // clear the token cookie
    },
    async addFavourites(data) {
      const newCookie = useCookie('favourites')
      if (!this.favourites) {
        const res = []
        res.push(data)
        newCookie.value = res
      } else {
        this.favourites.push(data)
        newCookie.value = this.favourites
      }
    },
    async removeFavourites(id) {
      const newCookie = useCookie('favourites')
      const favour = this.favourites.filter(item => item.id !== id)
      this.favourites = favour
      newCookie.value = this.favourites
    },
  }
});
