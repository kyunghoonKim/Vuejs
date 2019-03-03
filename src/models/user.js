export default class User {
  constructor()   {
    /** @type {ObjectId} */
    this._id;

    /** @type {string} */
    this.id;

    /** @type {Date} */
    this.regDate;

    /** @type {string} */
    this.password;
  }
}
