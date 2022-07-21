### Template para app de React Typescript Vite con configuracion para test.


npm install --save-dev @testing-library/react "@testing-library/react": "^12.1.5",

npm install --save-dev ts-jest "ts-jest": "^28.0.5",

npm install --save-dev @types/jest "@types/jest": "^27.5.2",

npm install --save-dev jest "jest": "^28.1.2",

npm i --save-dev jest-environment-jsdom "jest-environment-jsdom": "^28.1.2",

npm i --save-dev @testing-library/jest-dom "@testing-library/jest-dom": "^5.16.4",

npm i @types/testing-library__jest-dom "@types/testing-library__jest-dom": "^5.14.5",

// copíar folder jest // quitar module en package.json // copiar del ts.consign.js // copiar jest.config.js y jest.setup.js

script: 
  "test": "jest --no-watchman --detectOpenHandles"