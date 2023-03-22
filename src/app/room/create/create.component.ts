import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private room:RoomService,private route:ActivatedRoute,private router:Router){}  
  addRoom = new FormGroup({    
    roomNumber: new FormControl(''),
    roomType: new FormControl(''), 
    price:new FormControl(''),   
    roomStatus: new FormControl(''),
    
    });
  SaveData(){    
    this.room.saveRoom(this.addRoom.value).subscribe({      
      next:(result)=>{             
        this.router.navigate(["/payment"])     
        },     
        error:(error) =>      
        {      
          console.log(error);          
         }   
        })  
      }}

   
  
  
