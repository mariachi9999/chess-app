# chess-app

Project for Jala Foundation bootcamp.

# src

Code which will go to production.

## Contexts

This folder will contains one folder per Bounded Context.
Each BC´s folder will have:

1. **Domain**:
   Contains the models of my business.
2. **Services**:
   Contains the domain events.
3. **Repository**:
   Contains the business logic, it won´t change if persisntency layer change.
4. **Persistence**:
   Contains the database relevant to the BC (mongodb, sql, etc); could be an entirely DB or a table of one main DB.
5. **Presentation**:
   Contains the REST API / endpoints relevant to the BC; could be an entirely server or a consolidate route of one main server.

## Shared

This folder contains common elements which will be used by many BC´s.

---

# tests

This folder replies src structure, to have a more clear localization of every component tested.

## Contexts

Replies the same structure of src contexts.

## Shared

Aceptation Test, E2E test, black box test.

Group test, this won´t go to production.

---

# To tun the app:

**npm start**
.
