import React from 'react';
import { mount } from 'cypress-react-unit-test';
import Gel from '../../src';

const { Button } = Gel.components;

describe('Product Commerce', () => {
  it('should render bro', () => {
    const onClick = cy.stub().as('onClick');

    mount(
      <Button dataTestRef="button" onClick={onClick}>
        Hello
      </Button>,
    );
    cy.get(`[data-test-ref=button]`).click();

    cy.get('@onClick').should('have.been.called');
  });
});
