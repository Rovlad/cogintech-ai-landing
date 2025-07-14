import { SmartCaptcha } from '@yandex/smart-captcha';

interface SmartCaptchaProps {
  onSuccess: (token: string) => void;
  sitekey?: string;
  lang?: string;
  invisible?: boolean;
}

export const YandexSmartCaptcha = ({ onSuccess, sitekey = "ysc1_NGFXF31XAff9jCBHPdUOHgbgW04WktyeCmRQm0Rdda1fd731", lang = "en", invisible = false }: SmartCaptchaProps) => {
  return (
    <div className="flex justify-center my-4">
      <SmartCaptcha
        sitekey={sitekey}
        onSuccess={onSuccess}
        language={lang as "en"}
        {...(invisible && { style: { opacity: 0, position: 'absolute', left: '-9999px' } })}
      />
    </div>
  );
};