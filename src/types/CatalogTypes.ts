/**
 * Base interface for all Square catalog objects
 */
export interface SquareBaseObject {
  type: string;
  id: string;
  updated_at: string;
  created_at: string;
  version: number;
  is_deleted: boolean;
}

/**
 * Represents a catalog item (product)
 */
export interface SquareItem extends SquareBaseObject {
  type: 'ITEM';
  item_data: {
    name: string;
    description?: string;
    is_taxable: boolean;
    tax_ids: string[];
    variations: SquareItemVariation[];
    modifier_list_info: SquareModifierListInfo[];
    product_type: 'FOOD_AND_BEV';
    skip_modifier_screen: boolean;
    ecom_uri?: string;
    ecom_image_uris?: string[];
    ecom_available: boolean;
    ecom_visibility: 'VISIBLE' | 'UNAVAILABLE';
    categories: SquareItemCategory[];
    channels: string[];
    is_archived: boolean;
  };
}

/**
 * Represents a product variation (size, style, etc)
 */
export interface SquareItemVariation extends SquareBaseObject {
  type: 'ITEM_VARIATION';
  item_variation_data: {
    item_id: string;
    name: string;
    sku?: string;
    ordinal: number;
    pricing_type: 'FIXED_PRICING';
    price_money: {
      amount: number;
      currency: string;
    };
    location_overrides: {
      location_id: string;
      track_inventory: boolean;
    }[];
    track_inventory: boolean;
    sellable: boolean;
    stockable: boolean;
  };
}

/**
 * Represents a modifier list (customizations)
 */
export interface SquareModifierListInfo {
  modifier_list_id: string;
  min_selected_modifiers: number;
  max_selected_modifiers: number;
  enabled: boolean;
  hidden_from_customer: boolean;
  ordinal: number;
}

/**
 * Represents a category in a catalog item (product)
 */
export interface SquareItemCategory {
  id: string;
  ordinal: number;
}

/**
 * Represents a catalog item (category)
 * This is used for the menu categories like "Coffee", "Tea", etc.
 * It is not the same as the SquareItemCategory above.
 */
export interface SquareCatalogCategory extends SquareBaseObject {
  type: 'CATEGORY';
  category_data: {
    name: string;
    abbreviation?: string;
    category_type: 'REGULAR_CATEGORY' | 'MENU_CATEGORY'
    online_visibility: boolean;
    root_category?: string;
    parent_category?: SquareItemCategory;
  };
}