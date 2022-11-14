import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    Name: '',
    quantity: 0,
    price: 0,
    images: require('@/assets/blueJeanPant.jpg'),
    selected:true,
  },
  getters: {
    
  },
  mutations: {
    ADD_CART(state, { imagesData, itemNameData, priceData, quantityData }) {
      if (state.cart.length != 0) {
        state.selected=true;
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].Name == itemNameData) {
            state.selected=false;
            return state.cart[i].quantity += 1;
          }
        }
        if (state.selected == true)
        {
          let self=this;
          self.state.cart.push({
            images: imagesData,
            Name: itemNameData,
            price: priceData,
            quantity: quantityData
          });
        }        
      } else {
        state.cart.push({
          images: imagesData,
          Name: itemNameData,
          price: priceData,
          quantity: quantityData
        });
      }
      console.log(state.cart);
    }
  },
  actions: {
    addToCart({ commit }, { imagesData, itemNameData, priceData, quantityData }) {
      commit('ADD_CART', { imagesData, itemNameData, priceData, quantityData });
    }
  },
  modules: {
  }
})
