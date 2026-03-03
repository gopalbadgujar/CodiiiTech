import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const subscriptionGuard: CanActivateFn = () => {

  const router = inject(Router);

  const subscription = localStorage.getItem("subscription");

  if (subscription === "active") {
    return true;
  }

  router.navigate(['/subscription']);
  return false;
};