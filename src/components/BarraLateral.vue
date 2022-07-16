<template>
    <header>
        <h1 class="mb-2">
            <img src="../assets/img/logo.png" alt="Logo da Alura Tracker">
        </h1>
        <button class="button is-responsive" @click="alterarTema">
            {{ textoBotao }}
        </button>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </router-link>
                </li>
            </ul>
        </nav>
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
    .panel li {
        margin: 8px 0;
    }
    .link {
        color: #FFFFFF;
    }
    .link:hover {
        color: #FAF0CA;
    }
    .link.router-link-active {
        color: #f7e59d;
    }
</style>