import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact us!</h1>
        </div>
      </div>
    </section> 

    <section class="section">
      <div class="container">
        
        <!--Contact Form -->
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">

          <!--Name-->
          <div class="field">
            <label for="text" class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required>
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
              *Name is a required field
            </div>
          </div>
          <!--Email -->
          <div class="field">
            <label for="email" class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required email>
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
              *Required field! Must be a valid Email
            </div>
          </div>
          <!-- Message -->
          <div class="field">
            <label for="message" class="label">Your Message</label>
            <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
          </div>
          <!--Submit button-->
            <button type="submit" class="button is-large is-warning"
            [disabled]="contactForm.invalid">
              SUBMIT
            </button>
        </form>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;

  constructor() {}

  ngOnInit() {}

  submitForm() {
    const message = `Hello ${this.name}. Email ID: ${this.email}. Message: ${this.message}`;
    alert(message);
  }
}
