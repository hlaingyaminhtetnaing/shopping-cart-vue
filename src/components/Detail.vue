<template>
    <div :items="Cart[$route.params.id]">
        <v-row id="pointer">
            <v-spacer></v-spacer>
            <v-card-subtitle class="pointerr" @click="HomeClick">
                Home
            </v-card-subtitle>
            <v-card-subtitle>/</v-card-subtitle>
            <v-card-subtitle class="pointerr" @click="ECommerceClick">
                ECommerce
            </v-card-subtitle>
            <v-card-subtitle>/</v-card-subtitle>
            <v-card-subtitle>{{ Cart[$route.params.id].itemName }}</v-card-subtitle>
        </v-row>
        <h1>{{ Cart[$route.params.id].itemName }}</h1>
        <hr class="titleClass">
        <v-card class="mx-auto" width="1000" outlined color="transparent">
            <v-row>
                <v-col>
                    <v-img :src="Cart[$route.params.id].images" height="460" width="330" class="white--text align-top"
                        id="borderRadi">

                    </v-img>
                </v-col>
                <v-col>
                    <v-card outlined color="transparent" id="textFont">
                        <v-card-subtitle class="textt">{{ Cart[$route.params.id].Details }}</v-card-subtitle>
                        <v-divider></v-divider>
                        <v-card-title class="fonttext">
                            ${{ Cart[$route.params.id].price }}&nbsp;&nbsp;&nbsp;
                            <span class="text-decoration-line-through" id="discount"
                                v-show="Cart[$route.params.id].id == 1111">
                                $95&nbsp;&nbsp;
                            </span>
                            <span id="colorRed" v-show="Cart[$route.params.id].id == 1111">
                                (-16.94%)
                            </span>
                        </v-card-title>
                        <v-card-title id="shippingText">
                            Shipping:&nbsp;
                            <span id="shippingColor">
                                {{ Cart[$route.params.id].shipping }}
                            </span>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                <v-card-actions>
                                    <v-btn small @click="itemQualtity--" :disabled="itemQualtity <= 1">
                                        <v-icon color="black" dark left>
                                            mdi-minus
                                        </v-icon>
                                    </v-btn>
                                    <v-card-text class="qualityText">
                                        {{ itemQualtity }}
                                    </v-card-text>
                                    <v-btn small @click="itemQualtity++">
                                        <v-icon color="black" dark>
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                            <v-col >
                                <v-card-actions >
                                    <v-btn color="secondary" class="paddBtn" dark large @click="AddToCart(Cart[$route.params.id].images,Cart[$route.params.id].itemName,Cart[$route.params.id].price,itemQualtity)">
                                        Add to Cart
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>

                    </v-card>
                </v-col>
            </v-row>
        </v-card>

    </div>
</template>
<script>
export default {
    name: 'Detail',
    props: ['item'],
    data() {
        return {

            Cart: [
                {
                    images: require('@/assets/blueJeanPant.jpg'),
                    itemName: 'Blue Pants', price: 79, title: 'On Sale',
                    shipping: 'Free Shipping', Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1111
                },
                {
                    images: require('@/assets/brownJacket.jpg'),
                    itemName: 'Brown Jacket', price: 158, title: 'New',
                    shipping: 'Free Shipping', Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1112
                },
                {
                    images: require('@/assets/green.jpg'),
                    itemName: 'Green Bag', price: 89, title: 'New',
                    shipping: 'Free Shipping',
                    Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1113
                },
                {
                    images: require('@/assets/turquoiseDress.jpg'),
                    itemName: 'Turquoise Dress', price: 120, title: 'New',
                    shipping: 'Free Shipping',
                    Details:
                        'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1114
                }
            ],
            itemQualtity: 1,
        }
    },
    methods:{
        HomeClick() {
            this.$router.push('/');
        },
        ECommerceClick() {
            this.$router.push('/card');
        },
        AddToCart(images,itemName,price,quantity){
            this.$store.dispatch('addToCart',{
                imagesData:images,
                itemNameData:itemName,
                priceData:price,
                quantityData:quantity
            });
        }   
    }
}
</script>
<style>
#pointerText input {
    cursor: pointer !important;
}

#pointer .pointerr {
    cursor: pointer;
}

#pointer {
    margin-top: 0px;
    margin-right: 20px;
}

h1 {
    text-align: center;
    font-style: oblique;
    padding: 20px;
}

hr.titleClass {
    border: 1px solid black;
    width: 15%;
    margin: auto;
    margin-bottom: 50px;
}

#borderRadi {
    border-radius: 2%;
    margin: auto;
}

#textFont .textt {
    color: black;
    margin-top: 40px;
}

#discount {
    font-size: 17px;
}

#colorRed {
    color: red;
    font-size: 14px;
}

#textFont .fonttext {
    padding-top: 30px;
}

#shippingColor {
    color: green;
    font-size: 14px;
}

#shippingText {
    padding-bottom: 30px;
    font-size: 17px;
}

.qualityText {
    text-align: center;
    color: black;
}
.paddBtn{
    padding: 10px;
}
</style>