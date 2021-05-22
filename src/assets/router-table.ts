import {ActorListComponent} from '../app/actor-list/actor-list.component';
import {ActorEditComponent} from '../app/actor-edit/actor-edit.component';
import {Error404Component} from '../app/error404/error404.component';
import {RandomFlopComponent} from '../app/random-flop/random-flop.component'
import {WatchListComponent} from '../app/watch-list/watch-list.component'

export const RouterTable=[
    {path:''     ,   redirectTo:'/randomflop' , pathMatch:'full'  },
    {path:'actors', component:ActorListComponent},
    {path:'actors/:id/edit',component:ActorEditComponent},
    {path:'randomflop', component:RandomFlopComponent},
    {path:'watchlist',component:WatchListComponent},
    {path:'**',component:Error404Component},
]