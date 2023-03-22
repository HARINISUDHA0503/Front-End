import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-list-res',
  templateUrl: './list-res.component.html',
  styleUrls: ['./list-res.component.css']
})
export class ListResComponent { 
  reservations: Reservation[] = []; 
  constructor(private reservationService: ReservationService,private router:Router) { } 
  ngOnInit() { 
    this.getReservation(); 
  } 
  getReservation() { 
    this.reservationService.getAllReservation().subscribe(data => this.reservations = data); 
  } 
  deleteReservation(reservationCode: number) { 
    if (confirm('Are you sure to delete?')) 
    this.reservationService.deleteReservation(reservationCode)
    .subscribe((result) => { console.log(result); })
   } 
   navigate(){    
    var role = JSON.parse(localStorage.getItem("currentRole")!);       
    if(role.role == "ROLE_OWNER"){      
      this.router.navigate(['owner']);    
    }     
    else if(role.role == "ROLE_MANAGER"){      
      this.router.navigate(['manager']);    }       
      else if(role.role == "ROLE_RECEPTIONIST"){      
        this.router.navigate(['receptionist']);  
      }}
  }