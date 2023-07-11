import React from 'react';
import { Col } from 'react-bootstrap';

const DetailsComponent = (props) => {
  return (
    <div className="main">
      <Col>
        <h6>{props.detailTitle}</h6>
        <h4>
          <b>{props.detailData}</b>
        </h4>
        <hr style={{ marginRight: '70px' }} />
        <p>
          <b>{props.detailDescreptionHead} </b> {props.detailDescreptionData}
        </p>
      </Col>
    </div>
  );
};

export default DetailsComponent;
