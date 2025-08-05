import { useEffect, useState } from "react";

/**
 * Hook para aplicar debounce em um valor qualquer.
 * @param value Valor a ser debounced
 * @param delay Delay em milissegundos (padrão 500ms)
 * @returns Valor debounced que só muda após o delay sem alteração
 */

export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}