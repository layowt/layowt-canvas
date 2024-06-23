/**
 * The canvas object that will be stored in supbase.
*/

/** A URL is a string that represents a URL */
export type URL = string

export interface Canvas {
  /** a unique identifier set on each canvas */
  canvasId: string
  /** The id of the website that this canvas was created from */
  websiteId: string /** 1-1 */
  /** The public URL that this canvas is accessible at */
  canvasUrl: URL
  /** The HTML content of this canvas */
  html: any
  /** The userID of the owner for this canvas */
  canvasOwnerId: string
  /** The date that this canvas was created */
  createdAt: Date
  /** The date that this canvas was last updated */
  updatedAt: Date
  
}