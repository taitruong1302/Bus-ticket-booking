import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var paypal: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {


  constructor(
    private router: Router,
    private route: ActivatedRoute
   ) {}

  ngOnInit(): void {
    this.loadPayPalScript();
  }

  loadPayPalScript(): void {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=ASKMEdSFnZqdBAf7vuLLSol3SddkBlPm-0BsYE09sC2WvpXFoPp34RAdviCXcle1-3b2-hcrFFdOWIsq';
    script.onload = () => {
      this.initializePayPalButton();
    };
    document.body.appendChild(script);
  }

  initializePayPalButton(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return fetch(`http://localhost:9090/api/orders/${this.route.snapshot.paramMap.get('id')}`, {
          method: "post",
        })
        .then(response => response.json())
        .then(order => order.id);
      },
      onApprove: (data: any, actions: any) => {
        return fetch(`http://localhost:9090/api/orders/${data.orderID}/capture`, {
          method: "post",
        })
        .then(response => response.json())
        .then(orderData => {
          console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
          const transaction = orderData.purchase_units[0].payments.captures[0];
          this.router.navigate(['/admin/payment-successful', this.route.snapshot.paramMap.get('id')])
        });
      }
    }).render('#paypal-button-container');
  }

}