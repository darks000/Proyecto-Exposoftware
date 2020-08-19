import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'agregar-asignatura',
    loadChildren: () => import('./pages/agregar-asignatura/agregar-asignatura.module').then( m => m.AgregarAsignaturaPageModule)
  },
  {
    path: 'rubricas',
    loadChildren: () => import('./pages/rubricas/rubricas.module').then( m => m.RubricasPageModule)
  },
  {
    path: 'agregar-rubrica',
    loadChildren: () => import('./pages/agregar-rubrica/agregar-rubrica.module').then( m => m.AgregarRubricaPageModule)
  },
  {
    path: 'rubrica-detail/:id',
    loadChildren: () => import('./pages/rubrica-detail/rubrica-detail.module').then( m => m.RubricaDetailPageModule)
  },  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
