import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Tooltip, TooltipProps } from "reactstrap";

const FloatingLanguageSwitcher = () => {
    const { t } = useTranslation('common');
  const { i18n } = useTranslation();
  const router = useRouter();
  const [tooltipOpen, setTooltipOpen] = useState({}); 

  const toggleTooltip = (id) => {
    setTooltipOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
  }, []);

  const changeLanguage = async (languageCode) => {
    await i18n.changeLanguage(languageCode);
    router.push(router.pathname, router.asPath, { locale: languageCode });
  };

  // Language options
  const languages = [
    { code: "en", name: "En" ,lang: "English"},
    { code: "ar", name: "ع",lang: "العربية"},
  ];

  return (
    <div className="wpml-floating-language-switcher">
      <div className="wpml-ls-statics-shortcode_actions">
        {languages.map((lang) => (
          <div key={lang.code}>
            <a
              onClick={() => changeLanguage(lang.code)}
              className={`${i18n.language === lang.code ? "active" : ""} floatlanglink`}
              style={{ cursor: "pointer" }}
              id={`tooltip-${lang.code}`}
              onMouseEnter={() => toggleTooltip(`tooltip-${lang.code}`)}
              onMouseLeave={() => toggleTooltip(`tooltip-${lang.code}`)}
            >
              {lang.name}
            </a>
            <Tooltip
              isOpen={tooltipOpen[`tooltip-${lang.code}`]}
              target={`tooltip-${lang.code}`}
              toggle={() => toggleTooltip(`tooltip-${lang.code}`)}
            >
              {t('Change-language')} {lang.lang}
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingLanguageSwitcher;
