# Electron + React + Express + NeDB Boilerplate

![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![NeDB](https://img.shields.io/badge/NeDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

This is a starter template for building desktop applications with **Electron**, **React**, and **Express** using **NeDB** as a lightweight database. The project includes a simple setup for both the frontend (React using Create React App) and the backend (Express with NeDB).

## Features

- **Electron** for building cross-platform desktop apps.
- **React** for building the UI.
- **Express** as the backend server.
- **NeDB** as a lightweight database for persistence.
- Pre-configured **Babel**, **ESLint**, and **Prettier** for a smooth development experience.
- Single **mono-repo** structure for managing frontend, backend, and Electron together.
- Hot-reloading in development for Electron, React, and the backend.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (npm is used in this project)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/5sensprod/NedbExpressElectronReact.git
   ```

2. Install dependencies for the whole project:

   ```bash
   npm install
   ```

3. Install dependencies for the frontend React app:

   ```bash
   cd frontend
   npm install
   ```

### Development

Start both Electron and React in development mode:

```bash
npm start
```

- React will run on [http://localhost:3000](http://localhost:3000).
- Electron will automatically open and load the React app.
- The backend (Express) runs on [http://localhost:3001](http://localhost:3001).

### Build

To generate the production build of both the frontend and the Electron app, run:

```bash
npm run build
```

The production-ready app will be available in the `dist/` folder.

### Project Structure

```bash
your-project/
├── dist/                    # Electron build outputs (production)
├── backend/                 # Express + NeDB backend
│   ├── config/              # Database configuration
│   │   └── database.js      # NeDB initialization
│   ├── controllers/         # Business logic
│   ├── models/              # NeDB models
│   ├── routes/              # Express routes
│   └── server.js            # Main entry point for the backend
├── electron/                # Electron main process files
│   ├── main.js              # Electron main process entry point
│   ├── preload.js           # Preload script for Electron
├── frontend/                # React frontend code (Create React App)
│   ├── public/              # Public assets for React
│   ├── src/                 # React source code
│   └── build/               # React build outputs (production)
├── .gitignore               # Git ignore file
├── .prettierrc              # Prettier configuration
├── .eslintrc                # ESLint configuration
├── package.json             # Project configuration and dependencies
└── README.md                # Project documentation
```

### Linting and Code Formatting

This project uses **ESLint** and **Prettier** for linting and formatting:

- To check for linting errors, run:

  ```bash
  npm run lint
  ```

- To format the code, run:

  ```bash
  npm run format
  ```

### Customizing for Future Projects

Feel free to customize this boilerplate by adding any dependencies or configurations that suit your project needs.

## Contributing

If you wish to contribute to this boilerplate, feel free to open a pull request or submit an issue.

## License

This project is licensed under the MIT License.

## Notes

- **Mono-repo**: This project follows a mono-repo structure, making it easier to manage both the Electron backend and React frontend together.
- **Database**: The NeDB database is initialized in the `backend/src/config/database.js` file and referenced via `getDB()` in the models.
- **CORS**: The backend includes CORS configuration to allow communication between the React frontend and Express backend during development.

---

This README provides a comprehensive overview of your **Electron/React/Express/NeDB boilerplate** and can be used as a starting point for future desktop app development projects.
