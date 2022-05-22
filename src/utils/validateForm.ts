export function validateNumericType(value: string) {
  if (value.length > 0) {
    if (isNaN(Number(value))) {
      return false;
    }
    if (/^[0-9]+$/.test(value)) {
      return true;
    }
  }
}

export function minLength(value: string, min: number) {
  if (value.length > 0) {
    return value.length < min;
  }
}

export function maxLength(value: string, max: number) {
  if (value.length > 0) {
    return value.length > max;
  }
}

export function validateSpecialCharacters(value: string) {
  if (value.length > 0) {
    return !/^[a-zA-Z0-9-_]+$/.test(value);
  }
}

export function validateRepeatedCharacters(value: string) {
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

export function validateMinTwoNumbers(value: string) {
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

export function required(value: string) {
  if (value.length === 0) {
    return true;
  }
}

export function validateEmail(value: string) {
  if (value.length > 0) {
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  }
}
