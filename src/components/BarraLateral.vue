<template>
    <header>
        <h1 class="mb-2">
            <img src="../assets/img/logo.png" alt="Logo da Alura Tracker">
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoBotao }}
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data() {
        return {
            modoEscuroAtivo: false,
        }
    },
    computed: {
        textoBotao() {
            if(this.modoEscuroAtivo){
                return 'Desativar modo escuro';
            }
            return 'Ativar modo escuro'
        }
    },
    methods: {
        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo;
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo);
        }
    }
})
</script>

<style scoped>
    header {
        background: #0d3b66;
        width: 100%;
        height: 100vh;
        padding: 1rem;
        text-align: center;
    }

    @media screen and (max-width: 768px ) {
        header {
            padding:2.5rem;
            height: auto;
        }
    }
</style>