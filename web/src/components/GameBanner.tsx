interface IGameBanner {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export const GameBanner = (props: IGameBanner) => {
  return (
    <div>
      <a className="relative rounded-lg overflow-hidden" href="">
        <img src={props.bannerUrl} alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
          <strong className="font-bold text-white block">{props.title}</strong>
          <span className="text-zinc-300 text-sm block">
            {props.adsCount} anúncio{props.adsCount > 1 && 's'}
          </span>
        </div>
      </a>
    </div>
  );
};
