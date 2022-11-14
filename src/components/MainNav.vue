<template>
    <v-navigation-drawer app v-if="$vuetify.breakpoint.lgAndUp"
        style="background-image:linear-gradient(to right,#E1F5FE,#B3E5FC)">
        <v-toolbar flat style="background-image:linear-gradient(to right,#E1F5FE,#B3E5FC)">
            <v-toolbar-title id="kyi">Kyi</v-toolbar-title>
        </v-toolbar>
        <v-list nav id="list">
            <v-list-item link class="listcenter" @click="scrollToContent('Home')">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item link class="listcenter" @click="scrollToContent('ECommerce')">
                <v-list-item-icon>
                    <v-icon>mdi-shopping</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ECommerce</v-list-item-title>
            </v-list-item>
            <v-divider id="vdivider"></v-divider>
            <v-list-item link class="listcenter" @click.stop="dialog=true">
                <v-list-item-icon>
                    <v-icon>mdi-cart</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Cart</v-list-item-title>
            </v-list-item>
        </v-list>
        <Dialog v-model="dialog"></Dialog>
    </v-navigation-drawer>
    <v-card v-else="$vuetify.breakpoint.lgAndUp">
        <v-navigation-drawer v-model="drawer" app>
            <template>
                <v-btn icon small color="black darken-2" @click="drawer = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-list id="list">
                    <v-list-item-group color="primary">
                        <v-list-item link class="listcenter" @click="scrollToContent('Home')">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                        <v-list-item link class="listcenter" @click="scrollToContent('ECommerce')">
                            <v-list-item-icon>
                                <v-icon>mdi-shopping</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>ECommerce</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </template>
        </v-navigation-drawer>
        <v-app-bar color="#B3E5FC" dark flat app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Kyi</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-card outlined color="transparent" style="margin: 20px;padding-top: 10px;">
                <v-badge color="#BBDEFB" content="4" small>
                    <v-btn small icon >
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                </v-badge>
            </v-card>
        </v-app-bar>
        
    </v-card>

</template>
<script>
import Dialog from './Dialog.vue'
export default {
    name: 'MainNav',
    data() {
        return {
            drawer: false,
            dialog:false,
        }
    },
    methods: {
        scrollToContent(value) {
            window.scrollTo(0, document.getElementById(value).getBoundingClientRect().y + window.scrollY - 120);
        },
    },
    components:{
        Dialog,
    }
}
</script>
<style>
#list .listcenter {
    margin-left: 46px;
    font-family: "Comic Sans MS";
    margin-right: 26px;
}

#kyi {
    margin-left: 76px !important;
    font-family: "MV Boli";
    font-size: 40px !important;
    margin-top: 40px;
    margin-bottom: 40px;
}

#vdivider {
    width: 90%;
    margin: auto;
}
</style>