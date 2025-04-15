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
  catalog_v1_ids?: {
    catalog_v1_id: string;
    location_id: string;
  }[]
  present_at_all_locations?: boolean;
  present_at_location_ids?: string[];
  item_data: {
    name: string;
    description?: string;
    is_taxable: boolean;
    tax_ids: string[];
    variations: SquareItemVariation[];
    modifier_list_info?: SquareModifierListInfo[];
    product_type: 'FOOD_AND_BEV' | 'REGULAR';
    skip_modifier_screen: boolean;
    ecom_uri?: string;
    ecom_image_uris?: string[];
    image_ids?: string[];
    ecom_available: boolean;
    ecom_visibility: 'VISIBLE' | 'UNAVAILABLE' | "UNINDEXED";
    categories: SquareItemCategory[];
    channels?: string[];
    is_archived: boolean;
    reporting_category?: {
      id?: string;
      ordinal?: number;
    }
    item_options?: {
      item_option_id: string;
    }[]
    label_color? : string;
    description_html?: string;
    description_plaintext?: string;
  };
}

/**
 * Represents a product variation (size, style, etc)
 */
export interface SquareItemVariation extends SquareBaseObject {
  type: 'ITEM_VARIATION';
  catalog_v1_ids?: {
    catalog_v1_id: string;
    location_id: string;
  }[]
  absent_at_location_ids?: string[];
  present_at_all_locations?: boolean;
  present_at_location_ids?: string[];
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
      sold_out?: boolean;
    }[];
    track_inventory: boolean;
    inventory_alert_type?: 'NONE';
    item_option_values?: {
      item_option_id: string;
      item_option_value_id: string;
    }[]
    sellable: boolean;
    stockable: boolean;
    channels?: string[];
    item_variation_vendor_info_ids?: string[];
    item_variation_vendor_infos?: {
      type: 'ITEM_VARIATION_VENDOR_INFO';
      id: string;
      updated_at: string;
      created_at: string;
      version: number;
      is_deleted: boolean;
      present_at_all_locations?: boolean;
      present_at_location_ids?: string[];
      item_variation_vendor_info_data: {
        ordinal: number;
        item_variation_id: string;
      }
    }[]
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
  hidden_from_customer?: boolean;
  ordinal: number;
}

/**
 * Represents a category in a catalog item (product)
 */
export interface SquareItemCategory {
  id?: string;
  ordinal?: number;
}

/**
 * Represents a catalog item (category)
 * This is used for the menu categories like "Coffee", "Tea", etc.
 * It is not the same as the SquareItemCategory above.
 */
export interface SquareCatalogCategory extends SquareBaseObject {
  type: 'CATEGORY';
  present_at_all_locations?: boolean;
  catalog_v1_ids?: {
    catalog_v1_id: string;
    location_id: string;
  }[]
  category_data: {
    name: string;
    abbreviation?: string;
    category_type: 'REGULAR_CATEGORY' | 'MENU_CATEGORY'
    online_visibility: boolean;
    root_category?: string;
    parent_category?: SquareItemCategory;
    channels?: string[];
    is_top_level: boolean;
    location_overrides: {
      location_id: string;
      ordinal: number;
    }[];
    ecom_seo_data?: {
      page_title?: string;
      page_description?: string;
      permalink?: string;
    }
  };
}