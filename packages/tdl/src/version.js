// @flow

export class Version {
  +_major: number;
  +_minor: number;
  +_patch: number;

  /** Parse version from a string */
  constructor (ver: string) {
    const [majorStr, minorStr, patchStr] = ver.split('.')
    const major = Number(majorStr)
    const minor = Number(minorStr)
    const patch = Number(patchStr) || 0
    if (!majorStr || !minorStr || Number.isNaN(major) || Number.isNaN(minor))
      throw new Error(`Invalid TDLib version '${ver}'`)
    this._major = major
    this._minor = minor
    this._patch = patch
  }

  /** v1.gt(v2) is v1 > v2 */
  gt (other: Version) {
    if (this._major > other._major) return true
    if (this._major < other._major) return false
    if (this._minor > other._minor) return true
    if (this._minor < other._minor) return false
    return this._patch > other._patch
  }

  /** v1.lt(v2) is v1 < v2 */
  lt (other: Version) {
    if (this._major < other._major) return true
    if (this._major > other._major) return false
    if (this._minor < other._minor) return true
    if (this._minor > other._minor) return false
    return this._patch < other._patch
  }

  /** v1.gte(v2) is v1 >= v2 */
  gte (other: Version) {
    if (this._major > other._major) return true
    if (this._major < other._major) return false
    if (this._minor > other._minor) return true
    if (this._minor < other._minor) return false
    return this._patch >= other._patch
  }

  /** v1.lte(v2) is v1 <= v2 */
  lte (other: Version) {
    if (this._major < other._major) return true
    if (this._major > other._major) return false
    if (this._minor < other._minor) return true
    if (this._minor > other._minor) return false
    return this._patch <= other._patch
  }

  /** v1.eq(v2) is v1 == v2 */
  eq (other: Version) {
    return this._major === other._major
      && this._minor === other._minor
      && this._patch === other._patch
  }

  toString () {
    return `${this._major}.${this._minor}.${this._patch}`
  }
}
