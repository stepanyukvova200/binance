// Валідація адрес для різних блокчейн мереж

export interface ValidationResult {
  isValid: boolean;
  network: 'TRC20' | 'BNB' | 'ETH' | 'INVALID';
  message: string;
}

/**
 * Валідація TRC20 адреси (TRON)
 * TRC20 адреси починаються з "T" і мають 34 символи
 */
export const validateTRC20Address = (address: string): boolean => {
  if (!address) return false;
  
  // Перевіряємо, чи адреса починається з "T" і має 34 символи
  const trc20Regex = /^T[1-9A-HJ-NP-Za-km-z]{33}$/;
  return trc20Regex.test(address);
};

/**
 * Валідація BNB Smart Chain адреси
 * BNB адреси починаються з "0x" і мають 42 символи (як Ethereum)
 */
export const validateBNBAddress = (address: string): boolean => {
  if (!address) return false;
  
  // Перевіряємо, чи адреса починається з "0x" і має 42 символи
  const bnbRegex = /^0x[a-fA-F0-9]{40}$/;
  return bnbRegex.test(address);
};

/**
 * Валідація Ethereum адреси (для порівняння)
 */
export const validateETHAddress = (address: string): boolean => {
  if (!address) return false;
  
  const ethRegex = /^0x[a-fA-F0-9]{40}$/;
  return ethRegex.test(address);
};

/**
 * Основна функція валідації адреси
 * Визначає тип мережі та валідність адреси
 */
export const validateWalletAddress = (address: string): ValidationResult => {
  if (!address || address.trim() === '') {
    return {
      isValid: false,
      network: 'INVALID',
      message: 'Введіть адресу гаманця'
    };
  }

  const trimmedAddress = address.trim();

  // Перевіряємо TRC20 (TRON)
  if (validateTRC20Address(trimmedAddress)) {
    return {
      isValid: true,
      network: 'TRC20',
      message: 'Валідна TRC20 адреса'
    };
  }

  // Перевіряємо BNB Smart Chain
  if (validateBNBAddress(trimmedAddress)) {
    return {
      isValid: true,
      network: 'BNB',
      message: 'Валідна BNB Smart Chain адреса'
    };
  }

  // Перевіряємо Ethereum (може бути сумісна з BNB)
  if (validateETHAddress(trimmedAddress)) {
    return {
      isValid: true,
      network: 'ETH',
      message: 'Валідна Ethereum адреса'
    };
  }

  // Якщо нічого не підійшло
  return {
    isValid: false,
    network: 'INVALID',
    message: 'Невірний формат адреси. Підтримуються TRC20 та BNB Smart Chain'
  };
};

/**
 * Форматування адреси для відображення (скорочення)
 */
export const formatAddress = (address: string, startChars: number = 6, endChars: number = 4): string => {
  if (!address || address.length <= startChars + endChars) {
    return address;
  }
  
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
};
