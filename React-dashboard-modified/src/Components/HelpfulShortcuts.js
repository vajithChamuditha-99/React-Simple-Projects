import React from 'react';
import { Col, Container } from 'react-bootstrap';

const HelpfulShortcuts = (props) => {
  return (
    <div className="main shortcuts">
      <Col>
        <Container>
          <div>
            <button className="buttonShortcut">
              <h6 className="icon buttonDiv">{props.shortcutIcon}</h6>
            </button>
          </div>
          <p>{props.shortcutTitle}</p>
        </Container>
      </Col>
    </div>
  );
};

export default HelpfulShortcuts;
