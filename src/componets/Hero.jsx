import React from 'react';
import '../styles/heroStyles.css';
import avatar from '../assets/1-transparent.png';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <div className='description'>
          <div className='description-wrapper'>
            <div className='name'>
              <span className='orange'>let </span> emilianoFranco{' '}
              <span className='orange'>=</span>{' '}
              <span className='yellow'>{`{`}</span>
            </div>
            <div className='object'>
              <div className='fullname'>
                <span className='green'>name :</span> 'Emiliano Nicolas Franco',
              </div>
              <div className='position'>
                <span className='green'>position :</span> 'Junior Frontend
                Developer',
              </div>
              <div className='socials'>
                <div className='github'>
                  <span className='green'>gitHub:</span>{' '}
                  <a href='https://github.com/monsterkosh'>
                    'https://github.com/monsterkosh'
                  </a>
                  ,
                </div>
                <div className='dante'>
                  <span className='green'>dante:</span>{' '}
                  <a href='/'>'https://dante.com/emilianofranco'</a> ,
                </div>
                <div className='instagram'>
                  <span className='green'>instagram:</span>{' '}
                  <a href='https://www.instagram.com/monsterkosh'>
                    'https://www.instagram.com/monsterkosh'
                  </a>
                  ,
                </div>
              </div>
            </div>
            <div className='name-closing yellow'>{`} ;`}</div>
          </div>
        </div>
        <div className='avatar'>
          <img src={avatar} alt='' />
        </div>
      </div>
      <div className='bg-foot-img'></div>
    </div>
  );
};

export default Hero;
