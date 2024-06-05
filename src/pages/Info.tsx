import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const InfoPage: React.FC = () => {
  const navigate = useNavigate();
  const { buttonData } = useParams<{ buttonData: string }>();
  const location = useLocation();

  useEffect(() => {
    const handleMouseUp = () => {
      navigate('/flowchart', { state: location.state });
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [navigate, location.state]);

  return (
    <div>
      <h1>Extra Information Page for {buttonData}</h1>
    </div>
  );
};

export default InfoPage;
