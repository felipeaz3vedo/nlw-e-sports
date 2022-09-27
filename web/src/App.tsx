import { useEffect, useState } from 'react';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from './assets/logo.svg';

import './styles/main.css';
import { CreateAdModal } from './components/CreateAdModal';

interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export const App = () => {
  const [games, setGames] = useState<IGame[]>([]);

  const fetchData = async () => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => setGames(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  {
    console.log(games);
  }
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
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
};
