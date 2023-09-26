import {
  type ItemAPI,
  type ItemDescription,
  type SearchAPI
} from '../models/MercadoLibreAPI';
import { api } from '../utils/axiosInstance';

export class ItemService {
  /**
   * The function `searchItems` is an asynchronous function that takes a query string as input and
   * returns a Promise that resolves to a SearchAPI object.
   * @param {string} query - The query parameter is a string that represents the search query. It is
   * used to specify the search term or keywords that will be used to search for items.
   * @returns The function `searchItems` is returning a Promise that resolves to an object of type
   * `SearchAPI`.
   */
  public async searchItems(query: string): Promise<SearchAPI> {
    const response = await api.get<SearchAPI>(
      `/sites/MLA/search?q=${query}&limit=4`
    );
    return response.data;
  }

  /**
   * The function `getItemById` retrieves an item and its description from an API using the provided
   * ID.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of an
   * item.
   * @returns an array containing two elements. The first element is the data from the `itemResponse`
   * API call, which is of type `ItemAPI`. The second element is the data from the
   * `descriptionResponse` API call, which is of type `ItemDescription`.
   */
  public async getItemById(id: string): Promise<[ItemAPI, ItemDescription]> {
    const [itemResponse, descriptionResponse] = await Promise.all([
      api.get<ItemAPI>(`/items/${id}`),
      api.get<ItemDescription>(`/items/${id}/description`)
    ]);
    return [itemResponse.data, descriptionResponse.data];
  }
}
