import { SmartCaptcha } from '@yandex/smart-captcha';

interface SmartCaptchaProps {
  onSuccess: (token: string) => void;
  sitekey?: string;
}

export const YandexSmartCaptcha = ({ onSuccess, sitekey = "YOUR_YANDEX_SITEKEY" }: SmartCaptchaProps) => {
  return (
    <div className="flex justify-center my-4">
      <SmartCaptcha
        sitekey={sitekey}
        onSuccess={onSuccess}
      />
    </div>
  );
};