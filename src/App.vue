<template>
  <v-app>
    <MainNav></MainNav>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="#B3E5FC" dark>
      <v-row justify="center" class="my-4 text-center">
        <v-col cols="12">
          <v-btn text dark @click="BHome">
            Home
          </v-btn>
          <v-btn text dark @click="BEcommerce">
            ECommerce
          </v-btn>
        </v-col>
        <v-col cols="12"> Copyright &copy; 2022 All rights reserved - Kyi</v-col>
        <v-col cols="12">Powered By SITE123 - Website maker</v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import MainNav from '@/components/MainNav.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
    BHome(){
            this.$router.push('/');
        },
        BEcommerce(){
            this.$router.push('/card');
        }
  },
  components:{
    MainNav,
  }
};
</script>
