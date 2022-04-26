import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageMenu = props => {
  const { t, i18n } = useTranslation();

  const [values, setValues] = useState({
    language: 'pl',
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value);

    setValues(values === 'pl' ? 'en' : 'pl');
  }

  return (
    <select
      value={values.language}
      onChange={e => handleChange(e)}
      disableunderline="true"
      inputprops={{
        name: 'language',
      }}
    >
      <option value={'pl'}>PL</option>
      <option value={'en'}>EN</option>
    </select>
  );
};

export default LanguageMenu;
