import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './page/cliente/cliente.component';
import { MecanicoComponent } from './page/mecanico/mecanico.component';
import { TallerComponent } from './page/taller/taller.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';

const routes: Routes = [
  {
    path: 'clientes', component: ClienteComponent, children:[

    ]
  },{
    path: 'vehiculos', component: VehiculoComponent, children:[

    ]
  },{
    path: 'talleres', component: TallerComponent, children:[

    ]
  },{
    path:'mecanicos',component: MecanicoComponent,children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
