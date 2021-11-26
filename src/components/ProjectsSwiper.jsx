import React from 'react'
import { Autoplay, A11y, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imgPerpetual from '../images/project-logo-perpetual-protocol.png'
import imgGnosis from '../images/project-logo-gnosis.png'
import imgDaohaus from '../images/project-logo-daohaus.png'
import imgColony from '../images/project-logo-colony.png'
import img1Hive from '../images/project-logo-1hive.png'
import imgSushiSwap from '../images/project-logo-sushiswap.png'
import imgCurve from '../images/project-logo-curve.png'
import imgPoap from '../images/project-logo-poap.png'
import imgNiftyInk from  '../images/project-logo-nifty-ink.png'
import imgChainlink from  '../images/project-logo-chainlink.png'
import imgOrchid from '../images/project-logo-orchid.png'
import imgOriginTrail from '../images/project-logo-origin-trail.png'
import imgTornadoCash from '../images/project-logo-tornado-cash.png'
import imgCardstack from '../images/project-logo-cardstack.png'
import imgDarkForest from '../images/project-logo-dark-forest.png'
import imgSwarm from '../images/project-logo-swarm.png'
import imgRealT from '../images/project-logo-realt.png'
import imgCircles from '../images/project-logo-circles.png'
import imgGenuino from '../images/project-logo-genuino.png'
import imgCryptoStamp from '../images/project-logo-crypto-stamp.png'

const ProjectsSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, A11y, Mousewheel]}
      autoplay
      direction="horizontal"
      loop
      mousewheel={true}
      slidesPerView="auto"
    >
      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://www.perp.fi/">
          <img src={ imgPerpetual } alt="Perpetual Protocol" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://gnosis.io/">
          <img src={ imgGnosis } alt="Gnosis" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://daohaus.club/">
          <img src={ imgDaohaus } alt="DaoHaus" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://colony.io/">
          <img src={ imgColony } alt="Colony" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://wiki.1hive.org/">
          <img src={ img1Hive } alt="1 Hive" />
        </a>
      </SwiperSlide> 

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://sushi.com/">
          <img src={ imgSushiSwap } alt="SushiSwap" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://xdai.curve.fi/">
          <img src={ imgCurve } alt="Curve" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://poap.fun/">
          <img src={ imgPoap } alt="POAP" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://nifty.ink/">
          <img src={ imgNiftyInk } alt="Nifty Ink" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://chain.link/">
          <img src={ imgChainlink } alt="Chainlink" />
        </a>
      </SwiperSlide> 

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://www.orchid.com/">
          <img src={ imgOrchid } alt="Orchid" />
        </a>
      </SwiperSlide> 

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://origintrail.io/">
          <img src={ imgOriginTrail } alt="Origin Trail" />
        </a>
      </SwiperSlide> 

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://tornado.cash/">
          <img src={ imgTornadoCash } alt="Tornado Cash" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://cardstack.com/">
          <img src={ imgCardstack } alt="Cardstack" />
        </a>
      </SwiperSlide> 

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://zkga.me/">
          <img src={ imgDarkForest } alt="Dark Forest" />
        </a>
      </SwiperSlide> 

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://www.ethswarm.org/">
          <img src={ imgSwarm } alt="Swarm" />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://realt.co/">
          <img src={ imgRealT } alt="RealT" />
        </a>
      </SwiperSlide> 

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://joincircles.net/">
          <img src={ imgCircles } alt="Circles" />
        </a>
      </SwiperSlide> 

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://genuino.world/">
          <img src={ imgGenuino } alt="Genuino" />
        </a>
      </SwiperSlide> 

      <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://crypto.post.at/">
          <img src={ imgCryptoStamp } alt="Crypto Stamp" />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectsSwiper