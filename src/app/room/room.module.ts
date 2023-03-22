import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomRoutingModule } from './room-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    GetByIdComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }
