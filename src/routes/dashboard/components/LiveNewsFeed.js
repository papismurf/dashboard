import React from 'react';
import axios from 'axios';
import APIKit from '../../../providers/APIKit';
import QueueAnim from 'rc-queue-anim';
import MaterialIcon from 'components/MaterialIcon';

const initialState = {
  market: 'market',
  key: 'key',
}
this.key = initialState.key
this.market = initialState.market
const articles = axios.get(APIKit.baseURL + '/articles/')
  .then()






const Page = () => {
  return(
    <div className="container-fluid no-breadcrumb container-mw-xl chapter">
      <article className="article">
        <h2 className="article-title">Latest News</h2>
        <QueueAnim type="bottom" className="ui-animate flex-items-container">
          {
            articles.map((article, i) => (
              <article key={i.toString()} className="blog-card flex-item border-0 mdc-elevation--z1 mb-4">
                <a href={article.link}>
                  <img src={article.img} alt="blog cover"/>
                </a>
                <div className="blog-card__body">
                  <span className="blog-card__date">{article.date}</span>
                  <h4 className="blog-card__title">{article.content}</h4>
                  <a href={DEMO.link} className="link-animated-hover link-hover-v1 text-primary">Read More <MaterialIcon icon="arrow_forward" /></a>
                </div>
              </article>
            ))
          }
        </QueueAnim>
      </article>
    </div>
  );
}

export default Page;