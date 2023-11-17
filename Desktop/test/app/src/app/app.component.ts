import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  utilisateurs = [
    { 
  nom: 'Doe', prenom: 'John' },
    { 
 
nom: 'Smith', prenom: 'Jane' },
    { nom: 'Brown', prenom: 'Bob' }
  ];
}