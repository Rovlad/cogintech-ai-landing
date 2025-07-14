import { SmartCaptcha } from '@yandex/smart-captcha';

interface SmartCaptchaProps {
  onSuccess: (token: string) => void;
  sitekey?: string;
}

export const YandexSmartCaptcha = ({ onSuccess, sitekey = "ysc1_NGFXF31XAff9jCBHPdUOHgbgW04WktyeCmRQm0Rdda1fd731" }: SmartCaptchaProps) => {
  return (
    <div className="flex justify-center my-4">
      <SmartCaptcha
        sitekey={sitekey}
        onSuccess={onSuccess}
      />
    </div>
  );
};