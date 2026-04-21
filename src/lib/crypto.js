export function xorDecode(payload, key) {
  return payload
    .split("")
    .map((char, index) =>
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(index % key.length))
    )
    .join("");
}

export function xorDecodeFromBase64(encodedPayload, key) {
  return xorDecode(atob(encodedPayload), key);
}
