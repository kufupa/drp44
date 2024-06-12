// import CrossImage from "../components/imgs/cross.png"

import { useNavigate } from "react-router-dom";

export const NoneOfTheAbovePage: React.FC = () => {

    const navigate = useNavigate();



    return (
        <div className='backgroundPale items-center justify-center min-h-screen flex flex-col textClickBlue'>
          <div className='textClickBlue text-5xl max-w-xl font-bold mb-4 -mt-2'>Sorry, we could not understand</div>
          <div className='md:top-32 top-40 my-3'>
            {/* <img src={CrossImage} alt="" className='w-64'/> */}
          </div>
          <div className='text-3xl bgLightShadow px-10 py-10 rounded-3xl md:top-[340px] my-5 border-4 borderBlueConfirmation font-bold'>{"Would you like to re - enter your symptoms?"}</div>
          <button className='bgClickBlue text-2xl text-white rounded-full py-6 px-32 mb-6 mt-10' onClick={() => navigate('/PresentationForm')}>Yes</button>
          <button className='borderBlueConfirmation textClickBlue text-2xl rounded-full py-3 px-20 border-4' onClick={() => navigate('/111')}>No</button>
        </div>
      );
}