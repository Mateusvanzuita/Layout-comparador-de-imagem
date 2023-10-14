import React, { useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { LangStyle } from "./languageStyle";

const LanguageSelector = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("PT");

  const languages = ["PT", "English", "Espanõl", "Italiano", "Deutsch", "Français"]; // Adicione outras opções de idioma conforme necessário

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowOptions(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "40px",
      }}
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
    >
      <span style={{ marginRight: "10px" }}>{selectedLanguage}</span>
      <AiOutlineGlobal size={25} />

      {showOptions && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            padding: "20px",
            marginTop: '320px',
            borderRadius: '5px'

          }}
        >
          {languages.map((lang) => (
            <LangStyle
            key={lang}
            onClick={() => handleLanguageChange(lang)}
           
            >
              {lang}
            </LangStyle>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
