import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent {
  getRoomById: any = {
    roomNumber: 0,
    roomStatus: '',
    totalRooms:0
  };
  constructor(private service: RoomService, private route: ActivatedRoute) {}

getById(id:number){
  this.service.getById(id).subscribe(
    (data)=>{
    this.getRoomById=data;
    console.log(data);
  })
}

ngOnInit(){
this.route.paramMap.subscribe(
  (param)=>{
    console.log(param);
    var id= Number(param.get('id'));
    this.getById(id);
  }
)
}
}

