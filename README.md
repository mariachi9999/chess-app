# chess-app

Project for Jala Foundation bootcamp.

This api support:
- player registration.
- player create a game.
- player join a game.
- player move pieces.
- player restart game.

Storage in MongoDB.
- Players.
- Games.

Some movement validation implemented:
- white move first.
- player must made a valid move (if not, the api ask for a valid move.
- system notice if rival is in check.
- system notice game´s status: Ready to Start - Playing - Jaque Mate - Draw.

# API Documentation: 
[https://documenter.getpostman.com/view/15928294/UVRBmRHw]
# Youtube Demo: 
[https://www.youtube.com/watch?v=FqdvORs32d8&t=1s]

# FOLDER STRUCTURE

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
