# chess-app

Project for Jala Foundation bootcamp.

# src

Code which will go to production.

## Contexts

This folder will contains one folder per Bounded Context.
Each BC´s folder will have:

1.  **Domain**:

    **Models**
    Contains the models of my business.

    **Services**:
    Contains the domain events.

2.  **Repository**:
    Contains the business logic, it won´t change if persistency layer change.

3.  **Persistence**:
    Contains the database relevant to the BC (mongodb); could be an entirely DB or a table of one main DB.

4.  **Presentation**:
    Contains the REST API / endpoints relevant to the BC; it´s an express server instance.

# tests

This folder replies src structure, to have a more clear localization of every component tested.

# To run the app:

**npm start**

# To test the app:

**npm run test**
