// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalybService } from './services/calyb.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private calybService: CalybService) {}

  ngOnInit(): void {
    const apiKey = 'e9ef5fcb-7f00-44c8-a38b-7ecc99074963'; // Replace with your actual API key
    const userId = 'abcd1234'; // Replace with the actual user ID

    this.calybService.init(apiKey);  // Initialize Calyb
    console.log(this.calybService.checkUserExists(userId)); // Check if the user exists
    this.calybService.setupCopilot(userId); // Set up the copilot with the user ID
  }
}
