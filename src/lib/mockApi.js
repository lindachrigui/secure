export async function fetchBriefing() {
  const response = await fetch("/mock/briefing.json");

  if (!response.ok) {
    throw new Error("Unable to load mock briefing.");
  }

  return response.json();
}
