import { ref } from "vue";

function getSessionStorageOrDefault(key: string, defaultValue: any) {
  let stored;

  if (typeof window !== "undefined") {
    stored = sessionStorage.getItem(key);
  }

  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

export function useSessionStorage(key: string, defaultValue: any) {
  const store = ref(getSessionStorageOrDefault(key, defaultValue));

  sessionStorage.setItem(key, JSON.stringify(store.value));

  return store.value;
}
