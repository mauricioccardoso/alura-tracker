import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasView from '../views/TarefasView.vue';
import ProjetosView from '../views/ProjetosView.vue';
import FormularioProjeto from '../views/Projetos/FormularioProjeto.vue';
import ListaProjetos from '../views/Projetos/ListaProjetos.vue'

const rotas: RouteRecordRaw[] = [
    {
        path:'/',
        name: 'TarefasView',
        component: TarefasView
    },
    {
        path: '/projetos',
        component: ProjetosView,
        children: [
            {
                path:'',
                name: 'Projetos',
                component: ListaProjetos
            },
            {
                path:'novoProjeto',
                name: 'Novo projeto',
                component: FormularioProjeto
            },
            {
                path:':id',
                name: 'Editar projeto',
                component: FormularioProjeto,
                props: true,
            }
        ]
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;