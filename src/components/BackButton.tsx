import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      className='bg-transparent border-2 border-clickBlue rounded-md py-2 px-4 font-bold textBlue'
      style={{ position: 'fixed', top: 0, left: 0, backgroundColor: isHovered ? 'clickBlue' : 'transparent'}}

      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      &lt; Back
    </button>
  );
};

export default BackButton;
