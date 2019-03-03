export default class User {
  constructor()   {
    /** @type {ObjectId} */
    this._id;

    /** @type {string} */
    this.contents;

    /** @type {ObjectId} */
    this.user;

    /** @type {Date} */
    this.regDate;

    /** @type {Date} */
    this.updateDate;

  }
}
