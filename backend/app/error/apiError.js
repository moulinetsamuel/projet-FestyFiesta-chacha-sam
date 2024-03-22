class ApiError extends Error {
  constructor(message, errorName, errorType) {
    super();

    this.name = errorName || this.constructor.name;
    this.message = message;

    switch (errorName || this.constructor.name) {
      case 'UserError':
        if (errorType === 0) {
          this.status = 404;
        } else {
          this.status = 400;
        }
        break;
      case 'EventError':
        if (errorType === 0) {
          this.status = 404;
        } else {
          this.status = 400;
        }
        break;
      case 'ObjectError':
        if (errorType === 0) {
          this.status = 404;
        } else {
          this.status = 400;
        }
        break;
      case 'AuthError':
        if (errorType === 0) {
          this.status = 401;
        } else {
          this.status = 400;
        }
        break;
      default:
        console.log('No handler for this error');
        break;
    }
  }
}

class AuthError extends ApiError {}
class EventError extends ApiError {}
class UserError extends ApiError {}
class ObjectError extends ApiError {}

export {
  ApiError, AuthError, EventError, UserError, ObjectError,
};
