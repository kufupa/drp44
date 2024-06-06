import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const InfoPage: React.FC = () => {
  const navigate = useNavigate();
  const { buttonData } = useParams<{ buttonData: string }>();
  const location = useLocation();
  console.log(buttonData);

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
    <div className='backgroundPale items-center justify-center min-h-screen flex flex-col'>
      <div className='textBlue text-3xl p-10'>Extra Information Page for {symptomName}</div>
      <div>
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
