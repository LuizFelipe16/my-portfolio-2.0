import { NextRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";

export type Category = 'web-react' | 'mobile-react-native';

interface Query extends ParsedUrlQuery {
  category: Category;
};

export interface RouterCategories extends NextRouter {
  query: Query;
}