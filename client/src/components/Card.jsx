// import React from 'react';

// import { download } from '../assets';
// import { downloadImage } from '../utils';

// const Card = ({ _id, name, prompt, photo }) => (
//   <div className="rounded-xl group relative shadow-card 
//   hover:shadow-cardhover card">
//     <img
//       className="w-full h-auto object-cover rounded-xl"
//       src={photo}
//       alt={prompt}
//     />
//     <div className="group-hover:flex flex-col max-h-[94.5%] 
//     hidden absolute bottom-0 left-0 right-0 bg-[#10131f] 
//     m-2 p-4 rounded-md">
//       <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>

//       <div className="mt-5 flex justify-between items-center gap-2">
//         <div className="flex items-center gap-2">
//           <div className="w-7 h-7 rounded-full object-cover bg-blue-500 flex 
//           justify-center items-center text-white text-xs font-bold">
//             {name[0]}
//           </div>
//           <p className="text-white text-sm">{name}</p>
//         </div>
//         <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
//           <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default Card;
import React, { useState } from 'react';
import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl cursor-pointer"
        src={photo}
        alt={prompt}
        onClick={handleClick}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-blue-500 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none"
          >
            <img
              src={download}
              alt="download"
              className="w-6 h-6 object-contain invert"
            />
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10">
          <div className="bg-[#003476] bg-opacity-85 p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 bg-red-500 rounded-full p-2 text-white"
              onClick={handleClose}
              onMouseOver={(e) => e.target.style.backgroundColor = "#ffc719"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#FFFFFF"}
            >
              X
            </button>
            <img
              className="w-full h-[85vh] object-cover rounded-lg"
              src={photo}
              alt={prompt}
            />
            <p className="text-white text-md mt-4">{prompt}</p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full object-cover bg-blue-500 flex justify-center items-center text-white text-xs font-bold">
                  {name[0]}
                </div>
                <p className="text-white text-sm">{name}</p>
              </div>
              <button
                type="button"
                onClick={() => downloadImage(_id, photo)}
                className="outline-none bg-transparent border-none"
              >
                <img
                  src={download}
                  alt="download"
                  className="w-6 h-6 object-contain invert"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
