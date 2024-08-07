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
 * 
 * @export
 * @interface Book
 */
export interface Book {
    /**
     * A unique identifier for a particular book
     * @type {string}
     * @memberof Book
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    author: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof Book
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    image: string;
}

/**
 * Check if a given object implements the Book interface.
 */
export function instanceOfBook(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('author' in value)) return false;
    if (!('description' in value)) return false;
    if (!('price' in value)) return false;
    if (!('image' in value)) return false;
    return true;
}

export function BookFromJSON(json: any): Book {
    return BookFromJSONTyped(json, false);
}

export function BookFromJSONTyped(json: any, ignoreDiscriminator: boolean): Book {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'author': json['author'],
        'description': json['description'],
        'price': json['price'],
        'image': json['image'],
    };
}

export function BookToJSON(value?: Book | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'author': value['author'],
        'description': value['description'],
        'price': value['price'],
        'image': value['image'],
    };
}

