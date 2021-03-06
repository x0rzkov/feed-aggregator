import React, { Component } from 'react';
import { RssParser } from '../api/RssParser';
import { FeedManager } from '../feeds/FeedsManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import FeedsFromApi from '../components/FeedsFromApi';
import LoadingSpinner from '../components/LoadingSpinner';
import Breadcrumbs from './../components/Breadcrumbs';
import { VideogamesNewsGroups, VideogamesNewsFeeds } from '../feeds/VideoGamesFeedManager';

class VideoGamesGroupDetails extends Component {
  constructor(props) {
    super(props);

    const currentNewsGroup = FeedManager.getNewsGroupByKey(VideogamesNewsGroups, props.match.params.group);

    const newsFeedsByGroup = FeedManager.getNewsFeedsByGroup(VideogamesNewsFeeds, props.match.params.group);

    const currentFeed = FeedManager.getNewsFeedBySlug(newsFeedsByGroup, props.match.params.slug);

    this.state = {
      group: props.match.params.group,
      slug: props.match.params.slug,
      currentNewsGroup: currentNewsGroup,
      currentFeed: currentFeed,
      currentFeedsList: newsFeedsByGroup,
      breadcrumbs: this.setupBreadcrumbs(currentNewsGroup),
      newsFromApi: null,
      rssParser: new RssParser(),
      error: null,
    };

    this.handleUpdateFeed = this.handleUpdateFeed.bind(this);
  }

  handleUpdateFeed() {
    // Temporary reset the news list
    this.setState({
      newsFromApi: null,
    });
  }
  
  setupBreadcrumbs(cunewsGroup, newsFeed) {
    let breadcrumbs =  [
      { label: 'News', href: '/news', title: 'Back to the news main page', active: false },
      { label: cunewsGroup.title, href: cunewsGroup.path, title: cunewsGroup.title, active: false },
    ];

    if (newsFeed) {
      breadcrumbs.push({ label: newsFeed.label, href: '', title: '', active: true });
    } else {
      breadcrumbs.push({ label: 'Error', href: '', title: '', active: true });
    }

    return breadcrumbs;
  }

  /**
   * Load first data on loading page
   */
  componentWillMount() {
    this.setupCurrentNewsGroup();
  }

  /**
   * Check state and update it if needed
   * 
   * @param {*} prevProps 
   * @param {*} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    // This is the initial render without a previous prop change
    if (prevProps === undefined) {
      return false;
    }

    // Set new state
    this.setupCurrentNewsGroup();
  }

  setupCurrentNewsGroup() {
    const {slug, group} = this.props.match.params;
    const {rssParser} = this.state;

    if ( (slug !== this.state.slug || this.state.newsFromApi === null) && this.state.error === null) {

      const currentFeedsList = FeedManager.getNewsFeedBySlug(this.state.currentFeedsList, slug);
      const currentNewsGroup = FeedManager.getNewsGroupByKey(VideogamesNewsGroups, group);

      const self = this;
      rssParser.callPromise(currentFeedsList.url)
        .then(function (response) {
          self.setState({
            group: group,
            slug: slug,
            newsFromApi: rssParser.parseFeedRss(response.data),
            currentNewsGroup: currentNewsGroup,
            currentFeed: currentFeedsList,
            breadcrumbs: self.setupBreadcrumbs(currentNewsGroup, currentFeedsList),
            error: null,
          });
        })
        .catch(function (error) {
          self.setState({
            group: group,
            slug: slug,
            currentNewsGroup: currentNewsGroup,
            currentFeed: currentFeedsList,
            newsFromApi: null,
            error: error
          });
        });

    }

    // Scroll to top
    window.scrollTo(0, 0);
  }

  render() {

    const {
      currentFeed,
      currentNewsGroup,
      currentFeedsList,
      newsFromApi,
      breadcrumbs,
      error
    } = this.state;

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-9">
 
            {error !== null &&
              <div className="alert alert-danger">
                <h3>Error occurred</h3>
                <p>{ error.message }</p>
              </div>
            }

            {newsFromApi === null && error === null &&
              <LoadingSpinner />
            }

            {newsFromApi !== null &&
              <FeedsFromApi currentFeed={currentFeed} newsGroup={currentNewsGroup} newsFromApi={newsFromApi} />
            }
          </div>

          <div className="col-sm-12 col-md-4 col-lg-3">
            <FeedsCategoryList handleUpdateFeed={this.handleUpdateFeed} items={currentFeedsList} />
          </div>
        </div>

      </div>

    );
  }
}

export default VideoGamesGroupDetails;
