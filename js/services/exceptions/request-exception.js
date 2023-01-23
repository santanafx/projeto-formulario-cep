export default function RequestException(message) {
  const error = new Error(message);
  return error;
}

RequestException.prototype = object.create(Error.prototype);
