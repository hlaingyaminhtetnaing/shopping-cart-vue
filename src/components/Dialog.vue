<template>
    <v-dialog persistent v-model="show" hide-overlay transition="scroll-x-transition" v-if="cart.length == 0">
        <v-card min-height="100%">
            <v-toolbar style="background-color:#C5CAE9">
                <v-toolbar-title>Your Cart</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>                    
                    <v-btn icon color="black" @click.stop="show = false">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-card-subtitle class="dialogText">
                Your shopping cart is empty
            </v-card-subtitle>
            <v-card-actions class="btnDia">
                <v-btn class="ma-2" outlined color="indigo" dark larger @click.stop="show = false" >
                    CONTINUE SHOPPING
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog persistent v-model="show" hide-overlay transition="scroll-x-transition" v-else="cart.length == 0">
        <v-card min-height="100%">
            <v-toolbar style="background-color:#C5CAE9">
                <v-toolbar-title>Your Cart</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>                    
                    <v-btn icon color="black" @click.stop="show = false">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
                </v-toolbar-items>
            </v-toolbar>
                     
        </v-card>
    </v-dialog>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Dialog',
    props: {
        value: Boolean,
    },
    computed: {
        show: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        },
        ...mapState({
            cart:'cart',
        })
    }
}
</script>
<style scoped>
>>>.v-dialog {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 30%;
    margin: 0 auto;
    max-height: 100% !important;
}

.dialogText {
    margin-top: 20px;
    text-align: center !important;
    font-size: 26px !important;
    font-family: "Noto";
}
.btnDia{
    margin-left:80px!important;
}
</style>