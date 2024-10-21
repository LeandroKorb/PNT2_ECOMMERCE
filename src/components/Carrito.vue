<script>
import { defineStore } from "pinia";
import { computed, ref} from "vue";


export const useShoppingCartStore = defineStore( 'carrito', () => {
    const cart = ref([])

    const cartSize = computed(() => cart.value.length)

    const addItemCart = (item) => cart.value.push(item)

    return (cartSize, addItemCart)
})
</script>



<template>

</template>



<style scoped>


</style>