# Walkthrough

Ce document explique la logique de cachette des coordonnees GPS factices du lab. Les coordonnees d'exemple utilisees sont :

`36.8065, 10.1815`

## Vue d'ensemble

L'information n'est pas visible directement dans l'interface. Elle est reconstruite a partir de plusieurs indices :

1. un fragment de cle dans une balise meta HTML
2. un faux secret pedagogique dans un cookie apres connexion
3. un fragment de cle dans le `localStorage` apres connexion
4. un troisieme fragment dans le code source front-end
5. un payload chiffre puis encode en Base64 dans une reponse mockee
6. des fragments Base64 places dans le `sessionStorage`

## Emplacements

### 1. Balise meta

Dans `index.html` :

- `meta[name="x-lab-bloom"]` contient `north-seed`
- seul `north` est utilise dans la cle finale

### 2. Cookie pedagogique

Apres connexion, `persistExerciseClues()` cree un cookie :

- `nb_lab_flag = TkJ7Y29va2llc19hcmVfdmlzaWJsZV90b29fZnJvbV90aGVfY2xpZW50fQ==`
- `nb_lab_flag = TkJ7Y2xpZW50X3NpZGVfc2VjcmV0c19hcmVfdmlzaWJsZX0=`

Ce n'est pas un mot de passe. C'est un faux flag de sensibilisation qui peut etre decode en Base64 pour montrer qu'un secret expose cote client reste recuperable.

### 3. localStorage

Apres connexion, `persistExerciseClues()` stocke :

- `nb_trace_seed = bloom`
- `nb_briefing_digest = Look for tri-layer token assembly.`

Le premier element sert a la cle.

### 4. Fragment runtime

Dans `src/config/runtimeProfile.js` :

- `clueKeyFragment = "atlas"`

### 5. Construction de la cle

Dans `src/lib/clues.js`, la fonction `buildClientSideKey()` assemble la cle :

`north-bloom-atlas`

### 6. Payload chiffre

Dans `public/mock/briefing.json` :

- `encryptedCoordinate = "XVlcTFgbV0BPXl0DUExdVA=="`

Il faut d'abord faire un decode Base64, puis appliquer un XOR simple avec la cle ci-dessus.

### 7. Fragments Base64

Dans `sessionStorage`, `nb_map_tiles` contient une liste Base64.

Une fois decodee, elle donne des fragments de contexte :

- `TZP`
- `WU[`
- `E`
- etc.

Ces fragments ne suffisent pas seuls a obtenir le resultat, mais servent d'indice annexe montrant qu'un artefact cartographique est cache cote client.

## Etapes de resolution

1. Se connecter avec le compte de demonstration.
2. Ouvrir DevTools.
3. Inspecter `Application > Cookies` et relever `nb_lab_flag`.
4. Decoder ce cookie en Base64 pour obtenir le faux message pedagogique.
5. Inspecter `localStorage` et noter `nb_trace_seed`.
6. Inspecter le HTML et recuperer la valeur de `x-lab-bloom`.
7. Chercher dans le code source le fragment runtime `atlas`.
8. Assembler la cle `north-bloom-atlas`.
9. Aller dans l'onglet Network et ouvrir `/mock/briefing.json`.
10. Recuperer `encryptedCoordinate`.
11. Decoder la valeur en Base64.
12. Appliquer un XOR caractere par caractere avec `north-bloom-atlas`.
13. Retrouver `36.8065, 10.1815`.

## Indices utiles

- Le commentaire dans `src/lib/clues.js` indique que l'ordre des fragments compte.
- Le cookie `nb_lab_flag` montre qu'un artefact sensible ne doit pas vivre cote client.
- Le `nb_briefing_digest` dans le `localStorage` suggere une logique de construction en trois couches.
- Le message `keyDescriptor` du mock API confirme qu'il faut assembler une triade avant le decode.

## Rappel pedagogique

Ce projet est un lab local de sensibilisation defensive. Il illustre pourquoi il ne faut pas supposer qu'une information est protegee simplement parce qu'elle est "cachee" dans le front-end.
