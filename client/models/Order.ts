/* tslint:disable */
/* eslint-disable */
/**
 * assignment-template
 * This is a template repository for the first assignment in BVD 103 at McMaster Continuing Education.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * An order's details
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * A unique identifier for a particular order
     * @type {string}
     * @memberof Order
     */
    orderId: string;
    /**
     * Construct a type with a set of properties K of type T
     * @type {{ [key: string]: number; }}
     * @memberof Order
     */
    books: { [key: string]: number; };
}

/**
 * Check if a given object implements the Order interface.
 */
export function instanceOfOrder(value: object): boolean {
    if (!('orderId' in value)) return false;
    if (!('books' in value)) return false;
    return true;
}

export function OrderFromJSON(json: any): Order {
    return OrderFromJSONTyped(json, false);
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
    if (json == null) {
        return json;
    }
    return {
        
        'orderId': json['orderId'],
        'books': json['books'],
    };
}

export function OrderToJSON(value?: Order | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'orderId': value['orderId'],
        'books': value['books'],
    };
}

