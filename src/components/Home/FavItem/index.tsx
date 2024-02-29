import React from "react";
import { useDispatch } from "react-redux";
import { removeFav } from "../../../redux/favoriteList/favSlice";
import { fetchWeathersAction } from "../../../redux/weather/asyncActions";

interface FavProps {
  id: string | number;
  title: string;
  lat: number;
  lon: number;
  count?: number | undefined;
  setOpenMenu: (i: boolean) => void;
}

const FavItem: React.FC<FavProps> = ({
  id,
  title,
  lat,
  lon,
  count,
  setOpenMenu,
}) => {
  const dispatch = useDispatch();

  const selectFavItemCity = () => {
    dispatch(fetchWeathersAction({ lat, lon }) as any);
    setOpenMenu(false);
  };

  return (
    <div
      onClick={() => selectFavItemCity()}
      className="fav-wrapper text-bg_color font-bold cursor-pointer
     bg-card_color rounded-md py-3 px-2 transition ease-in-out hover:bg-grab_color "
    >
      <div className="fav-wrapper__item flex justify-between items-center">
        <div className="wrapper-item__title">{title}</div>
        <div
          onClick={() => dispatch(removeFav(id))}
          className="wrapper-item__remove hover:scale-125"
        >
          <svg
            width="23px"
            height="23px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L14 16M14 12L10 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FavItem;
