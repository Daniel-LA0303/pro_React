import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {

    const[t, i18n] = useTranslation("global");

    return ( 
        <div>
            <h1>{t("header.hello-world")}</h1>

            <button
                onClick={() => i18n.changeLanguage("es")}
            >es</button>
            <button
                onClick={() => i18n.changeLanguage("en")}
            >en</button>
        </div>
     );
}
 
export default Header;