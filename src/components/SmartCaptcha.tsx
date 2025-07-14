import { SmartCaptcha } from '@yandex/smart-captcha';

interface SmartCaptchaProps {
  onSuccess: (token: string) => void;
  sitekey?: string;
  lang?: string;
  invisible?: boolean;
}

export const YandexSmartCaptcha = ({ onSuccess, sitekey = "ysc1_NGFXF31XAff9jCBHPdUOHgbgW04WktyeCmRQm0Rdda1fd731", lang = "en", invisible = true }: SmartCaptchaProps) => {
  return (
    <div className={`flex justify-center my-4 ${invisible ? 'opacity-0 w-1 h-1 overflow-hidden pointer-events-none' : ''}`}>
      <SmartCaptcha
        sitekey={sitekey}
        onSuccess={onSuccess}
        language={lang as "en"}
      />
    </div>
  );
};