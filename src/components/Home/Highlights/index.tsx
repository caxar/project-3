import React from "react";

const Highlights = () => {
  return (
    <div className="weather-items bg-sidebar_color w-[78%] py-5 px-7 rounded-2xl">
      <div className="weather-items__title text-[22px] font-bold mb-3">
        Todays Highlights
      </div>
      <div className="weather-items__wrapper">
        <div className="weather-items__top flex justify-between mb-3">
          <div className="items-top__air w-[49%] bg-bg_color rounded-2xl py-5 px-5">
            <div className="top-air__title text-[18px] font-bold mb-3">
              Air quality index
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
                    d="M3 8H9.5C10.8807 8 12 6.88071 12 5.5C12 4.11929 10.8807 3 9.5 3C8.11929 3 7 4.11929 7 5.5V5.85714"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 14H18.5C20.433 14 22 15.567 22 17.5C22 19.433 20.433 21 18.5 21C16.567 21 15 19.433 15 17.5V17"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2 11H18.5C20.433 11 22 9.433 22 7.5C22 5.567 20.433 4 18.5 4C16.567 4 15 5.567 15 7.5V8"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              {/* <div className="air-wrapper__text">1.6m/s SE</div> */}
              <div className="air-wrapper__block flex justify-between gap-5">
                <div className="air-wrapper__item w-[80px] flex flex-col items-center">
                  <div className="title">PM25</div>
                  <div className="text text-[30px] font-bold">2.85</div>
                </div>
                <div className="air-wrapper__item w-[80px] flex flex-col items-center">
                  <div className="title">SO2</div>
                  <div className="text text-[30px] font-bold">2.85</div>
                </div>
                <div className="air-wrapper__item w-[80px] flex flex-col items-center">
                  <div className="title">No2</div>
                  <div className="text text-[30px] font-bold">2.85</div>
                </div>
                <div className="air-wrapper__item w-[80px] flex flex-col items-center">
                  <div className="title">O3</div>
                  <div className="text text-[30px] font-bold">2.85</div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-top__solar w-[49%] bg-bg_color rounded-2xl py-5 px-5">
            <div className="top-solar__title text-[18px] font-bold mb-3">
              Sunrise & Sunset
            </div>
            <div className="top-solar__wrapper flex justify-between">
              <div className="solar-sunrise flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>

                <div className="text">
                  <div className="text-title">Sunrise</div>
                  <span className="text-[30px] font-bold">4:54 AM</span>
                </div>
              </div>
              <div className="solar-sunset flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>

                <div className="text">
                  <div className="text-title">Sunset</div>
                  <span className="text-[30px] font-bold">6:56 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-items__bottom flex justify-between">
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Humidity</div>
            <div className="bottom-item__block flex items-center justify-between w-[180px]">
              <div className="item-block__img">
                <svg
                  fill="#ffffff"
                  height="40px"
                  width="40px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 328.611 328.611"
                >
                  <g>
                    <path
                      d="M209.306,50.798c-2.452-3.337-7.147-4.055-10.485-1.602c-3.338,2.453-4.055,7.147-1.603,10.485
		c54.576,74.266,66.032,123.541,66.032,151.8c0,27.691-8.272,52.794-23.293,70.685c-17.519,20.866-42.972,31.446-75.651,31.446
		c-73.031,0-98.944-55.018-98.944-102.131c0-52.227,28.103-103.234,51.679-136.829c25.858-36.847,52.11-61.415,52.37-61.657
		c3.035-2.819,3.209-7.565,0.39-10.6c-2.819-3.034-7.565-3.209-10.599-0.39c-1.11,1.031-27.497,25.698-54.254,63.765
		c-24.901,35.428-54.586,89.465-54.586,145.71c0,31.062,9.673,59.599,27.236,80.353c20.361,24.061,50.345,36.779,86.708,36.779
		c36.794,0,66.926-12.726,87.139-36.801c17.286-20.588,26.806-49.117,26.806-80.33C278.25,156.216,240.758,93.597,209.306,50.798z"
                    />
                    <path
                      d="M198.43,148.146l-95.162,95.162c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197
		s3.839-0.732,5.304-2.197l95.162-95.162c2.929-2.929,2.929-7.678,0-10.606C206.107,145.217,201.359,145.217,198.43,148.146z"
                    />
                    <path
                      d="M191.965,207.899c-13.292,0-24.106,10.814-24.106,24.106s10.814,24.106,24.106,24.106s24.106-10.814,24.106-24.106
		S205.257,207.899,191.965,207.899z M191.965,241.111c-5.021,0-9.106-4.085-9.106-9.106s4.085-9.106,9.106-9.106
		s9.106,4.085,9.106,9.106S196.986,241.111,191.965,241.111z"
                    />
                    <path
                      d="M125.178,194.162c13.292,0,24.106-10.814,24.106-24.106s-10.814-24.106-24.106-24.106s-24.106,10.814-24.106,24.106
		S111.886,194.162,125.178,194.162z M125.178,160.949c5.021,0,9.106,4.085,9.106,9.106s-4.085,9.106-9.106,9.106
		c-5.021,0-9.106-4.085-9.106-9.106S120.156,160.949,125.178,160.949z"
                    />
                  </g>
                </svg>
              </div>
              <div className="item-block__text text-[30px] font-bold">51%</div>
            </div>
          </div>
          {/* 2 */}
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Pressure</div>
            <div className="bottom-item__block flex items-center justify-between w-[180px]">
              <div className="item-block__img">
                <svg
                  fill="#ffffff"
                  width="40px"
                  height="40px"
                  viewBox="0 0 64 64"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="cloudy_sunny" />

                  <g id="bright" />

                  <g id="cloudy" />

                  <g id="high_rainfall" />

                  <g id="windy" />

                  <g id="rain_with_thunder" />

                  <g id="clear_night" />

                  <g id="cloudy_night" />

                  <g id="moon" />

                  <g id="sun" />

                  <g id="rainy_night" />

                  <g id="windy_night" />

                  <g id="night_rain_thunder" />

                  <g id="windy_rain" />

                  <g id="temperature" />

                  <g id="humidity" />

                  <g id="air_pressure">
                    <g>
                      <path d="M40.9,27.2l-7.6,12.9C32.9,40.1,32.5,40,32,40c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5c0-1.6-0.8-3-1.9-3.9l7.3-12.4    c2,2.3,3.3,5.2,3.5,8.4c0,0.5,0.5,0.9,1,0.9h3.4c0.5,0,0.8-0.3,1-0.7c0.5-1.7,0.7-3.5,0.7-5.3c0-11-9-20-20-20s-20,9-20,20    c0,1.8,0.2,3.6,0.7,5.3c0.1,0.4,0.5,0.7,1,0.7H17c0.5,0,1-0.4,1-0.9C18.5,29.7,24.6,24,32,24C35.4,24,38.5,25.2,40.9,27.2z M32,48    c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S33.7,48,32,48z M25.8,23.3l-2.9-6.7c0,0,0-0.1-0.1-0.1c2.4-1.4,5.2-2.3,8.1-2.5v8    C29.2,22.2,27.4,22.6,25.8,23.3z M33,22v-8c3,0.2,5.7,1,8.1,2.5c0,0,0,0.1-0.1,0.1l-2.9,6.7C36.6,22.6,34.8,22.2,33,22z M49.6,36    h-1.7c-0.3-2.3-1.1-4.4-2.2-6.3l3.6-2.7c0.5,1.6,0.7,3.2,0.7,5C50,33.4,49.8,34.7,49.6,36z M48.6,25.1c-0.1,0-0.2,0.1-0.2,0.1    l-3.9,2.9c-0.3-0.4-0.7-0.8-1.1-1.2l1.4-2.4c0.3-0.5,0.1-1.1-0.4-1.4c-0.5-0.3-1.1-0.1-1.4,0.4l-1.2,2c-0.6-0.5-1.3-0.9-1.9-1.3    l2.8-6.5C45.4,19.6,47.4,22.1,48.6,25.1z M16.1,36h-1.7c-0.3-1.3-0.4-2.6-0.4-4c0-1.7,0.3-3.4,0.7-5l3.6,2.7    C17.2,31.6,16.4,33.7,16.1,36z M19.5,28.1l-3.9-2.9c-0.1-0.1-0.1-0.1-0.2-0.1c1.2-3,3.3-5.5,5.8-7.5l2.8,6.5    C22.2,25.2,20.7,26.5,19.5,28.1z" />

                      <path d="M56,51h-6.3c5.1-4.7,8.3-11.5,8.3-19C58,17.7,46.3,6,32,6c-1.1,0-2.2,0.1-3.3,0.2C27.9,4.3,26.1,3,24,3h-1    c-2.2,0-4,1.8-4,4c0,0.8,0.3,1.5,0.8,2c-1.1,0.6-2.1,1.2-3.1,2H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h10.3C9.2,17.7,6,24.5,6,32    c0,14.3,11.7,26,26,26c5.7,0,11-1.9,15.3-5H56c1.7,0,3,1.3,3,3s-1.3,3-3,3h-1c-1.1,0-2-0.9-2-2c0-0.6,0.4-1,1-1c0.6,0,1-0.4,1-1    s-0.4-1-1-1c-1.7,0-3,1.3-3,3c0,2.2,1.8,4,4,4h1c2.8,0,5-2.2,5-5S58.8,51,56,51z M22,8c-0.6,0-1-0.4-1-1c0-1.1,0.9-2,2-2h1    c1.1,0,2.1,0.6,2.6,1.6C25,6.9,23.5,7.4,22,8C22,8,22,8,22,8z M26.9,8.5C26.7,9.9,25.5,11,24,11h-3.6C22.4,9.9,24.6,9,26.9,8.5z     M32,56C18.8,56,8,45.2,8,32c0-7.7,3.7-14.6,9.4-19H24c2.7,0,4.9-2.1,5-4.8C30,8.1,31,8,32,8c13.2,0,24,10.8,24,24    c0,7.7-3.7,14.6-9.4,19H28c-0.6,0-1,0.4-1,1s0.4,1,1,1h15.6C40.2,54.9,36.2,56,32,56z" />
                    </g>
                  </g>

                  <g id="low_rainfall" />

                  <g id="moderate_rainfall" />

                  <g id="Sunset" />
                </svg>
              </div>
              <div className="item-block__text text-[30px] font-bold">
                1024hPa
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Visibility</div>
            <div className="bottom-item__block flex items-center justify-between w-[180px]">
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
                10.0km
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Feels like</div>
            <div className="bottom-item__block flex items-center justify-between w-[180px]">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="item-block__text text-[30px] font-bold">5°C</div>
            </div>
          </div>
          {/* 5 */}
          <div className="bottom-item bg-bg_color py-3 px-3 rounded-2xl ">
            <div className="bottom-item__title mb-3">Dew point</div>
            <div className="bottom-item__block flex items-center justify-between w-[180px]">
              <div className="item-block__img">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M339.7 882.5C196.6 882.5 80.2 766.1 80.2 623c0-133.2 204.8-395.1 228.2-424.5 5.8-7.3 14.5-11.6 23.8-11.7 9.4-0.1 18.1 3.9 24.1 11 1.5 1.8 37.7 44.8 82.2 105.2 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-21.3-29-40.9-54-55.3-72.1-69.2 92-191.2 271.5-191.2 355.4 0 108.9 88.6 197.6 197.6 197.6S537.3 731.9 537.3 623c0-17.1 13.9-31 31-31s31 13.9 31 31c-0.1 143.1-116.5 259.5-259.6 259.5z"
                    fill="#ffffff"
                  />
                  <path
                    d="M363.7 468.8c-27.9 59.7-46.8 115.7-46.8 158.4 0 164.6 133.4 298 298 298s298-133.4 298-298c0-12.8-1.9-26.9-5.5-41.9-327.2 33.9-284.9-194.9-543.7-116.5z"
                    fill="#ffffff"
                  />
                  <path
                    d="M333.6 567.6c-38.2 239.9 123 357.7 287.3 357.7 92.8 0 144.9-12.1 199.6-78.6-261.5 20.7-428.7-99.2-486.9-279.1z"
                    fill="#ffffff"
                  />
                  <path
                    d="M614.9 956.1C433.5 956.1 286 808.5 286 627.2c0-173.4 283.4-532.4 295.5-547.6 5.8-7.3 14.5-11.6 23.8-11.7 9.3-0.1 18.1 3.9 24.1 11 2 2.3 49 58.2 106.8 136.6 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-31.8-43.2-60.6-79.8-79.9-103.7C517 266.1 347.9 512.3 347.9 627.2c0 147.2 119.8 267 267 267s267-119.8 267-267c0-29.7-13.2-87.9-76.4-196.2-8.6-14.8-3.6-33.7 11.2-42.3 14.8-8.6 33.7-3.6 42.3 11.2 57.1 97.9 84.8 172.2 84.8 227.4 0 181.3-147.6 328.8-328.9 328.8z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <div className="item-block__text text-[30px] font-bold">-3°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
