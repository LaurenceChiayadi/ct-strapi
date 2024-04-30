import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleContent extends Schema.Component {
  collectionName: 'components_article_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.content': ArticleContent;
    }
  }
}
