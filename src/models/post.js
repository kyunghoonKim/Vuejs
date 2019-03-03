export default class User {
  constructor()   {
    /** @type {ObjectId} */
    this._id;

    /** @type {string} */
    this.title;

    /** @type {ObjectId} */
    this.user;

    /** @type {Date} */
    this.regDate;

    /** @type {Date} */
    this.updateDate;

    /** @type {number} */
    this.hits;

    /** @type {string} */
    this.contents;

  }
}
