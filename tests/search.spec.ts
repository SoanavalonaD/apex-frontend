import { test, expect } from '@playwright/test';

test.describe('Parcours Recherche et Navigation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('Recherche et utilisation du filtre Catégorie', async ({ page }) => {
    // Aller sur la page recherche via le bouton exact dans la navbar
    await page.getByRole('button', { name: 'Recherche', exact: true }).first().click();

    // Sélectionner la catégorie "Sport" dans le select
    await page.locator('select').filter({ hasText: /Sport|Luxe|Economy/ }).selectOption('Sport');

    // Vérifier que les véhicules filtrés s'affichent
    // On cible le span contenant le type du véhicule, et non l'option du select
    const sportTag = page.locator('span').filter({ hasText: /^Sport$/ }).first();
    await expect(sportTag).toBeVisible();
  });

  test('Navigation vers les détails d\'un véhicule', async ({ page }) => {
    // Cliquer sur le titre du véhicule (h4) sur l'accueil pour ouvrir les détails
    await page.locator('h4').first().click();

    // Vérifier que la page des détails s'affiche
    await expect(page.getByText('Aperçu')).toBeVisible();
    await expect(page.getByText('Galerie Média')).toBeVisible();
    
    // Vérifier que le bouton de réservation est présent dans le sticky footer
    const reserveButton = page.locator('div.fixed.bottom-0 button').filter({ hasText: /Réserver/i });
    await expect(reserveButton).toBeVisible();
  });

});
