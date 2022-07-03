/* eslint-disable import/no-anonymous-default-export */
// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Good Soup")
    .items([
      S.listItem()
        .title("Website")
        .child(
          S.list()
            .title("Website")
            .items([
              S.listItem()
                .title("Pages")
                .child(
                  S.documentList()
                    .title("Pages")
                    .filter('_type == "websitePage"')
                ),
              S.listItem()
                .title("Services")
                .child(
                  S.documentList()
                    .title("Services")
                    .filter('_type == "service"')
                ),
              S.listItem()
                .title("Portfolio")
                .child(
                  S.documentList()
                    .title("Portfolio")
                    .filter('_type == "portfolioCategory"')
                ),
            ])
        ),
      S.listItem().title("Blog").child(S.list().title("Blog")),
    ]);
