import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  rooms: Room[] = [];
  
  constructor(private roomService: RoomService,private router:Router){

  }
  ngOnInit() {
    this.getRoom();
  }
  getRoom(){
    this.roomService.getAllRoom().subscribe(data =>
      this.rooms = data
    );
  }
  deleteRoom(roomNumber:number){
if(confirm('Are you sure to delete record?'))
    this.roomService.deleteRoom(roomNumber).subscribe(
      (result)=>{
        console.log(result);
      }
    )
  }
  navigate(){    
    var role = JSON.parse(localStorage.getItem("currentRole")!);       
    if(role.role == "ROLE_OWNER"){      
      this.router.navigate(['owner']);    
    }     
    else if(role.role == "ROLE_MANAGER"){      
      this.router.navigate(['manager']);    }       
      else if(role.role == "ROLE_RECEPTIONIST"){      
        this.router.navigate(['reciptionist']);  
      }}
}