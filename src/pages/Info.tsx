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
    <div>
      <h1>Extra Information Page for {symptomName}</h1>
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
