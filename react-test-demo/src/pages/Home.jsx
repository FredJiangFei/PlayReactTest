import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { username } = useSelector((state) => state.auth);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <button onClick={() => i18n.changeLanguage('pt')}>pt</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </div>
      <h1>Hello {username}, You are home</h1>
      <p>{t('Welcome to React')}</p>
    </>
  );
};
export default Home;
