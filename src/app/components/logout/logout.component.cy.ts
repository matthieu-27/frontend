import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  it('mounts', () => {
    cy.mount(LogoutComponent, {
      imports: [HttpClientModule]
    });
  })
  it('should be a button with logout text', ()  => {
    cy.mount(LogoutComponent, {
      imports: [HttpClientModule]
    })
    cy.get('button').should('have.text', 'logout')
  })
});
