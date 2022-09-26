import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { HistorialComponent } from './page/historial/historial.component';
import { MecanicoComponent } from './page/mecanico/mecanico.component';
import { productoCreaeditaComponent } from './page/producto/producto-creaedita/producto-creaedita.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { TallerComponent } from './page/taller/taller.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';

const routes: Routes = [
  {
    path: 'clientes', component: ClienteComponent, children:[
      {path: 'nuevo', component: ClienteCreaeditaComponent}
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
  }, {
    path:"historial", component: HistorialComponent, children:[]
  },
  {
    path:"reserva", component:ReservaComponent, children:[]
  },
  {
    path: "productos", component: ProductoComponent, children:[
      {path: 'nuevo', component: productoCreaeditaComponent},
      { path: 'edicion/:id', component: productoCreaeditaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
