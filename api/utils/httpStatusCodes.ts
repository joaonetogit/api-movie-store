const httpStatusCodes = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
} as const;

export default httpStatusCodes;
