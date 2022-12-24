import React from 'react';
import { graphql } from 'gatsby';

import SearchPage from '../components/SearchPage';

const Search = ({ data }) => (
  <SearchPage
    localSearch={data.localSearchEnglish}
    title="Etsi hakusanalla materiaalista"
    inputPlaceholder="Syötä hakusana"
    lang="en"
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
