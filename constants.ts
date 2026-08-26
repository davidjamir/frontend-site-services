import { getOrigin } from "@/helpers/getOrigin";

import NewsTheme from "@/themes/news/NewsTheme";
// import TeamTheme from "@/themes/team/TeamTheme";
// import MLBTheme from "@/themes/mlb/MLBTheme";
// import MusicTheme from "@/themes/music/MusicTheme";
// import NBATheme from "@/themes/nba/NBATheme";
// import NFLTheme from "@/themes/nfl/NFLTheme";
// import NHLTheme from "@/themes/nhl/NHLTheme";
// import SportTheme from "@/themes/sport/SportTheme";
// import FootballTheme from "@/themes/football/FootballTheme";

import NewsOG from "@/themes/news/NewsOg";
import TeamOG from "@/themes/team/TeamOg";
import MLBOG from "@/themes/mlb/MLBOg";
import NBAOG from "@/themes/nba/NBAOg";
import NFLOG from "@/themes/nfl/NFLOg";
import NHLOG from "@/themes/nhl/NHLOg";
import SportOG from "@/themes/sport/SportOg";
import FootballOG from "@/themes/football/FootballOg";

import {
  NewsContent,
  NewsPostPage,
  NewsNetworkItem,
} from "@/themes/news/NewsContent";
import { NewsHomePage } from "@/themes/news/NewsHomepage";

export const NUMBER_POSTS_LATEST = 15;

const DOMAIN = "warriors.nbahub.store";

export const ORIGIN_CONFIG_DEVELOPMENT_DEFAULT = {
  host: DOMAIN,
  protocol: "https",
  url: `https://${DOMAIN}`,
  origin: getOrigin(DOMAIN),
  originUrl: `https://${getOrigin(DOMAIN)}`,
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
  football: NewsTheme,
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
  football: NewsContent,
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
  football: NewsHomePage,
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
  football: NewsPostPage,
};

export const THEMES_NETWORK = {
  news: NewsNetworkItem,
  team: NewsNetworkItem,
  sport: NewsNetworkItem,
  music: NewsNetworkItem,
  nba: NewsNetworkItem,
  nfl: NewsNetworkItem,
  nhl: NewsNetworkItem,
  mlb: NewsNetworkItem,
  football: NewsNetworkItem,
};

export const THEMES_OG = {
  news: NewsOG,
  team: TeamOG,
  sport: SportOG,
  music: NewsOG,
  nba: NBAOG,
  nfl: NFLOG,
  nhl: NHLOG,
  mlb: MLBOG,
  football: FootballOG,
};
