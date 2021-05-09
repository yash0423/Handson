import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditEmpComponent} from './edit-emp/edit-emp.component';
import {ViewEmpComponent} from './view-emp/view-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { QuantitySelector2Component } from './quantity-selector2/quantity-selector2.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';

// './components/home/home.component'
const routes: Routes = [
  {path: 'edit-emp', component: EditEmpComponent},
  {path: 'view-emp', component: ViewEmpComponent},
  {path: 'quantity-increment', component:QuantityIncrementComponent},
  {path:'quantity-selector' , component:QuantitySelectorComponent},
  {path:'quantity-selector2',component:QuantitySelector2Component},
  {path:'edit-emp-reactive',component:EditEmpReactiveComponent}
];

@NgModule({
  
  
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes)],
  // imports: [
  //   BrowserModule, RouterModule
  // ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

