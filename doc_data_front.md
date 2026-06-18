# SPÉCIFICATION TECHNIQUE DE L'API (CONTRAT FRONTEND/BACKEND)
**Projet :** APEX Car Rental  
**Version :** 1.0  
**Format d'échange :** JSON (UTF-8)

---

## 1. ENTITÉ : VÉHICULE (`Car`)
*Cette entité est utilisée pour l'affichage de la liste des voitures et de la fiche détail.*

| Nom métier (Conception) | Clé API (JSON) | Type de donnée | Exemple de valeur |
| :--- | :--- | :--- | :--- |
| **Marque** | `brand` | `string` | `"Porsche"` |
| **Modèle** | `model` | `string` | `"Taycan Turbo S"` |
| **Catégorie** | `category` | `string` | `"Luxe"` |
| **Images** | `images` | `array[string]` | `["url_1.jpg", "url_2.jpg"]` |
| **Type Moteur** | `engine_type` | `string` | `"Électrique"` |
| **Puissance** | `power` | `string` | `"750ch"` |
| **Accélération** | `acceleration` | `string` | `"1.99s"` |
| **Vitesse Max** | `max_speed` | `string` | `"322 km/h"` |
| **Autonomie** | `range` | `string \| null` | `"637 km"` |
| **Nombre de Sièges** | `seats` | `integer` | `5` |
| **Capacité Bagages** | `luggage_capacity` | `integer` | `2` |
| **Transmission** | `transmission` | `string` | `"Automatique"` |
| **Prix Journalier** | `price_per_day` | `string (decimal)`| `"1200000.00"` |
| **Statut** | `status` | `string` | `"available"` |
| **Note** | `rating` | `float` | `4.9` |
| **Description** | `description` | `string` | `"Description longue..."` |

---

## 2. ENTITÉ : RÉSERVATION (`Rental`)
*Cette entité est utilisée pour la création de la réservation et l'affichage du récapitulatif.*

| Nom métier (Conception) | Clé API (JSON) | Type de donnée | Exemple de valeur |
| :--- | :--- | :--- | :--- |
| **ID Utilisateur** | `user_id` | `integer` | `12` |
| **ID Véhicule** | `car_id` | `integer` | `45` |
| **Date de Départ** | `start_date` | `datetime (ISO)` | `"2023-11-24T10:00:00Z"` |
| **Date de Retour** | `end_date` | `datetime (ISO)` | `"2023-11-26T18:00:00Z"` |
| **Durée Totale** | `duration_days` | `integer` | `3` |
| **Lieu de Prise en charge**| `pickup_location` | `string` | `"Aéroport Int. Madagascar"` |
| **Lieu de Restitution** | `dropoff_location` | `string` | `"Centre-ville Apex"` |
| **Montant Total** | `total_amount` | `string (decimal)`| `"4360000.00"` |
| **Détails du Prix** | `price_breakdown` | `object` | *(voir sous-objet ci-dessous)* |
| **Services Inclus** | `included_services` | `array[string]` | `["Assistance 24/7", "Conciergerie"]` |
| **Statut** | `status` | `string` | `"pending"` |

### Détail de l'objet `price_breakdown` :
```json
"price_breakdown": {
    "base_price": "3600000.00",
    "insurance": "580000.00",
    "service_fee": "130000.00",
    "environmental_tax": "50000.00"
}
```

---

## NOTES TECHNIQUES POUR LE DÉVELOPPEUR FRONTEND

1.  **Format des Dates :** Toutes les dates sont envoyées au format **ISO 8601** (`YYYY-MM-DDTHH:mm:ssZ`). Merci d'utiliser une librairie comme `date-fns` ou `dayjs` pour le formatage local.
2.  **Gestion des Montants (Money) :** Les montants (`price_per_day`, `total_amount`, etc.) sont envoyés sous forme de **Strings** pour éviter les erreurs de précision de calcul (Floating Point Errors). Merci de les convertir en `Number` uniquement au moment de l'affichage final.
3.  **Gestion des Statuts (Enums) :** Les statuts (ex: `status` de la voiture ou de la réservation) sont des chaînes de caractères en **minuscules** (`available`, `rented`, `pending`, etc.).
4.  **Images :** Le champ `images` est un tableau de chaînes de caractères contenant des URLs absolues.