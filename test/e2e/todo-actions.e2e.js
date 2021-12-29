/// <reference types="cypress" />
'use strict';

describe('todo actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should add a new todo to the list', () => {
    cy.get('.new-todo').type('Clean room{enter}');

    cy.get('.todo-list label').should('have.text', 'Clean room');
    cy.get('.todo-list .toggle').should('not.be.checked');
  });

  it('should toggle test correctly', () => {
    /**
     * Add the following test
     *
     * 1. Toggling the "completed" button strikes out the todo
     * 2. Toggling it again will undo the strike out
     */

     cy.get('.new-todo').type('Test 2{enter}');

     //visual testings
     cy.get('.todo-list .toggle').click();
     cy.get('.todo-list label').should('have.css', 'text-decoration-line', 'line-through');
 
     cy.get('.todo-list .toggle').click();
     cy.get('.todo-list label').should('not.have.css', 'text-decoration-line', 'line-through');
    
    /* throw new Error('test fails because you need to implement it!'); */
  });

  it('should clear completed', () => {
    /**
     * Add the following test
     *
     * 1. The "Clear completed" button in the bottom should clear out all completed todos
     */

    //create 2 new todos
    cy.get('.new-todo').type('Test 3-1{enter}');
    cy.get('.new-todo').type('Test 3-2{enter}');

    //check Test 3-2
    cy.get('.todo-list li:nth-child(2) .toggle').click();

    //click clear completed
    cy.get('.clear-completed').click();

    //check that only Test 3-1 is left
    cy.get('.todo-list li').should('have.length', 1);
    cy.get('.todo-list li:nth-child(1) label').should('have.text', 'Test 3-1');

    /* throw new Error('test fails because you need to implement it!'); */
  });
});
