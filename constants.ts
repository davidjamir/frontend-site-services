import TeamTheme from "@/themes/team/TeamTheme";
import MLBTheme from "@/themes/mlb/MLBTheme";
import MusicTheme from "@/themes/music/MusicTheme";
import NBATheme from "@/themes/nba/NBATheme";
import NewsTheme from "@/themes/news/NewsTheme";
import NFLTheme from "@/themes/nfl/NFLTheme";
import NHLTheme from "@/themes/nhl/NHLTheme";
import SportTheme from "@/themes/sport/SportTheme";

import { NewsContent, NewsPostPage } from "@/themes/news/NewsContent";
import { NewsHomePage } from "@/themes/news/NewsHomepage";

export const THEMES_LAYOUT = {
  team: TeamTheme,
  sport: SportTheme,
  music: MusicTheme,
  news: NewsTheme,
  nba: NBATheme,
  nfl: NFLTheme,
  nhl: NHLTheme,
  mlb: MLBTheme,
};

export const THEMES_CONTENT = {
  news: NewsContent,
};

export const THEMES_HOMEPAGE = {
  news: NewsHomePage,
};

export const THEMES_POSTPAGE = {
  news: NewsPostPage,
};
