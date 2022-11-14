<template>
    <div id="ECommerce" transition="dialog-bottom-transition">
        <v-card outlined color="transparent">
            <h1>New Arrival</h1>
            <hr class="titleClass">
            <v-row no-gutters>
                <v-col v-for="(item, index) in ChoosingCart " :key="index" :item="item">
                    <v-card class="mx-auto" max-width="400" outlined color="transparent">
                        <v-img :src="item.images" height="520" width="360" style="border-radius: 2%;"
                            class="white--text align-top" v-on:click="imageClick(index)">
                            <v-card-subtitle v-text="item.title"></v-card-subtitle>
                        </v-img>
                        <v-card-subtitle style="text-align: center;font-weight:bold;font-size: larger;color: black;padding-bottom: 0%;">
                            {{ item.itemName }}
                        </v-card-subtitle>
                        <v-card-subtitle style="text-align: center;font-weight:bold;font-size: large;color: black;">
                            <span class="text-decoration-line-through"
                                v-show="item.id === 1111">$95</span>
                            ${{ item.price }}
                        </v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'CardList',
    data() {
        return {
            ChoosingCart: [
                {
                    images: require('@/assets/blueJeanPant.jpg'), itemName: 'Blue Pants', price: 79, title: 'On Sale',
                    shipping: 'Free Shipping', Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1111
                },
                {
                    images: require('@/assets/brownJacket.jpg'), itemName: 'Brown Jacket', price: 158, title: 'New',
                    shipping: 'Free Shipping', Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1112
                },
                {
                    images: require('@/assets/green.jpg'), itemName: 'Green Bag', price: 89, title: 'New',
                    shipping: 'Free Shipping', Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1113
                },
                {
                    images: require('@/assets/turquoiseDress.jpg'), itemName: 'Turquoise Dress', price: 120, title: 'New',
                    shipping: 'Free Shipping', Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1114
                }
            ],

        }

    },
    methods: {
        imageClick(index) {
            this.$router.push(`/detail/${index}`);
        }
    }

}
</script>
<style scoped>
hr.titleClass {
    border: 1px solid red;
    width: 15%;
    margin: auto;
    margin-bottom: 50px;
}

h1 {
    text-align: center;
    font-style: oblique;
    padding: 20px;
}

.span{
    font-size:13px;
}
</style>