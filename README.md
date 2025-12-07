#  TP : Création de composants React Native avec Expo

##  Objectif du TP

L'objectif de ce TP est d'apprendre à : - Créer un projet React Native
avec Expo - Nettoyer l'écran principal - Organiser une architecture de
composants - Créer des composants réutilisables (Header, Footer,
Card...) - Structurer une interface avec View et StyleSheet - Comprendre
le Fast Refresh

------------------------------------------------------------------------

##  Étape 1 -- Création du projet Expo

-   Création d'un projet avec Expo.
-   Ouverture dans un éditeur (VS Code ou IntelliJ).
-   Lancement via Expo.
-   Test :
    -   Expo Go (mobile)
    -   émulateur Android/iOS
    -   navigateur web


<img width="1468" height="756" alt="image" src="https://github.com/user-attachments/assets/931bf085-9cec-471e-8c4e-9e4354b42498" />



<img width="1462" height="744" alt="image" src="https://github.com/user-attachments/assets/fb904588-6c50-4152-bc4e-f3c7b755a241" />

------------------------------------------------------------------------

##  Étape 2 -- Nettoyage du fichier principal

-   Ouvrir le fichier principal (`App.js`, `App.tsx` ou
    `app/index.tsx`).
-   Retirer tout le code généré par défaut.
-   Garder un écran simple avec un texte centré.
-   Vérifier le Fast Refresh.


<img width="347" height="732" alt="image" src="https://github.com/user-attachments/assets/9e85460d-3c0a-400b-b4e8-2b5134342229" />

<img width="1442" height="730" alt="image" src="https://github.com/user-attachments/assets/7d96164a-140e-4eda-992b-408ce7b2c155" />

------------------------------------------------------------------------

##  Étape 3 -- Organisation des composants

-   Créer un dossier `components` à la racine.
-   Objectif : ranger les composants réutilisables.



<img width="684" height="1079" alt="image" src="https://github.com/user-attachments/assets/b35f05f1-6dad-4505-a31a-a4fad6806407" />

------------------------------------------------------------------------

##  Étape 4 -- Création du composant AppHeader

-   Créer un fichier dans `components`.
-   Ajouter un titre + sous-titre.
-   Styliser avec un fond coloré et un centrage.

<img width="1645" height="708" alt="image" src="https://github.com/user-attachments/assets/79b4d846-a541-4d0e-a847-ef392058b33d" />




------------------------------------------------------------------------

##  Étape 5 -- Utilisation du Header

-   Importer `AppHeader` dans l'écran principal.
-   Structure :
    -   header en haut
    -   contenu au centre
-   Ajustements de style.
<img width="351" height="721" alt="image" src="https://github.com/user-attachments/assets/a248510f-cabc-4569-9963-0fbc01919c81" />
------------------------------------------------------------------------

##  Étape 6 -- Création du composant AppFooter

-   Nouveau fichier `AppFooter` dans `components`.
-   Footer simple avec texte centré et fond coloré.

------------------------------------------------------------------------

##  Étape 7 -- Intégration du Footer

-   Importer `AppFooter`.
-   Structure finale :
    1.  Header\
    2.  Contenu\
    3.  Footer\
-   Vérification visuelle.

<img width="1350" height="678" alt="image" src="https://github.com/user-attachments/assets/8b636a6f-a516-41b3-a7e7-01f18dbafde5" />

------------------------------------------------------------------------

##  Étape 8 -- Mini-défis d'extension

### 1. Personnalisation du Footer

-   Année dynamique
-   Nom de l'application

### 2. Enrichir le Header

-   Description supplémentaire
-   Coloration / taille du texte

### 3. Créer un troisième composant : MainCard

-   Carte centrale avec texte et fond clair
-   Intégration dans la zone de contenu



<img width="1357" height="722" alt="image" src="https://github.com/user-attachments/assets/c29f4d6c-3702-44fa-a166-24e7bf00f0f3" />



<img width="351" height="729" alt="image" src="https://github.com/user-attachments/assets/3b9ab0bb-48ec-4a70-ba4b-fbdd2d8e30a1" />

------------------------------------------------------------------------


Auteur :

AITLBIZ Kaoutar
MDSIE-TEE

