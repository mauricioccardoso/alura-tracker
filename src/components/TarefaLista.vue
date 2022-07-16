<template>
    <BoxContainer>
        <div class="columns">
            <div class="column is-4"> {{ tarefa.descricao || 'Tarefa sem descrição'}}</div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || "N/D"}}
            </div>
            <div class="column">
                <CronometroTarefa :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxContainer>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import CronometroTarefa from './CronometroTarefa.vue';
    import ITarefa from '../interfaces/ITarefa';
    import BoxContainer from './BoxContainer.vue';

    export default defineComponent({
        name: 'TarefaLista',
        components: {
            CronometroTarefa,
            BoxContainer,
        },
        props: {
            tarefa: {
                type: Object as PropType<ITarefa>,
                required: true
            }
        }
    });
</script>