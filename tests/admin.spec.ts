import { test, expect } from '@playwright/test';

test.describe('Parcours Administrateur', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Connexion Admin avec les vrais identifiants (seeder)
    await page.getByRole('button', { name: 'Se connecter' }).click();
    await page.locator('input[type="email"]').fill('hajaina@apex.com');
    await page.locator('input[type="password"]').fill('Hajaina');
    await page.getByRole('button', { name: /Se connecter au Dashboard/i }).click();

    // L'admin est redirigé vers la page d'ajout de véhicule
    await expect(page.getByText('Espace Executive')).toBeVisible({ timeout: 10000 });
  });

  test('Ajout d\'un nouveau véhicule au catalogue', async ({ page }) => {
    // Remplir le formulaire complet
    await page.locator('#brand').fill('McLaren');
    await page.locator('#model').fill('720S');
    await page.locator('#license_plate').fill('MC-720-XX');
    await page.locator('#location').fill('Monaco');
    await page.locator('select#type').selectOption('Sport');
    await page.locator('#price_per_day').fill('800');
    await page.locator('#image').fill('https://images.unsplash.com/photo-1614026480418-f2b3e8e19275?q=80&w=1200');

    // Soumettre via le bouton submit du formulaire
    await page.getByRole('button', { name: /Ajouter la voiture au catalogue/i }).click();

    // Vérifier le succès (toast ou redirection)
    await expect(page.getByText(/succès/i)).toBeVisible({ timeout: 10000 });
  });

});
