import React from 'react';
import {hot} from 'react-hot-loader/root';
import {Link} from 'react-router-dom';
import bigPicture from './big-picture.jpg';

/**
 * Detail Page
 */
@hot
export default class Detail extends React.Component {
  /**
   * Render Detail Page
   * @return {Component}
   */
  render() {
    return (
      <div>
        <div>Detail Page</div>
        <div><Link to="/">Redirect List Page</Link></div>
        <div>
          Images smaller than 8K will be processed by url-loader
          as inline resources. Other images will be processed by
          file-loader as external resources.
        </div>
        <img src={bigPicture} />
      </div>
    );
  }
}
