import React from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { RelayEnvironmentProvider, loadQuery, usePreloadedQuery, usePaginationFragment } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { AnimeCard } from "./components/AnimeCard";

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query AppPageQuery {
    Page {
      media(isAdult: false, sort: POPULARITY_DESC) {
        _id: id
        siteUrl
        title {
          romaji
          english
        }
        coverImage {
          large
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

function App(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  const animeList = data.Page.media;
  return (
    <div className="App">
      <header className="App-header">
        <h3>Топ популярных аниме</h3>
      </header>
      <div
        style={{ display: "flex", alignItems: "center", overflowY: "hidden", overflowX: "scroll", height: 500 }}
      >
        {animeList.map((anime) => (
          <AnimeCard anime={anime} />
        ))}
      </div>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
