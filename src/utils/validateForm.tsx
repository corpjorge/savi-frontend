export function validateNumericType(e: { target: { value: string } }) {
  const { value } = e.target;
  if (value.length > 0) {
    if (isNaN(Number(value))) {
      return false;
    }
    if (/^[0-9]+$/.test(value)) {
      return true;
    }
  }
}

export function minLength(e: { target: { value: string } }, min: number) {
  const { value } = e.target;
  if (value.length > 0) {
    return value.length < min;
  }
}

export function maxLength(e: { target: { value: string } }, max: number) {
  const { value } = e.target;
  if (value.length > 0) {
    return value.length > max;
  }
}

export function validateSpecialCharacters(e: { target: { value: string } }) {
  const { value } = e.target;
  if (value.length > 0) {
    return !/^[a-zA-Z0-9-_]+$/.test(value);
  }
}

export function validateRepeatedCharacters(e: { target: { value: string } }) {
  const { value } = e.target;
  let a = 0;
  if (value.length > 0) {
    for (let i = 0; i < value?.length; i++) {
      const currentCharacter = value?.charAt(i).toLowerCase();
      const previousCharacter = value?.charAt(i - 1).toLowerCase();
      if (currentCharacter === previousCharacter) {
        a++;
        return a < 2;
      } else {
        a = 0;
      }
    }
    return false;
  }
}

export function validateMinTwoNumbers(e: { target: { value: string } }) {
  const { value } = e.target;
  if (value.length > 0) {
    const character = [];
    for (let i = 0; i < value?.length; i++) {
      const currentCharacter = value?.charAt(i).toLowerCase();
      if (!isNaN(Number(currentCharacter))) {
        character.push(i);
      }
    }
    return character.length >= 2;
  }
}

export function required(e: { target: { value: string } }) {
  const { value } = e.target;
  if (value.length === 0) {
    return true;
  }
}
