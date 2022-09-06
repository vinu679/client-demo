import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PostAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostAuthModule { }
