<template>
  <div id="Home" transition="dialog-bottom-transition">
    <v-img :src="Homeimage">
      <v-card-title primary-title class="justify-center">
        <div id="title" v-if="$vuetify.breakpoint.lgAndUp">
          Clothing & Fashion
        </div>
        <div id="titlle" v-else="$vuetify.breakpoint.lgAndUp">
          Clothing & Fashion
        </div>
      </v-card-title>
      <v-card-title primary-title class="justify-center">
        <div id="subtitle" v-if="$vuetify.breakpoint.lgAndUp">
          A Ladies Clothing Store Boutique
        </div>
        <div id="subtitlle" v-else="$vuetify.breakpoint.lgAndUp">
          A Ladies Clothing Store Boutique
        </div>
      </v-card-title>
    </v-img>
    <Card></Card>
  </div>
 
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'Home',
  data() {
    return {
      Homeimage: require('@/assets/homme.jpg'),
    }
  },
  components:{
    Card,
  }
}
</script>
<style scoped>
#title {
  font-size: 50px;
  color: black;
  font-style: italic;
  font-weight: bolder;
  margin-top: 130px;
}
#titlle {
  font-size: 20px;
  color: black;
  font-style: italic;
  font-weight: bolder;
  margin-top: 40px;
}
#subtitle {
  font-size: 30px;
  color: brown;
  font-style: oblique;
  font-weight: bold;
}
#subtitlle {
  font-size: 16px;
  color: brown;
  font-style: oblique;
  font-weight: bold;
}
</style>