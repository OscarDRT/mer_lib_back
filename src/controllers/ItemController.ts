import { type Request, type Response } from 'express';
import { ItemService } from '../services/ItemService';
import {
  buildItemResult,
  buildSearchResult
} from '../transformers/itemTransformer';

interface SearchQueryParams {
  q: string;
}

const itemService = new ItemService();

export class ItemController {
  /* The `search` method is a public method of the `ItemController` class. It is an asynchronous
  function that handles the logic for searching items based on a query parameter. */
  public search = async (
    req: Request<unknown, unknown, unknown, SearchQueryParams>,
    res: Response
  ): Promise<void> => {
    try {
      const { q } = req.query;
      const response = await itemService.searchItems(q);
      const searchResult = buildSearchResult(response);
      res.json(searchResult);
    } catch (error) {
      console.error(error);
      if (Boolean(error.response) && error.response.status === 404) {
        res.status(404).json({ message: 'No results found' });
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  };

  /* The `getItemById` method is a public method of the `ItemController` class. It is an asynchronous
  function that handles the logic for retrieving an item by its ID. */
  public getItemById = async (
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const [itemAPI, descriptionAPI] = await itemService.getItemById(id);
      const itemResult = buildItemResult(itemAPI, descriptionAPI);
      res.json(itemResult);
    } catch (error) {
      console.error(error);
      if (Boolean(error.response) && error.response.status === 404) {
        res.status(404).json({ message: 'No results found' });
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  };
}
