import React, { Component } from 'react';

class NewsGroupList extends Component {
  static defaultProps = {
    group: null
  };

  render() {
    const { group } = this.props;

    if (group) {
      return (
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
          <img className="card-img-left flex-auto d-none d-lg-block" src={require('../images/' + group.image)} alt="" />
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">Category</strong>
            <h3 className="mb-0">
              { group.title }
            </h3>
            <p className="card-text mb-auto">{ group.description }</p>

            <div>
            { group.youtube && 
              <span><a href={group.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-danger"><i className="fa fa-youtube"></i> Youtube</a>&nbsp;</span>
            }

            { group.facebook && 
              <span><a href={group.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-info"><i className="fa fa-facebook"></i> Facebook</a>&nbsp;</span>
            }

            { group.wikipedia && 
              <span><a href={group.wikipedia} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary"><i className="fa fa-wikipedia-w"></i> Wikipedia</a>&nbsp;</span>
            }

            { group.rss && 
              <span><a href={group.rss} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-warning"><i className="fa fa-rss"></i> RSS</a></span>
            }
            </div>

          </div>

        </div>
      );
    } else {
      return (
        <div className="alert alert-danger">
          <h3>Error occurrend</h3>
          <p>No news group</p>
        </div>
      );
    }
    
  }
}

export default NewsGroupList;
