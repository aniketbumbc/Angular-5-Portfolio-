import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Project', component: ProjectComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Test', component: TestComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
