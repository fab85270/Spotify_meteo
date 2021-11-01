import React from 'react';
import { Card } from 'react-bootstrap';


const ListArtistes = ({ artistes }) => {
  return (
    <React.Fragment>
      {Object.keys(artistes).length > 0 && (
        <div className="artistes">
          {artistes.items.map((artiste, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target="_blank"
                    href={artiste.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >   
                  <Card.Img
                        variant="top"
                        src={artiste.images[0].url}
                        alt=""
                      />    
                  </a>
                  <Card.Body>
                    <Card.Title>{artiste.name}</Card.Title>
                    <Card.Text>
                      <small>
                        {artiste.artistes.map((artist) => artist.name).join(', ')}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default ListArtistes;
