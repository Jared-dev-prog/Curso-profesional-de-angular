import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Lógica de negocio
  // Retorna un boleano
  const id = localStorage.getItem('id');
  if (id === '1234') {
    console.log('El id es correcto');
    return true;
  } else {
    console.log('El id es incorrecto');
    return false;
  }
};
