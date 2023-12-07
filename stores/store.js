import {defineStore} from 'pinia';
import services_masters from "@/data/services_masters.json";

export default defineStore({
  id: 'store',
  state() {
    return {
      services: services_masters,
      favourites: useCookie('favourites')
    };
  },
  getters: {
    getServicesId: (state) => {
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
