import React from 'react';

import '../../Scss/ScrollCont.scss';

interface MediaScrollCardProps {
  posterPath: string;
  title: string;
  voteEverage: number;
}
const MediaScrollCard: React.FC<MediaScrollCardProps> = ({ posterPath, title, voteEverage }) => {
  return (
    <div className="slider">
      <h2>{voteEverage}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
    </div>
  );
};

export default MediaScrollCard;
