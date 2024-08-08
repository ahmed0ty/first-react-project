import { useState } from "react";

import poert1 from '../assets/images/poert1.png';
import port2 from '../assets/images/port2.png';
import port3 from '../assets/images/port3.png';

export default function Parent() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    // قائمة الصور المستوردة
    const images = [poert1, port2, port3, poert1, port2, port3];

    return (
        <>
            <div className={`p-6 mx-auto max-w-7xl ${selectedImage ? 'bg-blue-500' : ''}`}>
                <h1 className="text-5xl port-header font-bold flex justify-center items-center p-5 text-center">PORTFOLIO COMPONENT</h1>
                <div className="flex items-center justify-center star">
                    <i className="fas fa-minus"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fas fa-minus"></i>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {images.map((src, index) => (
                        <div key={index} className="relative w-full cursor-pointer" onClick={() => handleImageClick(src)}>
                            <img src={src} alt={`Portfolio ${index + 1}`} className="w-full rounded-2xl" />
                            <div className="absolute inset-0 bg-emerald-500 opacity-0 transition-opacity duration-300 hover:opacity-75 rounded-2xl flex items-center justify-center">
                                <span className="text-white text-9xl">+</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-blue-800 bg-opacity-80 flex items-center justify-center z-50" onClick={handleClose}>
                    <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </>
    );
}
