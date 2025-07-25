import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineAll = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            We use cookies to improve our website performance, analyze traffic, and personalize content. 
            By continuing to use our site, you agree to our{" "}
            <a href="/cookie-policy" className="text-primary hover:underline">
              cookie policy
            </a>.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={declineAll}
            className="text-sm"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="text-sm"
          >
            Accept All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={declineAll}
            className="p-1"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;