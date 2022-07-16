<template>
    <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <TarefaLista v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxContainer v-if="listaVazia">
            <p>Você não esta produtivo hoje :(</p>
        </BoxContainer>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import FormularioTarefa from '../components/FormularioTarefa.vue';
    import TarefaLista from '../components/TarefaLista.vue';
    import BoxContainer from '../components/BoxContainer.vue';
    import ITarefa from '../interfaces/ITarefa';

export default defineComponent({
    name: "App",
    components: {
        FormularioTarefa,
        TarefaLista,
        BoxContainer
},
    data() {
      return {
        tarefas: [] as ITarefa[]
      }
    },
    computed: {
      listaVazia() : boolean {
        return this.tarefas.length === 0;
      }
    },
    methods: {
      salvarTarefa (tarefa: ITarefa) {
        this.tarefas.push(tarefa);
      }
    }
});
</script>