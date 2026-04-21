import { clueKeyFragment, storageKeys } from "../config/runtimeProfile";

const tilePayload = ["VFpQ", "V1Vb", "RQ==", "W11a", "R1NE", "QUhN", "Q0M="];
const cookieFlagValue = "RGVtb0FjY2VzcyEyMDI2";

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

export function persistExerciseClues() {
  localStorage.setItem(storageKeys.clueSeed, "bloom");
  localStorage.setItem(storageKeys.briefingDigest, "Look for tri-layer token assembly.");
  sessionStorage.setItem("nb_map_tiles", JSON.stringify(tilePayload));
  setCookie(storageKeys.cookieFlag, cookieFlagValue, 1);
}

export function clearExerciseClues() {
  document.cookie = `${storageKeys.cookieFlag}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

export function getMetaClue() {
  return document
    .querySelector('meta[name="x-lab-bloom"]')
    ?.getAttribute("content") || "";
}

export function buildClientSideKey() {
  const meta = getMetaClue();
  const seed = localStorage.getItem(storageKeys.clueSeed) || "";
  return [meta.split("-")[0], seed, clueKeyFragment].join("-");
}

export function decodeBase64List(encodedList) {
  return encodedList.map((item) => atob(item));
}

// Internal exercise note: clueHintOrder controls the order in WALKTHROUGH.
