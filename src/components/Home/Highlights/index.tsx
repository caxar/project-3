import React from "react";
import { selectWeather } from "../../../redux/weather/selectors";
import { useSelector } from "react-redux";
import { selectAir } from "../../../redux/airPopulation/selectors";

const Highlights = () => {
  const { entities } = useSelector(selectWeather);
  const { entitiesAir } = useSelector(selectAir);

  const { visibility, main, sys, wind }: any = entities;
  const { list }: any = entitiesAir;

  if (!list) return <></>;

  const airData = list?.[0]?.components;

  return (
    <div className="weather-items bg-sidebar_color w-[75%] py-5 px-7 rounded-2xl">
      <div className="weather-items__title text-[22px] font-bold mb-3">
        Прогноз на сегодня
      </div>
      <div className="weather-items__wrapper">
        <div className="weather-items__top flex justify-between mb-3">
          <div className="items-top__air w-[49%] bg-bg_color rounded-2xl py-5 px-5">
            <div className="top-air__title text-[18px] font-bold mb-3">
              Индекс качества воздуха
            </div>
            <div className="top-air__wrapper flex justify-between items-center">
              <div className="air-wrapper__img w-[50px]">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/* <div className="air-wrapper__text">1.6m/s SE</div> */}
              <div className="air-wrapper__block flex justify-between gap-5">
                <div className="air-wrapper__item w-[90px] flex flex-col items-center">
                  <div className="title">PM25</div>
                  <div className="text text-[30px] font-bold">
                    {airData?.pm2_5}
                  </div>
                </div>
                <div className="air-wrapper__item w-[90px] flex flex-col items-center">
                  <div className="title">SO2</div>
                  <div className="text text-[30px] font-bold">
                    {airData?.so2}
                  </div>
                </div>
                <div className="air-wrapper__item w-[90px] flex flex-col items-center">
                  <div className="title">No2</div>
                  <div className="text text-[30px] font-bold">
                    {airData?.no2}
                  </div>
                </div>
                <div className="air-wrapper__item w-[90px] flex flex-col items-center">
                  <div className="title">O3</div>
                  <div className="text text-[30px] font-bold">
                    {airData?.o3}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-top__solar w-[49%] bg-bg_color rounded-2xl py-5 px-5">
            <div className="top-solar__title text-[18px] font-bold mb-3">
              Рассвет & Закат
            </div>
            <div className="top-solar__wrapper flex justify-between">
              <div className="solar-sunrise flex items-center gap-4">
                <svg
                  fill="#fff"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23,16a1,1,0,0,1-1,1H2a1,1,0,0,1,0-2H22A1,1,0,0,1,23,16Zm-5,5a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2ZM7,12a1,1,0,0,0,2,0,3,3,0,0,1,6,0,1,1,0,0,0,2,0A5,5,0,0,0,7,12Zm4-7a1,1,0,0,0,2,0V4a1,1,0,0,0-2,0Zm7,7a1,1,0,0,0,1,1h1a1,1,0,0,0,0-2H19A1,1,0,0,0,18,12ZM4,11a1,1,0,0,0,0,2H5a1,1,0,0,0,0-2ZM5.636,5.636a1,1,0,0,0,0,1.414l.707.707A1,1,0,0,0,7.757,6.343L7.05,5.636A1,1,0,0,0,5.636,5.636Zm11.314,0-.707.707a1,1,0,1,0,1.414,1.414l.707-.707A1,1,0,1,0,16.95,5.636Z" />
                </svg>

                <div className="text">
                  <div className="text-title">Рассвет</div>
                  <span className="text-[30px] font-bold">
                    {new Date(sys?.sunrise * 1000).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    })}
                  </span>
                </div>
              </div>
              <div className="solar-sunset flex items-center gap-4">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text">
                  <div className="text-title">Закат</div>
                  <span className="text-[30px] font-bold">
                    {new Date(sys?.sunset * 1000).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-items__bottom flex justify-between">
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Влажность</div>
            <div className="bottom-item__block flex items-center justify-between w-[170px]">
              <div className="item-block__img">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0066 3.25608C16.8483 2.85737 19.1331 2.8773 22.2423 3.65268C22.7781 3.78629 23.1038 4.32791 22.9699 4.86241C22.836 5.39691 22.2931 5.7219 21.7573 5.58829C18.8666 4.86742 16.9015 4.88747 15.4308 5.20587C13.9555 5.52524 12.895 6.15867 11.7715 6.84363L11.6874 6.89494C10.6044 7.55565 9.40515 8.28729 7.82073 8.55069C6.17734 8.82388 4.23602 8.58235 1.62883 7.54187C1.11607 7.33724 0.866674 6.75667 1.0718 6.24513C1.27692 5.73359 1.85889 5.48479 2.37165 5.68943C4.76435 6.6443 6.32295 6.77699 7.492 6.58265C8.67888 6.38535 9.58373 5.83916 10.7286 5.14119C11.855 4.45445 13.1694 3.6538 15.0066 3.25608Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M22.2423 7.64302C19.1331 6.86765 16.8483 6.84772 15.0066 7.24642C13.1694 7.64415 11.855 8.44479 10.7286 9.13153C9.58373 9.8295 8.67888 10.3757 7.492 10.573C6.32295 10.7673 4.76435 10.6346 2.37165 9.67977C1.85889 9.47514 1.27692 9.72393 1.0718 10.2355C0.866674 10.747 1.11607 11.3276 1.62883 11.5322C4.23602 12.5727 6.17734 12.8142 7.82073 12.541C9.40515 12.2776 10.6044 11.546 11.6874 10.8853L11.7715 10.834C12.895 10.149 13.9555 9.51558 15.4308 9.19621C16.9015 8.87781 18.8666 8.85777 21.7573 9.57863C22.2931 9.71224 22.836 9.38726 22.9699 8.85275C23.1038 8.31825 22.7781 7.77663 22.2423 7.64302Z"
                    fill="#ffffff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9998 10.0266C18.6526 10.0266 18.3633 10.2059 18.1614 10.4772C18.0905 10.573 17.9266 10.7972 17.7089 11.111C17.4193 11.5283 17.0317 12.1082 16.6424 12.7555C16.255 13.3996 15.8553 14.128 15.5495 14.8397C15.2567 15.5213 14.9989 16.2614 14.9999 17.0117C15.0006 17.2223 15.0258 17.4339 15.0604 17.6412C15.1182 17.9872 15.2356 18.4636 15.4804 18.9521C15.7272 19.4446 16.1131 19.9674 16.7107 20.3648C17.3146 20.7664 18.0748 21 18.9998 21C19.9248 21 20.685 20.7664 21.2888 20.3648C21.8864 19.9674 22.2724 19.4446 22.5192 18.9522C22.764 18.4636 22.8815 17.9872 22.9393 17.6413C22.974 17.4337 22.9995 17.2215 22.9998 17.0107C23.0001 16.2604 22.743 15.5214 22.4501 14.8397C22.1444 14.128 21.7447 13.3996 21.3573 12.7555C20.968 12.1082 20.5803 11.5283 20.2907 11.111C20.073 10.7972 19.909 10.573 19.8382 10.4772C19.6363 10.2059 19.3469 10.0266 18.9998 10.0266ZM20.6119 15.6257C20.3552 15.0281 20.0049 14.3848 19.6423 13.782C19.4218 13.4154 19.2007 13.0702 18.9998 12.7674C18.7989 13.0702 18.5778 13.4154 18.3573 13.782C17.9948 14.3848 17.6445 15.0281 17.3878 15.6257L17.3732 15.6595C17.1965 16.0704 16.9877 16.5562 17.0001 17.0101C17.0121 17.3691 17.1088 17.7397 17.2693 18.0599C17.3974 18.3157 17.574 18.5411 17.8201 18.7048C18.06 18.8643 18.4248 19.0048 18.9998 19.0048C19.5748 19.0048 19.9396 18.8643 20.1795 18.7048C20.4256 18.5411 20.6022 18.3156 20.7304 18.0599C20.8909 17.7397 20.9876 17.3691 20.9996 17.01C21.0121 16.5563 20.8032 16.0705 20.6265 15.6597L20.6119 15.6257Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M14.1296 11.5308C14.8899 11.2847 15.4728 12.076 15.1153 12.7892C14.952 13.1151 14.7683 13.3924 14.4031 13.5214C13.426 13.8666 12.6166 14.3527 11.7715 14.8679L11.6874 14.9192C10.6044 15.5799 9.40516 16.3115 7.82074 16.5749C6.17735 16.8481 4.23604 16.6066 1.62884 15.5661C1.11608 15.3615 0.866688 14.7809 1.07181 14.2694C1.27694 13.7578 1.8589 13.509 2.37167 13.7137C4.76436 14.6685 6.32297 14.8012 7.49201 14.6069C8.67889 14.4096 9.58374 13.8634 10.7286 13.1654C11.8166 12.5021 12.9363 11.9171 14.1296 11.5308Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <div className="item-block__text text-[30px] font-bold">
                {main?.humidity}
                <span className="text-[20px]">%</span>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Давление</div>
            <div className="bottom-item__block flex items-center justify-between w-[170px]">
              <div className="item-block__img">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9C11.4477 9 11 9.44771 11 10V15.2676C10.4022 15.6134 10 16.2597 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 16.2597 13.5978 15.6134 13 15.2676V10C13 9.44771 12.5523 9 12 9Z"
                    fill="#fff"
                  />
                  <path
                    d="M11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6Z"
                    fill="#fff"
                  />
                  <path
                    d="M16 7C15.4477 7 15 7.44772 15 8C15 8.55229 15.4477 9 16 9C16.5523 9 17 8.55229 17 8C17 7.44772 16.5523 7 16 7Z"
                    fill="#fff"
                  />
                  <path
                    d="M6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13Z"
                    fill="#fff"
                  />
                  <path
                    d="M7 8C7 8.55229 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8Z"
                    fill="#fff"
                  />
                  <path
                    d="M18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13Z"
                    fill="#fff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="item-block__text text-[30px] font-bold">
                {main?.pressure}
                <span className="text-[20px]">hPa</span>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Видимость</div>
            <div className="bottom-item__block flex items-center justify-between w-[170px]">
              <div className="item-block__img">
                <svg
                  fill="#fff"
                  version="1.1"
                  id="Capa_1"
                  width="40px"
                  height="40px"
                  viewBox="0 0 439.176 439.176"
                >
                  <g>
                    <g>
                      <path
                        d="M436.583,210.464c-1.03-1.656-25.684-40.974-65.189-79.166C336.405,97.472,281.665,57.15,219.588,57.15
			c-62.077,0-116.816,40.322-151.806,74.148C28.173,169.591,3.626,208.81,2.601,210.459c-3.466,5.545-3.467,12.707-0.005,18.248
			c1.028,1.654,25.603,40.9,65.187,79.17c34.989,33.826,89.729,74.148,151.806,74.148c120.236,0,213.097-147.055,216.993-153.312
			C440.041,223.168,440.042,216.007,436.583,210.464z M399.974,221.323c-11.508,16.269-35.521,47.647-67.053,75.038
			c-39.101,33.967-77.231,51.189-113.333,51.189c-36.103,0-74.232-17.223-113.332-51.188
			c-31.527-27.388-55.545-58.771-67.056-75.038l-1.226-1.732l1.226-1.732c11.506-16.268,35.519-47.647,67.056-75.046
			c39.101-33.967,77.23-51.189,113.332-51.189c36.101,0,74.232,17.223,113.333,51.189c31.542,27.403,55.55,58.78,67.053,75.046
			l1.227,1.732L399.974,221.323z"
                      />
                      <path
                        d="M219.588,106.224c-62.509,0-113.364,50.856-113.364,113.367c0,62.509,50.855,113.364,113.364,113.364
			c62.508,0,113.364-50.854,113.364-113.364C332.952,157.081,282.096,106.224,219.588,106.224z M219.588,298.477
			c-43.5,0-78.891-35.387-78.891-78.885c0-43.502,35.391-78.893,78.891-78.893s78.889,35.391,78.889,78.893
			C298.477,263.09,263.087,298.477,219.588,298.477z"
                      />
                      <path
                        d="M219.588,182.108c-20.664,0-37.475,16.814-37.475,37.482c0,20.662,16.811,37.473,37.475,37.473
			c20.665,0,37.476-16.812,37.476-37.473C257.064,198.923,240.252,182.108,219.588,182.108z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="item-block__text text-[30px] font-bold">
                {Math.round(visibility * 100) / 100000}
                <span className="text-[20px]">km</span>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Ощущается как</div>
            <div className="bottom-item__block flex items-center justify-between w-[170px]">
              <div className="item-block__img">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 4H20M15 8H20M17 12H20M8 15.9998C7.44772 15.9998 7 16.4475 7 16.9998C7 17.5521 7.44772 17.9998 8 17.9998C8.55228 17.9998 9 17.5521 9 16.9998C9 16.4475 8.55228 15.9998 8 15.9998ZM8 15.9998V9M8 16.9998L8.00707 17.0069M12 16.9998C12 19.209 10.2091 20.9998 8 20.9998C5.79086 20.9998 4 19.209 4 16.9998C4 15.9854 4.37764 15.0591 5 14.354L5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V14.354C11.6224 15.0591 12 15.9854 12 16.9998Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="item-block__text text-[30px] font-bold">
                {main?.feels_like}
                <span className="text-[20px]">°C</span>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Скорость ветра</div>
            <div className="bottom-item__block flex items-center justify-between w-[170px]">
              <div className="item-block__img">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#ffffff"
                    d="M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zM576 418.624l128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 01960 215.68v144.64a96 96 0 01-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232l98.88-8.96A32 32 0 00896 360.32V215.68a32 32 0 00-29.12-31.872l-98.88-8.96v226.368z"
                  />
                </svg>
              </div>
              <div className="item-block__text text-[30px] font-bold">
                {wind?.speed}
                <span className="text-[20px]">m/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
