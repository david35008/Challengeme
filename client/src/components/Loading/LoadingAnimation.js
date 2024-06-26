import * as React from 'react';
import { motion } from 'framer-motion';

function SvgLogoAnim(props) {
  // hand animation variables
  const handsTime = 1.8;
  const rightAmplitude = -5;
  const rightHandRotate = [
    0,
    rightAmplitude,
    0,
    rightAmplitude,
    0,
    rightAmplitude,
    0,
  ];
  const leftHandRotate = rightHandRotate
    .slice(1)
    .map((x) => -x)
    .concat([-rightAmplitude]);
  const handKeyframes = [0, 0.2, 0.4, 0.7, 0.8, 0.9, 1];

  // head animation variables
  const headTime = 3;
  const headX = [0, 3.5, 0, -3.5, 0];
  const headKeyframes = [0, 0.3, 0.6, 0.8, 1];
  return (
    <svg
      style={{ backgroundColor: 'black' }}
      width="100%"
      height="100%"
      viewBox="0 0 388 329"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs id="coderain_svg__defs2">
        <linearGradient id="coderain_svg__linearGradient2419">
          <stop
            offset={0}
            id="coderain_svg__stop2415"
            stopColor="#00ae23"
            stopOpacity={1}
          />
          <stop
            offset={1}
            id="coderain_svg__stop2417"
            stopColor="#0c4f00"
            stopOpacity={0.375}
          />
        </linearGradient>
        <linearGradient id="coderain_svg__linearGradient1849">
          <stop
            id="coderain_svg__stop1845"
            offset={0}
            stopColor="#00ae23"
            stopOpacity={1}
          />
          <stop
            id="coderain_svg__stop1847"
            offset={1}
            stopColor="#0f6000"
            stopOpacity={0.402}
          />
        </linearGradient>
        <linearGradient id="coderain_svg__linearGradient1704">
          <stop
            id="coderain_svg__stop1700"
            offset={0}
            stopColor="#00ae23"
            stopOpacity={1}
          />
          <stop
            id="coderain_svg__stop1702"
            offset={1}
            stopColor="#0a3f00"
            stopOpacity={0.997}
          />
        </linearGradient>
        <linearGradient id="coderain_svg__linearGradient1644">
          <stop
            offset={0}
            id="coderain_svg__stop1640"
            stopColor="#00ae23"
            stopOpacity={1}
          />
          <stop
            offset={1}
            id="coderain_svg__stop1642"
            stopColor="#0f6000"
            stopOpacity={0.957}
          />
        </linearGradient>
        <linearGradient id="coderain_svg__linearGradient1638">
          <stop
            id="coderain_svg__stop1634"
            offset={0}
            stopColor="#2db216"
            stopOpacity={0.409}
          />
          <stop
            id="coderain_svg__stop1636"
            offset={1}
            stopColor="#090"
            stopOpacity={1}
          />
        </linearGradient>
        <linearGradient id="coderain_svg__linearGradient1568">
          <stop
            id="coderain_svg__stop1564"
            offset={0}
            stopColor="#a0ffa6"
            stopOpacity={1}
          />
          <stop
            id="coderain_svg__stop1566"
            offset={1}
            stopColor="#7fe280"
            stopOpacity={1}
          />
        </linearGradient>
        <linearGradient id="coderain_svg__linearGradient881">
          <stop
            offset={0}
            id="coderain_svg__stop877"
            stopColor="#2db216"
            stopOpacity={0.409}
          />
          <stop
            offset={1}
            id="coderain_svg__stop879"
            stopColor="#006e00"
            stopOpacity={1}
          />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={-46.232}
          x2={106.155}
          y1={34.965}
          x1={106.078}
          id="coderain_svg__linearGradient1869"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={-4.712}
          x2={123.49}
          y1={21.106}
          x1={123.49}
          id="coderain_svg__linearGradient1871"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={-24.329}
          x2={53.733}
          y1={54.435}
          x1={52.346}
          id="coderain_svg__linearGradient1873"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={-25.683}
          x2={62.223}
          y1={32.315}
          x1={63.268}
          id="coderain_svg__linearGradient1875"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={-35.645}
          x2={99.852}
          y1={21.604}
          x1={98.84}
          id="coderain_svg__linearGradient1877"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={-46.604}
          x2={144.907}
          y1={32.908}
          x1={144.269}
          id="coderain_svg__linearGradient1879"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={-8.304}
          x2={76.512}
          y1={39.965}
          x1={76.809}
          id="coderain_svg__linearGradient1881"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={-23.712}
          x2={129.495}
          y1={33.912}
          x1={130.167}
          id="coderain_svg__linearGradient1883"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={22.362}
          x2={112.832}
          y1={47.993}
          x1={112.755}
          id="coderain_svg__linearGradient1885"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={63.244}
          x2={105.594}
          y1={142.944}
          x1={105.704}
          id="coderain_svg__linearGradient1887"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={105.287}
          x2={124.315}
          y1={129.795}
          x1={124.238}
          id="coderain_svg__linearGradient1889"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={73.435}
          x2={99.478}
          y1={130.684}
          x1={99.401}
          id="coderain_svg__linearGradient1891"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={84.576}
          x2={50.74}
          y1={164.837}
          x1={51.037}
          id="coderain_svg__linearGradient1893"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={83.991}
          x2={63.533}
          y1={141.24}
          x1={63.455}
          id="coderain_svg__linearGradient1895"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={110.961}
          x2={74.267}
          y1={110.961}
          x1={69.513}
          id="coderain_svg__linearGradient1897"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={62.811}
          x2={142.081}
          y1={141.789}
          x1={142.563}
          id="coderain_svg__linearGradient1899"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={87.067}
          x2={130.431}
          y1={142.632}
          x1={130.167}
          id="coderain_svg__linearGradient1901"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={47.876}
          x2={119.135}
          y1={104.189}
          x1={118.684}
          id="coderain_svg__linearGradient1903"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={86.269}
          x2={149.725}
          y1={111.526}
          x1={150.022}
          id="coderain_svg__linearGradient1905"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={57.768}
          x2={68.9}
          y1={114.269}
          x1={69.571}
          id="coderain_svg__linearGradient1907"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={72.107}
          x2={57.043}
          y1={98.113}
          x1={56.778}
          id="coderain_svg__linearGradient1909"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={70.285}
          x2={87.808}
          y1={119.302}
          x1={88.479}
          id="coderain_svg__linearGradient1911"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={43.079}
          x2={94.485}
          y1={68.336}
          x1={94.034}
          id="coderain_svg__linearGradient1913"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={57.727}
          x2={81.131}
          y1={84.293}
          x1={81.428}
          id="coderain_svg__linearGradient1915"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={30.948}
          x2={136.172}
          y1={76.785}
          x1={135.534}
          id="coderain_svg__linearGradient1917"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={61.716}
          x2={141.914}
          y1={142.164}
          x1={142.585}
          id="coderain_svg__linearGradient1919"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={30.948}
          x2={136.172}
          y1={76.785}
          x1={135.534}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2856"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={57.727}
          x2={81.131}
          y1={84.293}
          x1={81.428}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2858"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={43.079}
          x2={94.485}
          y1={68.336}
          x1={94.034}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2860"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={70.285}
          x2={87.808}
          y1={119.302}
          x1={88.479}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2862"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={72.107}
          x2={57.043}
          y1={98.113}
          x1={56.778}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2864"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={57.768}
          x2={68.9}
          y1={114.269}
          x1={69.571}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2866"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={86.269}
          x2={149.725}
          y1={111.526}
          x1={150.022}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2868"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={47.876}
          x2={119.135}
          y1={104.189}
          x1={118.684}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2870"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={87.067}
          x2={130.431}
          y1={142.632}
          x1={130.167}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2872"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={62.811}
          x2={142.081}
          y1={141.789}
          x1={142.563}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2874"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={101.7}
          x2={75.259}
          y1={148.789}
          x1={75.644}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2876"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={83.991}
          x2={63.533}
          y1={141.24}
          x1={63.455}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2878"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={84.576}
          x2={50.74}
          y1={164.837}
          x1={51.037}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2880"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={73.435}
          x2={99.478}
          y1={130.684}
          x1={99.401}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2882"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={105.287}
          x2={124.315}
          y1={129.795}
          x1={124.238}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2884"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={63.244}
          x2={105.594}
          y1={142.944}
          x1={105.704}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2886"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={22.362}
          x2={112.832}
          y1={47.993}
          x1={112.755}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2888"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-23.712}
          x2={129.495}
          y1={33.912}
          x1={130.167}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2890"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-8.304}
          x2={76.512}
          y1={39.965}
          x1={76.809}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2892"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-46.604}
          x2={144.907}
          y1={32.908}
          x1={144.269}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2894"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-35.645}
          x2={99.852}
          y1={21.604}
          x1={98.84}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2896"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-25.683}
          x2={62.223}
          y1={32.315}
          x1={63.268}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2898"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-24.329}
          x2={53.733}
          y1={54.435}
          x1={52.346}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2900"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-4.712}
          x2={123.49}
          y1={21.106}
          x1={123.49}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2902"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-46.232}
          x2={106.155}
          y1={34.965}
          x1={106.078}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2904"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={30.948}
          x2={136.172}
          y1={76.785}
          x1={135.534}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2906"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={57.727}
          x2={81.131}
          y1={84.293}
          x1={81.428}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2908"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={43.079}
          x2={94.485}
          y1={68.336}
          x1={94.034}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2910"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={70.285}
          x2={87.808}
          y1={119.302}
          x1={88.479}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2912"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={72.107}
          x2={57.043}
          y1={98.113}
          x1={56.778}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2914"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={57.768}
          x2={68.9}
          y1={114.269}
          x1={69.571}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2916"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={86.269}
          x2={149.725}
          y1={111.526}
          x1={150.022}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2918"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={47.876}
          x2={119.135}
          y1={104.189}
          x1={118.684}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2920"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={87.067}
          x2={130.431}
          y1={142.632}
          x1={130.167}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2922"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={62.811}
          x2={142.081}
          y1={141.789}
          x1={142.563}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2924"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={110.961}
          x2={74.267}
          y1={110.961}
          x1={69.513}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2926"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={83.991}
          x2={63.533}
          y1={141.24}
          x1={63.455}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2928"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={84.576}
          x2={50.74}
          y1={164.837}
          x1={51.037}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2930"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={73.435}
          x2={99.478}
          y1={130.684}
          x1={99.401}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2932"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={105.287}
          x2={124.315}
          y1={129.795}
          x1={124.238}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2934"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={63.244}
          x2={105.594}
          y1={142.944}
          x1={105.704}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2936"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={22.362}
          x2={112.832}
          y1={47.993}
          x1={112.755}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2938"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-23.712}
          x2={129.495}
          y1={33.912}
          x1={130.167}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2940"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-8.304}
          x2={76.512}
          y1={39.965}
          x1={76.809}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2942"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-46.604}
          x2={144.907}
          y1={32.908}
          x1={144.269}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2944"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-35.645}
          x2={99.852}
          y1={21.604}
          x1={98.84}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2946"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-25.683}
          x2={62.223}
          y1={32.315}
          x1={63.268}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2948"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-24.329}
          x2={53.733}
          y1={54.435}
          x1={52.346}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2950"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-4.712}
          x2={123.49}
          y1={21.106}
          x1={123.49}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2952"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-46.232}
          x2={106.155}
          y1={34.965}
          x1={106.078}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2954"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={101.7}
          x2={76.119}
          y1={142.578}
          x1={76.119}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2956"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={30.948}
          x2={136.172}
          y1={76.785}
          x1={135.534}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2989"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={57.727}
          x2={81.131}
          y1={84.293}
          x1={81.428}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2991"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={43.079}
          x2={94.485}
          y1={68.336}
          x1={94.034}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2993"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={70.285}
          x2={87.808}
          y1={119.302}
          x1={88.479}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2995"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={72.107}
          x2={57.043}
          y1={98.113}
          x1={56.778}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2997"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={57.768}
          x2={68.9}
          y1={114.269}
          x1={69.571}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient2999"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={86.269}
          x2={149.725}
          y1={111.526}
          x1={150.022}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3001"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={47.876}
          x2={119.135}
          y1={104.189}
          x1={118.684}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3003"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={87.067}
          x2={130.431}
          y1={142.632}
          x1={130.167}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3005"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={62.811}
          x2={142.081}
          y1={141.789}
          x1={142.563}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3007"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={83.991}
          x2={63.533}
          y1={141.24}
          x1={63.455}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3009"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={84.576}
          x2={50.74}
          y1={164.837}
          x1={51.037}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3011"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={73.435}
          x2={99.478}
          y1={130.684}
          x1={99.401}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3013"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={105.287}
          x2={124.315}
          y1={129.795}
          x1={124.238}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3015"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={63.244}
          x2={105.594}
          y1={142.944}
          x1={105.704}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3017"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={22.362}
          x2={112.832}
          y1={47.993}
          x1={112.755}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3019"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-23.712}
          x2={129.495}
          y1={33.912}
          x1={130.167}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3021"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-8.304}
          x2={76.512}
          y1={39.965}
          x1={76.809}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3023"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-46.604}
          x2={144.907}
          y1={32.908}
          x1={144.269}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3025"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-35.645}
          x2={99.852}
          y1={21.604}
          x1={98.84}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3027"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-25.683}
          x2={62.223}
          y1={32.315}
          x1={63.268}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3029"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-24.329}
          x2={53.733}
          y1={54.435}
          x1={52.346}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3031"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-4.712}
          x2={123.49}
          y1={21.106}
          x1={123.49}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3033"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={-46.232}
          x2={106.155}
          y1={34.965}
          x1={106.078}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3035"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={43.079}
          x2={94.485}
          y1={68.336}
          x1={94.034}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3037"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={70.285}
          x2={87.808}
          y1={119.302}
          x1={88.479}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3039"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={47.876}
          x2={119.135}
          y1={104.189}
          x1={118.684}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3041"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={73.435}
          x2={99.478}
          y1={130.684}
          x1={99.401}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3043"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <linearGradient
          y2={22.362}
          x2={112.832}
          y1={47.993}
          x1={112.755}
          gradientUnits="userSpaceOnUse"
          id="coderain_svg__linearGradient3045"
          xlinkHref="#coderain_svg__linearGradient1849"
        />
        <filter
          height={1.035}
          y={-0.017}
          width={1.037}
          x={-0.019}
          id="coderain_svg__filter2640"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="coderain_svg__feGaussianBlur2642"
            stdDeviation={0.802}
          />
        </filter>
        <filter
          id="coderain_svg__filter2987"
          x={-0.019}
          width={1.037}
          y={-0.017}
          height={1.035}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation={0.802}
            id="coderain_svg__feGaussianBlur2985"
          />
        </filter>
      </defs>

      <motion.g
        id="coderain"
        fontStyle="normal"
        style={{
          originX: 0,
          originY: 0,
          scale: 3.5,
          translateX: -30,
        }}
        animate={{
          translateY: [-285, 100],
        }}
        transition={{
          duration: 0.5,
          loop: Infinity,
          ease: 'linear',
        }}
      >
        <g id="coderain_svg__g2611" filter="url(#coderain_svg__filter2987)">
          <path
            d="M131.131 75.9V74.89h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337V75.9zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm-3.146-4.815V59.19h1.552v-3.915l-1.352.745-.372-.927 1.934-1.021h.956v5.118h1.337V60.2zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.136.391-.406.168-.275.261-.69.094-.42.094-.983zm1.147-7.887q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.591.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.372-.927 1.934-1.021h.956v5.118h1.337v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2559"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2989)"
          />
          <path
            d="M80.383 79.206q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.004-.158-.005-.084-.005-.159l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.815v-1.011h1.552V69.5l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.342.167-.592.48-.998.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.629.22.26 0 .484-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2561"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2991)"
          />
          <path
            d="M92.614 63.622q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.421zm-3.608.02v.176q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.261 0-.485.135-.223.13-.391.406-.163.275-.261.69-.094.414-.094.983zm2.462.018q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.261 0 .485-.135.228-.136.391-.406.168-.275.261-.69.094-.42.094-.983zm-3.147-4.815v-1.012h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.42zm-3.608.018v.178q0 .079.01.163l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.261 0-.485.135-.223.131-.391.406-.163.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.261 0 .485-.136.228-.135.391-.406.168-.275.261-.69.094-.419.094-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2563"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2993)"
          />
          <path
            d="M82.206 117.888v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.004-.084-.004-.159l-2.27 1.641q.149.452.419.671.27.22.63.22.26 0 .484-.136.228-.135.392-.405.167-.275.26-.69.094-.42.094-.984zm-3.145-4.815v-1.011h1.552v-3.915l-1.352.745-.373-.927 1.935-1.021h.955v5.118h1.338v1.011zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.414-.093.983zm2.46.019q0-.08-.004-.159-.004-.084-.004-.158l-2.27 1.64q.149.453.419.672.27.219.63.219.26 0 .484-.135.228-.136.392-.406.167-.275.26-.69.094-.42.094-.983zm-3.145-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.178-.425-.177-.732-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.004-.083-.004-.158l-2.27 1.64q.149.453.419.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2565"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2995)"
          />
          <path
            d="M55.92 93.025q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.555.307.377.48.97.172.591.172 1.42zm-3.608.019v.177q0 .079.01.163l2.284-1.65q-.163-.462-.434-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.391.405-.164.275-.261.69-.094.415-.094.984zm2.462.018q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.147-4.815v-1.011h1.552V83.32l-1.351.746-.373-.927 1.934-1.021h.956v5.118h1.337v1.011zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .927.177.425.177.728.555.307.378.48.97.172.591.172 1.421zm-3.608.018v.177q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.391.405-.164.275-.261.69-.094.415-.094.984zm2.462.018q0-.079-.005-.158-.005-.084-.005-.158l-2.27 1.64q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2567"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2997)"
          />
          <path
            d="M68.152 110.254q0 .75-.164 1.343-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.02v.176q0 .08.009.163l2.284-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.414-.093.983zm2.46.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983zm-3.145-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm0-7.85v-1.011h1.552V92.7l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011zm0-7.849v-1.011h1.552V84.85l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.928-.178-.424-.177-.731-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983zM63.86 66.23v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2569"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2999)"
          />
          <path
            d="M148.79 107.373q0 .75-.164 1.343-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.177.424.177.727.555.307.378.48.97.172.592.172 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zm-3.146-4.814v-1.012h1.553V97.67l-1.352.745-.373-.927 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.997.312-.41.77-.625.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2571"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3001)"
          />
          <path
            d="M117.077 99.24q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.554-.308-.383-.48-.975t-.172-1.417q0-.75.163-1.342.168-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.261-.69.094-.42.094-.983zm-3.146-4.815V93.45h1.552v-3.915l-1.352.746-.372-.928 1.934-1.02h.956v5.117h1.337v1.012zm0-7.85v-1.011h1.552v-3.915l-1.352.745-.372-.927 1.934-1.021h.956v5.118h1.337v1.012zm0-7.849v-1.011h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.117h1.337v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.178-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.168-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.63.22.26 0 .484-.136.228-.135.391-.406.168-.275.261-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2573"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3003)"
          />
          <path
            d="M126.777 119.522l-.308.163h1.264v-.163zm-1.762-1.72v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm0-7.85v-1.01h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.504 0-.928-.178-.424-.177-.732-.554-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.164l2.284-1.65q-.164-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983zm-3.146-4.815v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2575"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3005)"
          />
          <path
            id="coderain_svg__path2577"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M139.009 119.047l-1.208.638h2.163v-.638zm-1.762-1.72v-1.011h1.552v-3.915l-1.352.745-.373-.927 1.935-1.021h.955v5.118h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.136.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.26 0-.485.135-.223.131-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.815V84.92h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.164.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.146-4.815V69.22h1.552v-3.916l-1.352.746-.373-.927 1.935-1.021h.955v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3007)"
          />
          <path
            d="M71.96 117.87c-.385 0-.73.071-1.035.214a2.05 2.05 0 00-.769.625 2.91 2.91 0 00-.473.976h1.173c.047-.129.098-.246.158-.347.112-.183.242-.318.391-.405a.92.92 0 01.485-.135c.242 0 .452.074.63.223.176.143.317.365.425.664h1.177c-.01-.037-.017-.077-.027-.113-.115-.395-.275-.719-.48-.97a1.824 1.824 0 00-.727-.555 2.383 2.383 0 00-.928-.177zm2.307-4.726q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.555.307.377.48.97.172.591.172 1.42zm-3.608.018v.177q0 .08.01.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.261 0-.485.135-.224.13-.391.406-.163.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.147-4.815v-1.011h1.552v-3.916l-1.351.746-.373-.928 1.934-1.02h.956v5.118h1.337v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2579"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1897)"
          />
          <path
            d="M59.505 117.486l-1.935 1.02.373.928 1.352-.745v.996h1.165v-2.199zm-1.762-1.72v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.01.163l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.158-.004-.084-.004-.159l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.26-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.552V87.29l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2581"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3009)"
          />
          <path
            d="M47.274 117.225l-1.935 1.02.373.928 1.352-.746v1.258h1.165v-2.46zm2.53-4.792q0 .75-.163 1.343-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984zm-3.146-4.815v-1.011h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011zm0-7.849v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2583"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3011)"
          />
          <path
            d="M96.199 115.14l-1.934 1.02.372.928 1.352-.746v3.343h1.165v-4.546zm-1.762-1.72v-1.012h1.552v-3.915l-1.352.745-.373-.927 1.935-1.02h.955v5.117h1.338v1.012zm0-7.85v-1.011h1.552v-3.916l-1.352.746-.373-.927L96.2 99.44h.955v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zM98.73 86.8q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.392.405-.163.275-.26.69-.094.415-.094.983zm2.461.02q0-.08-.004-.16-.005-.083-.005-.158l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.261-.69.093-.419.093-.983zm1.147-7.888q0 .75-.163 1.343-.163.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975t-.172-1.417q0-.75.163-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.02v.176q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.136.392-.406.168-.275.261-.69.093-.42.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2585"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3013)"
          />
          <path
            d="M120.661 114.892l-1.934 1.021.373.928 1.352-.746v3.59h1.165v-4.793zm2.532-4.791q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.225-.629-.225-.26 0-.485.136-.223.13-.391.405-.163.275-.261.69-.093.415-.093.983zm2.461.02q0-.08-.005-.16-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2587"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3015)"
          />
          <path
            d="M100.553 118.294v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.591.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.373-.927 1.935-1.021h.955v5.118h1.338v1.011zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.452.42.672.27.219.629.219.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552V81.97l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.178-.425-.177-.732-.554-.308-.383-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2589"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3017)"
          />
          <path
            d="M110.961 43.28q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.178q0 .079.009.163l2.284-1.65q-.164-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.46.019q0-.08-.004-.158-.005-.084-.005-.159l-2.27 1.64q.149.453.42.672.27.22.628.22.261 0 .485-.136.229-.135.392-.406.168-.275.26-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.312.405-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.591.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2591"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3019)"
          />
          <path
            d="M126.777 9.66l-1.934 1.022.373.927 1.352-.746v3.916h-1.553v1.01h4.056v-1.01h-1.338V9.66zm2.531 18.757q0 .75-.163 1.343-.163.591-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .08.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zm-3.146-4.815v-1.011h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2593"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3021)"
          />
          <path
            d="M69.748 9.625c-.025.072-.05.144-.072.22a5.06 5.06 0 00-.163 1.343c0 .55.057 1.022.172 1.417.115.394.275.72.48.974.205.252.45.437.732.555.283.118.592.177.928.177.388 0 .733-.072 1.035-.215.301-.142.556-.35.764-.62.211-.273.371-.607.48-1.002a5.06 5.06 0 00.163-1.342c0-.553-.057-1.027-.172-1.422-.009-.03-.02-.056-.029-.085h-1.202c.032.067.062.139.089.215l-2.284 1.65a1.474 1.474 0 01-.01-.162v-.178c0-.379.032-.706.094-.983a2.75 2.75 0 01.182-.542zm3.363 1.227c0 .05.002.102.005.158a4.573 4.573 0 01-.089 1.142c-.062.277-.149.507-.26.69-.11.18-.24.316-.392.406a.92.92 0 01-.485.135.969.969 0 01-.63-.219c-.18-.146-.32-.37-.419-.671zm-3.137 26.9V36.74h1.552v-3.915l-1.351.745-.373-.927 1.934-1.02h.956v5.117h1.337v1.012zm4.293-10.922q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .927.178.425.177.728.554.307.378.48.97.172.592.172 1.421zm-3.608.02v.176q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.261 0-.485.135-.224.13-.391.406-.163.275-.261.69-.094.414-.094.983zm2.462.018q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.136.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.147-4.815V21.04h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.337v1.012z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2595"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3023)"
          />
          <path
            d="M138.176 9.625l-1.102.582.373.927 1.352-.745v3.915h-1.552v1.011h4.055v-1.01h-1.338v-4.68zm3.364 18.318q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.997.313-.41.77-.625.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zm1.147-7.887q0 .75-.163 1.343-.164.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.177.727.555.308.378.48.97.173.591.173 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.452.42.672.27.219.629.219.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2597"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3025)"
          />
          <path
            d="M95.989 9.625v.771h-1.552v1.012h4.055v-1.012h-1.338v-.77zm2.741 6.56q0 .75-.163 1.343-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.177.727.555.308.378.48.97.173.592.173 1.421zm-3.608.019v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.136.392-.406.168-.275.261-.69.093-.42.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2599"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3027)"
          />
          <path
            d="M65.537 9.625v1.362H63.97v.755h3.827v-.755h-1.36V9.625zm57.656 14.805q0 .75-.163 1.342-.164.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-11.085 27.304q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.421zm-3.607.02v.176q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.136.392-.406.168-.275.26-.69.094-.42.094-.983zM98.73 24.463q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.135.392-.406.168-.275.261-.69.093-.42.093-.983zM86.335 13.36q0 .7-.14 1.277-.14.574-.424.989-.284.41-.708.638-.42.224-.988.224-.49 0-.89-.182-.401-.186-.686-.568-.284-.383-.438-.975-.154-.592-.154-1.403 0-.699.14-1.277.145-.578.424-.988.285-.415.709-.639.424-.228.988-.228.49 0 .89.186.401.182.685.57.285.381.439.973.153.592.153 1.403zm-.82.028q0-.158-.014-.312-.01-.158-.023-.308L82.9 14.685q.07.243.177.448.107.205.257.354.153.144.345.228.195.08.442.08.317 0 .574-.154.26-.154.443-.457.181-.303.28-.75.097-.453.097-1.045zm-2.787-.056v.29q.004.144.018.28l2.578-1.907q-.07-.238-.177-.434-.107-.196-.257-.335-.149-.145-.34-.224-.19-.08-.429-.08-.317 0-.578.154-.256.154-.438.462-.182.303-.28.755-.097.447-.097 1.04zM62.036 34.66q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.178-.424-.177-.732-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.159-.004-.083-.004-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983zM45.511 61.093V60.08h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.012zM69.974 46.13v-1.012h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.337v1.012zm59.334-9.435q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.997.312-.41.77-.625.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.136.392-.406.168-.275.26-.69.094-.42.094-.983zm9.086 2.635v-1.011h1.552V34.44l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm-71.528 76.117l-1.94 1.02.299.69 1.459-.792v3.283h.9v-4.201zm51.358-7.967q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.168-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm32.86 8.311q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zM55.92 101.517q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.554.307.378.48.97.172.592.172 1.422zm-3.608.018v.177q0 .08.01.164l2.284-1.65q-.163-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.391.406-.164.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zM92.26 74.657h-3.827v-.755H90v-4.447l-1.459.792-.298-.69 1.94-1.02h.717v5.365h1.361zM80.029 90.769h-3.827v-.755h1.566v-4.447l-1.459.793-.298-.69 1.939-1.02h.718v5.364h1.36zm51.102-6.49v-1.012h1.552V79.35l-1.352.746-.372-.927 1.934-1.021h.956v5.118h1.337v1.011zm-30.578-43.945v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2601"
            opacity={0.993}
            fill="#fffefe"
          />
          <path
            d="M59.295 9.625v3.118h-1.552v1.011h4.055v-1.011H60.46V9.625zm2.74 16.756q0 .75-.162 1.343-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.177.727.555.308.378.48.97.173.591.173 1.421zm-3.607.019v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.019q0-.08-.005-.159-.004-.084-.004-.158l-2.27 1.64q.149.452.42.672.27.219.629.219.26 0 .484-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.745-.373-.927 1.935-1.02h.955v5.117h1.338v1.012z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2603"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3029)"
          />
          <path
            d="M47.064 9.625v2.857H45.51v1.01h4.056v-1.01h-1.338V9.625zm2.74 40.043q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.42zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984zm1.147-7.886q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.591-.173-1.417 0-.75.163-1.342.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97t.172 1.422zm-3.607.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.262-.69.093-.419.093-.983zm-3.146-4.815v-1.012h1.553v-3.915l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm0-7.85v-1.01h1.553v-3.916l-1.352.745-.373-.927 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97t.172 1.421zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.262-.69.093-.42.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2605"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3031)"
          />
          <path
            d="M123.193 15.938q0 .75-.163 1.343-.164.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.177.727.555.308.378.48.97.173.592.173 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-1.594-6.35v.524H118.9v1.012h4.055v-1.012h-1.338v-.524z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2607"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3033)"
          />
          <path
            d="M104.846 28.91q0 .75-.164 1.342-.163.591-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm1.147-7.886q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.177-.425-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.225-.629-.225-.26 0-.485.135-.223.131-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.02q0-.08-.005-.16-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.816v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2609"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3035)"
          />
        </g>
        <g id="coderain_svg__g2448">
          <path
            id="coderain_svg__path1519"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M131.131 75.9V74.89h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337V75.9zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm-3.146-4.815V59.19h1.552v-3.915l-1.352.745-.372-.927 1.934-1.021h.956v5.118h1.337V60.2zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.136.391-.406.168-.275.261-.69.094-.42.094-.983zm1.147-7.887q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.591.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.372-.927 1.934-1.021h.956v5.118h1.337v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1917)"
          />
          <path
            id="coderain_svg__path1527"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M80.383 79.206q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.004-.158-.005-.084-.005-.159l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.815v-1.011h1.552V69.5l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.342.167-.592.48-.998.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.629.22.26 0 .484-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1915)"
          />
          <path
            id="coderain_svg__path1541"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M92.614 63.622q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.421zm-3.608.02v.176q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.261 0-.485.135-.223.13-.391.406-.163.275-.261.69-.094.414-.094.983zm2.462.018q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.261 0 .485-.135.228-.136.391-.406.168-.275.261-.69.094-.42.094-.983zm-3.147-4.815v-1.012h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.42zm-3.608.018v.178q0 .079.01.163l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.261 0-.485.135-.223.131-.391.406-.163.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.261 0 .485-.136.228-.135.391-.406.168-.275.261-.69.094-.419.094-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3037)"
          />
          <path
            id="coderain_svg__path1569"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M82.206 117.888v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.004-.084-.004-.159l-2.27 1.641q.149.452.419.671.27.22.63.22.26 0 .484-.136.228-.135.392-.405.167-.275.26-.69.094-.42.094-.984zm-3.145-4.815v-1.011h1.552v-3.915l-1.352.745-.373-.927 1.935-1.021h.955v5.118h1.338v1.011zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.414-.093.983zm2.46.019q0-.08-.004-.159-.004-.084-.004-.158l-2.27 1.64q.149.453.419.672.27.219.63.219.26 0 .484-.135.228-.136.392-.406.167-.275.26-.69.094-.42.094-.983zm-3.145-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.178-.425-.177-.732-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.004-.083-.004-.158l-2.27 1.64q.149.453.419.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3039)"
          />
          <path
            id="coderain_svg__path1577"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M55.92 93.025q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.555.307.377.48.97.172.591.172 1.42zm-3.608.019v.177q0 .079.01.163l2.284-1.65q-.163-.462-.434-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.391.405-.164.275-.261.69-.094.415-.094.984zm2.462.018q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.147-4.815v-1.011h1.552V83.32l-1.351.746-.373-.927 1.934-1.021h.956v5.118h1.337v1.011zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .927.177.425.177.728.555.307.378.48.97.172.591.172 1.421zm-3.608.018v.177q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.391.405-.164.275-.261.69-.094.415-.094.984zm2.462.018q0-.079-.005-.158-.005-.084-.005-.158l-2.27 1.64q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1909)"
          />
          <path
            id="coderain_svg__path1601"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M68.152 110.254q0 .75-.164 1.343-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.02v.176q0 .08.009.163l2.284-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.414-.093.983zm2.46.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983zm-3.145-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm0-7.85v-1.011h1.552V92.7l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011zm0-7.849v-1.011h1.552V84.85l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.928-.178-.424-.177-.731-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983zM63.86 66.23v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1907)"
          />
          <path
            id="coderain_svg__path1609"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M148.79 107.373q0 .75-.164 1.343-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.177.424.177.727.555.307.378.48.97.172.592.172 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zm-3.146-4.814v-1.012h1.553V97.67l-1.352.745-.373-.927 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.997.312-.41.77-.625.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1905)"
          />
          <path
            id="coderain_svg__path1625"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M117.077 99.24q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.554-.308-.383-.48-.975t-.172-1.417q0-.75.163-1.342.168-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.261-.69.094-.42.094-.983zm-3.146-4.815V93.45h1.552v-3.915l-1.352.746-.372-.928 1.934-1.02h.956v5.117h1.337v1.012zm0-7.85v-1.011h1.552v-3.915l-1.352.745-.372-.927 1.934-1.021h.956v5.118h1.337v1.012zm0-7.849v-1.011h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.117h1.337v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.178-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.168-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.63.22.26 0 .484-.136.228-.135.391-.406.168-.275.261-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3041)"
          />
          <path
            id="coderain_svg__path1629"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M126.777 119.522l-.308.163h1.264v-.163zm-1.762-1.72v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm0-7.85v-1.01h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.504 0-.928-.178-.424-.177-.732-.554-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.164l2.284-1.65q-.164-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983zm-3.146-4.815v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1901)"
          />
          <path
            d="M139.009 119.047l-1.208.638h2.163v-.638zm-1.762-1.72v-1.011h1.552v-3.915l-1.352.745-.373-.927 1.935-1.021h.955v5.118h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.136.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.26 0-.485.135-.223.131-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.815V84.92h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.164.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.146-4.815V69.22h1.552v-3.916l-1.352.746-.373-.927 1.935-1.021h.955v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path1631"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1899)"
          />
          <path
            id="coderain_svg__path1633"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M71.96 117.87c-.385 0-.73.071-1.035.214a2.05 2.05 0 00-.769.625 2.91 2.91 0 00-.473.976h1.173c.047-.129.098-.246.158-.347.112-.183.242-.318.391-.405a.92.92 0 01.485-.135c.242 0 .452.074.63.223.176.143.317.365.425.664h1.177c-.01-.037-.017-.077-.027-.113-.115-.395-.275-.719-.48-.97a1.824 1.824 0 00-.727-.555 2.383 2.383 0 00-.928-.177zm2.307-4.726q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.555.307.377.48.97.172.591.172 1.42zm-3.608.018v.177q0 .08.01.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.261 0-.485.135-.224.13-.391.406-.163.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.147-4.815v-1.011h1.552v-3.916l-1.351.746-.373-.928 1.934-1.02h.956v5.118h1.337v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2956)"
          />
          <path
            id="coderain_svg__path1635"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M59.505 117.486l-1.935 1.02.373.928 1.352-.745v.996h1.165v-2.199zm-1.762-1.72v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.01.163l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.158-.004-.084-.004-.159l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.26-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.552V87.29l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1895)"
          />
          <path
            id="coderain_svg__path1637"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M47.274 117.225l-1.935 1.02.373.928 1.352-.746v1.258h1.165v-2.46zm2.53-4.792q0 .75-.163 1.343-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984zm-3.146-4.815v-1.011h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011zm0-7.849v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1893)"
          />
          <path
            id="coderain_svg__path1641"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M96.199 115.14l-1.934 1.02.372.928 1.352-.746v3.343h1.165v-4.546zm-1.762-1.72v-1.012h1.552v-3.915l-1.352.745-.373-.927 1.935-1.02h.955v5.117h1.338v1.012zm0-7.85v-1.011h1.552v-3.916l-1.352.746-.373-.927L96.2 99.44h.955v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zM98.73 86.8q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.392.405-.163.275-.26.69-.094.415-.094.983zm2.461.02q0-.08-.004-.16-.005-.083-.005-.158l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.261-.69.093-.419.093-.983zm1.147-7.888q0 .75-.163 1.343-.163.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975t-.172-1.417q0-.75.163-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.02v.176q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.136.392-.406.168-.275.261-.69.093-.42.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3043)"
          />
          <path
            id="coderain_svg__path1643"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M120.661 114.892l-1.934 1.021.373.928 1.352-.746v3.59h1.165v-4.793zm2.532-4.791q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.225-.629-.225-.26 0-.485.136-.223.13-.391.405-.163.275-.261.69-.093.415-.093.983zm2.461.02q0-.08-.005-.16-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1889)"
          />
          <path
            id="coderain_svg__path1657"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M100.553 118.294v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.591.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.373-.927 1.935-1.021h.955v5.118h1.338v1.011zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.452.42.672.27.219.629.219.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552V81.97l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.178-.425-.177-.732-.554-.308-.383-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1887)"
          />
          <path
            id="coderain_svg__path1707"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M110.961 43.28q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.178q0 .079.009.163l2.284-1.65q-.164-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.46.019q0-.08-.004-.158-.005-.084-.005-.159l-2.27 1.64q.149.453.42.672.27.22.628.22.261 0 .485-.136.229-.135.392-.406.168-.275.26-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.312.405-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.591.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient3045)"
          />
          <path
            id="coderain_svg__path1713"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M126.777 9.66l-1.934 1.022.373.927 1.352-.746v3.916h-1.553v1.01h4.056v-1.01h-1.338V9.66zm2.531 18.757q0 .75-.163 1.343-.163.591-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .08.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zm-3.146-4.815v-1.011h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1883)"
          />
          <path
            id="coderain_svg__path1715"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M69.748 9.625c-.025.072-.05.144-.072.22a5.06 5.06 0 00-.163 1.343c0 .55.057 1.022.172 1.417.115.394.275.72.48.974.205.252.45.437.732.555.283.118.592.177.928.177.388 0 .733-.072 1.035-.215.301-.142.556-.35.764-.62.211-.273.371-.607.48-1.002a5.06 5.06 0 00.163-1.342c0-.553-.057-1.027-.172-1.422-.009-.03-.02-.056-.029-.085h-1.202c.032.067.062.139.089.215l-2.284 1.65a1.474 1.474 0 01-.01-.162v-.178c0-.379.032-.706.094-.983a2.75 2.75 0 01.182-.542zm3.363 1.227c0 .05.002.102.005.158a4.573 4.573 0 01-.089 1.142c-.062.277-.149.507-.26.69-.11.18-.24.316-.392.406a.92.92 0 01-.485.135.969.969 0 01-.63-.219c-.18-.146-.32-.37-.419-.671zm-3.137 26.9V36.74h1.552v-3.915l-1.351.745-.373-.927 1.934-1.02h.956v5.117h1.337v1.012zm4.293-10.922q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .927.178.425.177.728.554.307.378.48.97.172.592.172 1.421zm-3.608.02v.176q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.261 0-.485.135-.224.13-.391.406-.163.275-.261.69-.094.414-.094.983zm2.462.018q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.136.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.147-4.815V21.04h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.337v1.012z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1881)"
          />
          <path
            id="coderain_svg__path1717"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M138.176 9.625l-1.102.582.373.927 1.352-.745v3.915h-1.552v1.011h4.055v-1.01h-1.338v-4.68zm3.364 18.318q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.997.313-.41.77-.625.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zm1.147-7.887q0 .75-.163 1.343-.164.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.177.727.555.308.378.48.97.173.591.173 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.452.42.672.27.219.629.219.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1879)"
          />
          <path
            id="coderain_svg__path1721"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M95.989 9.625v.771h-1.552v1.012h4.055v-1.012h-1.338v-.77zm2.741 6.56q0 .75-.163 1.343-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.177.727.555.308.378.48.97.173.592.173 1.421zm-3.608.019v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.136.392-.406.168-.275.261-.69.093-.42.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1877)"
          />
          <path
            id="coderain_svg__path1723"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M65.537 9.625v1.362H63.97v.755h3.827v-.755h-1.36V9.625zm57.656 14.805q0 .75-.163 1.342-.164.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-11.085 27.304q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.421zm-3.607.02v.176q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.136.392-.406.168-.275.26-.69.094-.42.094-.983zM98.73 24.463q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.135.392-.406.168-.275.261-.69.093-.42.093-.983zM86.335 13.36q0 .7-.14 1.277-.14.574-.424.989-.284.41-.708.638-.42.224-.988.224-.49 0-.89-.182-.401-.186-.686-.568-.284-.383-.438-.975-.154-.592-.154-1.403 0-.699.14-1.277.145-.578.424-.988.285-.415.709-.639.424-.228.988-.228.49 0 .89.186.401.182.685.57.285.381.439.973.153.592.153 1.403zm-.82.028q0-.158-.014-.312-.01-.158-.023-.308L82.9 14.685q.07.243.177.448.107.205.257.354.153.144.345.228.195.08.442.08.317 0 .574-.154.26-.154.443-.457.181-.303.28-.75.097-.453.097-1.045zm-2.787-.056v.29q.004.144.018.28l2.578-1.907q-.07-.238-.177-.434-.107-.196-.257-.335-.149-.145-.34-.224-.19-.08-.429-.08-.317 0-.578.154-.256.154-.438.462-.182.303-.28.755-.097.447-.097 1.04zM62.036 34.66q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.178-.424-.177-.732-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.159-.004-.083-.004-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983zM45.511 61.093V60.08h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.012zM69.974 46.13v-1.012h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.337v1.012zm59.334-9.435q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.997.312-.41.77-.625.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.136.392-.406.168-.275.26-.69.094-.42.094-.983zm9.086 2.635v-1.011h1.552V34.44l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm-71.528 76.117l-1.94 1.02.299.69 1.459-.792v3.283h.9v-4.201zm51.358-7.967q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.168-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm32.86 8.311q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zM55.92 101.517q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.554.307.378.48.97.172.592.172 1.422zm-3.608.018v.177q0 .08.01.164l2.284-1.65q-.163-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.391.406-.164.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zM92.26 74.657h-3.827v-.755H90v-4.447l-1.459.792-.298-.69 1.94-1.02h.717v5.365h1.361zM80.029 90.769h-3.827v-.755h1.566v-4.447l-1.459.793-.298-.69 1.939-1.02h.718v5.364h1.36zm51.102-6.49v-1.012h1.552V79.35l-1.352.746-.372-.927 1.934-1.021h.956v5.118h1.337v1.011zm-30.578-43.945v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012z"
            opacity={0.993}
            fill="#fffefe"
          />
          <path
            id="coderain_svg__path1725"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M59.295 9.625v3.118h-1.552v1.011h4.055v-1.011H60.46V9.625zm2.74 16.756q0 .75-.162 1.343-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.177.727.555.308.378.48.97.173.591.173 1.421zm-3.607.019v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.019q0-.08-.005-.159-.004-.084-.004-.158l-2.27 1.64q.149.452.42.672.27.219.629.219.26 0 .484-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.745-.373-.927 1.935-1.02h.955v5.117h1.338v1.012z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1875)"
          />
          <path
            id="coderain_svg__path1727"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M47.064 9.625v2.857H45.51v1.01h4.056v-1.01h-1.338V9.625zm2.74 40.043q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.42zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984zm1.147-7.886q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.591-.173-1.417 0-.75.163-1.342.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97t.172 1.422zm-3.607.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.262-.69.093-.419.093-.983zm-3.146-4.815v-1.012h1.553v-3.915l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm0-7.85v-1.01h1.553v-3.916l-1.352.745-.373-.927 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97t.172 1.421zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.262-.69.093-.42.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1873)"
          />
          <path
            id="coderain_svg__path1729"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M123.193 15.938q0 .75-.163 1.343-.164.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.177.727.555.308.378.48.97.173.592.173 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-1.594-6.35v.524H118.9v1.012h4.055v-1.012h-1.338v-.524z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1871)"
          />
          <path
            id="coderain_svg__path1735"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M104.846 28.91q0 .75-.164 1.342-.163.591-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm1.147-7.886q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.177-.425-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.225-.629-.225-.26 0-.485.135-.223.131-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.02q0-.08-.005-.16-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.816v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient1869)"
          />
        </g>
        <g
          transform="translate(0 -109.995)"
          id="coderain_svg__g2800"
          filter="url(#coderain_svg__filter2640)"
        >
          <path
            id="coderain_svg__path2748"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M131.131 75.9V74.89h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337V75.9zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm-3.146-4.815V59.19h1.552v-3.915l-1.352.745-.372-.927 1.934-1.021h.956v5.118h1.337V60.2zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.136.391-.406.168-.275.261-.69.094-.42.094-.983zm1.147-7.887q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.591.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.372-.927 1.934-1.021h.956v5.118h1.337v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2906)"
          />
          <path
            id="coderain_svg__path2750"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M80.383 79.206q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.004-.158-.005-.084-.005-.159l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.815v-1.011h1.552V69.5l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.342.167-.592.48-.998.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.629.22.26 0 .484-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2908)"
          />
          <path
            id="coderain_svg__path2752"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M92.614 63.622q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.421zm-3.608.02v.176q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.261 0-.485.135-.223.13-.391.406-.163.275-.261.69-.094.414-.094.983zm2.462.018q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.261 0 .485-.135.228-.136.391-.406.168-.275.261-.69.094-.42.094-.983zm-3.147-4.815v-1.012h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.42zm-3.608.018v.178q0 .079.01.163l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.261 0-.485.135-.223.131-.391.406-.163.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.261 0 .485-.136.228-.135.391-.406.168-.275.261-.69.094-.419.094-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2910)"
          />
          <path
            id="coderain_svg__path2754"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M82.206 117.888v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.004-.084-.004-.159l-2.27 1.641q.149.452.419.671.27.22.63.22.26 0 .484-.136.228-.135.392-.405.167-.275.26-.69.094-.42.094-.984zm-3.145-4.815v-1.011h1.552v-3.915l-1.352.745-.373-.927 1.935-1.021h.955v5.118h1.338v1.011zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.414-.093.983zm2.46.019q0-.08-.004-.159-.004-.084-.004-.158l-2.27 1.64q.149.453.419.672.27.219.63.219.26 0 .484-.135.228-.136.392-.406.167-.275.26-.69.094-.42.094-.983zm-3.145-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.178-.425-.177-.732-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.004-.083-.004-.158l-2.27 1.64q.149.453.419.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2912)"
          />
          <path
            id="coderain_svg__path2756"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M55.92 93.025q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.555.307.377.48.97.172.591.172 1.42zm-3.608.019v.177q0 .079.01.163l2.284-1.65q-.163-.462-.434-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.391.405-.164.275-.261.69-.094.415-.094.984zm2.462.018q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.147-4.815v-1.011h1.552V83.32l-1.351.746-.373-.927 1.934-1.021h.956v5.118h1.337v1.011zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .927.177.425.177.728.555.307.378.48.97.172.591.172 1.421zm-3.608.018v.177q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.391.405-.164.275-.261.69-.094.415-.094.984zm2.462.018q0-.079-.005-.158-.005-.084-.005-.158l-2.27 1.64q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2914)"
          />
          <path
            id="coderain_svg__path2758"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M68.152 110.254q0 .75-.164 1.343-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.02v.176q0 .08.009.163l2.284-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.414-.093.983zm2.46.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983zm-3.145-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm0-7.85v-1.011h1.552V92.7l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011zm0-7.849v-1.011h1.552V84.85l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.928-.178-.424-.177-.731-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983zM63.86 66.23v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2916)"
          />
          <path
            id="coderain_svg__path2760"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M148.79 107.373q0 .75-.164 1.343-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.177.424.177.727.555.307.378.48.97.172.592.172 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zm-3.146-4.814v-1.012h1.553V97.67l-1.352.745-.373-.927 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.997.312-.41.77-.625.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2918)"
          />
          <path
            id="coderain_svg__path2762"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M117.077 99.24q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.554-.308-.383-.48-.975t-.172-1.417q0-.75.163-1.342.168-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.261-.69.094-.42.094-.983zm-3.146-4.815V93.45h1.552v-3.915l-1.352.746-.372-.928 1.934-1.02h.956v5.117h1.337v1.012zm0-7.85v-1.011h1.552v-3.915l-1.352.745-.372-.927 1.934-1.021h.956v5.118h1.337v1.012zm0-7.849v-1.011h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.117h1.337v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.178-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.168-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.63.22.26 0 .484-.136.228-.135.391-.406.168-.275.261-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2920)"
          />
          <path
            id="coderain_svg__path2764"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M126.777 119.522l-.308.163h1.264v-.163zm-1.762-1.72v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm0-7.85v-1.01h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.504 0-.928-.178-.424-.177-.732-.554-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.164l2.284-1.65q-.164-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983zm-3.146-4.815v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2922)"
          />
          <path
            d="M139.009 119.047l-1.208.638h2.163v-.638zm-1.762-1.72v-1.011h1.552v-3.915l-1.352.745-.373-.927 1.935-1.021h.955v5.118h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.136.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.26 0-.485.135-.223.131-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.815V84.92h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.164.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.146-4.815V69.22h1.552v-3.916l-1.352.746-.373-.927 1.935-1.021h.955v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2766"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2924)"
          />
          <path
            id="coderain_svg__path2768"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M71.96 117.87c-.385 0-.73.071-1.035.214a2.05 2.05 0 00-.769.625 2.91 2.91 0 00-.473.976h1.173c.047-.129.098-.246.158-.347.112-.183.242-.318.391-.405a.92.92 0 01.485-.135c.242 0 .452.074.63.223.176.143.317.365.425.664h1.177c-.01-.037-.017-.077-.027-.113-.115-.395-.275-.719-.48-.97a1.824 1.824 0 00-.727-.555 2.383 2.383 0 00-.928-.177zm2.307-4.726q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.555.307.377.48.97.172.591.172 1.42zm-3.608.018v.177q0 .08.01.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.261 0-.485.135-.224.13-.391.406-.163.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.147-4.815v-1.011h1.552v-3.916l-1.351.746-.373-.928 1.934-1.02h.956v5.118h1.337v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2926)"
          />
          <path
            id="coderain_svg__path2770"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M59.505 117.486l-1.935 1.02.373.928 1.352-.745v.996h1.165v-2.199zm-1.762-1.72v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.01.163l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.158-.004-.084-.004-.159l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.26-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.552V87.29l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2928)"
          />
          <path
            id="coderain_svg__path2772"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M47.274 117.225l-1.935 1.02.373.928 1.352-.746v1.258h1.165v-2.46zm2.53-4.792q0 .75-.163 1.343-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984zm-3.146-4.815v-1.011h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011zm0-7.849v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2930)"
          />
          <path
            id="coderain_svg__path2774"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M96.199 115.14l-1.934 1.02.372.928 1.352-.746v3.343h1.165v-4.546zm-1.762-1.72v-1.012h1.552v-3.915l-1.352.745-.373-.927 1.935-1.02h.955v5.117h1.338v1.012zm0-7.85v-1.011h1.552v-3.916l-1.352.746-.373-.927L96.2 99.44h.955v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zM98.73 86.8q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.392.405-.163.275-.26.69-.094.415-.094.983zm2.461.02q0-.08-.004-.16-.005-.083-.005-.158l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.261-.69.093-.419.093-.983zm1.147-7.888q0 .75-.163 1.343-.163.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975t-.172-1.417q0-.75.163-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.02v.176q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.136.392-.406.168-.275.261-.69.093-.42.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2932)"
          />
          <path
            id="coderain_svg__path2776"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M120.661 114.892l-1.934 1.021.373.928 1.352-.746v3.59h1.165v-4.793zm2.532-4.791q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.225-.629-.225-.26 0-.485.136-.223.13-.391.405-.163.275-.261.69-.093.415-.093.983zm2.461.02q0-.08-.005-.16-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2934)"
          />
          <path
            id="coderain_svg__path2778"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M100.553 118.294v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.591.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.373-.927 1.935-1.021h.955v5.118h1.338v1.011zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.452.42.672.27.219.629.219.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552V81.97l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.178-.425-.177-.732-.554-.308-.383-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2936)"
          />
          <path
            id="coderain_svg__path2780"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M110.961 43.28q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.178q0 .079.009.163l2.284-1.65q-.164-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.46.019q0-.08-.004-.158-.005-.084-.005-.159l-2.27 1.64q.149.453.42.672.27.22.628.22.261 0 .485-.136.229-.135.392-.406.168-.275.26-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.312.405-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.591.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2938)"
          />
          <path
            id="coderain_svg__path2782"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M126.777 9.66l-1.934 1.022.373.927 1.352-.746v3.916h-1.553v1.01h4.056v-1.01h-1.338V9.66zm2.531 18.757q0 .75-.163 1.343-.163.591-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .08.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zm-3.146-4.815v-1.011h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2940)"
          />
          <path
            id="coderain_svg__path2784"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M69.748 9.625c-.025.072-.05.144-.072.22a5.06 5.06 0 00-.163 1.343c0 .55.057 1.022.172 1.417.115.394.275.72.48.974.205.252.45.437.732.555.283.118.592.177.928.177.388 0 .733-.072 1.035-.215.301-.142.556-.35.764-.62.211-.273.371-.607.48-1.002a5.06 5.06 0 00.163-1.342c0-.553-.057-1.027-.172-1.422-.009-.03-.02-.056-.029-.085h-1.202c.032.067.062.139.089.215l-2.284 1.65a1.474 1.474 0 01-.01-.162v-.178c0-.379.032-.706.094-.983a2.75 2.75 0 01.182-.542zm3.363 1.227c0 .05.002.102.005.158a4.573 4.573 0 01-.089 1.142c-.062.277-.149.507-.26.69-.11.18-.24.316-.392.406a.92.92 0 01-.485.135.969.969 0 01-.63-.219c-.18-.146-.32-.37-.419-.671zm-3.137 26.9V36.74h1.552v-3.915l-1.351.745-.373-.927 1.934-1.02h.956v5.117h1.337v1.012zm4.293-10.922q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .927.178.425.177.728.554.307.378.48.97.172.592.172 1.421zm-3.608.02v.176q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.261 0-.485.135-.224.13-.391.406-.163.275-.261.69-.094.414-.094.983zm2.462.018q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.136.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.147-4.815V21.04h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.337v1.012z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2942)"
          />
          <path
            id="coderain_svg__path2786"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M138.176 9.625l-1.102.582.373.927 1.352-.745v3.915h-1.552v1.011h4.055v-1.01h-1.338v-4.68zm3.364 18.318q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.997.313-.41.77-.625.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zm1.147-7.887q0 .75-.163 1.343-.164.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.177.727.555.308.378.48.97.173.591.173 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.452.42.672.27.219.629.219.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2944)"
          />
          <path
            id="coderain_svg__path2788"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M95.989 9.625v.771h-1.552v1.012h4.055v-1.012h-1.338v-.77zm2.741 6.56q0 .75-.163 1.343-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.177.727.555.308.378.48.97.173.592.173 1.421zm-3.608.019v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.136.392-.406.168-.275.261-.69.093-.42.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2946)"
          />
          <path
            id="coderain_svg__path2790"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M65.537 9.625v1.362H63.97v.755h3.827v-.755h-1.36V9.625zm57.656 14.805q0 .75-.163 1.342-.164.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-11.085 27.304q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.421zm-3.607.02v.176q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.136.392-.406.168-.275.26-.69.094-.42.094-.983zM98.73 24.463q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.135.392-.406.168-.275.261-.69.093-.42.093-.983zM86.335 13.36q0 .7-.14 1.277-.14.574-.424.989-.284.41-.708.638-.42.224-.988.224-.49 0-.89-.182-.401-.186-.686-.568-.284-.383-.438-.975-.154-.592-.154-1.403 0-.699.14-1.277.145-.578.424-.988.285-.415.709-.639.424-.228.988-.228.49 0 .89.186.401.182.685.57.285.381.439.973.153.592.153 1.403zm-.82.028q0-.158-.014-.312-.01-.158-.023-.308L82.9 14.685q.07.243.177.448.107.205.257.354.153.144.345.228.195.08.442.08.317 0 .574-.154.26-.154.443-.457.181-.303.28-.75.097-.453.097-1.045zm-2.787-.056v.29q.004.144.018.28l2.578-1.907q-.07-.238-.177-.434-.107-.196-.257-.335-.149-.145-.34-.224-.19-.08-.429-.08-.317 0-.578.154-.256.154-.438.462-.182.303-.28.755-.097.447-.097 1.04zM62.036 34.66q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.178-.424-.177-.732-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.159-.004-.083-.004-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983zM45.511 61.093V60.08h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.012zM69.974 46.13v-1.012h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.337v1.012zm59.334-9.435q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.997.312-.41.77-.625.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.136.392-.406.168-.275.26-.69.094-.42.094-.983zm9.086 2.635v-1.011h1.552V34.44l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm-71.528 76.117l-1.94 1.02.299.69 1.459-.792v3.283h.9v-4.201zm51.358-7.967q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.168-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm32.86 8.311q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zM55.92 101.517q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.554.307.378.48.97.172.592.172 1.422zm-3.608.018v.177q0 .08.01.164l2.284-1.65q-.163-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.391.406-.164.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zM92.26 74.657h-3.827v-.755H90v-4.447l-1.459.792-.298-.69 1.94-1.02h.717v5.365h1.361zM80.029 90.769h-3.827v-.755h1.566v-4.447l-1.459.793-.298-.69 1.939-1.02h.718v5.364h1.36zm51.102-6.49v-1.012h1.552V79.35l-1.352.746-.372-.927 1.934-1.021h.956v5.118h1.337v1.011zm-30.578-43.945v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012z"
            opacity={0.993}
            fill="#fffefe"
          />
          <path
            id="coderain_svg__path2792"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M59.295 9.625v3.118h-1.552v1.011h4.055v-1.011H60.46V9.625zm2.74 16.756q0 .75-.162 1.343-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.177.727.555.308.378.48.97.173.591.173 1.421zm-3.607.019v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.019q0-.08-.005-.159-.004-.084-.004-.158l-2.27 1.64q.149.452.42.672.27.219.629.219.26 0 .484-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.745-.373-.927 1.935-1.02h.955v5.117h1.338v1.012z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2948)"
          />
          <path
            id="coderain_svg__path2794"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M47.064 9.625v2.857H45.51v1.01h4.056v-1.01h-1.338V9.625zm2.74 40.043q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.42zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984zm1.147-7.886q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.591-.173-1.417 0-.75.163-1.342.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97t.172 1.422zm-3.607.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.262-.69.093-.419.093-.983zm-3.146-4.815v-1.012h1.553v-3.915l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm0-7.85v-1.01h1.553v-3.916l-1.352.745-.373-.927 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97t.172 1.421zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.262-.69.093-.42.093-.983z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2950)"
          />
          <path
            id="coderain_svg__path2796"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M123.193 15.938q0 .75-.163 1.343-.164.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.177.727.555.308.378.48.97.173.592.173 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-1.594-6.35v.524H118.9v1.012h4.055v-1.012h-1.338v-.524z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2952)"
          />
          <path
            id="coderain_svg__path2798"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M104.846 28.91q0 .75-.164 1.342-.163.591-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm1.147-7.886q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.177-.425-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.225-.629-.225-.26 0-.485.135-.223.131-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.02q0-.08-.005-.16-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.816v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2954)"
          />
        </g>
        <g transform="translate(0 -109.995)" id="coderain_svg__g2854">
          <path
            d="M131.131 75.9V74.89h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337V75.9zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm-3.146-4.815V59.19h1.552v-3.915l-1.352.745-.372-.927 1.934-1.021h.956v5.118h1.337V60.2zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.136.391-.406.168-.275.261-.69.094-.42.094-.983zm1.147-7.887q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.591.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.372-.927 1.934-1.021h.956v5.118h1.337v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2802"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2856)"
          />
          <path
            d="M80.383 79.206q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.004-.158-.005-.084-.005-.159l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.815v-1.011h1.552V69.5l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.342.167-.592.48-.998.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.629.22.26 0 .484-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2804"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2858)"
          />
          <path
            d="M92.614 63.622q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.421zm-3.608.02v.176q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.261 0-.485.135-.223.13-.391.406-.163.275-.261.69-.094.414-.094.983zm2.462.018q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.261 0 .485-.135.228-.136.391-.406.168-.275.261-.69.094-.42.094-.983zm-3.147-4.815v-1.012h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.42zm-3.608.018v.178q0 .079.01.163l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.261 0-.485.135-.223.131-.391.406-.163.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.261 0 .485-.136.228-.135.391-.406.168-.275.261-.69.094-.419.094-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2806"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2860)"
          />
          <path
            d="M82.206 117.888v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.004-.084-.004-.159l-2.27 1.641q.149.452.419.671.27.22.63.22.26 0 .484-.136.228-.135.392-.405.167-.275.26-.69.094-.42.094-.984zm-3.145-4.815v-1.011h1.552v-3.915l-1.352.745-.373-.927 1.935-1.021h.955v5.118h1.338v1.011zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.414-.093.983zm2.46.019q0-.08-.004-.159-.004-.084-.004-.158l-2.27 1.64q.149.453.419.672.27.219.63.219.26 0 .484-.135.228-.136.392-.406.167-.275.26-.69.094-.42.094-.983zm-3.145-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.178-.425-.177-.732-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.004-.083-.004-.158l-2.27 1.64q.149.453.419.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2808"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2862)"
          />
          <path
            d="M55.92 93.025q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.555.307.377.48.97.172.591.172 1.42zm-3.608.019v.177q0 .079.01.163l2.284-1.65q-.163-.462-.434-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.391.405-.164.275-.261.69-.094.415-.094.984zm2.462.018q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.147-4.815v-1.011h1.552V83.32l-1.351.746-.373-.927 1.934-1.021h.956v5.118h1.337v1.011zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .927.177.425.177.728.555.307.378.48.97.172.591.172 1.421zm-3.608.018v.177q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.391.405-.164.275-.261.69-.094.415-.094.984zm2.462.018q0-.079-.005-.158-.005-.084-.005-.158l-2.27 1.64q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2810"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2864)"
          />
          <path
            d="M68.152 110.254q0 .75-.164 1.343-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.02v.176q0 .08.009.163l2.284-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.414-.093.983zm2.46.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983zm-3.145-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm0-7.85v-1.011h1.552V92.7l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011zm0-7.849v-1.011h1.552V84.85l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.928-.178-.424-.177-.731-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.392-.406.167-.275.26-.69.094-.42.094-.983zM63.86 66.23v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2812"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2866)"
          />
          <path
            d="M148.79 107.373q0 .75-.164 1.343-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.177.424.177.727.555.307.378.48.97.172.592.172 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zm-3.146-4.814v-1.012h1.553V97.67l-1.352.745-.373-.927 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.997.312-.41.77-.625.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2814"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2868)"
          />
          <path
            d="M117.077 99.24q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.554-.308-.383-.48-.975t-.172-1.417q0-.75.163-1.342.168-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.261-.69.094-.42.094-.983zm-3.146-4.815V93.45h1.552v-3.915l-1.352.746-.372-.928 1.934-1.02h.956v5.117h1.337v1.012zm0-7.85v-1.011h1.552v-3.915l-1.352.745-.372-.927 1.934-1.021h.956v5.118h1.337v1.012zm0-7.849v-1.011h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.117h1.337v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.178-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.168-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.63.22.26 0 .484-.136.228-.135.391-.406.168-.275.261-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.372-.928 1.934-1.02h.956v5.118h1.337v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2816"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2870)"
          />
          <path
            d="M126.777 119.522l-.308.163h1.264v-.163zm-1.762-1.72v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm0-7.85v-1.01h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.504 0-.928-.178-.424-.177-.732-.554-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.164l2.284-1.65q-.164-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983zm-3.146-4.815v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2818"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2872)"
          />
          <path
            id="coderain_svg__path2820"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            d="M139.009 119.047l-1.208.638h2.163v-.638zm-1.762-1.72v-1.011h1.552v-3.915l-1.352.745-.373-.927 1.935-1.021h.955v5.118h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.136.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.969.173.592.173 1.422zm-3.608.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.26 0-.485.135-.223.131-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.815V84.92h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.164.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.146-4.815V69.22h1.552v-3.916l-1.352.746-.373-.927 1.935-1.021h.955v5.118h1.338v1.011z"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2874)"
          />
          <path
            d="M71.96 117.87c-.385 0-.73.071-1.035.214a2.05 2.05 0 00-.769.625 2.91 2.91 0 00-.473.976h1.173c.047-.129.098-.246.158-.347.112-.183.242-.318.391-.405a.92.92 0 01.485-.135c.242 0 .452.074.63.223.176.143.317.365.425.664h1.177c-.01-.037-.017-.077-.027-.113-.115-.395-.275-.719-.48-.97a1.824 1.824 0 00-.727-.555 2.383 2.383 0 00-.928-.177zm2.307-4.726q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.555.307.377.48.97.172.591.172 1.42zm-3.608.018v.177q0 .08.01.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.261 0-.485.135-.224.13-.391.406-.163.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.158-.005-.084-.005-.159l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.147-4.815v-1.011h1.552v-3.916l-1.351.746-.373-.928 1.934-1.02h.956v5.118h1.337v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2822"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2876)"
          />
          <path
            d="M59.505 117.486l-1.935 1.02.373.928 1.352-.745v.996h1.165v-2.199zm-1.762-1.72v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.01.163l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.158-.004-.084-.004-.159l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.26-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.552V87.29l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2824"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2878)"
          />
          <path
            d="M47.274 117.225l-1.935 1.02.373.928 1.352-.746v1.258h1.165v-2.46zm2.53-4.792q0 .75-.163 1.343-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984zm-3.146-4.815v-1.011h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011zm0-7.849v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.433-.68-.266-.224-.63-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2826"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2880)"
          />
          <path
            d="M96.199 115.14l-1.934 1.02.372.928 1.352-.746v3.343h1.165v-4.546zm-1.762-1.72v-1.012h1.552v-3.915l-1.352.745-.373-.927 1.935-1.02h.955v5.117h1.338v1.012zm0-7.85v-1.011h1.552v-3.916l-1.352.746-.373-.927L96.2 99.44h.955v5.118h1.338v1.011zm0-7.85v-1.01h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zM98.73 86.8q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.392.405-.163.275-.26.69-.094.415-.094.983zm2.461.02q0-.08-.004-.16-.005-.083-.005-.158l-2.27 1.64q.149.453.42.672.27.22.629.22.26 0 .484-.136.229-.135.392-.406.168-.275.261-.69.093-.419.093-.983zm1.147-7.888q0 .75-.163 1.343-.163.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975t-.172-1.417q0-.75.163-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.178.424.177.727.554.308.378.48.97.173.592.173 1.421zm-3.608.02v.176q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.136.392-.406.168-.275.261-.69.093-.42.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2828"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2882)"
          />
          <path
            d="M120.661 114.892l-1.934 1.021.373.928 1.352-.746v3.59h1.165v-4.793zm2.532-4.791q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.225-.629-.225-.26 0-.485.136-.223.13-.391.405-.163.275-.261.69-.093.415-.093.983zm2.461.02q0-.08-.005-.16-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2830"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2884)"
          />
          <path
            d="M100.553 118.294v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.591.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-3.146-4.815v-1.011h1.552v-3.916l-1.352.746-.373-.927 1.935-1.021h.955v5.118h1.338v1.011zm4.293-10.92q0 .75-.164 1.342-.163.592-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.178.727.555.308.378.48.97.173.592.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.452.42.672.27.219.629.219.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552V81.97l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012zm4.293-10.921q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.178-.425-.177-.732-.554-.308-.383-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2832"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2886)"
          />
          <path
            d="M110.961 43.28q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.453.215-1.035.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.178q0 .079.009.163l2.284-1.65q-.164-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.131-.392.406-.163.275-.26.69-.094.415-.094.983zm2.46.019q0-.08-.004-.158-.005-.084-.005-.159l-2.27 1.64q.149.453.42.672.27.22.628.22.261 0 .485-.136.229-.135.392-.406.168-.275.26-.69.094-.419.094-.983zm-3.146-4.815v-1.011h1.553v-3.916l-1.352.746-.373-.928 1.934-1.02h.956v5.118h1.338v1.011zm4.293-10.921q0 .75-.163 1.342-.163.592-.48 1.003-.312.405-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.591.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2834"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2888)"
          />
          <path
            d="M126.777 9.66l-1.934 1.022.373.927 1.352-.746v3.916h-1.553v1.01h4.056v-1.01h-1.338V9.66zm2.531 18.757q0 .75-.163 1.343-.163.591-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.607.019v.177q0 .08.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zm-3.146-4.815v-1.011h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2836"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2890)"
          />
          <path
            d="M69.748 9.625c-.025.072-.05.144-.072.22a5.06 5.06 0 00-.163 1.343c0 .55.057 1.022.172 1.417.115.394.275.72.48.974.205.252.45.437.732.555.283.118.592.177.928.177.388 0 .733-.072 1.035-.215.301-.142.556-.35.764-.62.211-.273.371-.607.48-1.002a5.06 5.06 0 00.163-1.342c0-.553-.057-1.027-.172-1.422-.009-.03-.02-.056-.029-.085h-1.202c.032.067.062.139.089.215l-2.284 1.65a1.474 1.474 0 01-.01-.162v-.178c0-.379.032-.706.094-.983a2.75 2.75 0 01.182-.542zm3.363 1.227c0 .05.002.102.005.158a4.573 4.573 0 01-.089 1.142c-.062.277-.149.507-.26.69-.11.18-.24.316-.392.406a.92.92 0 01-.485.135.969.969 0 01-.63-.219c-.18-.146-.32-.37-.419-.671zm-3.137 26.9V36.74h1.552v-3.915l-1.351.745-.373-.927 1.934-1.02h.956v5.117h1.337v1.012zm4.293-10.922q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .927.178.425.177.728.554.307.378.48.97.172.592.172 1.421zm-3.608.02v.176q0 .08.01.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.261 0-.485.135-.224.13-.391.406-.163.275-.261.69-.094.414-.094.983zm2.462.018q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.136.391-.406.168-.275.261-.69.093-.42.093-.983zm-3.147-4.815V21.04h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.337v1.012z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2838"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2892)"
          />
          <path
            d="M138.176 9.625l-1.102.582.373.927 1.352-.745v3.915h-1.552v1.011h4.055v-1.01h-1.338v-4.68zm3.364 18.318q0 .75-.163 1.342-.164.592-.48 1.002-.313.406-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.997.313-.41.77-.625.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.019q0-.08-.005-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zm1.147-7.887q0 .75-.163 1.343-.164.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.177.727.555.308.378.48.97.173.591.173 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.452.42.672.27.219.629.219.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2840"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2894)"
          />
          <path
            d="M95.989 9.625v.771h-1.552v1.012h4.055v-1.012h-1.338v-.77zm2.741 6.56q0 .75-.163 1.343-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.177.727.555.308.378.48.97.173.592.173 1.421zm-3.608.019v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.461.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.136.392-.406.168-.275.261-.69.093-.42.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2842"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2896)"
          />
          <path
            d="M65.537 9.625v1.362H63.97v.755h3.827v-.755h-1.36V9.625zm57.656 14.805q0 .75-.163 1.342-.164.592-.48 1.003-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-11.085 27.304q0 .75-.163 1.343-.163.592-.48 1.002-.312.406-.764.62-.453.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.624.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.421zm-3.607.02v.176q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.018q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.136.392-.406.168-.275.26-.69.094-.42.094-.983zM98.73 24.463q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.177-.424-.178-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.135.392-.406.168-.275.261-.69.093-.42.093-.983zM86.335 13.36q0 .7-.14 1.277-.14.574-.424.989-.284.41-.708.638-.42.224-.988.224-.49 0-.89-.182-.401-.186-.686-.568-.284-.383-.438-.975-.154-.592-.154-1.403 0-.699.14-1.277.145-.578.424-.988.285-.415.709-.639.424-.228.988-.228.49 0 .89.186.401.182.685.57.285.381.439.973.153.592.153 1.403zm-.82.028q0-.158-.014-.312-.01-.158-.023-.308L82.9 14.685q.07.243.177.448.107.205.257.354.153.144.345.228.195.08.442.08.317 0 .574-.154.26-.154.443-.457.181-.303.28-.75.097-.453.097-1.045zm-2.787-.056v.29q.004.144.018.28l2.578-1.907q-.07-.238-.177-.434-.107-.196-.257-.335-.149-.145-.34-.224-.19-.08-.429-.08-.317 0-.578.154-.256.154-.438.462-.182.303-.28.755-.097.447-.097 1.04zM62.036 34.66q0 .75-.163 1.342-.163.592-.48 1.002-.313.406-.765.62-.452.215-1.035.215-.503 0-.927-.178-.424-.177-.732-.554-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.343.167-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.554.308.378.48.97.173.592.173 1.422zm-3.608.018v.177q0 .08.01.164l2.283-1.65q-.163-.462-.433-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.415-.094.983zm2.461.019q0-.08-.005-.159-.004-.083-.004-.158l-2.27 1.64q.149.453.42.672.27.219.629.219.26 0 .484-.135.229-.135.392-.406.168-.275.26-.69.094-.42.094-.983zM45.511 61.093V60.08h1.553v-3.915l-1.352.745-.373-.927 1.934-1.021h.956v5.118h1.338v1.012zM69.974 46.13v-1.012h1.552v-3.915l-1.351.746-.373-.928 1.934-1.02h.956v5.117h1.337v1.012zm59.334-9.435q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.554-.307-.383-.48-.975-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.997.312-.41.77-.625.456-.215 1.034-.215.503 0 .928.178.424.177.727.554.307.378.48.97.172.592.172 1.422zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.164-.461-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.406-.163.275-.26.69-.094.414-.094.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.149.453.42.672.27.219.628.219.261 0 .485-.135.229-.136.392-.406.168-.275.26-.69.094-.42.094-.983zm9.086 2.635v-1.011h1.552V34.44l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011zm-71.528 76.117l-1.94 1.02.299.69 1.459-.792v3.283h.9v-4.201zm51.358-7.967q0 .75-.163 1.342-.163.592-.48 1.003-.313.405-.765.62-.452.214-1.034.214-.504 0-.928-.177-.424-.177-.732-.555-.308-.382-.48-.974t-.172-1.417q0-.75.163-1.343.168-.592.48-.997.312-.41.769-.625.457-.214 1.035-.214.503 0 .927.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.019v.177q0 .079.01.163l2.283-1.65q-.163-.462-.433-.68-.266-.225-.63-.225-.26 0-.484.136-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.261-.69.094-.42.094-.984zm32.86 8.311q0 .75-.164 1.342-.163.592-.48 1.003-.312.405-.764.62-.452.214-1.035.214-.504 0-.928-.177-.424-.177-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.342.168-.592.48-.998.312-.41.77-.625.456-.214 1.034-.214.503 0 .928.177.424.177.727.555.307.377.48.97.172.591.172 1.421zm-3.608.019v.177q0 .079.009.163l2.284-1.65q-.164-.462-.434-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.149.452.42.671.27.22.628.22.261 0 .485-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.984zM55.92 101.517q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.765.62-.452.215-1.034.215-.504 0-.928-.177-.424-.178-.732-.555-.307-.382-.48-.974-.172-.592-.172-1.417 0-.75.163-1.343.168-.592.48-.997.312-.41.77-.625.456-.214 1.034-.214.503 0 .927.177.425.177.728.554.307.378.48.97.172.592.172 1.422zm-3.608.018v.177q0 .08.01.164l2.284-1.65q-.163-.462-.434-.681-.266-.224-.63-.224-.26 0-.484.135-.224.13-.391.406-.164.275-.261.69-.094.415-.094.983zm2.462.019q0-.08-.005-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.629.219.26 0 .485-.135.228-.135.391-.406.168-.275.261-.69.093-.42.093-.983zM92.26 74.657h-3.827v-.755H90v-4.447l-1.459.792-.298-.69 1.94-1.02h.717v5.365h1.361zM80.029 90.769h-3.827v-.755h1.566v-4.447l-1.459.793-.298-.69 1.939-1.02h.718v5.364h1.36zm51.102-6.49v-1.012h1.552V79.35l-1.352.746-.372-.927 1.934-1.021h.956v5.118h1.337v1.011zm-30.578-43.945v-1.012h1.552v-3.915l-1.352.746-.373-.928 1.935-1.02h.955v5.117h1.338v1.012z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2844"
            opacity={0.993}
            fill="#fffefe"
          />
          <path
            d="M59.295 9.625v3.118h-1.552v1.011h4.055v-1.011H60.46V9.625zm2.74 16.756q0 .75-.162 1.343-.163.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.424-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.164-1.342.167-.592.48-.998.312-.41.769-.624.457-.215 1.035-.215.503 0 .927.177.424.177.727.555.308.378.48.97.173.591.173 1.421zm-3.607.019v.177q0 .08.01.163l2.283-1.65q-.163-.461-.433-.68-.266-.224-.63-.224-.26 0-.484.135-.224.13-.392.405-.163.275-.26.69-.094.415-.094.984zm2.461.019q0-.08-.005-.159-.004-.084-.004-.158l-2.27 1.64q.149.452.42.672.27.219.629.219.26 0 .484-.136.229-.135.392-.405.168-.275.26-.69.094-.42.094-.983zm-3.146-4.815v-1.012h1.552v-3.915l-1.352.745-.373-.927 1.935-1.02h.955v5.117h1.338v1.012z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2846"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2898)"
          />
          <path
            d="M47.064 9.625v2.857H45.51v1.01h4.056v-1.01h-1.338V9.625zm2.74 40.043q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.928-.177-.424-.177-.731-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.172.591.172 1.42zm-3.607.019v.177q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.46.018q0-.079-.004-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.63.22.26 0 .484-.136.228-.135.391-.405.168-.275.262-.69.093-.42.093-.984zm1.147-7.886q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.591-.173-1.417 0-.75.163-1.342.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.554.308.378.48.97t.172 1.422zm-3.607.018v.177q0 .08.009.164l2.284-1.65q-.163-.462-.434-.681-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.415-.093.983zm2.46.019q0-.08-.004-.159-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.262-.69.093-.419.093-.983zm-3.146-4.815v-1.012h1.553v-3.915l-1.352.746-.373-.928 1.934-1.02h.956v5.117h1.338v1.012zm0-7.85v-1.01h1.553v-3.916l-1.352.745-.373-.927 1.934-1.02h.956v5.117h1.338v1.012zm4.293-10.92q0 .75-.163 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.214-1.035.214-.503 0-.928-.177-.424-.177-.731-.554-.308-.383-.48-.975-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.178.424.177.727.554.308.378.48.97t.172 1.421zm-3.607.018v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.406-.163.275-.261.69-.093.414-.093.983zm2.46.019q0-.08-.004-.159-.005-.084-.005-.158l-2.27 1.64q.15.453.42.672.27.219.63.219.26 0 .484-.135.228-.135.391-.406.168-.275.262-.69.093-.42.093-.983z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2848"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2900)"
          />
          <path
            d="M123.193 15.938q0 .75-.163 1.343-.164.592-.48 1.002-.313.405-.765.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.624.456-.215 1.034-.215.504 0 .928.177.424.177.727.555.308.378.48.97.173.592.173 1.421zm-3.608.019v.177q0 .08.009.163l2.284-1.65q-.163-.461-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm-1.594-6.35v.524H118.9v1.012h4.055v-1.012h-1.338v-.524z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2850"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2902)"
          />
          <path
            d="M104.846 28.91q0 .75-.164 1.342-.163.591-.48 1.002-.312.405-.764.62-.452.214-1.035.214-.503 0-.927-.177-.425-.177-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.342.168-.592.48-.998.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.421zm-3.608.018v.177q0 .08.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.224-.629-.224-.26 0-.485.135-.223.13-.391.405-.163.275-.261.69-.093.415-.093.984zm2.461.018q0-.079-.005-.158-.005-.084-.005-.159l-2.27 1.641q.15.452.42.671.27.22.629.22.26 0 .485-.136.228-.135.391-.405.168-.275.261-.69.093-.42.093-.984zm1.147-7.886q0 .75-.164 1.342-.163.592-.48 1.002-.312.406-.764.62-.452.215-1.035.215-.503 0-.927-.177-.425-.178-.732-.555-.308-.382-.48-.974-.173-.592-.173-1.417 0-.75.163-1.343.168-.592.48-.997.313-.41.77-.625.456-.214 1.034-.214.504 0 .928.177.424.177.727.555.308.377.48.97.173.591.173 1.42zm-3.608.018v.178q0 .079.009.163l2.284-1.65q-.163-.462-.434-.68-.265-.225-.629-.225-.26 0-.485.135-.223.131-.391.406-.163.275-.261.69-.093.415-.093.983zm2.461.02q0-.08-.005-.16-.005-.083-.005-.158l-2.27 1.64q.15.453.42.672.27.22.629.22.26 0 .485-.136.228-.135.391-.406.168-.275.261-.69.093-.419.093-.983zm-3.146-4.816v-1.011h1.552v-3.916l-1.352.746-.373-.928 1.935-1.02h.955v5.118h1.338v1.011z"
            style={{
              lineHeight: 1.15,
              InkscapeFontSpecification: 'Consolas',
              textOrientation: 'upright',
              whiteSpace: 'pre',
            }}
            id="coderain_svg__path2852"
            opacity={0.993}
            fill="url(#coderain_svg__linearGradient2904)"
          />
        </g>
      </motion.g>

      <g id="Logo_1">
        <g id="hackman">
          <motion.g
            id="body"
            style={{
              translateY: '2%',
            }}
          >
            <path
              id="bodypath"
              opacity={0.999}
              d="M249.518 102.891l-108.324 2.591s-14.563 5.714-26.266 4.415c-11.703-1.299-23.8 18.827-23.8 18.827S63.3 155.865 62.39 166.383c0 0-3.64 1.689-5.072 5.714a144.16 144.16 0 00-2.338 7.142s-6.102-.34-10.394 14.202c0 0-8.293 9.745-14.665 24.808 0 0 25.717-16.888 41.842 10.253l6.29 7.516s6.713 5.876 9.93 2.845c3.22-3.03 1.657-11.936 1.657-11.936 5.793-3.581 9.16-17.043 9.16-17.043l10.459-12.202c-2.309 16.932 9.896 39.595 11.632 39.595l.57 25.067 144.469-.909 1.513-32.859c9.067-11.373 11.831-27.708 11.831-27.708s1.929 12.683 9.47 15.282c7.543 2.595 13.888 20.302 13.888 20.302 4.104-2.186 7.93-4.115 11.474-5.003 0 0 15.34-21.091 36.291-11.952 8.186 3.689 17.464 6.364 20.286 18.058-.948-16.607-17.627-27.691-17.627-27.691-3.034-13.681-18.297-28.008-18.297-28.008-.368-5.691-7.998-9.696-7.998-9.696-.521-9.739-15.215-22.528-15.215-22.528-1.82-8.44-17.034-20.647-17.034-20.647-.78-3.894-4.424-5.583-4.424-5.583.131-3.766-1.299-4.157-1.299-4.157s-11.963-8.702-21.588-10.128c-9.621-1.429-17.683-6.226-17.683-6.226z"
              fill="#000C60"
            />
            <path
              id="bodyshadow"
              opacity={0.999}
              d="M248.479 102.917l-107.285 2.565s-3.852 1.497-9.161 2.787c.989 2.179 4.124 5.309 10.287 8.999 14.834 8.879 36.06 15.575 51.271 28.153 22.955-16.036 62.207-18.837 60.615-37.399a128.898 128.898 0 01-5.729-5.105h.002z"
              fill="#00083A"
            />
          </motion.g>

          <g id="box">
            <path id="rect1924" d="M0 258.541h388V329H0v-70.459z" fill="#000" />
            <path
              id="path899"
              opacity={0.745}
              d="M12.278 295.53l20.024-13.419c.323-.212.565-.318.726-.318.25 0 .462.115.638.346.19.212.286.468.286.768 0 .44-.25.828-.748 1.164L16.049 295.53l17.133 11.453c.498.333.748.721.748 1.164 0 .3-.096.566-.286.796-.176.213-.389.319-.638.319-.161 0-.403-.106-.726-.319L12.278 295.53z"
              fill="#fff"
            />
            <path
              id="path901"
              opacity={0.745}
              d="M58.292 283.012v-1.565c0-.527.081-.906.242-1.136a.819.819 0 01.682-.346c.282 0 .502.115.66.346.18.23.27.609.27 1.136v6.182c0 .549-.089.937-.265 1.164a.763.763 0 01-.66.346.807.807 0 01-.643-.318c-.161-.213-.256-.557-.286-1.032-.073-1.487-.742-2.804-2.007-3.954-1.704-1.574-3.645-2.361-5.822-2.361-1.426 0-2.771.381-4.036 1.143-.942.549-1.693 1.22-2.254 2.014a18.137 18.137 0 00-2.31 4.585c-.413 1.237-.62 2.634-.62 4.189v3.898c0 3.324 1 6.216 3.001 8.675 1.998 2.438 4.32 3.657 6.967 3.657 1.59 0 3.01-.415 4.26-1.246 1.262-.831 2.48-2.087 3.657-3.767.253-.369.533-.554.841-.554.264 0 .477.097.638.291.162.194.242.441.242.741 0 .403-.315 1.021-.946 1.856-1.21 1.625-2.57 2.853-4.08 3.684-1.502.812-3.023 1.219-4.563 1.219-1.341 0-2.703-.31-4.085-.928-1.056-.476-1.93-1.032-2.623-1.669-.689-.637-1.541-1.706-2.556-3.207-1.001-1.522-1.685-2.919-2.051-4.189-.367-1.292-.55-2.707-.55-4.244v-4.535c0-2.189.484-4.424 1.451-6.704.986-2.299 2.324-4.058 4.014-5.276 1.705-1.238 3.55-1.856 5.537-1.856 3.057 0 5.689 1.253 7.895 3.761z"
              fill="#fff"
            />
            <path
              id="path903"
              opacity={0.745}
              d="M70.52 277.713v13.705c1.177-1.538 2.302-2.616 3.376-3.234 1.089-.637 2.302-.956 3.64-.956 1.44 0 2.661.312 3.662.934 1.012.596 1.857 1.532 2.535 2.805a8.284 8.284 0 011.011 3.976v13.814h2.079c.454 0 .77.106.946.318.19.194.285.459.285.796 0 .319-.095.584-.285.796-.176.213-.492.319-.946.319h-6.02c-.46 0-.783-.106-.974-.319a1.146 1.146 0 01-.286-.796c0-.337.095-.602.286-.796.19-.212.515-.318.973-.318h2.073v-13.655c0-1.611-.486-2.954-1.457-4.03-.953-1.076-2.291-1.614-4.014-1.614-1.356 0-2.51.397-3.464 1.191-.689.567-1.829 1.903-3.42 4.008v14.1h2.095c.44 0 .757.106.952.318.19.194.285.459.285.796 0 .319-.095.584-.285.796-.191.213-.508.319-.952.319h-6.042c-.44 0-.755-.106-.946-.319a1.146 1.146 0 01-.286-.796c0-.337.095-.602.286-.796.19-.212.506-.318.946-.318h2.095v-28.792h-2.491c-.44 0-.755-.107-.946-.319-.19-.212-.286-.487-.286-.823 0-.315.096-.579.286-.791.19-.212.506-.319.946-.319h4.343z"
              fill="#fff"
            />
            <path
              id="path905"
              opacity={0.745}
              d="M108.425 310.986v-3.212c-2.69 2.723-5.566 4.085-8.626 4.085-2.218 0-3.952-.672-5.202-2.015-1.25-1.362-1.874-3.024-1.874-4.986 0-2.156.824-4.037 2.474-5.644 1.642-1.61 4.043-2.416 7.202-2.416.854 0 1.782.072 2.782.214 1.001.125 2.082.328 3.244.61v-3.607c0-1.219-.471-2.281-1.413-3.185-.942-.897-2.353-1.345-4.233-1.345-1.441 0-3.462.503-6.065 1.51-.469.176-.772.263-.907.263-.235 0-.44-.106-.616-.318-.161-.212-.242-.478-.242-.796 0-.3.073-.538.22-.714.205-.263 1.036-.626 2.49-1.087 2.295-.743 4.031-1.115 5.208-1.115 2.338 0 4.162.7 5.471 2.098 1.308 1.376 1.962 2.939 1.962 4.689v14.742h2.469c.455 0 .777.106.968.318.19.194.286.459.286.796 0 .319-.096.584-.286.796-.191.213-.513.319-.968.319h-4.344zm0-11.086c-.868-.3-1.788-.519-2.76-.658a20.938 20.938 0 00-3.062-.214c-2.69 0-4.793.697-6.307 2.091-1.147 1.044-1.72 2.29-1.72 3.739 0 1.344.432 2.475 1.297 3.393.883.923 2.163 1.384 3.838 1.384 1.605 0 3.09-.381 4.453-1.142 1.386-.78 2.806-2.008 4.261-3.684V299.9z"
              fill="#fff"
            />
            <path
              id="path907"
              opacity={0.745}
              d="M130.512 277.713v31.044h7.28c.454 0 .777.106.967.318.191.194.286.459.286.796 0 .319-.095.584-.286.796-.19.213-.513.319-.967.319h-16.407c-.44 0-.757-.106-.952-.319a1.148 1.148 0 01-.285-.796c0-.337.095-.602.285-.796.191-.212.508-.318.952-.318h7.274v-28.792h-5.333c-.44 0-.765-.107-.974-.319-.19-.212-.286-.487-.286-.823 0-.315.096-.579.286-.791.191-.212.515-.319.974-.319h7.186z"
              fill="#fff"
            />
            <path
              id="path909"
              opacity={0.745}
              d="M156.991 277.713v31.044h7.275c.458 0 .782.106.973.318.19.194.286.459.286.796 0 .319-.096.584-.286.796-.191.213-.515.319-.973.319h-16.407c-.44 0-.755-.106-.946-.319a1.144 1.144 0 01-.286-.796c0-.337.095-.602.286-.796.191-.212.506-.318.946-.318h7.279v-28.792h-5.333c-.443 0-.768-.107-.973-.319-.191-.212-.286-.487-.286-.823 0-.315.095-.579.286-.791.191-.212.513-.319.968-.319h7.191z"
              fill="#fff"
            />
            <path
              id="path911"
              opacity={0.745}
              d="M192.554 300.032h-18.881c.326 2.885 1.327 5.209 3.002 6.973 1.69 1.75 3.779 2.625 6.268 2.625 1.378 0 2.826-.275 4.344-.824 1.51-.545 2.743-1.268 3.7-2.169.278-.267.521-.4.726-.4.238 0 .445.115.621.345.176.213.264.469.264.769 0 .3-.117.593-.352.879-.707.882-1.965 1.713-3.772 2.492a14.107 14.107 0 01-5.536 1.137c-3.175 0-5.829-1.245-7.962-3.734-2.119-2.511-3.178-5.543-3.178-9.097 0-3.236.993-6.011 2.98-8.324 1.998-2.317 4.468-3.476 7.412-3.476 3.027 0 5.52 1.194 7.477 3.58 1.954 2.368 2.916 5.443 2.887 9.224zm-1.875-2.251c-.367-2.456-1.338-4.453-2.914-5.99-1.558-1.537-3.416-2.306-5.575-2.306-2.163 0-4.023.76-5.581 2.279-1.558 1.519-2.529 3.524-2.914 6.017h16.984z"
              fill="#fff"
            />
            <path
              id="path913"
              opacity={0.745}
              d="M203.023 288.025v3.365c1.29-1.574 2.457-2.661 3.502-3.261 1.045-.6 2.221-.901 3.53-.901 1.411 0 2.698.363 3.86 1.088.824.53 1.567 1.414 2.226 2.651.679 1.219 1.018 2.475 1.018 3.767v14.023h1.561c.44 0 .757.106.951.318.191.194.286.459.286.796 0 .319-.095.584-.286.796-.19.213-.507.319-.951.319h-4.959c-.455 0-.779-.106-.974-.319a1.148 1.148 0 01-.286-.796c0-.337.096-.602.286-.796.191-.212.515-.318.974-.318h1.539v-13.655c0-1.574-.476-2.899-1.429-3.975-.953-1.098-2.233-1.647-3.838-1.647-1.221 0-2.28.302-3.178.905-.894.586-2.172 2.052-3.832 4.398v13.974h2.089c.44 0 .757.106.951.318.191.194.286.459.286.796 0 .319-.095.584-.286.796-.191.213-.506.319-.946.319h-6.048c-.44 0-.755-.106-.945-.319a1.144 1.144 0 01-.286-.796c0-.337.095-.602.286-.796.19-.212.507-.318.951-.318h2.089v-18.481h-1.561c-.44 0-.757-.105-.951-.313-.191-.213-.286-.487-.286-.824 0-.318.095-.584.286-.796.19-.212.507-.318.951-.318h3.42z"
              fill="#fff"
            />
            <path
              id="path915"
              opacity={0.745}
              d="M241.714 292.109v-4.084h4.343c.44 0 .757.106.951.318.191.212.286.487.286.824 0 .318-.095.583-.286.796-.19.208-.507.313-.951.313h-2.49v22.247c0 1.482-.264 2.808-.792 3.975-.356.78-.944 1.585-1.765 2.416-.825.831-1.576 1.422-2.254 1.773-.675.355-1.578.533-2.711.533H230.8c-.44 0-.757-.106-.952-.318-.19-.194-.286-.46-.286-.797 0-.336.096-.611.286-.823.191-.212.508-.319.952-.319l5.311.028a4.685 4.685 0 002.936-1.005c.88-.673 1.607-1.654 2.183-2.943.322-.743.484-1.689.484-2.838v-6.682c-1.983 3.272-4.542 4.908-7.676 4.908-2.544 0-4.741-1.133-6.592-3.398-1.837-2.277-2.755-5.015-2.755-8.214 0-3.199.918-5.932 2.755-8.197 1.851-2.262 4.05-3.394 6.598-3.394 3.13 0 5.687 1.627 7.67 4.881zm0 6.704c0-2.613-.75-4.822-2.249-6.627-1.485-1.8-3.262-2.701-5.333-2.701-2.075 0-3.855.91-5.339 2.729-1.485 1.801-2.227 4.001-2.227 6.599 0 2.618.742 4.836 2.227 6.655 1.484 1.804 3.262 2.707 5.333 2.707 2.075 0 3.854-.903 5.339-2.707 1.503-1.819 2.254-4.037 2.254-6.655h-.005z"
              fill="#fff"
            />
            <path
              id="path917"
              opacity={0.745}
              d="M271.987 300.032h-18.881c.326 2.885 1.327 5.209 3.002 6.973 1.69 1.75 3.777 2.625 6.263 2.625 1.382 0 2.829-.275 4.343-.824 1.514-.545 2.749-1.268 3.706-2.169.279-.267.521-.4.726-.4.238 0 .445.115.621.345.176.213.264.469.264.769 0 .3-.117.593-.352.879-.707.882-1.964 1.713-3.772 2.492a14.107 14.107 0 01-5.536 1.137c-3.178 0-5.832-1.245-7.962-3.734-2.118-2.511-3.178-5.543-3.178-9.097 0-3.236.994-6.011 2.98-8.324 1.998-2.317 4.467-3.476 7.406-3.476 3.032 0 5.524 1.194 7.478 3.58 1.957 2.368 2.921 5.443 2.892 9.224zm-1.875-2.251c-.366-2.456-1.338-4.453-2.914-5.99-1.558-1.537-3.416-2.306-5.575-2.306-2.163 0-4.023.76-5.581 2.279-1.558 1.519-2.529 3.524-2.914 6.017h16.984z"
              fill="#fff"
            />
            <path
              id="path919"
              opacity={0.745}
              d="M289.664 301.679h-2.117l-7.126-19.491h-.352v26.574h3.42c.44 0 .756.104.946.313.191.194.286.459.286.796 0 .319-.095.584-.286.796-.19.213-.506.319-.946.319h-6.839c-.44 0-.755-.106-.946-.319a1.144 1.144 0 01-.286-.796c0-.337.095-.602.286-.796.191-.212.506-.318.946-.318h1.567v-26.563h-1.166c-.44 0-.757-.097-.951-.291-.191-.213-.286-.487-.286-.824 0-.337.095-.602.286-.796.19-.212.508-.318.951-.318h4.542l7.01 19.194 6.906-19.194h4.541c.455 0 .779.106.973.318.191.194.286.459.286.796s-.095.611-.286.824c-.194.194-.518.291-.973.291h-1.143v26.563h1.539c.458 0 .782.106.973.318.191.194.286.459.286.796 0 .319-.095.584-.286.796-.191.213-.515.319-.973.319h-6.818c-.44 0-.762-.106-.968-.319a1.148 1.148 0 01-.285-.796c0-.337.095-.602.285-.796.195-.212.519-.318.974-.318h3.42v-26.563h-.402l-6.988 19.485z"
              fill="#fff"
            />
            <path
              id="path921"
              opacity={0.745}
              d="M324.941 300.032h-18.876c.323 2.885 1.322 5.209 2.997 6.973 1.69 1.75 3.779 2.625 6.268 2.625 1.378 0 2.826-.275 4.343-.824 1.511-.545 2.744-1.268 3.701-2.169.278-.267.522-.4.731-.4.235 0 .44.115.616.345.176.213.264.469.264.769 0 .3-.118.593-.352.879-.708.882-1.965 1.713-3.772 2.492a14.111 14.111 0 01-5.537 1.137c-3.174 0-5.828-1.245-7.961-3.734-2.115-2.511-3.173-5.543-3.173-9.097 0-3.236.992-6.011 2.975-8.324 2.001-2.317 4.472-3.476 7.411-3.476 3.028 0 5.521 1.194 7.478 3.58 1.954 2.368 2.916 5.443 2.887 9.224zm-1.875-2.251c-.367-2.456-1.338-4.453-2.914-5.99-1.558-1.537-3.417-2.306-5.576-2.306-2.162 0-4.022.76-5.58 2.279-1.558 1.519-2.529 3.524-2.914 6.017h16.984z"
              fill="#fff"
            />
            <path
              id="path923"
              opacity={0.745}
              d="M349.721 276.094l-14.911 38.389c-.249.655-.572.983-.968.983-.249 0-.469-.115-.66-.346a1.079 1.079 0 01-.269-.714c0-.212.073-.505.22-.878l14.889-38.39c.162-.402.316-.668.462-.796a.81.81 0 01.528-.181c.253 0 .467.114.643.341.191.212.286.45.286.713 0 .198-.073.491-.22.879z"
              fill="#fff"
            />
            <path
              id="path925"
              opacity={0.745}
              d="M379.263 295.53l-20.024 13.413c-.323.213-.565.319-.726.319-.253 0-.473-.106-.66-.319a1.256 1.256 0 01-.269-.796c0-.439.249-.827.747-1.164l17.16-11.453-17.138-11.453c-.498-.337-.747-.727-.747-1.17 0-.3.088-.556.264-.768.19-.231.41-.346.659-.346.165 0 .409.106.732.318l20.002 13.419z"
              fill="#fff"
            />
          </g>

          <g id="arm-right">
            <motion.g
              style={{
                translateX: '1.9%',
                translateY: '-1%',
                originX: 0.05,
                // originY:.01
              }}
              animate={{
                rotateZ: rightHandRotate,
              }}
              transition={{
                times: handKeyframes,
                duration: handsTime,
                loop: Infinity,
              }}
            >
              <path
                id="path3106"
                d="M71.769 228.508s-25.886 14.001-26.71 32.91l38.36.197 4.317-13.682s-5.427-9.701-15.967-19.42v-.005z"
                fill="#3D4747"
              />
              <path
                id="path1429"
                d="M16.429 237.007s1.242-7.796 6.96-14.583c4.663-5.534 12.317-10.393 24.71-9.773 18.968.95 34.21 25.581 34.21 25.581-11.58-3.02-21.751-.264-28.107 5.1-5.597 4.727-6.301 17.943-.292 18.086-11.2.17-31.098 2.767-37.322-10.948-1.523-5.216.863-9.57-.16-13.463z"
                fill="#1400A5"
              />
              <path
                id="path1425"
                d="M87.493 242.338s-18.677-.186-23.4 19.508l38.361.198c8.863-1.054 16.99-2.339 18.832-5.579 1.539-2.717-1.342-6.808-11.915-13.292 0 0-8.621-5.139-21.883-.835h.005z"
                fill="#4B5959"
              />
            </motion.g>
          </g>

          <g id="arm-left">
            <motion.g
              style={{
                translateX: '.1%',
                originX: 0.95,
              }}
              animate={{
                rotateZ: leftHandRotate,
              }}
              transition={{
                times: handKeyframes,
                duration: handsTime,
                loop: Infinity,
              }}
            >
              <path
                id="wrist-left"
                d="M307.841 242.893s-8.159-.61-8.357-.571c-2.255 1.351-5.713 3.519-7.148 4.288 5.861 4.623 11.513 14.484 11.513 14.484l-2.303.488 25.951-.12c3.932-8.137 8.479-10.839-3.887-15.374-6.103-2.459-15.769-3.19-15.769-3.19v-.005z"
                fill="#3D4747"
              />
              <path
                id="forearm-left"
                d="M358.634 260.66c10.221-3.607 12.915-10.816 12.926-15.395.055-18.789-11.343-21.726-21.151-26.151-20.949-9.142-36.294 11.952-36.294 11.952-16.451 4.019-16.737 12.969-16.242 12.332 0 0 5.993-2.246 16.797 3.569 10.799 5.803 11.272 14.467 4.855 14.467 0 0 28.893 2.828 39.109-.774z"
                fill="#1400A5"
              />
              <path
                id="hand-left"
                d="M287.316 264.58l16.786-3.486s-8.797-15.346-15.824-16.735c-2.694-.533-8.45-2.361-14.224-4.409-9.27-3.294-15.026 2.295-15.026 2.295l-16.22 13.616 18.254 2.219 26.254 6.5z"
                fill="#4B5959"
              />
            </motion.g>
          </g>

          <g id="head">
            <path
              id="path1433"
              d="M134.762 89.434s2.612-46.405 55.087-41.508c52.469 4.887 30.57.923 56.329 39.367 1.391 28.852-21.239 32.053-52.97 58.139-30.147-23.39-36.162-25.751-49.127-39.548-6.867-7.308-9.478-13.238-9.319-16.45z"
              fill="#00062B"
              stroke="#04A"
            />
            <path
              id="path1443"
              d="M150.212 112.061c0-14.49 24.973-26.355 51.051-28.738 6.994-.636 34.337 14.66 34.408 30.978 9.617-5.238 10.92-19.684 9.375-25.41-9.127-17.811-35.948-34.37-43.783-33.651-35.463 3.244-69.564 18.354-65.335 37.708 4.728 10.558 9.556 12.848 14.284 19.113z"
              fill="#000"
              fillOpacity={0.8}
            />
            <path
              id="path1435"
              d="M200.427 100.876c-.197 0-.384 0-.549.017-9.732.675-20.404 1.707-29.306 3.393a24.637 24.637 0 00-1.561 8.636c0 13.233 10.38 18.448 22.57 21.457 12.255-2.86 23.846-8.23 23.846-21.457 0-2.992-.55-5.957-1.6-8.746-5.598-2.053-10.843-3.261-13.4-3.294v-.006z"
              fill="#1A1A1A"
            />
            <path
              id="path1437"
              d="M204.584 156.385c.902 4.502-1.397 16.543-1.397 16.543s.209-8.73-2.386-22.094c-2.595-13.358 5.421-20.216 5.421-20.216.561.011-6.092 11.201-1.638 25.767z"
              fill="#0042F4"
            />
            <path
              id="path1439"
              d="M185.049 152.981c-.902 4.502 1.748 14.627 1.748 14.627s.286-2.125 2.881-15.484c2.595-13.358-8.577-19.661-8.577-19.661-.555.011 8.401 5.952 3.948 20.518z"
              fill="#0042F4"
            />
            <motion.g style={{}}>
              <motion.path
                animate={{
                  translateX: headX,
                }}
                transition={{
                  times: headKeyframes,
                  ease: 'easeInOut',
                  duration: headTime,
                  loop: Infinity,
                }}
                id="face"
                d="M202.099 55.212c-.302 0-.583 0-.836.028-14.938 1.367-31.329 3.448-44.997 6.84a63.737 63.737 0 00-2.398 17.417c0 26.678 16.913 42.249 35.629 48.305 18.815-5.765 35.629-21.633 35.629-48.305 0-6.04-.825-12.014-2.453-17.63-8.593-4.14-16.643-6.589-20.574-6.655z"
                fill="#4B5959"
              />
              <motion.path
                animate={{
                  translateX: headX,
                }}
                transition={{
                  times: headKeyframes,
                  ease: 'easeInOut',
                  duration: headTime,
                  loop: Infinity,
                }}
                id="face-shadow"
                opacity={0.209}
                d="M202.047 55.214a6.166 6.166 0 00-.79.018c-17.126 1.567-33.921 5.906-46.247 12.148a64.55 64.55 0 00-1.149 12.107c0 4.634.52 8.924 1.46 12.895 6.024-10.418 27.96-16.22 45.936-17.865 4.222-.386 17.65 5.788 22.999 15.04.56-3.168.867-6.521.867-10.07 0-4.62-.494-9.21-1.451-13.63-8.617-6.292-17.243-10.474-21.625-10.643z"
                fill="#000"
              />
            </motion.g>

            <path
              id="path1445"
              d="M246.178 94.414c-6.994-18.7-38.647-32.794-45.965-32.053-32.06 3.245-68.574 11.458-64.753 30.812C127.785 85.948 165.184.637 186.418 0c33.836 8.417 59.854 57.255 59.766 94.414h-.006z"
              fill="#1400A5"
            />
            <path
              id="path1447"
              d="M159.988 57.743c10.611-7.324 27.656-10.14 27.656-10.14-5.042-3.064 7.324-7.023 11.134-9.302 0 0-15.61 2.757-19.832 5.886-2.92 2.169-18.958 13.562-18.958 13.562v-.006z"
              fill="#000C60"
            />
          </g>

          <g id="computer">
            <path
              id="path1449"
              d="M103.361 167.421c-2.288 0-4.28 3.803-4.125 8.522l2.826 86.401h175.533l2.83-86.401c.155-4.719-1.843-8.522-4.132-8.522H103.361z"
              fill="#000"
            />
            <motion.path
              id="path1459"
              d="M179.562 210.307c0 .373.027.747.044 1.115h-5.675c-.846 0-1.583.658-1.528 1.466l1.413 22.499c.05.808.627 1.466 1.413 1.466h30.669c.786 0 1.364-.658 1.413-1.466l1.413-22.499c.055-.813-.682-1.466-1.528-1.466h-5.526c.038-.379.011-.621.011-1.115 0-6.951-3.541-12.996-11.106-12.996-5.993 0-11.008 5.666-11.008 12.996h-.005zm11.007-9.048c4.036-.242 7.269 5.765 6.637 9.048 0 2.811.346 1.115.022 1.115h-13.235s-.055-.736-.055-1.115c0-5.243 2.958-9.048 6.631-9.048zm0 16.427a4.164 4.164 0 013.996 2.911 4.143 4.143 0 01-1.621 4.666l.886 6.188h-6.521l.896-6.232a4.148 4.148 0 01-.07-6.714 4.164 4.164 0 012.434-.819z"
              fill="#F2F2F2"
              stroke="#efefef"
              animate={{
                fillOpacity: [1, 0.6, 1],
                strokeWidth: [2, 0, 2],
                strokeOpacity: [0.7, 0.5, 0.7],
              }}
              transition={{
                duration: 3.5,
                repeatType: 'mirror',
                loop: Infinity,
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgLogoAnim;
