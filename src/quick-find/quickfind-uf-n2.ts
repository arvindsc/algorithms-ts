export class QuickFindUF {
  private id: number[];

  public constructor(N: number) {
    /**
     * Set id of each object to itself (N value accesses)
     */
    this.id = Array(N)
      .fill(0)
      .map((v, i) => i);
  }

  /**
   * Check whether p and q are in the same component (2 array accesses)
   * @param p
   * @param q
   */
  public connected(p: number, q: number): boolean {
    return this.id[p] === this.id[q];
  }

  /**
   * Change all entries with id[p] to id[q]
   * @param p number
   * @param q number
   */
  public union(p: number, q: number): void {
    const pid = this.id[p];
    const qid = this.id[q];

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) this.id[i] = qid;
    }
  }
}
