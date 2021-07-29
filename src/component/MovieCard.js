import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

const colors = {
  yellow: "#e7d003",
  grey: "#a9a9a9"
  
};

const MovieCard = () => {

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  return (
  <div className="contai">
      <div className="fak">
      <Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380" variant="top" src="https://m.media-amazon.com/images/I/81GfZasnt9L._SL1371_.jpg" />
  <Card.Body>
    <Card.Title>Avengers: Infinity War</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <div className="stars">
  {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
              style={{
                marginRight: 8,
                cursor: "pointer"
              }}
            />
          )
        })}
  </div>
</Card>
      </div>

    <div className="fak">
    <Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380"  variant="top" src="https://fr.web.img2.acsta.net/pictures/15/04/23/15/38/341525.jpg" />
  <Card.Body>
    <Card.Title>San Andreas</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <div className="stars">
  {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
              style={{
                marginRight: 8,
                cursor: "pointer"
              }}
            />
          )
        })}
  </div>
</Card>
    </div>

    <div className="fak">
    <Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380"  variant="top" src="https://www.telerama.fr/sites/tr_master/files/194da2cc-6c97-495c-b0b1-2989bce95ef2_2.jpg" />
  <Card.Body>
    <Card.Title>Volcano</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <div className="stars">
  {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
              style={{
                marginRight: 8,
                cursor: "pointer"
              }}
            />
          )
        })}
  </div>
</Card>
    </div>

    <div className="fak">
    <Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380"  variant="top" src="https://img5.cdn.cinoche.com/images/c35d1fac2f2d79e455d8455376faf8e7.jpg" />
  <Card.Body>
    <Card.Title>21 Jump Street</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <div className="stars">
  {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
              style={{
                marginRight: 8,
                cursor: "pointer"
              }}
            />
          )
        })}
  </div>
</Card>
    </div>

    <div className="fak">
    <Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380"  variant="top" src="https://img8.cdn.cinoche.com/images/b1308f7bf851c35dc27bb0b5ab176d40.jpg" />
  <Card.Body>
    <Card.Title>Sherlock Holmes</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <div className="stars">
  {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
              style={{
                marginRight: 8,
                cursor: "pointer"
              }}
            />
          )
        })}
  </div>
</Card>
    </div>

    <div className="fak">
    <Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380"  variant="top" src="https://musicsheetcovers.s3.eu-west-3.amazonaws.com/couv53/559/G0001081559.jpg" />
  <Card.Body>
    <Card.Title>Pirates of the Caribeen</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <div className="stars">
  {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
              style={{
                marginRight: 8,
                cursor: "pointer"
              }}
            />
          )
        })}
  </div>
</Card>
    </div>

    <div className="fak">
    <Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380"  variant="top" src="https://www.contrepoints.org/wp-content/uploads/2013/12/hunger-games-2-catching-fire.jpg" />
  <Card.Body>
    <Card.Title>The Hunger Games</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <div className="stars">
  {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
              style={{
                marginRight: 8,
                cursor: "pointer"
              }}
            />
          )
        })}
  </div>
</Card>
    </div>

    <div className="fak">
    <Card style={{ width: '18rem' }}>
  <Card.Img width="270" height="380"  variant="top" src="https://media.senscritique.com/media/000012292394/source_big/The_Mask.jpg" />
  <Card.Body>
    <Card.Title>The Mask</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <div className="stars">
  {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
              style={{
                marginRight: 8,
                cursor: "pointer"
              }}
            />
          )
        })}
  </div>
</Card>
    </div>

  </div>
  )
}

export default MovieCard
