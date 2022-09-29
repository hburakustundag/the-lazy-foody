const request = require("supertest");
const app = require("../server");
const httpStatus = require("http-status");
const { Pool } = require("pg");

jest.mock("pg", () => {
  const mClient = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Pool: jest.fn(() => mClient) };
});

describe("DELETE /dishes", () => {
  beforeEach(() => {
    app.pool = new Pool();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should delete dish", () => {
    return request(app).delete("/dishes/example").expect(httpStatus.NO_CONTENT);
  });
});
