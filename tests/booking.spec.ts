import { test, expect } from '@playwright/test';

test.describe('Parcours Réservation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    
    // Connexion avec un vrai compte client (seeder)
    await page.getByRole('button', { name: 'Se connecter' }).click();
    await page.locator('input[type="email"]').fill('deborah@apex.com');
    await page.locator('input[type="password"]').fill('Deborah');
    await page.getByRole('button', { name: /Se connecter au Dashboard/i }).click();

    // Attendre d'être redirigé sur l'accueil (vérifier un élément visible)
    await expect(page.getByText('Élevez Votre Voyage')).toBeVisible({ timeout: 10000 });
  });

  test('Processus complet de réservation', async ({ page }) => {
    // Trouver un véhicule disponible et cliquer sur "Réserver"
    await page.getByRole('button', { name: /Réserver/i }).first().click();

    // Vérifier qu'on arrive sur la page de réservation
    await expect(page.getByText('Résumé du Prix')).toBeVisible({ timeout: 10000 });
  });

});
