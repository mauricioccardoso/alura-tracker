<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-tree-quarter conteudo">
      <NotificacoesUser />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import NotificacoesUser from './components/NotificacoesUser.vue';

export default defineComponent({
    name: "App",
    components: {
    BarraLateral,
    NotificacoesUser,
},
    data() {
      return {
        modoEscuroAtivo: false,
      }
    },
    methods: {
      trocarTema(modoEscuroAtivo: boolean) : void {
        this.modoEscuroAtivo = modoEscuroAtivo;
      }
    }
});
</script>

<style>
  .lista {
    padding: 1.25rem
  }
  main {
    --bg-primario: #FFFFFF;
    --texto-primario: #000000;
  }
  main.modo-escuro {
    --bg-primario: #2B2D42;
    --texto-primario: #DDDDDD;
  }
  .conteudo {
    background-color: var(--bg-primario);
  }
</style>