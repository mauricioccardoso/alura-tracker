import { TipoNotificacao } from "@/interfaces/INoteficacao"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/tipo-mutation"

export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacao, titulo: string, texto: string):void {
            store.commit(NOTIFICAR, {
                titulo,
                texto,
                tipo
            })
        }
    }
}