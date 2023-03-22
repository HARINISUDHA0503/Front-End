import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { Guest } from 'src/app/guest/guest';
import { GuestService } from 'src/app/guest/guest.service';
import { Subject, fromEvent, takeUntil } from 'rxjs';
@Component({
  selector: 'app-create-res',
  templateUrl: './create-res.component.html',
  styleUrls: ['./create-res.component.css']
})
export class CreateResComponent implements OnInit  {
    private unsubscriber: Subject<void> = new Subject<void>();
  CurrentDate:any=new Date();
  // roomTypeHasError: boolean;
  constructor(private reservation: ReservationService, private route: ActivatedRoute, private router: Router) { }
  
  addReservation = new FormGroup({
    reservationCode: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
    checkIn: new FormControl(''),
    checkOut: new FormControl(''),
    roomType: new FormControl('')
  });
  ngOnInit():void{
    history.pushState(null, '', location.href);    
    fromEvent(window, 'popstate') 
    .pipe(takeUntil(this.unsubscriber))      
    .subscribe((_) => {        
      history.pushState(null, '');        
      alert(`You can't go back at this time.`);      
    });
  }
  addRes() {
    this.reservation.saveReservation(this.addReservation.value).subscribe({
      next: (result) => 
        this.router.navigate(["/payment"]),
      error: (error) => 
        console.log(error)
      
    })
  }
    
//   validateRoomType(value: any)
//   {    if(value==='RoomType'){    
//      this.roomTypeHasError=true;   
//   }else{     
//     this.roomTypeHasError=false;   
//   } 
//  }
 
}

