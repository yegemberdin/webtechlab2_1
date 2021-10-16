import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/page',
        pathMatch: 'full',
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'page',
        component: PageComponent,
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
