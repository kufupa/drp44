import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
// @ts-ignore
import VomitingBlood from '../components/imgs/VomitingBlood.png'
import BackButtonInfo from '../components/BackButtonInfo';
import { Question } from '../types/question';
import { Presentation } from '../types/presentation';
import { stringWithImage } from '../types/stringWithImage';

const InfoPage: React.FC = () => {
  const { buttonData } = useParams<{ buttonData: string }>();
  const location = useLocation();
  const question: Question | null = location.state.button;
  const displayButtons = location.state.displayButtons;
  const diagnosis: Presentation = location.state.diagnosis;
  const presName: string = location.state.presName;
  const buttonDataStringWImage: stringWithImage = location.state.buttonData;
  const image: string | undefined = buttonDataStringWImage.image
  console.log(diagnosis)
  console.log(question);
  console.log(displayButtons)
  console.log(presName)

  const imageToUse: string = image == "" || undefined ? VomitingBlood : image;

  if (!buttonData) return null;

  const symptomName = buttonData.slice(0, buttonData.indexOf('-'));
  const infoData = buttonData.slice(buttonData.indexOf('-') + 1);
  const segments = infoData.split('·');

  return (
    <div className='textBlue backgroundPale textBlue flex flex-col fixed inset-0 items-center justify-center'>
      {/* TODO */}
      <BackButtonInfo link={question} presName={presName} />
      <div className='textClickBlue text-4xl font-bold top-10 my-5 pt-20 md:pt-5'>Extra Information Page for {symptomName}</div>
      <div className='md:top-32 top-40 my-5'>
        <img src={imageToUse} alt="" className='w-64' />
      </div>
      {/* <div className='textClickBlue text-3xl'> */}
      <div className='text-2xl textClickBlue px-4 py-6 font-bold my-5'>
        {segments.map((segment, index) => (
          <div key={index}>
            {index === 0 ? segment.trim() : `· ${segment.trim()}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPage;
