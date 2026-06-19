import NewsTheme from "@/themes/news/NewsTheme";
// import TeamTheme from "@/themes/team/TeamTheme";
// import MLBTheme from "@/themes/mlb/MLBTheme";
// import MusicTheme from "@/themes/music/MusicTheme";
// import NBATheme from "@/themes/nba/NBATheme";
// import NFLTheme from "@/themes/nfl/NFLTheme";
// import NHLTheme from "@/themes/nhl/NHLTheme";
// import SportTheme from "@/themes/sport/SportTheme";

import { NewsContent, NewsPostPage } from "@/themes/news/NewsContent";
import { NewsHomePage } from "@/themes/news/NewsHomepage";

export const NUMBER_POSTS_LATEST = 15;

export const ORIGIN_CONFIG_DEVELOPMENT_DEFAULT = {
  // host: "padres.mlbhub.store",
  // url: "https://padres.mlbhub.store",
  // protocol: "https",
  // origin: "mlbhub.store",
  // originUrl: "https://mlbhub.store",
  host: "www.thetimenews.co",
  protocol: "https",
  url: "https://www.thetimenews.co",
  origin: "thetimenews.co",
  originUrl: "https://thetimenews.co",
};

export const THEMES_LAYOUT = {
  news: NewsTheme,
  team: NewsTheme,
  sport: NewsTheme,
  music: NewsTheme,
  nba: NewsTheme,
  nfl: NewsTheme,
  nhl: NewsTheme,
  mlb: NewsTheme,
};

export const THEMES_CONTENT = {
  news: NewsContent,
  team: NewsContent,
  sport: NewsContent,
  music: NewsContent,
  nba: NewsContent,
  nfl: NewsContent,
  nhl: NewsContent,
  mlb: NewsContent,
};

export const THEMES_HOMEPAGE = {
  news: NewsHomePage,
  team: NewsHomePage,
  sport: NewsHomePage,
  music: NewsHomePage,
  nba: NewsHomePage,
  nfl: NewsHomePage,
  nhl: NewsHomePage,
  mlb: NewsHomePage,
};

export const THEMES_POSTPAGE = {
  news: NewsPostPage,
  team: NewsPostPage,
  sport: NewsPostPage,
  music: NewsPostPage,
  nba: NewsPostPage,
  nfl: NewsPostPage,
  nhl: NewsPostPage,
  mlb: NewsPostPage,
};
