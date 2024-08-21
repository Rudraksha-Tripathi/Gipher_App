import { TestBed, async, inject } from '@angular/core/testing';

import { LoginRegGuardGuard } from './login-reg-guard.guard';

describe('LoginRegGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRegGuardGuard]
    });
  });

  it('should ...', inject([LoginRegGuardGuard], (guard: LoginRegGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
