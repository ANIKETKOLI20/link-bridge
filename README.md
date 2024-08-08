# **Link Bridge Clone**

## **Overview**

This project is a clone of the popular Linktree service, allowing users to create a personalized page to manage and share multiple links. Users can sign up, log in, and customize their page with various links and design preferences.

## **Project Structure**

### **Frontend**

1. **Landing Page:**
    - Displays a welcoming message and an overview of the features.
    - Includes buttons for sign-up and login.
    - Components:
      - `LandingPage.js`
      - `Navbar.js`
      - `Footer.js`

2. **User Authentication:**
    - Provides sign-up, login, and password reset functionalities.
    - Components:
      - `SignUp.js`
      - `Login.js`
      - `ForgotPassword.js`

3. **User Dashboard:**
    - Allows users to manage their links and customize their Linktree page.
    - Components:
      - `Dashboard.js`
      - `AddLink.js`
      - `EditLink.js`
      - `LinkList.js`
      - `CustomizePage.js`

4. **Routing:**
    - Handles the navigation between different pages.
    - Files:
      - `App.js`
      - `PrivateRoute.js`
      - `PublicRoute.js`

### **Backend**

1. **Server Setup:**
    - Initializes the server.
    - File: `server.js`

2. **Routes:**
    - Defines API endpoints for user authentication and link management.
    - Files:
      - `auth.js`
      - `links.js`

3. **Controllers:**
    - Contains logic for handling requests and interacting with the database.
    - Files:
      - `authController.js`
      - `linksController.js`

4. **Models:**
    - Defines the data structure for users and links.
    - Files:
      - `User.js`
      - `Link.js`

5. **Middleware:**
    - Provides authentication and error handling middleware.
    - File: `authMiddleware.js`

6. **Utils:**
    - Contains utility functions for JWT and password hashing.
    - Files:
      - `jwt.js`
      - `passwordHash.js`

## **Technologies**

### **Frontend**

- **React.js:** For building the user interface.
- **React Router:** For handling routing.
- **Material-UI or TailwindCSS:** For styling.
- **Formik & Yup:** For form handling and validation.
- **Axios:** For making API requests.

### **Backend**

- **Node.js:** Server environment.
- **Express.js:** Web framework for Node.js.
- **MongoDB:** Database.
- **Mongoose:** ODM for MongoDB.
- **JWT (jsonwebtoken):** For user authentication.
- **bcryptjs:** For password hashing.

## **Installation**

### **Backend**

Github Link : https://github.com/ANIKETKOLI20/link-bridge
Deploy Link : https://link-bridge-1.onrender.com/
