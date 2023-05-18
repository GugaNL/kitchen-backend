import { gql } from "apollo-server";

export const apiFiltersTypedefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: ApiFilterOrder
    _start: Int
    _limit: Int
  }

  enum ApiFilterOrder {
    asc
    desc
  }
`
