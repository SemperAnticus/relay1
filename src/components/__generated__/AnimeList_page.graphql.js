/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AnimeList_page$ref: FragmentReference;
declare export opaque type AnimeList_page$fragmentType: AnimeList_page$ref;
export type AnimeList_page = {|
  +media: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +siteUrl: ?string,
    +title: ?{|
      +romaji: ?string,
      +english: ?string,
    |},
    +coverImage: ?{|
      +large: ?string
    |},
  |}>,
  +$refType: AnimeList_page$ref,
|};
export type AnimeList_page$data = AnimeList_page;
export type AnimeList_page$key = {
  +$data?: AnimeList_page$data,
  +$fragmentRefs: AnimeList_page$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AnimeList_page",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "isAdult",
          "value": false
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "POPULARITY_DESC"
        }
      ],
      "concreteType": "Media",
      "kind": "LinkedField",
      "name": "media",
      "plural": true,
      "selections": [
        {
          "alias": "_id",
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "siteUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "MediaTitle",
          "kind": "LinkedField",
          "name": "title",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "romaji",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "english",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "MediaCoverImage",
          "kind": "LinkedField",
          "name": "coverImage",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "large",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "media(isAdult:false,sort:\"POPULARITY_DESC\")"
    }
  ],
  "type": "Page",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'bf1d8b709d3a2cbbfa604b23b7263ec5';

module.exports = node;
