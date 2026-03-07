import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class PaymentService {

  subscribe(plan:string){

    if(plan === 'starter'){
      return 2500;
    }

    if(plan === 'growth'){
      return 8000;
    }

    if(plan === 'enterprise'){
      return 20000;
    }

  }

}
