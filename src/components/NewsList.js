import React, { Component } from 'react';
import { Link } from "react-router-dom";

/**
 * News Group list
 */
class NewsList extends Component {
  static defaultProps = {
    newsGroups: null
  };

  render() {

    const { newsGroups } = this.props;

    return (
      <div>
        { newsGroups.length > 0 && 
          <div className="row">
            { newsGroups.map((item, i) =>
              <div className="col-sm-12 col-md-6 col-lg-6" key={'newsgroup-' + i}>
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                  <Link to={item.path} className="text-dark" title={'Read ' + item.title + ' news'}>
                    <img className="card-img-right flex-auto d-none d-lg-block" src={require('../images/' + item.image)} alt={item.title} />
                  </Link>
                  <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">{item.category}</strong>
                    <h3 className="mb-0">
                      <Link to={item.path} className="text-dark">{item.title}</Link>
                    </h3>
                    <p className="card-text mb-auto">{item.description}</p>
                    <Link to={item.path} className="btn btn-sm btn-primary">&raquo; Read news</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        }

        { (!newsGroups.length || newsGroups.length === 0) &&
          <div className="alert alert-danger">
            <h3>Error</h3>
            <p>No news group were found</p>
          </div>
        } 
      </div>
    );
  }
}

export default NewsList;
