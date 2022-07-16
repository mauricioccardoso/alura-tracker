export enum TipoNotificacao {
    SUCESSO = 0,
    FALHA = 1,
    ATENCAO = 2,
}
export interface INoteficacao {
    titulo: string;
    texto: string;
    tipo:   TipoNotificacao;
    id: number;
}