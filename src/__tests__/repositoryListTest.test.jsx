import { screen, render } from "@testing-library/react-native";
import { RepositoryListContainer } from "../components/RepositoryList";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", async () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      await render(<RepositoryListContainer repositories={repositories} />);
      screen.debug();
      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const repositoryItems2 = screen.getAllByTestId("repositoryItem2");

      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      const [firstRepositoryStat, secondRepositoryStat] = repositoryItems2;

      expect(firstRepositoryItem).toHaveTextContent(/jaredpalmer\/formik/);
      expect(secondRepositoryItem).toHaveTextContent(
        /async-library\/react-async/,
      );
      expect(firstRepositoryItem).toHaveTextContent(
        /Build forms in React, without the tears/,
      );
      expect(secondRepositoryItem).toHaveTextContent(
        /Flexible promise-based React data loader/,
      );
      expect(firstRepositoryItem).toHaveTextContent(/TypeScript/);
      expect(firstRepositoryStat).toHaveTextContent(/21\.9k/);
      expect(firstRepositoryStat).toHaveTextContent(/1\.6k/);
      expect(firstRepositoryStat).toHaveTextContent(/3/);
      expect(firstRepositoryStat).toHaveTextContent(/88/);

      expect(secondRepositoryStat).toHaveTextContent(/1\.8k/);
      expect(secondRepositoryStat).toHaveTextContent(/69/);
      expect(secondRepositoryStat).toHaveTextContent(/3/);
      expect(secondRepositoryItem).toHaveTextContent(/JavaScript/);
      expect(secondRepositoryStat).toHaveTextContent(/72/);

      //...
    });
  });
});
