import React, { useState, useCallback } from 'react';

interface EmailValidationResult {
  isValid: boolean;
  error?: string;
}

export const useEmailValidation = () => {
  const [validationCache, setValidationCache] = useState<Map<string, EmailValidationResult>>(new Map());

  const validateEmail = useCallback(async (email: string): Promise<EmailValidationResult> => {
    // Базовая проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, error: 'Invalid email format' };
    }

    // Проверяем кэш
    if (validationCache.has(email)) {
      return validationCache.get(email)!;
    }

    try {
      const domain = email.split('@')[1].toLowerCase();
      
      // Проверка на часто используемые одноразовые email домены
      const disposableEmailDomains = [
        '10minutemail.com',
        'tempmail.org', 
        'guerrillamail.com',
        'mailinator.com',
        'throwaway.email',
        'temp-mail.org',
        'getairmail.com',
        'sharklasers.com'
      ];

      if (disposableEmailDomains.includes(domain)) {
        const result = { isValid: false, error: 'Disposable email addresses are not allowed' };
        setValidationCache(prev => new Map(prev).set(email, result));
        return result;
      }

      // Проверка на подозрительные домены
      const suspiciousDomains = [
        'example.com',
        'test.com',
        'fake.com',
        'invalid.com'
      ];

      if (suspiciousDomains.includes(domain)) {
        const result = { isValid: false, error: 'This email domain is not allowed' };
        setValidationCache(prev => new Map(prev).set(email, result));
        return result;
      }

      // Простая проверка на существование общих доменов
      const commonDomains = [
        'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
        'protonmail.com', 'icloud.com', 'aol.com', 'live.com',
        'yandex.ru', 'mail.ru', 'rambler.ru'
      ];

      let result: EmailValidationResult;
      
      if (commonDomains.includes(domain)) {
        result = { isValid: true };
      } else {
        // Для корпоративных доменов делаем более мягкую проверку
        // В реальном приложении здесь можно добавить MX проверку через API
        const hasValidTLD = domain.includes('.') && domain.split('.').pop()!.length >= 2;
        result = hasValidTLD 
          ? { isValid: true }
          : { isValid: false, error: 'Invalid email domain' };
      }

      // Кэшируем результат
      setValidationCache(prev => new Map(prev).set(email, result));
      return result;

    } catch (error) {
      console.error('Email validation error:', error);
      return { isValid: true }; // В случае ошибки не блокируем пользователя
    }
  }, [validationCache]);

  const clearCache = useCallback(() => {
    setValidationCache(new Map());
  }, []);

  return {
    validateEmail,
    clearCache
  };
};