-- Создаем таблицу для rate limiting
CREATE TABLE public.form_submissions_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  user_agent TEXT,
  form_type TEXT NOT NULL,
  submission_data JSONB,
  is_suspicious BOOLEAN DEFAULT FALSE,
  suspicious_reasons TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Создаем индексы для быстрого поиска
CREATE INDEX idx_form_submissions_ip_created ON public.form_submissions_log(ip_address, created_at);
CREATE INDEX idx_form_submissions_suspicious ON public.form_submissions_log(is_suspicious);
CREATE INDEX idx_form_submissions_form_type ON public.form_submissions_log(form_type);

-- Создаем таблицу для CSRF токенов
CREATE TABLE public.csrf_tokens (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Создаем индекс для быстрого поиска токенов
CREATE INDEX idx_csrf_tokens_token ON public.csrf_tokens(token);
CREATE INDEX idx_csrf_tokens_expires ON public.csrf_tokens(expires_at);

-- Функция для очистки старых записей
CREATE OR REPLACE FUNCTION public.cleanup_old_records()
RETURNS void AS $$
BEGIN
  -- Удаляем логи старше 30 дней
  DELETE FROM public.form_submissions_log 
  WHERE created_at < NOW() - INTERVAL '30 days';
  
  -- Удаляем истекшие CSRF токены
  DELETE FROM public.csrf_tokens 
  WHERE expires_at < NOW() OR used = TRUE;
END;
$$ LANGUAGE plpgsql;

-- Включаем RLS для безопасности
ALTER TABLE public.form_submissions_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.csrf_tokens ENABLE ROW LEVEL SECURITY;

-- Политики RLS (только для сервисных операций)
CREATE POLICY "Service role can manage form logs" 
ON public.form_submissions_log 
FOR ALL 
USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage CSRF tokens" 
ON public.csrf_tokens 
FOR ALL 
USING (auth.role() = 'service_role');