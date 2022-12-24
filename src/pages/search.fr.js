import React from 'react';
import { graphql } from 'gatsby';

import SearchPage from '../components/SearchPage';

const Search = ({ data }) => (
  <SearchPage
    localSearch={data.localSearchEnglish}
    title="Rechercher du contenu"
    inputPlaceholder="Entrez un terme de recherche"
    lang="fr"
  />
);

export const pageQuery = graphql`
  query {
    localSearchEnglish {
      store
      index
    }
  }
`;

export default Search;
