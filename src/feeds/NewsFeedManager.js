import { BbcNewsGroup, BbcNewsFeeds } from './BbcFeeds';
import { CnnNewsGroup, CnnNewsFeeds } from './CnnFeeds';
import { NewYorkTimesNewsGroup, NewYorkTimesNewsFeeds } from './NewYorkTimesFeeds';
import { NewYorkPostNewsGroup, NewYorkPostFeeds } from './NewYorkPostFeeds';
import { WallStreetJournalNewsGroup, WallStreetJournalNewsFeeds } from './WallStreetJournalFeeds';
import { AnsaNewsGroup, AnsaNewsFeeds } from './AnsaFeeds';
import { FoxNewsGroup, FoxNewsFeeds } from './FoxNewsFeeds';
import { ReutersNewsGroup, ReutersNewsFeeds } from './ReutersFeeds';
/* import { RaiTelevideoNewsGroup, RaiTelevideoNewsFeeds } from './RaiTelevideoFeeds'; */

export const newsGroups = {
  'bbc': BbcNewsGroup,
  'cnn': CnnNewsGroup,
  'foxnews': FoxNewsGroup,
  'new-york-times': NewYorkTimesNewsGroup,
  'new-york-post': NewYorkPostNewsGroup,
  'wall-street-journal': WallStreetJournalNewsGroup,
  'reuters': ReutersNewsGroup,
  'ansa': AnsaNewsGroup,
  /* 'rai-televideo': RaiTelevideoNewsGroup */
};

// TV channels list https://en.wikipedia.org/wiki/List_of_news_television_channels
// Weather app https://github.com/Kennypee/Weather-Scanner
// http://abcnews.go.com/Site/page/rss--3520115
// http://www.reuters.com/tools/rss
// NBC https://www.nbc.com/ 
// Radio Rai http://www.radio.rai.it/radio3/podcast/rssradio3.jsp
// Corriere della sera https://www.corriere.it/rss/
export const feeds = {
  'bbc': BbcNewsFeeds,
  'cnn': CnnNewsFeeds,
  'foxnews': FoxNewsFeeds,
  'new-york-times': NewYorkTimesNewsFeeds,
  'new-york-post': NewYorkPostFeeds,
  'wall-street-journal': WallStreetJournalNewsFeeds,
  'reuters': ReutersNewsFeeds,
  'ansa': AnsaNewsFeeds,
  /* 'rai-televideo': RaiTelevideoNewsFeeds */
};
