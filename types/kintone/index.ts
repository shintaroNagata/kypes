import "./api";
import "./app";
import "./events";
import "./mobile";
import "./portal";
import "./proxy";
import "./space";

declare global {
  namespace kintone {
    interface LoginUser {
      id: string;
      code: string;
      name: string;
      email: string;
      url: string;
      employeeNumber: string;
      phone: string;
      mobilePhone: string;
      extensionNumber: string;
      timezone: string;
      isGuest: boolean;
      language: string;
    }
    function getLoginUser(): LoginUser;
    function getRequestToken(): string;
    function getUiVersion(): number;
  }
}

export { kintone };
