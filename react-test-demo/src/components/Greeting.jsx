import { useTranslation } from 'react-i18next';

const Greeting = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div>
        <button onClick={() => i18n.changeLanguage('pt')}>pt</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </div>
      <p data-testid="test-i18">{t('Welcome to React')}</p>
    </>
  );
};
export default Greeting;
