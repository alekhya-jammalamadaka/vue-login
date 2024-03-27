# Vue.js Frontend Login and Registration Module with Multi-Language Support
This project implements a simple login and registration module using Vue.js for the frontend. It provides user authentication functionalities along with multi-language support for a better user experience.

## Features

- User-friendly login and registration forms.
- logout from session
- Secure authentication using JWT (JSON Web Tokens).
- Multi-language support with dynamic language switching.
- Form validation for better user input handling.
- Responsive design for compatibility across various devices.

## Technologies Used

- Vue.js: A progressive JavaScript framework for building user interfaces.
- Vue Router: The official router for Vue.js, providing navigation support.
- Vuex: State management library for Vue.js applications.
- Axios: Promise-based HTTP client for making AJAX requests.
- VeeValidate: Simple Vue.js validation for forms.
- Vue I18n: Internationalization plugin for Vue.js applications.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Getting Started
1. Clone the repository:

git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY



3. Run the development server:

clone the api repository using
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

"npm run start " to start the server


4. Access the application in your browser:

- Local:   http://localhost:8080/ 
- Network: http://192.168.178.21:8080/


## Configuration

- Configure backend API endpoints in the `src/vue.config.js` file.
- Add language translations in the `src/assets/locales` directory using the Vue I18n syntax.

## Usage

- Navigate to the login page and enter your credentials to authenticate.
- If you don't have an account, navigate to the registration page and fill in the required information.
- Switch between languages using the language selector provided in the UI.

## Future Improvements

 - Role authorizations
 - Forget password implementation
