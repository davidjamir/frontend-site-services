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

import NewsOg from "@/themes/news/NewsOg";
import TeamOg from "@/themes/team/TeamOg";
import MLBOg from "@/themes/mlb/MLBOg";
import NBAOg from "@/themes/nba/NBAOg";
import NFLOg from "@/themes/nfl/NFLOg";
import NHLOg from "@/themes/nhl/NHLOg";
import SportOg from "@/themes/sport/SportOg";
import FootballOg from "@/themes/football/FootballOg";
import RacingOg from "@/themes/racing/RacingOg";

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
  movie: NewsTheme,
  nba: NewsTheme,
  nfl: NewsTheme,
  nhl: NewsTheme,
  mlb: NewsTheme,
  football: NewsTheme,
  racing: NewsTheme,
};

export const THEMES_CONTENT = {
  news: NewsContent,
  team: NewsContent,
  sport: NewsContent,
  music: NewsContent,
  movie: NewsContent,
  nba: NewsContent,
  nfl: NewsContent,
  nhl: NewsContent,
  mlb: NewsContent,
  football: NewsContent,
  racing: NewsContent,
};

export const THEMES_HOMEPAGE = {
  news: NewsHomePage,
  team: NewsHomePage,
  sport: NewsHomePage,
  music: NewsHomePage,
  movie: NewsHomePage,
  nba: NewsHomePage,
  nfl: NewsHomePage,
  nhl: NewsHomePage,
  mlb: NewsHomePage,
  football: NewsHomePage,
  racing: NewsHomePage,
};

export const THEMES_POSTPAGE = {
  news: NewsPostPage,
  team: NewsPostPage,
  sport: NewsPostPage,
  music: NewsPostPage,
  movie: NewsPostPage,
  nba: NewsPostPage,
  nfl: NewsPostPage,
  nhl: NewsPostPage,
  mlb: NewsPostPage,
  football: NewsPostPage,
  racing: NewsPostPage,
};

export const THEMES_NETWORK = {
  news: NewsNetworkItem,
  team: NewsNetworkItem,
  sport: NewsNetworkItem,
  music: NewsNetworkItem,
  movie: NewsNetworkItem,
  nba: NewsNetworkItem,
  nfl: NewsNetworkItem,
  nhl: NewsNetworkItem,
  mlb: NewsNetworkItem,
  football: NewsNetworkItem,
  racing: NewsNetworkItem,
};

export const THEMES_OG = {
  news: NewsOg,
  team: TeamOg,
  sport: SportOg,
  music: NewsOg,
  movie: NewsOg,
  nba: NBAOg,
  nfl: NFLOg,
  nhl: NHLOg,
  mlb: MLBOg,
  football: FootballOg,
  racing: RacingOg,
};
