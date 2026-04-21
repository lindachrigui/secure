import { demoCredentials, storageKeys } from "../config/runtimeProfile";
import { clearExerciseClues, persistExerciseClues } from "./clues";

export function loginWithDemoCredentials(email, password) {
  const isValid =
    email === demoCredentials.email && password === demoCredentials.password;

  if (!isValid) {
    return {
      ok: false,
      error: "Adresse email ou mot de passe invalide.",
    };
  }

  localStorage.setItem(storageKeys.session, email);
  persistExerciseClues();

  return { ok: true };
}

export function logout() {
  localStorage.removeItem(storageKeys.session);
  sessionStorage.removeItem("nb_map_tiles");
  clearExerciseClues();
}

export function getSessionUser() {
  return localStorage.getItem(storageKeys.session);
}
