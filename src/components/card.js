import React, { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Card = ({photo}) => {
    const [loaded, setLoaded] = useState(false);
    const {title, date, url, copyright, explanation} = photo;
    const [liked, setLiked] = useState(photo.liked);

    const saveLiked = (liked) => {
        const savedPhotos = localStorage.getItem('space_photos');
        const parsePhotos = JSON.parse(savedPhotos);
        for (let photo of parsePhotos){
            if (photo.url === url){
                photo.liked = !liked;
                localStorage.setItem('space_photos', JSON.stringify(parsePhotos));
                break;
            }
        }
        setLiked(!liked);
    }

    return (

        <div className="flex justify-center items-center my-12">
            <div className="w-full md:w-1/2 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Conditionally Render the image depending on if it has finished loading */}
                {url ? <img 
                            style={loaded ? {} : { display: 'none' }}
                            src={url} 
                            alt={title} 
                            onLoad={() => setLoaded(true)}
                            className="rounded-t-lg" 
                /> : <Skeleton  height={500} containerClassName="avatar-skeleton" />
            }
                <div className="pt-3 m-4">
                        <p className="font-bold text-xl">{title || <Skeleton  count={3} />}</p>
                        <p className="text-sm text-gray-700 mt-1">{date || <Skeleton  count={3} />}
                            <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold px-5 rounded inline-flex items-center float-right" onClick={() => saveLiked(liked)}>
                            <span className='p-1'>Like</span>
                            <svg className='w-6 h-6' fill={liked ? 'red' : 'white'} stroke='black' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                            </svg>
                            </button>
                        </p>
                        <p className="text-sm text-gray-700 mt-1">{copyright}</p>
                </div>
                <p className="bg-gray-200 text-gray-700 text-sm px-8 py-4">{explanation}</p> 
            </div>
        </div>
    )
}
export default Card;

