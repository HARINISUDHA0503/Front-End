import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from './inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private baseURL="http://localhost:3001/inventory/all";
  constructor(private httpClient:HttpClient) { }

  getAllInventory():Observable<Inventory[]>{
    return this.httpClient.get<Inventory[]>(`${this.baseURL}`);
  }
  getById(id:number):Observable<Inventory>{    
    return this.httpClient.get<Inventory>(`http://localhost:3001/inventory/${id}`);  
  }
 saveInventory(data:any):Observable<Inventory>{
 return this.httpClient.post<Inventory>(`http://localhost:3001/inventory/addInventory`,data);
  }
  
  deleteInventory(id:number): Observable<Inventory>{
    return this.httpClient.delete<Inventory>(`http://localhost:3001/inventory/deleteInventory/${id}`);
  }
  updateInventory(payload:any): Observable<Inventory>{
    return this.httpClient.put<Inventory>(`http://localhost:3001/inventory/updateInventory`,payload);
  }
}
