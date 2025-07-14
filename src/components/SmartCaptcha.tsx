import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

interface SmartCaptchaProps {
  onSuccess: (token: string) => void;
  sitekey?: string;
  lang?: string;
}

export interface SmartCaptchaRef {
  execute: () => void;
}

export const YandexSmartCaptcha = forwardRef<SmartCaptchaRef, SmartCaptchaProps>(
  ({ onSuccess, sitekey = "ysc1_NGFXF31XAff9jCBHPdUOHgbgW04WktyeCmRQm0Rdda1fd731", lang = "en" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);

    useImperativeHandle(ref, () => ({
      execute: () => {
        if (widgetIdRef.current && (window as any).smartCaptcha) {
          (window as any).smartCaptcha.execute(widgetIdRef.current);
        }
      }
    }));

    useEffect(() => {
      const loadScript = () => {
        if (document.getElementById('smartcaptcha-script')) return;
        
        const script = document.createElement('script');
        script.id = 'smartcaptcha-script';
        script.src = 'https://smartcaptcha.yandexcloud.net/captcha.js?render=onload&onload=initSmartCaptcha';
        script.defer = true;
        document.head.appendChild(script);
      };

      (window as any).initSmartCaptcha = () => {
        if (containerRef.current && (window as any).smartCaptcha) {
          widgetIdRef.current = (window as any).smartCaptcha.render(containerRef.current, {
            sitekey,
            invisible: true,
            callback: onSuccess,
            'error-callback': (error: any) => {
              console.error('SmartCaptcha error:', error);
            }
          });
        }
      };

      loadScript();

      return () => {
        // Cleanup if needed
        if (widgetIdRef.current && (window as any).smartCaptcha) {
          try {
            (window as any).smartCaptcha.reset(widgetIdRef.current);
          } catch (e) {
            console.warn('Error resetting captcha:', e);
          }
        }
      };
    }, [sitekey, onSuccess]);

    return <div ref={containerRef} style={{ display: 'none' }} />;
  }
);

YandexSmartCaptcha.displayName = 'YandexSmartCaptcha';