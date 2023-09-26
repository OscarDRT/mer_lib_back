import {
  type Item,
  type ItemResult,
  type SearchResult,
  type Author
} from '../models/Item';
import {
  type ItemAPI,
  type ItemDescription,
  type SearchAPI
} from '../models/MercadoLibreAPI';

/**
 * The function "buildAuthor" returns an object with the name and lastname properties of an author.
 * @returns An object of type Author with the properties name and lastname. The name property is set to
 * 'Oscar' and the lastname property is set to 'Riaño Tapias'.
 */
function buildAuthor(): Author {
  return {
    name: 'Oscar',
    lastname: 'Riaño Tapias'
  };
}

/**
 * The function "buildItem" takes an item API object and an optional description and returns a
 * formatted item object.
 * @param {ItemAPI} itemAPI - The `itemAPI` parameter is an object that contains information about an
 * item. It has the following properties:
 * @param {string} [description] - The `description` parameter is an optional string that represents
 * the description of the item. It is not required and can be omitted when calling the `buildItem`
 * function.
 * @returns an object of type Item.
 */
function buildItem(itemAPI: ItemAPI, description?: string): Item {
  const { country, state, city } = itemAPI.seller_address;

  return {
    id: itemAPI.id,
    title: itemAPI.title,
    price: {
      currency: itemAPI.currency_id,
      amount: Math.floor(itemAPI.price),
      decimals: +(itemAPI.price % 1).toFixed(2)
    },
    picture: itemAPI.thumbnail,
    condition: itemAPI.condition,
    free_shipping: itemAPI.shipping.free_shipping,
    sold_quantity: itemAPI.sold_quantity,
    description,
    seller: {
      country: country.name,
      state: state.name,
      city: city.name
    }
  };
}

/**
 * The function "buildCategories" takes in a SearchAPI response and returns an array of category names
 * extracted from the response.
 * @param {SearchAPI} apiResponse - The `apiResponse` parameter is an object that represents the
 * response from a search API. It contains various properties, but the important one for this function
 * is `filters`. The `filters` property is an array of objects that represent different filters that
 * can be applied to the search results. Each filter object
 * @returns an array of strings.
 */
function buildCategories(apiResponse: SearchAPI): string[] {
  return apiResponse.filters
    .filter((f) => f.id === 'category')
    .flatMap((f) =>
      f.values.flatMap((v) =>
        v.path_from_root !== undefined
          ? v.path_from_root.map((c) => c.name)
          : []
      )
    )
    .filter(Boolean);
}

/**
 * The function builds a search result object by mapping the results from an API response to an array
 * of items and including an author object.
 * @param {SearchAPI} apiResponse - The `apiResponse` parameter is of type `SearchAPI`, which
 * represents the response received from an API call for search results.
 * @returns a SearchResult object.
 */
export function buildSearchResult(apiResponse: SearchAPI): SearchResult {
  const items: Item[] = apiResponse.results.map((result) => buildItem(result));

  const categories = buildCategories(apiResponse);

  return {
    author: buildAuthor(),
    items,
    categories
  };
}

/**
 * The function `buildItemResult` takes an item response and a description response, and returns an
 * item result object with an author and the built item.
 * @param {ItemAPI} itemResponse - The `itemResponse` parameter is of type `ItemAPI` and represents the
 * response received from an API call for retrieving item information. It contains data such as the
 * item's ID, name, price, and other details.
 * @param {ItemDescription} descriptionResponse - The `descriptionResponse` parameter is of type
 * `ItemDescription`, which likely contains information about the description of the item.
 * @returns an object of type ItemResult.
 */
export function buildItemResult(
  itemResponse: ItemAPI,
  descriptionResponse: ItemDescription
): ItemResult {
  const item: Item = buildItem(itemResponse, descriptionResponse.plain_text);
  return {
    author: buildAuthor(),
    item
  };
}
