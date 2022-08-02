import { ref } from "vue";

function getLocalStorageOrDefault(key: string, defaultValue: any) {
  let stored;

  if (typeof window !== "undefined") {
    stored = localStorage.getItem(key);
  }

  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

export function useLocalStorage(key: string, defaultValue: any) {
  const store = ref(getLocalStorageOrDefault(key, defaultValue));

  localStorage.setItem(key, JSON.stringify(store.value));

  return store.value;
}
