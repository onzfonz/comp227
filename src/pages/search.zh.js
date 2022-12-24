import React from 'react';
import { graphql } from 'gatsby';

import SearchPage from '../components/SearchPage';

const Search = ({ data }) => (
  <SearchPage 
    localSearch={data.localSearchEnglish} 
    title="搜索课程"
    inputPlaceholder="输入关键词"
    lang="zh"/>
);

export default Search;

export const pageQuery = graphql`
  query {
    localSearchEnglish {
      store
      index
    }
  }
`;
