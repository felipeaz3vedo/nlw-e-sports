import { GameBanner } from './components/GameBanner';

import logoImg from './assets/logo.svg';

import './styles/main.css';
import { CreateAdBanner } from './components/CreateAdBanner';

export const App = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logomarca do NLW eSports" />

      <h1 className="text-[64px] text-white font-black mt-20">
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent ">
          duo
        </span>{' '}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-20">
        <GameBanner
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={5}
        />
      </div>

      <CreateAdBanner />
    </div>
  );
};
