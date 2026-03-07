import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const hasAccess = false; // Replace with your real role check logic

  if (!hasAccess) {
    router.navigate(['/no-access']);
    return false;
  }

  return true;
};