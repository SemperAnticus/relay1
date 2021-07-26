// import React from "react";
// import { AnimeCard } from "./AnimeCard";
// import graphql from "babel-plugin-relay/macro";
// import { usePaginationFragment } from "react-relay/hooks";

// export const AnimeList = () => {
//   const { data } = usePaginationFragment(
//     graphql`
//       fragment AnimeListComponent_page on Page @refetchable(queryName: "AnimeListPaginationQuery") {
//         pageInfo {
//           total
//           currentPage
//           lastPage
//           hasNextPage
//           perPage
//         }
//         media(first: $count, after: $cursor) @connection(key: "AnimeList_page_media") {
//           edges {
//             node {
//               ...AnimeCard
//             }
//           }
//         }
//       }
//     `
//   );

//   const animeList = data.Page.media;

//   return (
//     <>
//       <div>Всего: {data.pageInfo.total}</div>

//       <div>
//         {(data.media?.edges ?? []).map((edge) => {
//           const node = edge.node;
//           return (
//             <Suspense fallback={<span>Loading...</span>}>
//               <AnimeCard anime={node} />
//             </Suspense>
//           );
//         })}
//       </div>
//       <div style={{ display: "flex" }}>
//         {animeList.map((anime) => (
//           <AnimeCard anime={anime} />
//         ))}
//       </div>
//     </>
//   );
// };
