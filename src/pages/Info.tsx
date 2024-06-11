import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
// @ts-ignore
import VomitingBlood from '../components/VomitingBlood.png'
import BackButtonInfo from '../components/BackButtonInfo';
import { Question } from '../utils/question';

const InfoPage: React.FC = () => {
  const navigate = useNavigate();
  const { buttonData } = useParams<{ buttonData: string }>();
  const location = useLocation();
  const question: Question | null = location.state.button;
  console.log(question);

  // TODO
  // Change navigate below as well
  useEffect(() => {
    const handleMouseUp = () => {
      navigate(-1);
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [navigate]);

  if (!buttonData) return null;

  const symptomName = buttonData.slice(0, buttonData.indexOf('-'));
  const infoData = buttonData.slice(buttonData.indexOf('-') + 1);
  const segments = infoData.split('·');

  return (
    <div className='textBlue backgroundPale textBlue flex flex-col fixed inset-0 items-center justify-center'>
      {/* TODO */}
      <BackButtonInfo link={question} />
      <div className='textClickBlue text-4xl font-bold top-10 my-5'>Extra Information Page for {symptomName}</div>
      <div className='md:top-32 top-40 my-5'>
        <img src={VomitingBlood} alt="" className='w-64' />
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
