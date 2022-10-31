import "./api";
import "./app";
import "./events";
import "./mobile";
import "./plugin";
import "./portal";
import "./proxy";
import "./space";

declare global {
  /**
   * The global object for kintone JS API.
   */
  namespace kintone {
    /**
     * The user information.
     */
    interface User {
      /**
       * User ID. Auto incremented by the service.
       */
      id: string;

      /**
       * Login name. An identifier used to log in to cybozu.com.
       * For guest users, this will be their email.
       */
      code: string;

      /**
       * Display name. This appear in the services.
       */
      name: string;

      /**
       * An e-mail address that the user uses.
       */
      email: string;

      /**
       * The URL of a Web page. Blank for guest users.
       */
      url: string;

      /**
       * 	Employee ID. Blank for guest users.
       */
      employeeNumber: string;

      /**
       * Telephone number.
       */
      phone: string;

      /**
       * Mobile phone number. Blank for guest users.
       */
      mobilePhone: string;

      /**
       * Extension. Blank for guest users.
       */
      extensionNumber: string;

      /**
       * 	Time Zone.
       */
      timezone: string;

      /**
       * True for guest users, false for non-guest users.
       */
      isGuest: boolean;

      /**
       * The default language used in cybozu.com.
       */
      language: string;
    }

    /**
     * Retrieves the user information of the user that is currently viewing the page.
     */
    function getLoginUser(): User;

    /**
     * Retrieves a CSRF token to be used for file downloads/uploads.
     * This can be used for all APIs that have an HTTP method of POST, PUT and DELETE. APIs with an HTTP method of GET do not need a CSRF token.
     */
    function getRequestToken(): string;

    /**
     * Retrieves the current Kintone UI Design version that the user is currently viewing.
     * By default, the user settings of the Kintone UI Design should be set to the New UI Design.
     * @returns In the case of Classic UI Design (Desktop version) or Mobile version are used, returns `1`.
     * In the case of New UI Design are used, returns `2`.
     */
    function getUiVersion(): 1 | 2;
  }
}

export {};
