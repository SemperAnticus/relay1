/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppPageQueryVariables = {||};
export type AppPageQueryResponse = {|
  +Page: ?{|
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
    |}>
  |}
|};
export type AppPageQuery = {|
  variables: AppPageQueryVariables,
  response: AppPageQueryResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Page",
    "kind": "LinkedField",
    "name": "Page",
    "plural": false,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5a2646874beaa948cd70a4d3b76425df",
    "id": null,
    "metadata": {},
    "name": "AppPageQuery",
    "operationKind": "query",
    "text": "query AppPageQuery {\n  Page {\n    media(isAdult: false, sort: POPULARITY_DESC) {\n      _id: id\n      siteUrl\n      title {\n        romaji\n        english\n      }\n      coverImage {\n        large\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a4115ebec771cdf30de93e7a7fb12787';

module.exports = node;
