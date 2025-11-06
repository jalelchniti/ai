# 🔑 WORKFLOW DE DÉPLOIEMENT FTP - RAPPEL IMPORTANT

**Date:** Novembre 6, 2025
**Méthode:** FTP Manuel (pas de Git OVH)

---

## ⚠️ RAPPEL CRITIQUE - À CHAQUE MODIFICATION

### 🔐 API KEY GROQ

**Stockage Local:** Sauvegardée sur votre disque local
**Ne JAMAIS commiter sur GitHub:** ✅ Toujours placeholder dans GitHub
**À faire APRÈS chaque modification de config.php:**

1. ✅ Télécharger le fichier modifié depuis GitHub (ou local)
2. ✅ Ouvrir le fichier en local
3. ⚠️ **REMPLACER** `'YOUR_GROQ_API_KEY_HERE'` par votre vraie clé API
4. ✅ Uploader via FTP vers OVH
5. ✅ Vérifier que le chat fonctionne

---

## 📁 FICHIERS CONCERNÉS

**À CHAQUE fois qu'on modifie:**
- `teacher-chat/config.php` → Ligne 21: Remettre votre API key
- `parent-chat/config.php` → Ligne 21: Remettre votre API key

---

## 🔄 WORKFLOW COMPLET

### Quand Claude modifie un fichier config.php:

```
1. Claude fait la modification sur GitHub (avec placeholder)
2. ⚠️ RAPPEL: "N'oubliez pas de remettre votre API key locale!"
3. Vous téléchargez le fichier modifié
4. Vous remplacez 'YOUR_GROQ_API_KEY_HERE' par votre vraie clé
5. Vous uploadez via FTP
6. Vous testez le site
```

---

## 🎯 CHECKLIST APRÈS CHAQUE UPLOAD FTP

- [ ] API key remise dans `teacher-chat/config.php` ligne 21
- [ ] API key remise dans `parent-chat/config.php` ligne 21
- [ ] Fichiers uploadés via FTP
- [ ] Test: https://ai.smarthub.com.tn/teacher-chat/ fonctionne
- [ ] Test: https://ai.smarthub.com.tn/parent-chat/ fonctionne
- [ ] Pas d'erreur HTTP 500

---

## 🚨 SI VOUS OUBLIEZ L'API KEY

**Symptôme:** HTTP 500 error ou message "API key not configured"

**Solution rapide:**
1. Retournez dans les config.php sur OVH
2. Ligne 21: `define('GROQ_API_KEY', 'gsk_votre_cle...');`
3. Sauvegardez
4. Rafraîchissez le site

---

## 📝 POUR CLAUDE

**RAPPEL AUTOMATIQUE À INCLURE SYSTÉMATIQUEMENT:**

```
⚠️ RAPPEL IMPORTANT:
Après avoir téléchargé ce fichier, n'oubliez pas de:
1. Remplacer 'YOUR_GROQ_API_KEY_HERE' par votre vraie API key locale
2. Ligne 21 dans teacher-chat/config.php
3. Ligne 21 dans parent-chat/config.php
4. Uploader via FTP sur OVH
```

---

**Ce document sert de rappel permanent pour le workflow FTP manuel.**
