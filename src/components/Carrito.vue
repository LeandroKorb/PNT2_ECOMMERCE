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



<<<<<<< HEAD
=======
<template>

</template>



>>>>>>> 5b001d26731fb60114d565ef4ff3c0160468d32a
<style scoped>


</style>