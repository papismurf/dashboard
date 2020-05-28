import React from 'react';
import QueueAnim from 'rc-queue-anim';
import MaterialIcon from 'components/MaterialIcon';
import DEMO from "../../../constants/demoData";


const NewsFeed = () => (
  <article className="article">
    <h2 className="article-title page-title">News Feed</h2>
    <div className="row">
      <div className="col-xl-4">
        <div className="box box-v1 mb-4">
          <div className="box-header">News Article</div>
          <div className="box-body">
            Really Techy news on the block.
          </div>
          <a href={DEMO.link} className="link-cta link-animated-hover link-hover-v1">Read more... <MaterialIcon icon="arrow_forward" /></a>
        </div>
      </div>
    </div>
  </article>
)


export default NewsFeed;
