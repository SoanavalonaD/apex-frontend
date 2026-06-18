import { test, expect } from '@playwright/test';

test.describe('Parcours Authentification', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('Connexion utilisateur classique et redirection vers l\'accueil', async ({ page }) => {
    // Clic sur le bouton de connexion dans la navbar
    await page.getByRole('button', { name: 'Se connecter' }).click();
    
    // Remplir le formulaire avec les vrais identifiants (seeder)
    await page.locator('input[type="email"]').fill('deborah@apex.com');
    await page.locator('input[type="password"]').fill('Deborah');
    
    // Valider via le bouton du formulaire
    await page.getByRole('button', { name: /Se connecter au Dashboard/i }).click();

    // Vérifier qu'on est bien connecté et redirigé vers l'accueil
    await expect(page.getByText('Élevez Votre Voyage')).toBeVisible({ timeout: 10000 });
  });

  test('Affichage d\'erreur si mauvais mot de passe', async ({ page }) => {
    await page.getByRole('button', { name: 'Se connecter' }).click();
    
    await page.locator('input[type="email"]').fill('deborah@apex.com');
    await page.locator('input[type="password"]').fill('mauvais_mot_de_passe');
    await page.getByRole('button', { name: /Se connecter au Dashboard/i }).click();

    // Vérifier l'affichage du toast d'erreur (message du backend)
    await expect(page.getByText(/Invalid credentials/i)).toBeVisible({ timeout: 10000 });
  });

});
