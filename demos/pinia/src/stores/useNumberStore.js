import { defineStore } from "pinia"
import { ref } from 'vue'
export const useNumberStore = defineStore('store:number', () => {
    // data equivalent du state côté vueX
    const nb1 = ref(2)
    const nb2 = ref(4)
    // fonctions equiv actions avec vueX
    const sum2Number = (n1, n2) => {
        return n1 + n2
    }

    const incrementN1 = () => {
        nb1.value++
    }

    // Retourner les data et fonctions
    // qui pourront être utilisé par les composants
    return {
        nb1,
        nb2,
        sum2Number,
        incrementN1
    }
    
})