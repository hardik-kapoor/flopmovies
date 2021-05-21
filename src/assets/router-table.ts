import {ActorListComponent} from '../app/actor-list/actor-list.component';
import {ActorEditComponent} from '../app/actor-edit/actor-edit.component';
import {Error404Component} from '../app/error404/error404.component';

export const RouterTable=[
    {path:''     ,   redirectTo:'/actors' , pathMatch:'full'  },
    {path:'actors', component:ActorListComponent},
    {path:'actors/:id/edit',component:ActorEditComponent},
    {path:'**',component:Error404Component},
]