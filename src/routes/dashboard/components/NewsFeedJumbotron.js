import React from 'react';
import Button from '@material-ui/core/Button';

const NewsFeedJumbotron = () => (
  <article className="article">
    <div className="jumbotron">
      <div className="row">
        <div className="col-md-6">
          <h1 className="hero-title">Latest Market News</h1>
          <p className="hero-lead">Goldman Sachs: Cryptocurrencies ‘Are Not an Asset Class’</p>
          <div className="divider divider-short border-primary my-4"></div>
          <p>Goldman Sachs held an investor call Wednesday to discuss current policies for bitcoin,
            gold and inflation in the context of the COVID-19 crisis.</p>
          <Button variant="contained" color="primary" className="btn-cta">Read more</Button>
        </div>
      </div>
    </div>
  </article>
)

export default NewsFeedJumbotron;
