import { QuickFindUF } from "./quickfind-uf-n2";

describe("QuickFindUF", () => {
  it("should return false if two items are not connected", () => {
    const quickFind = new QuickFindUF(10);

    expect(quickFind.connected(2, 6)).toBe(false);
  });

  it("should return true if two items are connected", () => {
    const quickFind = new QuickFindUF(10);
    quickFind.union(2, 6);

    expect(quickFind.connected(2, 6)).toBe(true);
  });
});
