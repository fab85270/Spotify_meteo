import React from 'react';
import { Card } from 'react-bootstrap';
import imageMusique from '../../Images/imageMusique.jpg';
import  { AlbumTracks }  from  'react-spotify-api';


const PlayList = ({ playlist }) => {
  return (
    <div>   
      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.items.map((playlist, index) => {
            if(index < 10){
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target="_blank"
                    href={playlist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {playlist.images.length > 0 ? (
                      <Card.Img
                        variant="top"
                        src={playlist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={imageMusique} alt="" />
                    )}       
                  </a>
                  <Card.Body>
                    <Card.Title>{playlist.name}</Card.Title>
                    <Card.Text>
                      <small>By {playlist.owner.display_name}</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
            }
          })}
        </div>
      )}
    </div>
  );
};
export default PlayList;