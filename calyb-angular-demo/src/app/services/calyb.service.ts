// src/app/services/calyb.service.ts
import { Injectable } from '@angular/core';

// Define CSSProperties and CopilotStyles interfaces
interface CSSProperties {
  [key: string]: string | number;
}

interface CopilotStyles {
  [key: string]: CSSProperties; // Flexibility to add other containers if needed
}

interface Calyb {
  init(id: string): void;
  setupCopilot(
    userId: string, 
    copilotToggleLogo?: string, // Path to the toggle icon
    copilotHeaderLogo?: string, // Path to the header logo
    copilotHeader?: string, // Title heading for the copilot
    styles?: CopilotStyles // Styles for customization
  ): void;

  // Methods for user registration and updating
  registerUser(userId: string, userFirstName: string, userLastName?: string, userTags?: string): Promise<void>;
  updateUser(userId: string, userFirstName?: string, userLastName?: string, userTags?: string): Promise<void>;
  checkUserExists(userId: string): Promise<boolean>;
}

declare global {
  interface Window {
    calyb: Calyb; // Extending the Window interface to include calyb
  }
}

@Injectable({
  providedIn: 'root'
})
export class CalybService {
  private userId!: string; // Use definite assignment assertion

  constructor() { }

  init(apiKey: string): void {
    if (typeof window.calyb !== 'undefined') {
      console.log('Initializing Calyb...');
      window.calyb.init(apiKey);
    } else {
      console.error('Calyb script not loaded properly. calyb object is undefined.');
    }
  }

  setupCopilot(userId: string): void {
    this.userId = userId; // Store the userId
    const customStyles: CopilotStyles = {
      chatContainer: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        width: '400px',
        bottom: '40px',
        right: '20px',
        zIndex: 1000,
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        backgroundColor: 'lightgreen'
      }
    };

    if (typeof window.calyb !== 'undefined') {
      window.calyb.setupCopilot(
        this.userId,
        'https://lh3.googleusercontent.com/pinlOpXYFy2M2k32S3GVhVVYQ0rTyWTX3uP1X8J6FRkPXgfXmr2KeJk1vgWOvHd3_nAZkfWErj88dwmQr3iM587kYn0cxVhqG8vkaw',
        'https://lh3.googleusercontent.com/pinlOpXYFy2M2k32S3GVhVVYQ0rTyWTX3uP1X8J6FRkPXgfXmr2KeJk1vgWOvHd3_nAZkfWErj88dwmQr3iM587kYn0cxVhqG8vkaw',
        'Hello',
        customStyles
      );
    } else {
      console.error('Calyb script not loaded properly. calyb object is undefined.');
    }
  }

  async checkUserExists(userId: string): Promise<boolean> {
    if (typeof window.calyb !== 'undefined') {
      try {
        const userExists = await window.calyb.checkUserExists(userId);
        return userExists;
      } catch (error) {
        console.error('Failed to check if user exists', error);
        return false;
      }
    }
    return false;
  }
  
  async registerUser(userId: string, firstName: string, lastName?: string, tags?: string): Promise<void> {
    if (typeof window.calyb !== 'undefined') {
      try {
        const userExists = await this.checkUserExists(userId);
        if (!userExists) {
          await window.calyb.registerUser(userId, firstName, lastName, tags);
          console.log('User registered successfully');
        } else {
          console.log('User already exists');
        }
      } catch (error) {
        console.error('Failed to register user', error);
      }
    }
  }
  
  async updateUser(userId: string, firstName?: string, lastName?: string, tags?: string): Promise<void> {
    if (typeof window.calyb !== 'undefined') {
      try {
        const userExists = await this.checkUserExists(userId);
        if (userExists) {
          await window.calyb.updateUser(userId, firstName, lastName, tags);
          console.log('User updated successfully');
        } else {
          console.log('User does not exist');
        }
      } catch (error) {
        console.error('Failed to update user', error);
      }
    }
  }
} 
