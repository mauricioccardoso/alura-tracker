<template>
    <section class="column is-flex is-align-items-center is-justify-content-space-between">
        <CronometroTarefa :tempoEmSegundos="tempoEmSegundos"/>
        <BotaoBase @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroOn" />
        <BotaoBase @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroOn" />
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CronometroTarefa from './CronometroTarefa.vue';
    import BotaoBase from './BotaoBase.vue';

    export default defineComponent({
        name: 'TemporizadorControle',
        emits: [
            'aoTemporizadorFinalizado'
            ],
        components: {
            CronometroTarefa,
            BotaoBase,
        },
        data() {
            return {
                tempoEmSegundos: 0,
                cronometro: 0,
                cronometroOn: false,
            }
        },
        methods: {
            iniciar() {
                this.cronometroOn = true;
                this.cronometro = setInterval(()=> {
                    this.tempoEmSegundos += 1;
                }, 1000)
            },
            finalizar() {
                this.cronometroOn = false;
                clearInterval(this.cronometro)
                this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
                this.tempoEmSegundos = 0;
            }
        }
    })
</script>