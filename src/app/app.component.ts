import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav role="navigation">
        <p>I'm the sidenav</p>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <div>
            <button mat-icon-button (click)="sidenav.toggle()">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
          <div><a routerLink="/"> LOGO</a></div>
          <div fxFlex fxLayout fxLayoutAlign="flex-end" fx>
            <ul fxLayout fxLayoutGap="10px" class="navigation-items">
              <li><a routerLink="/signup">Signup</a></li>
              <li><a routerLink="/login">Login</a></li>
              <li><a routerLink="/training">Training</a></li>
            </ul>
          </div>
        </mat-toolbar>
        <main>
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
