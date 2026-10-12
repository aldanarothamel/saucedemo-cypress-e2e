# Cypress PageObject SauceDemo

This project provides an end-to-end (E2E) automated testing framework for the [SauceDemo](https://www.saucedemo.com/) web application, developed with [Cypress](https://www.cypress.io/) and structured using the **Page Object Model (POM)** architectural design pattern to ensure clean code separation, high reusability, and effortless maintenance.

## Prerequisites

Ensure the following tools and runtimes are installed in your development environment:

- [Node.js](https://nodejs.org/) (version 14.x or higher recommended)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- [Google Chrome](https://www.google.com/chrome/) (recommended browser for test execution)

## Installation

1. Clone this repository to your local workstation:

   ```bash
   git clone https://github.com/Erick-N-B-Araujo/cypress-pageobject-saucedemo.git
   ```

2. Navigate to the project root directory:

   ```bash
   cd cypress-pageobject-saucedemo
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Project Structure

- `cypress/`: Contains automated test suites, fixtures, plugins, and page objects.
- `cypress/integration/`: Contains test specification files (`*.cy.js`) and Page Object classes.
- `cypress/support/`: Includes custom commands, global configurations, and reusable utility hooks.
- `cypress.json`: Defines Cypress configuration settings (viewport, browser, reporter options).
- `package.json`: Manages project dependencies and test execution scripts.

## Running the Tests

### Interactive Mode

To open the Cypress graphical Test Runner and execute tests interactively with real-time feedback:

```bash
npx cypress open
```

In the Cypress interface, select your desired browser (e.g., Chrome) and click on the test specification you wish to run.

### Headless Mode

To run all automated tests in headless mode directly from the command line:

```bash
npx cypress run
```

*Note: You can also run `npm test` to execute the suite headlessly targeting Google Chrome.*

## Reports

This project is configured to generate comprehensive execution reports using [Mochawesome](https://www.npmjs.com/package/mochawesome). After running the tests in headless mode, an interactive HTML and JSON report will be automatically generated in the `cypress/reports/mochawesome` directory.

## Page Object Model (POM)

The **Page Object Model (POM)** pattern is implemented throughout this project to decouple page element locators and interaction logic from the test assertions. This architectural approach enhances test readability, reduces code duplication, and simplifies long-term test maintenance when UI components change.

------------------------------------------------------------------------- 

# Cypress PageObject SauceDemo (Español)

Este proyecto proporciona un framework de pruebas automatizadas End-to-End (E2E) para la aplicación web [SauceDemo](https://www.saucedemo.com/), desarrollado con [Cypress](https://www.cypress.io/) y estructurado bajo el patrón de diseño arquitectónico **Page Object Model (POM)** para garantizar la separación de responsabilidades, alta reutilización y fácil mantenimiento.

## Requisitos Previos

Asegúrese de contar con las siguientes herramientas y entornos instalados en su equipo:

- [Node.js](https://nodejs.org/) (versión 14.x o superior recomendada)
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js)
- [Google Chrome](https://www.google.com/chrome/) (navegador recomendado para la ejecución de pruebas)

## Instalación

1. Clone este repositorio en su equipo local:

   ```bash
   git clone https://github.com/Erick-N-B-Araujo/cypress-pageobject-saucedemo.git
   ```

2. Acceda al directorio raíz del proyecto:

   ```bash
   cd cypress-pageobject-saucedemo
   ```

3. Instale las dependencias del proyecto:

   ```bash
   npm install
   ```

## Estructura del Proyecto

- `cypress/`: Contiene los conjuntos de pruebas automatizadas, fixtures, plugins y objetos de página.
- `cypress/integration/`: Aloja los archivos de especificación de pruebas (`*.cy.js`) y las clases de Page Object.
- `cypress/support/`: Incluye comandos personalizados, configuraciones globales y utilidades reutilizables.
- `cypress.json`: Define las configuraciones de ejecución de Cypress (resolución de pantalla, navegador y opciones de reportes).
- `package.json`: Administra las dependencias del proyecto y los scripts de ejecución de pruebas.

## Ejecución de Pruebas

### Modo Interactivo

Para abrir la interfaz gráfica de Cypress (Test Runner) y ejecutar las pruebas de manera interactiva con retroalimentación en tiempo real:

```bash
npx cypress open
```

En la interfaz de Cypress, seleccione el navegador de su preferencia (ej. Chrome) y haga clic sobre la especificación de prueba que desea ejecutar.

### Modo Headless (Línea de Comandos)

Para ejecutar todas las pruebas automatizadas en modo headless (sin interfaz gráfica) directamente desde la terminal:

```bash
npx cypress run
```

*Nota: También puede ejecutar `npm test` para correr la suite en modo headless utilizando Google Chrome.*

## Reportes de Ejecución

Este proyecto está configurado para generar reportes completos de ejecución mediante [Mochawesome](https://www.npmjs.com/package/mochawesome). Tras ejecutar las pruebas en modo headless, se generará automáticamente un informe interactivo en formatos HTML y JSON dentro del directorio `cypress/reports/mochawesome`.

## Patrón Page Object Model (POM)

El patrón **Page Object Model (POM)** se implementa en todo el proyecto para desacoplar los localizadores de elementos y la lógica de interacción de las aserciones de prueba. Este enfoque arquitectónico mejora la legibilidad de las pruebas, reduce la duplicación de código y simplifica el mantenimiento a largo plazo ante cambios en la interfaz de usuario.
