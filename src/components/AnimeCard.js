import React from "react";

export const AnimeCard = (props) => {
  return (
    <div className="animeCard" style={{ height: 345, width: 230 }}>
      <img src={props.anime.coverImage.large} alt="coverImage" />
      <a target="_blank" href={props.anime.siteUrl}>{`${props.anime.title.romaji} (${props.anime.title.english})`}</a>
    </div>
  );
};
