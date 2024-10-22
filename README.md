# Calyb SDK Integration

### Vanilla HTML/JS Integration

For **Vanilla JS Integration**, refer to the [**calyb-vanilla-demo**](./calyb-vanilla-demo) folder.

---

### Angular/Typescript Integration

For **Angular Integration**, refer to the [`'src/app/services/calyb.service.ts'`](./calyb-angular-demo/src/app/services/calyb.service.ts) file in the [**calyb-angular-demo**](./calyb-angular-demo) folder.

This file contains all the Calyb SDK methods. You can directly add this service to your codebase and start using Calyb immediately. The available methods are:

#### SDK Methods:

- **Initialization (`init`)**:  
  Initializes the `calyb` object with an API key. If the `calyb` object isn't available, an error is logged.

- **Copilot Setup (`setupCopilot`)**:  
  Configures a copilot widget for a user with custom UI styles. It allows customization of:
  - Toggle logo
  - Header logo
  - Title heading
  - Styles (position, dimensions, background color, etc.)

  If the `calyb` object is undefined, an error is logged.

- **User Registration (`registerUser`)**:  
  Registers a user by passing their:
  - `userId`
  - `firstName`
  - Optional `lastName`
  - Optional `tags`
  
  Returns a promise and logs an error if registration fails.

- **User Update (`updateUser`)**:  
  Updates a user’s details including:
  - `userId`
  - `firstName`
  - Optional `lastName`
  - Optional `tags`

  Also handles potential errors during the update process.

---

### TypeScript Support

Type declarations are defined within the service for the `Calyb` instance delivered by the script, making it seamless to integrate Calyb directly into **TypeScript** based projects.

### Demo

A demo for initializing the **Copilot** and setting up a **User Session** is demonstrated in the `app.component.ts`.
