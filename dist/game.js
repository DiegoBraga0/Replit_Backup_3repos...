(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var Rn = Object.defineProperty;
  var fi = /* @__PURE__ */ __name((s, t, c) => t in s ? Rn(s, t, { enumerable: true, configurable: true, writable: true, value: c }) : s[t] = c, "fi");
  var o = /* @__PURE__ */ __name((s, t) => Rn(s, "name", { value: t, configurable: true }), "o");
  var mi = /* @__PURE__ */ __name((s, t) => {
    for (var c in t)
      Rn(s, c, { get: t[c], enumerable: true });
  }, "mi");
  var Ee = /* @__PURE__ */ __name((s, t, c) => (fi(s, typeof t != "symbol" ? t + "" : t, c), c), "Ee");
  var pi = (() => {
    for (var s = new Uint8Array(128), t = 0; t < 64; t++)
      s[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
    return (c) => {
      for (var g = c.length, E = new Uint8Array((g - (c[g - 1] == "=") - (c[g - 2] == "=")) * 3 / 4 | 0), M = 0, z = 0; M < g; ) {
        var I = s[c.charCodeAt(M++)], k = s[c.charCodeAt(M++)], Z = s[c.charCodeAt(M++)], ce = s[c.charCodeAt(M++)];
        E[z++] = I << 2 | k >> 4, E[z++] = k << 4 | Z >> 2, E[z++] = Z << 6 | ce;
      }
      return E;
    };
  })();
  function Re(s) {
    return s * Math.PI / 180;
  }
  __name(Re, "Re");
  o(Re, "deg2rad");
  function st(s) {
    return s * 180 / Math.PI;
  }
  __name(st, "st");
  o(st, "rad2deg");
  function Ne(s, t, c) {
    return t > c ? Ne(s, c, t) : Math.min(Math.max(s, t), c);
  }
  __name(Ne, "Ne");
  o(Ne, "clamp");
  function Me(s, t, c) {
    if (typeof s == "number" && typeof t == "number")
      return s + (t - s) * c;
    if (s instanceof v && t instanceof v)
      return s.lerp(t, c);
    if (s instanceof L && t instanceof L)
      return s.lerp(t, c);
    throw new Error(`Bad value for lerp(): ${s}, ${t}. Only number, Vec2 and Color is supported.`);
  }
  __name(Me, "Me");
  o(Me, "lerp");
  function $t(s, t, c, g, E) {
    return g + (s - t) / (c - t) * (E - g);
  }
  __name($t, "$t");
  o($t, "map");
  function fr(s, t, c, g, E) {
    return Ne($t(s, t, c, g, E), g, E);
  }
  __name(fr, "fr");
  o(fr, "mapc");
  var be = /* @__PURE__ */ __name(class {
    constructor(t = 0, c = t) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = t, this.y = c;
    }
    static fromAngle(t) {
      let c = Re(t);
      return new be(Math.cos(c), Math.sin(c));
    }
    clone() {
      return new be(this.x, this.y);
    }
    add(...t) {
      let c = S(...t);
      return new be(this.x + c.x, this.y + c.y);
    }
    sub(...t) {
      let c = S(...t);
      return new be(this.x - c.x, this.y - c.y);
    }
    scale(...t) {
      let c = S(...t);
      return new be(this.x * c.x, this.y * c.y);
    }
    dist(...t) {
      let c = S(...t);
      return this.sub(c).len();
    }
    sdist(...t) {
      let c = S(...t);
      return this.sub(c).slen();
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let t = this.len();
      return t === 0 ? new be(0) : this.scale(1 / t);
    }
    normal() {
      return new be(this.y, -this.x);
    }
    reflect(t) {
      return this.sub(t.scale(2 * this.dot(t)));
    }
    project(t) {
      return t.scale(t.dot(this) / t.len());
    }
    reject(t) {
      return this.sub(this.project(t));
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    angle(...t) {
      let c = S(...t);
      return st(Math.atan2(this.y - c.y, this.x - c.x));
    }
    angleBetween(...t) {
      let c = S(...t);
      return st(Math.atan2(this.cross(c), this.dot(c)));
    }
    lerp(t, c) {
      return new be(Me(this.x, t.x, c), Me(this.y, t.y, c));
    }
    slerp(t, c) {
      let g = this.dot(t), E = this.cross(t), M = Math.atan2(E, g);
      return this.scale(Math.sin((1 - c) * M)).add(t.scale(Math.sin(c * M))).scale(1 / E);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(t) {
      return new be(Number(this.x.toFixed(t)), Number(this.y.toFixed(t)));
    }
    transform(t) {
      return t.multVec2(this);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y;
    }
    bbox() {
      return new ne(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "be");
  var v = be;
  o(v, "Vec2"), Ee(v, "LEFT", new be(-1, 0)), Ee(v, "RIGHT", new be(1, 0)), Ee(v, "UP", new be(0, -1)), Ee(v, "DOWN", new be(0, 1));
  function S(...s) {
    if (s.length === 1) {
      if (s[0] instanceof v)
        return new v(s[0].x, s[0].y);
      if (Array.isArray(s[0]) && s[0].length === 2)
        return new v(...s[0]);
    }
    return new v(...s);
  }
  __name(S, "S");
  o(S, "vec2");
  var ae = /* @__PURE__ */ __name(class {
    constructor(t, c, g) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = Ne(t, 0, 255), this.g = Ne(c, 0, 255), this.b = Ne(g, 0, 255);
    }
    static fromArray(t) {
      return new ae(t[0], t[1], t[2]);
    }
    static fromHex(t) {
      if (typeof t == "number")
        return new ae(t >> 16 & 255, t >> 8 & 255, t >> 0 & 255);
      if (typeof t == "string") {
        let c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return new ae(parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16));
      } else
        throw new Error("Invalid hex color format");
    }
    static fromHSL(t, c, g) {
      if (c == 0)
        return new ae(255 * g, 255 * g, 255 * g);
      let E = o((ce, U, X) => (X < 0 && (X += 1), X > 1 && (X -= 1), X < 1 / 6 ? ce + (U - ce) * 6 * X : X < 1 / 2 ? U : X < 2 / 3 ? ce + (U - ce) * (2 / 3 - X) * 6 : ce), "hue2rgb"), M = g < 0.5 ? g * (1 + c) : g + c - g * c, z = 2 * g - M, I = E(z, M, t + 1 / 3), k = E(z, M, t), Z = E(z, M, t - 1 / 3);
      return new ae(Math.round(I * 255), Math.round(k * 255), Math.round(Z * 255));
    }
    clone() {
      return new ae(this.r, this.g, this.b);
    }
    lighten(t) {
      return new ae(this.r + t, this.g + t, this.b + t);
    }
    darken(t) {
      return this.lighten(-t);
    }
    invert() {
      return new ae(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(t) {
      return new ae(this.r * t.r / 255, this.g * t.g / 255, this.b * t.b / 255);
    }
    lerp(t, c) {
      return new ae(Me(this.r, t.r, c), Me(this.g, t.g, c), Me(this.b, t.b, c));
    }
    eq(t) {
      return this.r === t.r && this.g === t.g && this.b === t.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  }, "ae");
  var L = ae;
  o(L, "Color"), Ee(L, "RED", new ae(255, 0, 0)), Ee(L, "GREEN", new ae(0, 255, 0)), Ee(L, "BLUE", new ae(0, 0, 255)), Ee(L, "YELLOW", new ae(255, 255, 0)), Ee(L, "MAGENTA", new ae(255, 0, 255)), Ee(L, "CYAN", new ae(0, 255, 255)), Ee(L, "WHITE", new ae(255, 255, 255)), Ee(L, "BLACK", new ae(0, 0, 0));
  function W(...s) {
    if (s.length === 0)
      return new L(255, 255, 255);
    if (s.length === 1) {
      if (s[0] instanceof L)
        return s[0].clone();
      if (typeof s[0] == "string")
        return L.fromHex(s[0]);
      if (Array.isArray(s[0]) && s[0].length === 3)
        return L.fromArray(s[0]);
    }
    return new L(...s);
  }
  __name(W, "W");
  o(W, "rgb");
  var mr = o((s, t, c) => L.fromHSL(s, t, c), "hsl2rgb");
  var Q = /* @__PURE__ */ __name(class {
    constructor(t, c, g, E) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = t, this.y = c, this.w = g, this.h = E;
    }
    scale(t) {
      return new Q(this.x + this.w * t.x, this.y + this.h * t.y, this.w * t.w, this.h * t.h);
    }
    pos() {
      return new v(this.x, this.y);
    }
    clone() {
      return new Q(this.x, this.y, this.w, this.h);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y && this.w === t.w && this.h === t.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "Q");
  o(Q, "Quad");
  function ue(s, t, c, g) {
    return new Q(s, t, c, g);
  }
  __name(ue, "ue");
  o(ue, "quad");
  var J = /* @__PURE__ */ __name(class {
    constructor(t) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      t && (this.m = t);
    }
    static translate(t) {
      return new J([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t.x, t.y, 0, 1]);
    }
    static scale(t) {
      return new J([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(t) {
      t = Re(-t);
      let c = Math.cos(t), g = Math.sin(t);
      return new J([1, 0, 0, 0, 0, c, -g, 0, 0, g, c, 0, 0, 0, 0, 1]);
    }
    static rotateY(t) {
      t = Re(-t);
      let c = Math.cos(t), g = Math.sin(t);
      return new J([c, 0, g, 0, 0, 1, 0, 0, -g, 0, c, 0, 0, 0, 0, 1]);
    }
    static rotateZ(t) {
      t = Re(-t);
      let c = Math.cos(t), g = Math.sin(t);
      return new J([c, -g, 0, 0, g, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(t) {
      return this.m[12] += this.m[0] * t.x + this.m[4] * t.y, this.m[13] += this.m[1] * t.x + this.m[5] * t.y, this.m[14] += this.m[2] * t.x + this.m[6] * t.y, this.m[15] += this.m[3] * t.x + this.m[7] * t.y, this;
    }
    scale(t) {
      return this.m[0] *= t.x, this.m[4] *= t.y, this.m[1] *= t.x, this.m[5] *= t.y, this.m[2] *= t.x, this.m[6] *= t.y, this.m[3] *= t.x, this.m[7] *= t.y, this;
    }
    rotate(t) {
      t = Re(-t);
      let c = Math.cos(t), g = Math.sin(t), E = this.m[0], M = this.m[1], z = this.m[4], I = this.m[5];
      return this.m[0] = E * c + M * g, this.m[1] = -E * g + M * c, this.m[4] = z * c + I * g, this.m[5] = -z * g + I * c, this;
    }
    mult(t) {
      let c = [];
      for (let g = 0; g < 4; g++)
        for (let E = 0; E < 4; E++)
          c[g * 4 + E] = this.m[0 * 4 + E] * t.m[g * 4 + 0] + this.m[1 * 4 + E] * t.m[g * 4 + 1] + this.m[2 * 4 + E] * t.m[g * 4 + 2] + this.m[3 * 4 + E] * t.m[g * 4 + 3];
      return new J(c);
    }
    multVec2(t) {
      return new v(t.x * this.m[0] + t.y * this.m[4] + this.m[12], t.x * this.m[1] + t.y * this.m[5] + this.m[13]);
    }
    getTranslation() {
      return new v(this.m[12], this.m[13]);
    }
    getScale() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = this.m[0] * this.m[5] - this.m[1] * this.m[4], c = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new v(c, t / c);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = this.m[0] * this.m[5] - this.m[1] * this.m[4], c = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new v(t / c, c);
      } else
        return new v(0, 0);
    }
    getRotation() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return st(this.m[1] > 0 ? Math.acos(this.m[0] / t) : -Math.acos(this.m[0] / t));
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return st(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / t) : -Math.acos(this.m[4] / t)));
      } else
        return 0;
    }
    getSkew() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new v(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (t * t), 0);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new v(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (t * t));
      } else
        return new v(0, 0);
    }
    invert() {
      let t = [], c = this.m[10] * this.m[15] - this.m[14] * this.m[11], g = this.m[9] * this.m[15] - this.m[13] * this.m[11], E = this.m[9] * this.m[14] - this.m[13] * this.m[10], M = this.m[8] * this.m[15] - this.m[12] * this.m[11], z = this.m[8] * this.m[14] - this.m[12] * this.m[10], I = this.m[8] * this.m[13] - this.m[12] * this.m[9], k = this.m[6] * this.m[15] - this.m[14] * this.m[7], Z = this.m[5] * this.m[15] - this.m[13] * this.m[7], ce = this.m[5] * this.m[14] - this.m[13] * this.m[6], U = this.m[4] * this.m[15] - this.m[12] * this.m[7], X = this.m[4] * this.m[14] - this.m[12] * this.m[6], h2 = this.m[5] * this.m[15] - this.m[13] * this.m[7], K = this.m[4] * this.m[13] - this.m[12] * this.m[5], pe = this.m[6] * this.m[11] - this.m[10] * this.m[7], Ge = this.m[5] * this.m[11] - this.m[9] * this.m[7], w2 = this.m[5] * this.m[10] - this.m[9] * this.m[6], le = this.m[4] * this.m[11] - this.m[8] * this.m[7], ge = this.m[4] * this.m[10] - this.m[8] * this.m[6], he = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      t[0] = this.m[5] * c - this.m[6] * g + this.m[7] * E, t[4] = -(this.m[4] * c - this.m[6] * M + this.m[7] * z), t[8] = this.m[4] * g - this.m[5] * M + this.m[7] * I, t[12] = -(this.m[4] * E - this.m[5] * z + this.m[6] * I), t[1] = -(this.m[1] * c - this.m[2] * g + this.m[3] * E), t[5] = this.m[0] * c - this.m[2] * M + this.m[3] * z, t[9] = -(this.m[0] * g - this.m[1] * M + this.m[3] * I), t[13] = this.m[0] * E - this.m[1] * z + this.m[2] * I, t[2] = this.m[1] * k - this.m[2] * Z + this.m[3] * ce, t[6] = -(this.m[0] * k - this.m[2] * U + this.m[3] * X), t[10] = this.m[0] * h2 - this.m[1] * U + this.m[3] * K, t[14] = -(this.m[0] * ce - this.m[1] * X + this.m[2] * K), t[3] = -(this.m[1] * pe - this.m[2] * Ge + this.m[3] * w2), t[7] = this.m[0] * pe - this.m[2] * le + this.m[3] * ge, t[11] = -(this.m[0] * Ge - this.m[1] * le + this.m[3] * he), t[15] = this.m[0] * w2 - this.m[1] * ge + this.m[2] * he;
      let ie = this.m[0] * t[0] + this.m[1] * t[4] + this.m[2] * t[8] + this.m[3] * t[12];
      for (let xe = 0; xe < 4; xe++)
        for (let B = 0; B < 4; B++)
          t[xe * 4 + B] *= 1 / ie;
      return new J(t);
    }
    clone() {
      return new J([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  }, "J");
  o(J, "Mat4");
  function Dn(s, t, c, g = Math.sin) {
    return s + (g(c) + 1) / 2 * (t - s);
  }
  __name(Dn, "Dn");
  o(Dn, "wave");
  var gi = 1103515245;
  var wi = 12345;
  var dr = 2147483648;
  var rt = /* @__PURE__ */ __name(class {
    constructor(t) {
      __publicField(this, "seed");
      this.seed = t;
    }
    gen() {
      return this.seed = (gi * this.seed + wi) % dr, this.seed / dr;
    }
    genNumber(t, c) {
      return t + this.gen() * (c - t);
    }
    genVec2(t, c) {
      return new v(this.genNumber(t.x, c.x), this.genNumber(t.y, c.y));
    }
    genColor(t, c) {
      return new L(this.genNumber(t.r, c.r), this.genNumber(t.g, c.g), this.genNumber(t.b, c.b));
    }
    genAny(...t) {
      if (t.length === 0)
        return this.gen();
      if (t.length === 1) {
        if (typeof t[0] == "number")
          return this.genNumber(0, t[0]);
        if (t[0] instanceof v)
          return this.genVec2(S(0, 0), t[0]);
        if (t[0] instanceof L)
          return this.genColor(W(0, 0, 0), t[0]);
      } else if (t.length === 2) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.genNumber(t[0], t[1]);
        if (t[0] instanceof v && t[1] instanceof v)
          return this.genVec2(t[0], t[1]);
        if (t[0] instanceof L && t[1] instanceof L)
          return this.genColor(t[0], t[1]);
      }
    }
  }, "rt");
  o(rt, "RNG");
  var Mn = new rt(Date.now());
  function pr(s) {
    return s != null && (Mn.seed = s), Mn.seed;
  }
  __name(pr, "pr");
  o(pr, "randSeed");
  function Ut(...s) {
    return Mn.genAny(...s);
  }
  __name(Ut, "Ut");
  o(Ut, "rand");
  function Gn(...s) {
    return Math.floor(Ut(...s));
  }
  __name(Gn, "Gn");
  o(Gn, "randi");
  function gr(s) {
    return Ut() <= s;
  }
  __name(gr, "gr");
  o(gr, "chance");
  function wr(s) {
    return s[Gn(s.length)];
  }
  __name(wr, "wr");
  o(wr, "choose");
  function br(s, t) {
    return s.pos.x + s.width > t.pos.x && s.pos.x < t.pos.x + t.width && s.pos.y + s.height > t.pos.y && s.pos.y < t.pos.y + t.height;
  }
  __name(br, "br");
  o(br, "testRectRect");
  function bi(s, t) {
    if (s.p1.x === s.p2.x && s.p1.y === s.p2.y || t.p1.x === t.p2.x && t.p1.y === t.p2.y)
      return null;
    let c = (t.p2.y - t.p1.y) * (s.p2.x - s.p1.x) - (t.p2.x - t.p1.x) * (s.p2.y - s.p1.y);
    if (c === 0)
      return null;
    let g = ((t.p2.x - t.p1.x) * (s.p1.y - t.p1.y) - (t.p2.y - t.p1.y) * (s.p1.x - t.p1.x)) / c, E = ((s.p2.x - s.p1.x) * (s.p1.y - t.p1.y) - (s.p2.y - s.p1.y) * (s.p1.x - t.p1.x)) / c;
    return g < 0 || g > 1 || E < 0 || E > 1 ? null : g;
  }
  __name(bi, "bi");
  o(bi, "testLineLineT");
  function nt(s, t) {
    let c = bi(s, t);
    return c ? S(s.p1.x + c * (s.p2.x - s.p1.x), s.p1.y + c * (s.p2.y - s.p1.y)) : null;
  }
  __name(nt, "nt");
  o(nt, "testLineLine");
  function vr(s, t) {
    if (xt(s, t.p1) || xt(s, t.p2))
      return true;
    let c = s.points();
    return !!nt(t, new Se(c[0], c[1])) || !!nt(t, new Se(c[1], c[2])) || !!nt(t, new Se(c[2], c[3])) || !!nt(t, new Se(c[3], c[0]));
  }
  __name(vr, "vr");
  o(vr, "testRectLine");
  function xt(s, t) {
    return t.x > s.pos.x && t.x < s.pos.x + s.width && t.y > s.pos.y && t.y < s.pos.y + s.height;
  }
  __name(xt, "xt");
  o(xt, "testRectPoint");
  function yr(s, t) {
    let c = t.sub(s.p1), g = s.p2.sub(s.p1);
    if (Math.abs(c.cross(g)) > Number.EPSILON)
      return false;
    let E = c.dot(g) / g.dot(g);
    return E >= 0 && E <= 1;
  }
  __name(yr, "yr");
  o(yr, "testLinePoint");
  function Fn(s, t) {
    let c = s.p2.sub(s.p1), g = c.dot(c), E = s.p1.sub(t.center), M = 2 * c.dot(E), z = E.dot(E) - t.radius * t.radius, I = M * M - 4 * g * z;
    if (g <= Number.EPSILON || I < 0)
      return false;
    if (I == 0) {
      let k = -M / (2 * g);
      if (k >= 0 && k <= 1)
        return true;
    } else {
      let k = (-M + Math.sqrt(I)) / (2 * g), Z = (-M - Math.sqrt(I)) / (2 * g);
      if (k >= 0 && k <= 1 || Z >= 0 && Z <= 1)
        return true;
    }
    return xr(t, s.p1);
  }
  __name(Fn, "Fn");
  o(Fn, "testLineCircle");
  function xr(s, t) {
    return s.center.sdist(t) < s.radius * s.radius;
  }
  __name(xr, "xr");
  o(xr, "testCirclePoint");
  function Ur(s, t) {
    let c = t.pts[t.pts.length - 1];
    for (let g of t.pts) {
      if (Fn(new Se(c, g), s))
        return true;
      c = g;
    }
    return xr(s, t.pts[0]) ? true : Bn(t, s.center);
  }
  __name(Ur, "Ur");
  o(Ur, "testCirclePolygon");
  function Bn(s, t) {
    let c = false, g = s.pts;
    for (let E = 0, M = g.length - 1; E < g.length; M = E++)
      g[E].y > t.y != g[M].y > t.y && t.x < (g[M].x - g[E].x) * (t.y - g[E].y) / (g[M].y - g[E].y) + g[E].x && (c = !c);
    return c;
  }
  __name(Bn, "Bn");
  o(Bn, "testPolygonPoint");
  var Se = /* @__PURE__ */ __name(class {
    constructor(t, c) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = t.clone(), this.p2 = c.clone();
    }
    transform(t) {
      return new Se(t.multVec2(this.p1), t.multVec2(this.p2));
    }
    bbox() {
      return ne.fromPoints(this.p1, this.p2);
    }
    area() {
      return this.p1.dist(this.p2);
    }
    clone() {
      return new Se(this.p1, this.p2);
    }
  }, "Se");
  o(Se, "Line");
  var ne = /* @__PURE__ */ __name(class {
    constructor(t, c, g) {
      __publicField(this, "pos");
      __publicField(this, "width");
      __publicField(this, "height");
      this.pos = t.clone(), this.width = c, this.height = g;
    }
    static fromPoints(t, c) {
      return new ne(t.clone(), c.x - t.x, c.y - t.y);
    }
    center() {
      return new v(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(t) {
      return new Pe(this.points().map((c) => t.multVec2(c)));
    }
    bbox() {
      return this.clone();
    }
    area() {
      return this.width * this.height;
    }
    clone() {
      return new ne(this.pos.clone(), this.width, this.height);
    }
    distToPoint(t) {
      return Math.sqrt(this.sdistToPoint(t));
    }
    sdistToPoint(t) {
      let c = this.pos, g = this.pos.add(this.width, this.height), E = Math.max(c.x - t.x, 0, t.x - g.x), M = Math.max(c.y - t.y, 0, t.y - g.y);
      return E * E + M * M;
    }
  }, "ne");
  o(ne, "Rect");
  var ke = /* @__PURE__ */ __name(class {
    constructor(t, c) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = t.clone(), this.radius = c;
    }
    transform(t) {
      return new Ye(this.center, this.radius, this.radius).transform(t);
    }
    bbox() {
      return ne.fromPoints(this.center.sub(S(this.radius)), this.center.add(S(this.radius)));
    }
    area() {
      return this.radius * this.radius * Math.PI;
    }
    clone() {
      return new ke(this.center, this.radius);
    }
  }, "ke");
  o(ke, "Circle");
  var Ye = /* @__PURE__ */ __name(class {
    constructor(t, c, g) {
      __publicField(this, "center");
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      this.center = t.clone(), this.radiusX = c, this.radiusY = g;
    }
    transform(t) {
      return new Ye(t.multVec2(this.center), t.m[0] * this.radiusX, t.m[5] * this.radiusY);
    }
    bbox() {
      return ne.fromPoints(this.center.sub(S(this.radiusX, this.radiusY)), this.center.add(S(this.radiusX, this.radiusY)));
    }
    area() {
      return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
      return new Ye(this.center, this.radiusX, this.radiusY);
    }
  }, "Ye");
  o(Ye, "Ellipse");
  var Pe = /* @__PURE__ */ __name(class {
    constructor(t) {
      __publicField(this, "pts");
      if (t.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = t;
    }
    transform(t) {
      return new Pe(this.pts.map((c) => t.multVec2(c)));
    }
    bbox() {
      let t = S(Number.MAX_VALUE), c = S(-Number.MAX_VALUE);
      for (let g of this.pts)
        t.x = Math.min(t.x, g.x), c.x = Math.max(c.x, g.x), t.y = Math.min(t.y, g.y), c.y = Math.max(c.y, g.y);
      return ne.fromPoints(t, c);
    }
    area() {
      let t = 0, c = this.pts.length;
      for (let g = 0; g < c; g++) {
        let E = this.pts[g], M = this.pts[(g + 1) % c];
        t += E.x * M.y * 0.5, t -= M.x * E.y * 0.5;
      }
      return Math.abs(t);
    }
    clone() {
      return new Pe(this.pts.map((t) => t.clone()));
    }
  }, "Pe");
  o(Pe, "Polygon");
  function Er(s, t) {
    let c = Number.MAX_VALUE, g = S(0);
    for (let E of [s, t])
      for (let M = 0; M < E.pts.length; M++) {
        let z = E.pts[M], k = E.pts[(M + 1) % E.pts.length].sub(z).normal().unit(), Z = Number.MAX_VALUE, ce = -Number.MAX_VALUE;
        for (let K = 0; K < s.pts.length; K++) {
          let pe = s.pts[K].dot(k);
          Z = Math.min(Z, pe), ce = Math.max(ce, pe);
        }
        let U = Number.MAX_VALUE, X = -Number.MAX_VALUE;
        for (let K = 0; K < t.pts.length; K++) {
          let pe = t.pts[K].dot(k);
          U = Math.min(U, pe), X = Math.max(X, pe);
        }
        let h2 = Math.min(ce, X) - Math.max(Z, U);
        if (h2 < 0)
          return null;
        if (h2 < Math.abs(c)) {
          let K = X - Z, pe = U - ce;
          c = Math.abs(K) < Math.abs(pe) ? K : pe, g = k.scale(c);
        }
      }
    return g;
  }
  __name(Er, "Er");
  o(Er, "sat");
  var it = /* @__PURE__ */ __name(class extends Map {
    constructor(...t) {
      super(...t);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(t) {
      let c = this.lastID;
      return this.set(c, t), this.lastID++, c;
    }
    pushd(t) {
      let c = this.push(t);
      return () => this.delete(c);
    }
  }, "it");
  o(it, "IDList");
  var Ae = /* @__PURE__ */ __name(class {
    constructor(t) {
      __publicField(this, "paused", false);
      __publicField(this, "cancel");
      this.cancel = t;
    }
    static join(t) {
      let c = new Ae(() => t.forEach((g) => g.cancel()));
      return Object.defineProperty(c, "paused", { get: () => t[0].paused, set: (g) => t.forEach((E) => E.paused = g) }), c.paused = false, c;
    }
  }, "Ae");
  o(Ae, "EventController");
  var ve = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", new it());
    }
    add(t) {
      let c = this.handlers.pushd((...E) => {
        g.paused || t(...E);
      }), g = new Ae(c);
      return g;
    }
    addOnce(t) {
      let c = this.add((...g) => {
        c.cancel(), t(...g);
      });
      return c;
    }
    next() {
      return new Promise((t) => this.addOnce(t));
    }
    trigger(...t) {
      this.handlers.forEach((c) => c(...t));
    }
    numListeners() {
      return this.handlers.size;
    }
  }, "ve");
  o(ve, "Event");
  var De = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", {});
    }
    on(t, c) {
      return this.handlers[t] || (this.handlers[t] = new ve()), this.handlers[t].add(c);
    }
    onOnce(t, c) {
      let g = this.on(t, (...E) => {
        g.cancel(), c(...E);
      });
      return g;
    }
    next(t) {
      return new Promise((c) => {
        this.onOnce(t, (...g) => c(g[0]));
      });
    }
    trigger(t, ...c) {
      this.handlers[t] && this.handlers[t].trigger(...c);
    }
    remove(t) {
      delete this.handlers[t];
    }
    clear() {
      this.handlers = {};
    }
    numListeners(t) {
      var _a, _b;
      return (_b = (_a = this.handlers[t]) == null ? void 0 : _a.numListeners()) != null ? _b : 0;
    }
  }, "De");
  o(De, "EventHandler");
  function Ln(s, t) {
    let c = typeof s, g = typeof t;
    if (c !== g)
      return false;
    if (c === "object" && g === "object" && s !== null && t !== null) {
      let E = Object.keys(s), M = Object.keys(t);
      if (E.length !== M.length)
        return false;
      for (let z of E) {
        let I = s[z], k = t[z];
        if (!(typeof I == "function" && typeof k == "function") && !Ln(I, k))
          return false;
      }
      return true;
    }
    return s === t;
  }
  __name(Ln, "Ln");
  o(Ln, "deepEq");
  function vi(s) {
    let t = window.atob(s), c = t.length, g = new Uint8Array(c);
    for (let E = 0; E < c; E++)
      g[E] = t.charCodeAt(E);
    return g.buffer;
  }
  __name(vi, "vi");
  o(vi, "base64ToArrayBuffer");
  function Sr(s) {
    return vi(s.split(",")[1]);
  }
  __name(Sr, "Sr");
  o(Sr, "dataURLToArrayBuffer");
  function zt(s, t) {
    let c = document.createElement("a");
    c.href = t, c.download = s, c.click();
  }
  __name(zt, "zt");
  o(zt, "download");
  function In(s, t) {
    zt(s, "data:text/plain;charset=utf-8," + t);
  }
  __name(In, "In");
  o(In, "downloadText");
  function Cr(s, t) {
    In(s, JSON.stringify(t));
  }
  __name(Cr, "Cr");
  o(Cr, "downloadJSON");
  function Vn(s, t) {
    let c = URL.createObjectURL(t);
    zt(s, c), URL.revokeObjectURL(c);
  }
  __name(Vn, "Vn");
  o(Vn, "downloadBlob");
  var jn = o((s) => s.match(/^data:\w+\/\w+;base64,.+/), "isDataURL");
  var Tr = o((s) => s.split(".").pop(), "getExt");
  var Ar = (() => {
    let s = 0;
    return () => s++;
  })();
  var Et = /* @__PURE__ */ __name(class {
    constructor(t = (c, g) => c < g) {
      __publicField(this, "_items");
      __publicField(this, "_compareFn");
      this._compareFn = t, this._items = [];
    }
    insert(t) {
      this._items.push(t), this.moveUp(this._items.length - 1);
    }
    remove() {
      if (this._items.length === 0)
        return null;
      let t = this._items[0], c = this._items.pop();
      return this._items.length !== 0 && (this._items[0] = c, this.moveDown(0)), t;
    }
    clear() {
      this._items.splice(0, this._items.length);
    }
    moveUp(t) {
      for (; t > 0; ) {
        let c = Math.floor((t - 1) / 2);
        if (!this._compareFn(this._items[t], this._items[c]) && this._items[t] >= this._items[c])
          break;
        this.swap(t, c), t = c;
      }
    }
    moveDown(t) {
      for (; t < Math.floor(this._items.length / 2); ) {
        let c = 2 * t + 1;
        if (c < this._items.length - 1 && !this._compareFn(this._items[c], this._items[c + 1]) && ++c, this._compareFn(this._items[t], this._items[c]))
          break;
        this.swap(t, c), t = c;
      }
    }
    swap(t, c) {
      [this._items[t], this._items[c]] = [this._items[c], this._items[t]];
    }
    get length() {
      return this._items.length;
    }
  }, "Et");
  o(Et, "BinaryHeap");
  var Nn = { "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "select", "10": "lstick", "16": "start" }, sticks: { left: { x: 0, y: 1 } } }, "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "start", "10": "lstick", "16": "select" }, sticks: { left: { x: 0, y: 1 } } }, "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, default: { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } } };
  var Xe = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "pressed", /* @__PURE__ */ new Set([]));
      __publicField(this, "pressedRepeat", /* @__PURE__ */ new Set([]));
      __publicField(this, "released", /* @__PURE__ */ new Set([]));
      __publicField(this, "down", /* @__PURE__ */ new Set([]));
    }
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(t) {
      this.pressed.add(t), this.pressedRepeat.add(t), this.down.add(t);
    }
    pressRepeat(t) {
      this.pressedRepeat.add(t);
    }
    release(t) {
      this.down.delete(t), this.pressed.delete(t), this.released.add(t);
    }
  }, "Xe");
  o(Xe, "ButtonState");
  var Kt = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "buttonState", new Xe());
      __publicField(this, "stickState", /* @__PURE__ */ new Map());
    }
  }, "Kt");
  o(Kt, "GamepadState");
  var Yt = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(t) {
      this.dts.push(t), this.timer += t, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((c, g) => c + g) / this.dts.length)), this.dts = []);
    }
  }, "Yt");
  o(Yt, "FPSCounter");
  var Or = o((s) => {
    if (!s.canvas)
      throw new Error("Please provide a canvas");
    let t = { canvas: s.canvas, loopID: null, stopped: false, dt: 0, time: 0, realTime: 0, fpsCounter: new Yt(), timeScale: 1, skipTime: false, numFrames: 0, paused: false, mousePos: new v(0), mouseDeltaPos: new v(0), keyState: new Xe(), mouseState: new Xe(), mergedGamepadState: new Kt(), gamepadStates: /* @__PURE__ */ new Map(), gamepads: [], charInputted: [], isMouseMoved: false, lastWidth: s.canvas.offsetWidth, lastHeight: s.canvas.offsetHeight, events: new De() };
    function c() {
      return t.canvas;
    }
    __name(c, "c");
    o(c, "canvas");
    function g() {
      return t.dt * t.timeScale;
    }
    __name(g, "g");
    o(g, "dt");
    function E() {
      return t.time;
    }
    __name(E, "E");
    o(E, "time");
    function M() {
      return t.fpsCounter.fps;
    }
    __name(M, "M");
    o(M, "fps");
    function z() {
      return t.numFrames;
    }
    __name(z, "z");
    o(z, "numFrames");
    function I() {
      return t.canvas.toDataURL();
    }
    __name(I, "I");
    o(I, "screenshot");
    function k(d) {
      t.canvas.style.cursor = d;
    }
    __name(k, "k");
    o(k, "setCursor");
    function Z() {
      return t.canvas.style.cursor;
    }
    __name(Z, "Z");
    o(Z, "getCursor");
    function ce(d) {
      if (d)
        try {
          let b = t.canvas.requestPointerLock();
          b.catch && b.catch((C) => console.error(C));
        } catch (b) {
          console.error(b);
        }
      else
        document.exitPointerLock();
    }
    __name(ce, "ce");
    o(ce, "setCursorLocked");
    function U() {
      return !!document.pointerLockElement;
    }
    __name(U, "U");
    o(U, "isCursorLocked");
    function X(d) {
      d.requestFullscreen ? d.requestFullscreen() : d.webkitRequestFullscreen && d.webkitRequestFullscreen();
    }
    __name(X, "X");
    o(X, "enterFullscreen");
    function h2() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    __name(h2, "h");
    o(h2, "exitFullscreen");
    function K() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }
    __name(K, "K");
    o(K, "getFullscreenElement");
    function pe(d = true) {
      d ? X(t.canvas) : h2();
    }
    __name(pe, "pe");
    o(pe, "setFullscreen");
    function Ge() {
      return !!K();
    }
    __name(Ge, "Ge");
    o(Ge, "isFullscreen");
    function w2() {
      t.stopped = true;
      for (let d in de)
        t.canvas.removeEventListener(d, de[d]);
      for (let d in Be)
        document.removeEventListener(d, Be[d]);
      for (let d in fe)
        window.removeEventListener(d, fe[d]);
      Bt.disconnect();
    }
    __name(w2, "w");
    o(w2, "quit");
    function le(d) {
      t.loopID !== null && cancelAnimationFrame(t.loopID);
      let b = 0, C = o((ee) => {
        if (t.stopped)
          return;
        if (t.paused || document.visibilityState !== "visible") {
          t.loopID = requestAnimationFrame(C);
          return;
        }
        let re = ee / 1e3, V = re - t.realTime, Oe = s.maxFPS ? 1 / s.maxFPS : 0;
        t.realTime = re, b += V, b > Oe && (t.skipTime || (t.dt = b, t.time += g(), t.fpsCounter.tick(t.dt)), b = 0, t.skipTime = false, t.numFrames++, Gt(), d(), pn()), t.loopID = requestAnimationFrame(C);
      }, "frame");
      C(0);
    }
    __name(le, "le");
    o(le, "run");
    function ge() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    __name(ge, "ge");
    o(ge, "isTouchscreen");
    function he() {
      return t.mousePos.clone();
    }
    __name(he, "he");
    o(he, "mousePos");
    function ie() {
      return t.mouseDeltaPos.clone();
    }
    __name(ie, "ie");
    o(ie, "mouseDeltaPos");
    function xe(d = "left") {
      return t.mouseState.pressed.has(d);
    }
    __name(xe, "xe");
    o(xe, "isMousePressed");
    function B(d = "left") {
      return t.mouseState.down.has(d);
    }
    __name(B, "B");
    o(B, "isMouseDown");
    function T(d = "left") {
      return t.mouseState.released.has(d);
    }
    __name(T, "T");
    o(T, "isMouseReleased");
    function ct() {
      return t.isMouseMoved;
    }
    __name(ct, "ct");
    o(ct, "isMouseMoved");
    function Fe(d) {
      return d === void 0 ? t.keyState.pressed.size > 0 : t.keyState.pressed.has(d);
    }
    __name(Fe, "Fe");
    o(Fe, "isKeyPressed");
    function en(d) {
      return d === void 0 ? t.keyState.pressedRepeat.size > 0 : t.keyState.pressedRepeat.has(d);
    }
    __name(en, "en");
    o(en, "isKeyPressedRepeat");
    function lt(d) {
      return d === void 0 ? t.keyState.down.size > 0 : t.keyState.down.has(d);
    }
    __name(lt, "lt");
    o(lt, "isKeyDown");
    function We(d) {
      return d === void 0 ? t.keyState.released.size > 0 : t.keyState.released.has(d);
    }
    __name(We, "We");
    o(We, "isKeyReleased");
    function tn(d) {
      return d === void 0 ? t.mergedGamepadState.buttonState.pressed.size > 0 : t.mergedGamepadState.buttonState.pressed.has(d);
    }
    __name(tn, "tn");
    o(tn, "isGamepadButtonPressed");
    function nn(d) {
      return d === void 0 ? t.mergedGamepadState.buttonState.down.size > 0 : t.mergedGamepadState.buttonState.down.has(d);
    }
    __name(nn, "nn");
    o(nn, "isGamepadButtonDown");
    function Je(d) {
      return d === void 0 ? t.mergedGamepadState.buttonState.released.size > 0 : t.mergedGamepadState.buttonState.released.has(d);
    }
    __name(Je, "Je");
    o(Je, "isGamepadButtonReleased");
    function rn(d) {
      return t.events.on("resize", d);
    }
    __name(rn, "rn");
    o(rn, "onResize");
    let _e = o((d, b) => {
      if (typeof d == "function")
        return t.events.on("keyDown", d);
      if (typeof d == "string" && typeof b == "function")
        return t.events.on("keyDown", (C) => C === d && b(d));
    }, "onKeyDown"), sn = o((d, b) => {
      if (typeof d == "function")
        return t.events.on("keyPress", d);
      if (typeof d == "string" && typeof b == "function")
        return t.events.on("keyPress", (C) => C === d && b(d));
    }, "onKeyPress"), on = o((d, b) => {
      if (typeof d == "function")
        return t.events.on("keyPressRepeat", d);
      if (typeof d == "string" && typeof b == "function")
        return t.events.on("keyPressRepeat", (C) => C === d && b(d));
    }, "onKeyPressRepeat"), St = o((d, b) => {
      if (typeof d == "function")
        return t.events.on("keyRelease", d);
      if (typeof d == "string" && typeof b == "function")
        return t.events.on("keyRelease", (C) => C === d && b(d));
    }, "onKeyRelease");
    function Ct(d, b) {
      return typeof d == "function" ? t.events.on("mouseDown", (C) => d(C)) : t.events.on("mouseDown", (C) => C === d && b(C));
    }
    __name(Ct, "Ct");
    o(Ct, "onMouseDown");
    function Tt(d, b) {
      return typeof d == "function" ? t.events.on("mousePress", (C) => d(C)) : t.events.on("mousePress", (C) => C === d && b(C));
    }
    __name(Tt, "Tt");
    o(Tt, "onMousePress");
    function He(d, b) {
      return typeof d == "function" ? t.events.on("mouseRelease", (C) => d(C)) : t.events.on("mouseRelease", (C) => C === d && b(C));
    }
    __name(He, "He");
    o(He, "onMouseRelease");
    function an(d) {
      return t.events.on("mouseMove", () => d(he(), ie()));
    }
    __name(an, "an");
    o(an, "onMouseMove");
    function un(d) {
      return t.events.on("charInput", d);
    }
    __name(un, "un");
    o(un, "onCharInput");
    function cn(d) {
      return t.events.on("touchStart", d);
    }
    __name(cn, "cn");
    o(cn, "onTouchStart");
    function ln(d) {
      return t.events.on("touchMove", d);
    }
    __name(ln, "ln");
    o(ln, "onTouchMove");
    function hn(d) {
      return t.events.on("touchEnd", d);
    }
    __name(hn, "hn");
    o(hn, "onTouchEnd");
    function dn(d) {
      return t.events.on("scroll", d);
    }
    __name(dn, "dn");
    o(dn, "onScroll");
    function At(d, b) {
      if (typeof d == "function")
        return t.events.on("gamepadButtonDown", d);
      if (typeof d == "string" && typeof b == "function")
        return t.events.on("gamepadButtonDown", (C) => C === d && b(d));
    }
    __name(At, "At");
    o(At, "onGamepadButtonDown");
    function Ot(d, b) {
      if (typeof d == "function")
        return t.events.on("gamepadButtonPress", d);
      if (typeof d == "string" && typeof b == "function")
        return t.events.on("gamepadButtonPress", (C) => C === d && b(d));
    }
    __name(Ot, "Ot");
    o(Ot, "onGamepadButtonPress");
    function Pt(d, b) {
      if (typeof d == "function")
        return t.events.on("gamepadButtonRelease", d);
      if (typeof d == "string" && typeof b == "function")
        return t.events.on("gamepadButtonRelease", (C) => C === d && b(d));
    }
    __name(Pt, "Pt");
    o(Pt, "onGamepadButtonRelease");
    function Rt(d, b) {
      return t.events.on("gamepadStick", (C, ee) => C === d && b(ee));
    }
    __name(Rt, "Rt");
    o(Rt, "onGamepadStick");
    function Mt(d) {
      t.events.on("gamepadConnect", d);
    }
    __name(Mt, "Mt");
    o(Mt, "onGamepadConnect");
    function fn(d) {
      t.events.on("gamepadDisconnect", d);
    }
    __name(fn, "fn");
    o(fn, "onGamepadDisconnect");
    function ht(d) {
      return t.mergedGamepadState.stickState.get(d) || new v(0);
    }
    __name(ht, "ht");
    o(ht, "getGamepadStick");
    function mn() {
      return [...t.charInputted];
    }
    __name(mn, "mn");
    o(mn, "charInputted");
    function Dt() {
      return [...t.gamepads];
    }
    __name(Dt, "Dt");
    o(Dt, "getGamepads");
    function Gt() {
      t.events.trigger("input"), t.keyState.down.forEach((d) => t.events.trigger("keyDown", d)), t.mouseState.down.forEach((d) => t.events.trigger("mouseDown", d)), ft();
    }
    __name(Gt, "Gt");
    o(Gt, "processInput");
    function pn() {
      t.keyState.update(), t.mouseState.update(), t.mergedGamepadState.buttonState.update(), t.mergedGamepadState.stickState.forEach((d, b) => {
        t.mergedGamepadState.stickState.set(b, new v(0));
      }), t.charInputted = [], t.isMouseMoved = false, t.gamepadStates.forEach((d) => {
        d.buttonState.update(), d.stickState.forEach((b, C) => {
          d.stickState.set(C, new v(0));
        });
      });
    }
    __name(pn, "pn");
    o(pn, "resetInput");
    function dt(d) {
      let b = { index: d.index, isPressed: (C) => t.gamepadStates.get(d.index).buttonState.pressed.has(C), isDown: (C) => t.gamepadStates.get(d.index).buttonState.down.has(C), isReleased: (C) => t.gamepadStates.get(d.index).buttonState.released.has(C), getStick: (C) => t.gamepadStates.get(d.index).stickState.get(C) };
      return t.gamepads.push(b), t.gamepadStates.set(d.index, { buttonState: new Xe(), stickState: /* @__PURE__ */ new Map([["left", new v(0)], ["right", new v(0)]]) }), b;
    }
    __name(dt, "dt");
    o(dt, "registerGamepad");
    function Ft(d) {
      t.gamepads = t.gamepads.filter((b) => b.index !== d.index), t.gamepadStates.delete(d.index);
    }
    __name(Ft, "Ft");
    o(Ft, "removeGamepad");
    function ft() {
      var _a, _b, _c;
      for (let d of navigator.getGamepads())
        d && !t.gamepadStates.has(d.index) && dt(d);
      for (let d of t.gamepads) {
        let b = navigator.getGamepads()[d.index], ee = (_c = (_b = ((_a = s.gamepads) != null ? _a : {})[b.id]) != null ? _b : Nn[b.id]) != null ? _c : Nn.default, re = t.gamepadStates.get(d.index);
        for (let V = 0; V < b.buttons.length; V++)
          b.buttons[V].pressed ? (re.buttonState.down.has(ee.buttons[V]) || (t.mergedGamepadState.buttonState.press(ee.buttons[V]), re.buttonState.press(ee.buttons[V]), t.events.trigger("gamepadButtonPress", ee.buttons[V])), t.events.trigger("gamepadButtonDown", ee.buttons[V])) : re.buttonState.down.has(ee.buttons[V]) && (t.mergedGamepadState.buttonState.release(ee.buttons[V]), re.buttonState.release(ee.buttons[V]), t.events.trigger("gamepadButtonRelease", ee.buttons[V]));
        for (let V in ee.sticks) {
          let Oe = ee.sticks[V], Ie = new v(b.axes[Oe.x], b.axes[Oe.y]);
          re.stickState.set(V, Ie), t.mergedGamepadState.stickState.set(V, Ie), t.events.trigger("gamepadStick", V, Ie);
        }
      }
    }
    __name(ft, "ft");
    o(ft, "processGamepad");
    let de = {}, Be = {}, fe = {};
    de.mousemove = (d) => {
      let b = new v(d.offsetX, d.offsetY), C = new v(d.movementX, d.movementY);
      t.events.onOnce("input", () => {
        t.isMouseMoved = true, t.mousePos = b, t.mouseDeltaPos = C, t.events.trigger("mouseMove");
      });
    };
    let mt = ["left", "middle", "right", "back", "forward"];
    de.mousedown = (d) => {
      t.events.onOnce("input", () => {
        let b = mt[d.button];
        b && (t.mouseState.press(b), t.events.trigger("mousePress", b));
      });
    }, de.mouseup = (d) => {
      t.events.onOnce("input", () => {
        let b = mt[d.button];
        b && (t.mouseState.release(b), t.events.trigger("mouseRelease", b));
      });
    };
    let gn = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]), pt = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
    de.keydown = (d) => {
      gn.has(d.key) && d.preventDefault(), t.events.onOnce("input", () => {
        let b = pt[d.key] || d.key.toLowerCase();
        b.length === 1 ? (t.events.trigger("charInput", b), t.charInputted.push(b)) : b === "space" && (t.events.trigger("charInput", " "), t.charInputted.push(" ")), d.repeat ? (t.keyState.pressRepeat(b), t.events.trigger("keyPressRepeat", b)) : (t.keyState.press(b), t.events.trigger("keyPressRepeat", b), t.events.trigger("keyPress", b));
      });
    }, de.keyup = (d) => {
      t.events.onOnce("input", () => {
        let b = pt[d.key] || d.key.toLowerCase();
        t.keyState.release(b), t.events.trigger("keyRelease", b);
      });
    }, de.touchstart = (d) => {
      d.preventDefault(), t.events.onOnce("input", () => {
        let b = [...d.changedTouches];
        b.forEach((C) => {
          t.events.trigger("touchStart", new v(C.clientX, C.clientY), C);
        }), s.touchToMouse !== false && (t.mousePos = new v(b[0].clientX, b[0].clientY), t.mouseState.press("left"), t.events.trigger("mousePress", "left"));
      });
    }, de.touchmove = (d) => {
      d.preventDefault(), t.events.onOnce("input", () => {
        let b = [...d.changedTouches];
        b.forEach((C) => {
          t.events.trigger("touchMove", new v(C.clientX, C.clientY), C);
        }), s.touchToMouse !== false && (t.mousePos = new v(b[0].clientX, b[0].clientY), t.events.trigger("mouseMove"));
      });
    }, de.touchend = (d) => {
      t.events.onOnce("input", () => {
        let b = [...d.changedTouches];
        b.forEach((C) => {
          t.events.trigger("touchEnd", new v(C.clientX, C.clientY), C);
        }), s.touchToMouse !== false && (t.mousePos = new v(b[0].clientX, b[0].clientY), t.mouseState.release("left"), t.events.trigger("mouseRelease", "left"));
      });
    }, de.touchcancel = (d) => {
      t.events.onOnce("input", () => {
        let b = [...d.changedTouches];
        b.forEach((C) => {
          t.events.trigger("touchEnd", new v(C.clientX, C.clientY), C);
        }), s.touchToMouse !== false && (t.mousePos = new v(b[0].clientX, b[0].clientY), t.mouseState.release("left"), t.events.trigger("mouseRelease", "left"));
      });
    }, de.wheel = (d) => {
      d.preventDefault(), t.events.onOnce("input", () => {
        t.events.trigger("scroll", new v(d.deltaX, d.deltaY));
      });
    }, de.contextmenu = (d) => d.preventDefault(), Be.visibilitychange = () => {
      document.visibilityState === "visible" && (t.skipTime = true);
    }, fe.gamepadconnected = (d) => {
      let b = dt(d.gamepad);
      t.events.onOnce("input", () => {
        t.events.trigger("gamepadConnect", b);
      });
    }, fe.gamepaddisconnected = (d) => {
      let b = Dt().filter((C) => C.index === d.gamepad.index)[0];
      Ft(d.gamepad), t.events.onOnce("input", () => {
        t.events.trigger("gamepadDisconnect", b);
      });
    };
    for (let d in de)
      t.canvas.addEventListener(d, de[d]);
    for (let d in Be)
      document.addEventListener(d, Be[d]);
    for (let d in fe)
      window.addEventListener(d, fe[d]);
    let Bt = new ResizeObserver((d) => {
      for (let b of d)
        if (b.target === t.canvas) {
          if (t.lastWidth === t.canvas.offsetWidth && t.lastHeight === t.canvas.offsetHeight)
            return;
          t.lastWidth = t.canvas.offsetWidth, t.lastHeight = t.canvas.offsetHeight, t.events.onOnce("input", () => {
            t.events.trigger("resize");
          });
        }
    });
    return Bt.observe(t.canvas), { dt: g, time: E, run: le, canvas: c, fps: M, numFrames: z, quit: w2, setFullscreen: pe, isFullscreen: Ge, setCursor: k, screenshot: I, getGamepads: Dt, getCursor: Z, setCursorLocked: ce, isCursorLocked: U, isTouchscreen: ge, mousePos: he, mouseDeltaPos: ie, isKeyDown: lt, isKeyPressed: Fe, isKeyPressedRepeat: en, isKeyReleased: We, isMouseDown: B, isMousePressed: xe, isMouseReleased: T, isMouseMoved: ct, isGamepadButtonPressed: tn, isGamepadButtonDown: nn, isGamepadButtonReleased: Je, getGamepadStick: ht, charInputted: mn, onResize: rn, onKeyDown: _e, onKeyPress: sn, onKeyPressRepeat: on, onKeyRelease: St, onMouseDown: Ct, onMousePress: Tt, onMouseRelease: He, onMouseMove: an, onCharInput: un, onTouchStart: cn, onTouchMove: ln, onTouchEnd: hn, onScroll: dn, onGamepadButtonDown: At, onGamepadButtonPress: Ot, onGamepadButtonRelease: Pt, onGamepadStick: Rt, onGamepadConnect: Mt, onGamepadDisconnect: fn, events: t.events, get paused() {
      return t.paused;
    }, set paused(d) {
      t.paused = d;
    } };
  }, "default");
  var Xt = 2.5949095;
  var Pr = 1.70158 + 1;
  var Rr = 2 * Math.PI / 3;
  var Mr = 2 * Math.PI / 4.5;
  var Wt = { linear: (s) => s, easeInSine: (s) => 1 - Math.cos(s * Math.PI / 2), easeOutSine: (s) => Math.sin(s * Math.PI / 2), easeInOutSine: (s) => -(Math.cos(Math.PI * s) - 1) / 2, easeInQuad: (s) => s * s, easeOutQuad: (s) => 1 - (1 - s) * (1 - s), easeInOutQuad: (s) => s < 0.5 ? 2 * s * s : 1 - Math.pow(-2 * s + 2, 2) / 2, easeInCubic: (s) => s * s * s, easeOutCubic: (s) => 1 - Math.pow(1 - s, 3), easeInOutCubic: (s) => s < 0.5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2, easeInQuart: (s) => s * s * s * s, easeOutQuart: (s) => 1 - Math.pow(1 - s, 4), easeInOutQuart: (s) => s < 0.5 ? 8 * s * s * s * s : 1 - Math.pow(-2 * s + 2, 4) / 2, easeInQuint: (s) => s * s * s * s * s, easeOutQuint: (s) => 1 - Math.pow(1 - s, 5), easeInOutQuint: (s) => s < 0.5 ? 16 * s * s * s * s * s : 1 - Math.pow(-2 * s + 2, 5) / 2, easeInExpo: (s) => s === 0 ? 0 : Math.pow(2, 10 * s - 10), easeOutExpo: (s) => s === 1 ? 1 : 1 - Math.pow(2, -10 * s), easeInOutExpo: (s) => s === 0 ? 0 : s === 1 ? 1 : s < 0.5 ? Math.pow(2, 20 * s - 10) / 2 : (2 - Math.pow(2, -20 * s + 10)) / 2, easeInCirc: (s) => 1 - Math.sqrt(1 - Math.pow(s, 2)), easeOutCirc: (s) => Math.sqrt(1 - Math.pow(s - 1, 2)), easeInOutCirc: (s) => s < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * s, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * s + 2, 2)) + 1) / 2, easeInBack: (s) => Pr * s * s * s - 1.70158 * s * s, easeOutBack: (s) => 1 + Pr * Math.pow(s - 1, 3) + 1.70158 * Math.pow(s - 1, 2), easeInOutBack: (s) => s < 0.5 ? Math.pow(2 * s, 2) * ((Xt + 1) * 2 * s - Xt) / 2 : (Math.pow(2 * s - 2, 2) * ((Xt + 1) * (s * 2 - 2) + Xt) + 2) / 2, easeInElastic: (s) => s === 0 ? 0 : s === 1 ? 1 : -Math.pow(2, 10 * s - 10) * Math.sin((s * 10 - 10.75) * Rr), easeOutElastic: (s) => s === 0 ? 0 : s === 1 ? 1 : Math.pow(2, -10 * s) * Math.sin((s * 10 - 0.75) * Rr) + 1, easeInOutElastic: (s) => s === 0 ? 0 : s === 1 ? 1 : s < 0.5 ? -(Math.pow(2, 20 * s - 10) * Math.sin((20 * s - 11.125) * Mr)) / 2 : Math.pow(2, -20 * s + 10) * Math.sin((20 * s - 11.125) * Mr) / 2 + 1, easeInBounce: (s) => 1 - Wt.easeOutBounce(1 - s), easeOutBounce: (s) => s < 1 / 2.75 ? 7.5625 * s * s : s < 2 / 2.75 ? 7.5625 * (s -= 1.5 / 2.75) * s + 0.75 : s < 2.5 / 2.75 ? 7.5625 * (s -= 2.25 / 2.75) * s + 0.9375 : 7.5625 * (s -= 2.625 / 2.75) * s + 0.984375, easeInOutBounce: (s) => s < 0.5 ? (1 - Wt.easeOutBounce(1 - 2 * s)) / 2 : (1 + Wt.easeOutBounce(2 * s - 1)) / 2 };
  var ot = Wt;
  var at = /* @__PURE__ */ __name(class {
    constructor(t, c) {
      __publicField(this, "time");
      __publicField(this, "action");
      __publicField(this, "finished", false);
      __publicField(this, "paused", false);
      this.time = t, this.action = c;
    }
    tick(t) {
      return this.finished || this.paused ? false : (this.time -= t, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(t) {
      this.time = t, this.finished = false;
    }
  }, "at");
  o(at, "Timer");
  var Dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Ui = {};
  mi(Ui, { default: () => kn });
  var kn = pi("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var Gr = "data:image/png;base64,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";
  var Fr = "data:image/png;base64,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";
  var Ti = "3000.0.11";
  var Br = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var Jt = "topleft";
  var Lr = 64;
  var Ai = "monospace";
  var Qt = "monospace";
  var Oi = 36;
  var Ir = 64;
  var Vr = 256;
  var jr = 2048;
  var Nr = 2048;
  var kr = 2048;
  var _r = 2048;
  var Hr = 0.1;
  var Pi = 64;
  var qr = "nearest";
  var Ri = 1;
  var Kr = [{ name: "a_pos", size: 2 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var Zt = Kr.reduce((s, t) => s + t.size, 0);
  var Yr = 2048;
  var $r = Yr * 4 * Zt;
  var zr = Yr * 6;
  var Mi = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var Di = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var _n = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var Hn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var Gi = /* @__PURE__ */ new Set(["id", "require"]);
  var Fi = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function ut(s) {
    switch (s) {
      case "topleft":
        return new v(-1, -1);
      case "top":
        return new v(0, -1);
      case "topright":
        return new v(1, -1);
      case "left":
        return new v(-1, 0);
      case "center":
        return new v(0, 0);
      case "right":
        return new v(1, 0);
      case "botleft":
        return new v(-1, 1);
      case "bot":
        return new v(0, 1);
      case "botright":
        return new v(1, 1);
      default:
        return s;
    }
  }
  __name(ut, "ut");
  o(ut, "anchorPt");
  function Bi(s) {
    switch (s) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  __name(Bi, "Bi");
  o(Bi, "alignPt");
  function Li(s) {
    return s.createBuffer(1, 1, 44100);
  }
  __name(Li, "Li");
  o(Li, "createEmptyAudioBuffer");
  var mo = o((s = {}) => {
    var _a, _b, _c;
    let t = (_a = s.root) != null ? _a : document.body;
    t === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let c = (_b = s.canvas) != null ? _b : (() => {
      let e = document.createElement("canvas");
      return t.appendChild(e), e;
    })(), g = (_c = s.scale) != null ? _c : 1, E = s.width && s.height && !s.stretch && !s.letterbox;
    E ? (c.width = s.width * g, c.height = s.height * g) : (c.width = c.parentElement.offsetWidth, c.height = c.parentElement.offsetHeight);
    let M = c.width, z = c.height, I = s.pixelDensity || window.devicePixelRatio;
    c.width *= I, c.height *= I;
    let k = ["outline: none", "cursor: default"];
    E ? (k.push(`width: ${M}px`), k.push(`height: ${z}px`)) : (k.push("width: 100%"), k.push("height: 100%")), s.crisp && (k.push("image-rendering: pixelated"), k.push("image-rendering: crisp-edges")), c.style.cssText = k.join(";"), c.tabIndex = 0;
    let Z = document.createElement("canvas");
    Z.width = Vr, Z.height = Vr;
    let ce = Z.getContext("2d", { willReadFrequently: true }), U = Or({ canvas: c, touchToMouse: s.touchToMouse, gamepads: s.gamepads, pixelDensity: s.pixelDensity, maxFPS: s.maxFPS }), X = [], h2 = U.canvas().getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    class K {
      constructor(n, r, i2 = {}) {
        __publicField(this, "src", null);
        __publicField(this, "glTex");
        __publicField(this, "width");
        __publicField(this, "height");
        this.glTex = h2.createTexture(), X.push(() => this.free()), this.bind(), n && r && h2.texImage2D(h2.TEXTURE_2D, 0, h2.RGBA, n, r, 0, h2.RGBA, h2.UNSIGNED_BYTE, null), this.width = n, this.height = r;
        let u = (() => {
          var _a2;
          switch ((_a2 = i2.filter) != null ? _a2 : s.texFilter) {
            case "linear":
              return h2.LINEAR;
            case "nearest":
              return h2.NEAREST;
            default:
              return h2.NEAREST;
          }
        })(), l = (() => {
          switch (i2.wrap) {
            case "repeat":
              return h2.REPEAT;
            case "clampToEdge":
              return h2.CLAMP_TO_EDGE;
            default:
              return h2.CLAMP_TO_EDGE;
          }
        })();
        h2.texParameteri(h2.TEXTURE_2D, h2.TEXTURE_MIN_FILTER, u), h2.texParameteri(h2.TEXTURE_2D, h2.TEXTURE_MAG_FILTER, u), h2.texParameteri(h2.TEXTURE_2D, h2.TEXTURE_WRAP_S, l), h2.texParameteri(h2.TEXTURE_2D, h2.TEXTURE_WRAP_T, l), this.unbind();
      }
      static fromImage(n, r = {}) {
        let i2 = new K(0, 0, r);
        return i2.bind(), h2.texImage2D(h2.TEXTURE_2D, 0, h2.RGBA, h2.RGBA, h2.UNSIGNED_BYTE, n), i2.width = n.width, i2.height = n.height, i2.unbind(), i2.src = n, i2;
      }
      update(n, r = 0, i2 = 0) {
        this.bind(), h2.texSubImage2D(h2.TEXTURE_2D, 0, r, i2, h2.RGBA, h2.UNSIGNED_BYTE, n), this.unbind();
      }
      bind() {
        h2.bindTexture(h2.TEXTURE_2D, this.glTex);
      }
      unbind() {
        h2.bindTexture(h2.TEXTURE_2D, null);
      }
      free() {
        h2.deleteTexture(this.glTex);
      }
    }
    __name(K, "K");
    o(K, "Texture");
    class pe {
      constructor(n, r) {
        __publicField(this, "tex");
        __publicField(this, "canvas");
        __publicField(this, "ctx");
        __publicField(this, "x", 0);
        __publicField(this, "y", 0);
        __publicField(this, "curHeight", 0);
        this.canvas = document.createElement("canvas"), this.canvas.width = n, this.canvas.height = r, this.tex = K.fromImage(this.canvas), this.ctx = this.canvas.getContext("2d");
      }
      add(n) {
        if (n.width > this.canvas.width || n.height > this.canvas.height)
          throw new Error(`Texture size (${n.width} x ${n.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
        this.x + n.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + n.height > this.canvas.height && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.tex = K.fromImage(this.canvas), this.x = 0, this.y = 0, this.curHeight = 0);
        let r = new v(this.x, this.y);
        return this.x += n.width, n.height > this.curHeight && (this.curHeight = n.height), n instanceof ImageData ? this.ctx.putImageData(n, r.x, r.y) : this.ctx.drawImage(n, r.x, r.y), this.tex.update(this.canvas), [this.tex, new Q(r.x / this.canvas.width, r.y / this.canvas.height, n.width / this.canvas.width, n.height / this.canvas.height)];
      }
    }
    __name(pe, "pe");
    o(pe, "TexPacker");
    class Ge {
      constructor(n, r, i2 = {}) {
        __publicField(this, "tex");
        __publicField(this, "glFrameBuffer");
        __publicField(this, "glRenderBuffer");
        this.tex = new K(n, r, i2), this.glFrameBuffer = h2.createFramebuffer(), this.glRenderBuffer = h2.createRenderbuffer(), X.push(() => this.free()), this.bind(), h2.renderbufferStorage(h2.RENDERBUFFER, h2.DEPTH_STENCIL, n, r), h2.framebufferTexture2D(h2.FRAMEBUFFER, h2.COLOR_ATTACHMENT0, h2.TEXTURE_2D, this.tex.glTex, 0), h2.framebufferRenderbuffer(h2.FRAMEBUFFER, h2.DEPTH_STENCIL_ATTACHMENT, h2.RENDERBUFFER, this.glRenderBuffer), this.unbind();
      }
      get width() {
        return this.tex.width;
      }
      get height() {
        return this.tex.height;
      }
      bind() {
        h2.bindFramebuffer(h2.FRAMEBUFFER, this.glFrameBuffer), h2.bindRenderbuffer(h2.RENDERBUFFER, this.glRenderBuffer);
      }
      unbind() {
        h2.bindFramebuffer(h2.FRAMEBUFFER, null), h2.bindRenderbuffer(h2.RENDERBUFFER, null);
      }
      free() {
        h2.deleteFramebuffer(this.glFrameBuffer), h2.deleteRenderbuffer(this.glRenderBuffer), this.tex.free();
      }
    }
    __name(Ge, "Ge");
    o(Ge, "FrameBuffer");
    let w2 = (() => {
      var _a2, _b2, _c2;
      let e = ft(_n, Hn), n = K.fromImage(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), r = s.width && s.height ? new Ge(s.width * I, s.height * I) : new Ge(h2.drawingBufferWidth, h2.drawingBufferHeight), i2 = null, u = 1;
      s.background && (i2 = L.fromArray(s.background), u = (_a2 = s.background[3]) != null ? _a2 : 1, h2.clearColor(i2.r / 255, i2.g / 255, i2.b / 255, u)), h2.enable(h2.BLEND), h2.enable(h2.SCISSOR_TEST), h2.blendFuncSeparate(h2.SRC_ALPHA, h2.ONE_MINUS_SRC_ALPHA, h2.ONE, h2.ONE_MINUS_SRC_ALPHA);
      let l = h2.createBuffer();
      h2.bindBuffer(h2.ARRAY_BUFFER, l), h2.bufferData(h2.ARRAY_BUFFER, $r * 4, h2.DYNAMIC_DRAW), Kr.reduce((f, p, x) => (h2.vertexAttribPointer(x, p.size, h2.FLOAT, false, Zt * 4, f), h2.enableVertexAttribArray(x), f + p.size * 4), 0), h2.bindBuffer(h2.ARRAY_BUFFER, null);
      let a2 = h2.createBuffer();
      h2.bindBuffer(h2.ELEMENT_ARRAY_BUFFER, a2), h2.bufferData(h2.ELEMENT_ARRAY_BUFFER, zr * 4, h2.DYNAMIC_DRAW), h2.bindBuffer(h2.ELEMENT_ARRAY_BUFFER, null);
      let m = K.fromImage(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: e, curShader: e, frameBuffer: r, postShader: null, postShaderUniform: null, defTex: n, curTex: n, curUniform: {}, vbuf: l, ibuf: a2, vqueue: [], iqueue: [], transform: new J(), transformStack: [], bgTex: m, bgColor: i2, bgAlpha: u, width: (_b2 = s.width) != null ? _b2 : h2.drawingBufferWidth / I / g, height: (_c2 = s.height) != null ? _c2 : h2.drawingBufferHeight / I / g, viewport: { x: 0, y: 0, width: h2.drawingBufferWidth, height: h2.drawingBufferHeight } };
    })();
    class le {
      constructor(n, r, i2 = {}, u = null) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new Q(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        __publicField(this, "slice9", null);
        this.tex = n, r && (this.frames = r), this.anims = i2, this.slice9 = u;
      }
      static from(n, r = {}) {
        return typeof n == "string" ? le.fromURL(n, r) : Promise.resolve(le.fromImage(n, r));
      }
      static fromImage(n, r = {}) {
        let [i2, u] = B.packer.add(n), l = r.frames ? r.frames.map((a2) => new Q(u.x + a2.x * u.w, u.y + a2.y * u.h, a2.w * u.w, a2.h * u.h)) : St(r.sliceX || 1, r.sliceY || 1, u.x, u.y, u.w, u.h);
        return new le(i2, l, r.anims, r.slice9);
      }
      static fromURL(n, r = {}) {
        return Je(n).then((i2) => le.fromImage(i2, r));
      }
    }
    __name(le, "le");
    o(le, "SpriteData");
    class ge {
      constructor(n) {
        __publicField(this, "buf");
        this.buf = n;
      }
      static fromArrayBuffer(n) {
        return new Promise((r, i2) => he.ctx.decodeAudioData(n, r, i2)).then((r) => new ge(r));
      }
      static fromURL(n) {
        return jn(n) ? ge.fromArrayBuffer(Sr(n)) : nn(n).then((r) => ge.fromArrayBuffer(r));
      }
    }
    __name(ge, "ge");
    o(ge, "SoundData");
    let he = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), n = e.createGain();
      n.connect(e.destination);
      let r = new ge(Li(e));
      return e.decodeAudioData(kn.buffer.slice(0)).then((i2) => {
        r.buf = i2;
      }).catch((i2) => {
        console.error("Failed to load burp: ", i2);
      }), { ctx: e, masterNode: n, burpSnd: r };
    })();
    class ie {
      constructor(n) {
        __publicField(this, "loaded", false);
        __publicField(this, "data", null);
        __publicField(this, "error", null);
        __publicField(this, "onLoadEvents", new ve());
        __publicField(this, "onErrorEvents", new ve());
        __publicField(this, "onFinishEvents", new ve());
        n.then((r) => {
          this.data = r, this.onLoadEvents.trigger(r);
        }).catch((r) => {
          if (this.error = r, this.onErrorEvents.numListeners() > 0)
            this.onErrorEvents.trigger(r);
          else
            throw r;
        }).finally(() => {
          this.onFinishEvents.trigger(), this.loaded = true;
        });
      }
      static loaded(n) {
        let r = new ie(Promise.resolve(n));
        return r.data = n, r.loaded = true, r;
      }
      onLoad(n) {
        return this.loaded && this.data ? n(this.data) : this.onLoadEvents.add(n), this;
      }
      onError(n) {
        return this.loaded && this.error ? n(this.error) : this.onErrorEvents.add(n), this;
      }
      onFinish(n) {
        return this.loaded ? n() : this.onFinishEvents.add(n), this;
      }
      then(n) {
        return this.onLoad(n);
      }
      catch(n) {
        return this.onError(n);
      }
      finally(n) {
        return this.onFinish(n);
      }
    }
    __name(ie, "ie");
    o(ie, "Asset");
    class xe {
      constructor() {
        __publicField(this, "assets", /* @__PURE__ */ new Map());
        __publicField(this, "lastUID", 0);
      }
      add(n, r) {
        let i2 = n != null ? n : this.lastUID++ + "", u = new ie(r);
        return this.assets.set(i2, u), u;
      }
      addLoaded(n, r) {
        let i2 = n != null ? n : this.lastUID++ + "", u = ie.loaded(r);
        return this.assets.set(i2, u), u;
      }
      get(n) {
        return this.assets.get(n);
      }
      progress() {
        if (this.assets.size === 0)
          return 1;
        let n = 0;
        return this.assets.forEach((r) => {
          r.loaded && n++;
        }), n / this.assets.size;
      }
    }
    __name(xe, "xe");
    o(xe, "AssetBucket");
    let B = { urlPrefix: "", sprites: new xe(), fonts: new xe(), bitmapFonts: new xe(), sounds: new xe(), shaders: new xe(), custom: new xe(), packer: new pe(kr, _r), loaded: false }, T = { events: new De(), objEvents: new De(), root: vn([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: new v(1), angle: 0, shake: 0, transform: new J() } };
    function ct(e) {
      return B.custom.add(null, e);
    }
    __name(ct, "ct");
    o(ct, "load");
    function Fe() {
      let e = [B.sprites, B.sounds, B.shaders, B.fonts, B.bitmapFonts, B.custom];
      return e.reduce((n, r) => n + r.progress(), 0) / e.length;
    }
    __name(Fe, "Fe");
    o(Fe, "loadProgress");
    function en(e) {
      return e !== void 0 && (B.urlPrefix = e), B.urlPrefix;
    }
    __name(en, "en");
    o(en, "loadRoot");
    function lt(e) {
      let n = B.urlPrefix + e;
      return fetch(n).then((r) => {
        if (!r.ok)
          throw new Error(`Failed to fetch ${n}`);
        return r;
      });
    }
    __name(lt, "lt");
    o(lt, "fetchURL");
    function We(e) {
      return lt(e).then((n) => n.json());
    }
    __name(We, "We");
    o(We, "fetchJSON");
    function tn(e) {
      return lt(e).then((n) => n.text());
    }
    __name(tn, "tn");
    o(tn, "fetchText");
    function nn(e) {
      return lt(e).then((n) => n.arrayBuffer());
    }
    __name(nn, "nn");
    o(nn, "fetchArrayBuffer");
    function Je(e) {
      let n = new Image();
      return n.crossOrigin = "anonymous", n.src = jn(e) ? e : B.urlPrefix + e, new Promise((r, i2) => {
        n.onload = () => r(n), n.onerror = () => i2(new Error(`Failed to load image from "${e}"`));
      });
    }
    __name(Je, "Je");
    o(Je, "loadImg");
    function rn(e, n) {
      return B.custom.add(e, We(n));
    }
    __name(rn, "rn");
    o(rn, "loadJSON");
    class _e {
      constructor(n, r = {}) {
        __publicField(this, "fontface");
        __publicField(this, "outline");
        __publicField(this, "filter");
        var _a2, _b2;
        this.fontface = n, this.outline = (_a2 = r.outline) != null ? _a2 : 0, this.filter = (_b2 = r.filter) != null ? _b2 : qr;
      }
    }
    __name(_e, "_e");
    o(_e, "FontData");
    function sn(e, n, r = {}) {
      let i2 = new FontFace(e, typeof n == "string" ? `url(${n})` : n);
      return document.fonts.add(i2), B.fonts.add(e, i2.load().catch((u) => {
        throw new Error(`Failed to load font from "${n}": ${u}`);
      }).then((u) => new _e(u, r)));
    }
    __name(sn, "sn");
    o(sn, "loadFont");
    function on(e, n, r, i2, u = {}) {
      return B.bitmapFonts.add(e, Je(n).then((l) => {
        var _a2;
        return de(K.fromImage(l, u), r, i2, (_a2 = u.chars) != null ? _a2 : Br);
      }));
    }
    __name(on, "on");
    o(on, "loadBitmapFont");
    function St(e = 1, n = 1, r = 0, i2 = 0, u = 1, l = 1) {
      let a2 = [], m = u / e, f = l / n;
      for (let p = 0; p < n; p++)
        for (let x = 0; x < e; x++)
          a2.push(new Q(r + x * m, i2 + p * f, m, f));
      return a2;
    }
    __name(St, "St");
    o(St, "slice");
    function Ct(e, n) {
      return ct(typeof n == "string" ? new Promise((r, i2) => {
        We(n).then((u) => {
          Ct(e, u).then(r).catch(i2);
        });
      }) : le.from(e).then((r) => {
        let i2 = {};
        for (let u in n) {
          let l = n[u], a2 = r.frames[0], m = kr * a2.w, f = _r * a2.h, p = l.frames ? l.frames.map((D) => new Q(a2.x + (l.x + D.x) / m * a2.w, a2.y + (l.y + D.y) / f * a2.h, D.w / m * a2.w, D.h / f * a2.h)) : St(l.sliceX || 1, l.sliceY || 1, a2.x + l.x / m * a2.w, a2.y + l.y / f * a2.h, l.width / m * a2.w, l.height / f * a2.h), x = new le(r.tex, p, l.anims);
          B.sprites.addLoaded(u, x), i2[u] = x;
        }
        return i2;
      }));
    }
    __name(Ct, "Ct");
    o(Ct, "loadSpriteAtlas");
    function Tt(e, n = {}) {
      let r = document.createElement("canvas"), i2 = e[0].width, u = e[0].height;
      r.width = i2 * e.length, r.height = u;
      let l = r.getContext("2d");
      e.forEach((m, f) => {
        m instanceof ImageData ? l.putImageData(m, f * i2, 0) : l.drawImage(m, f * i2, 0);
      });
      let a2 = l.getImageData(0, 0, e.length * i2, u);
      return le.fromImage(a2, __spreadProps(__spreadValues({}, n), { sliceX: e.length, sliceY: 1 }));
    }
    __name(Tt, "Tt");
    o(Tt, "createSpriteSheet");
    function He(e, n, r = { sliceX: 1, sliceY: 1, anims: {} }) {
      return Array.isArray(n) ? n.some((i2) => typeof i2 == "string") ? B.sprites.add(e, Promise.all(n.map((i2) => typeof i2 == "string" ? Je(i2) : Promise.resolve(i2))).then((i2) => Tt(i2, r))) : B.sprites.addLoaded(e, Tt(n, r)) : typeof n == "string" ? B.sprites.add(e, le.from(n, r)) : B.sprites.addLoaded(e, le.fromImage(n, r));
    }
    __name(He, "He");
    o(He, "loadSprite");
    function an(e, n) {
      return B.sprites.add(e, new Promise((r) => __async(this, null, function* () {
        let i2 = typeof n == "string" ? yield We(n) : n, u = yield Promise.all(i2.frames.map(Je)), l = document.createElement("canvas");
        l.width = i2.width, l.height = i2.height * i2.frames.length;
        let a2 = l.getContext("2d");
        u.forEach((f, p) => {
          a2.drawImage(f, 0, p * i2.height);
        });
        let m = yield He(null, l, { sliceY: i2.frames.length, anims: i2.anims });
        r(m);
      })));
    }
    __name(an, "an");
    o(an, "loadPedit");
    function un(e, n, r) {
      typeof n == "string" && !r && (r = n.replace(new RegExp(`${Tr(n)}$`), "json"));
      let i2 = typeof r == "string" ? We(r) : Promise.resolve(r);
      return B.sprites.add(e, i2.then((u) => {
        let l = u.meta.size, a2 = u.frames.map((f) => new Q(f.frame.x / l.w, f.frame.y / l.h, f.frame.w / l.w, f.frame.h / l.h)), m = {};
        for (let f of u.meta.frameTags)
          f.from === f.to ? m[f.name] = f.from : m[f.name] = { from: f.from, to: f.to, speed: 10, loop: true, pingpong: f.direction === "pingpong" };
        return le.from(n, { frames: a2, anims: m });
      }));
    }
    __name(un, "un");
    o(un, "loadAseprite");
    function cn(e, n, r) {
      return B.shaders.addLoaded(e, ft(n, r));
    }
    __name(cn, "cn");
    o(cn, "loadShader");
    function ln(e, n, r) {
      let i2 = o((l) => l ? tn(l) : Promise.resolve(null), "resolveUrl"), u = Promise.all([i2(n), i2(r)]).then(([l, a2]) => ft(l, a2));
      return B.shaders.add(e, u);
    }
    __name(ln, "ln");
    o(ln, "loadShaderURL");
    function hn(e, n, r = {}) {
      return B.sounds.add(e, typeof n == "string" ? ge.fromURL(n) : ge.fromArrayBuffer(n));
    }
    __name(hn, "hn");
    o(hn, "loadSound");
    function dn(e = "bean") {
      return He(e, Dr);
    }
    __name(dn, "dn");
    o(dn, "loadBean");
    function At(e) {
      return B.sprites.get(e);
    }
    __name(At, "At");
    o(At, "getSprite");
    function Ot(e) {
      return B.sounds.get(e);
    }
    __name(Ot, "Ot");
    o(Ot, "getSound");
    function Pt(e) {
      return B.fonts.get(e);
    }
    __name(Pt, "Pt");
    o(Pt, "getFont");
    function Rt(e) {
      return B.bitmapFonts.get(e);
    }
    __name(Rt, "Rt");
    o(Rt, "getBitmapFont");
    function Mt(e) {
      return B.shaders.get(e);
    }
    __name(Mt, "Mt");
    o(Mt, "getShader");
    function fn(e) {
      return B.custom.get(e);
    }
    __name(fn, "fn");
    o(fn, "getAsset");
    function ht(e) {
      if (typeof e == "string") {
        let n = At(e);
        if (n)
          return n;
        if (Fe() < 1)
          return null;
        throw new Error(`Sprite not found: ${e}`);
      } else {
        if (e instanceof le)
          return ie.loaded(e);
        if (e instanceof ie)
          return e;
        throw new Error(`Invalid sprite: ${e}`);
      }
    }
    __name(ht, "ht");
    o(ht, "resolveSprite");
    function mn(e) {
      if (typeof e == "string") {
        let n = Ot(e);
        if (n)
          return n;
        if (Fe() < 1)
          return null;
        throw new Error(`Sound not found: ${e}`);
      } else {
        if (e instanceof ge)
          return ie.loaded(e);
        if (e instanceof ie)
          return e;
        throw new Error(`Invalid sound: ${e}`);
      }
    }
    __name(mn, "mn");
    o(mn, "resolveSound");
    function Dt(e) {
      var _a2;
      if (!e)
        return w2.defShader;
      if (typeof e == "string") {
        let n = Mt(e);
        if (n)
          return (_a2 = n.data) != null ? _a2 : n;
        if (Fe() < 1)
          return null;
        throw new Error(`Shader not found: ${e}`);
      } else if (e instanceof ie)
        return e.data ? e.data : e;
      return e;
    }
    __name(Dt, "Dt");
    o(Dt, "resolveShader");
    function Gt(e) {
      var _a2, _b2, _c2;
      if (!e)
        return Gt((_a2 = s.font) != null ? _a2 : Ai);
      if (typeof e == "string") {
        let n = Rt(e), r = Pt(e);
        if (n)
          return (_b2 = n.data) != null ? _b2 : n;
        if (r)
          return (_c2 = r.data) != null ? _c2 : r;
        if (document.fonts.check(`${Ir}px ${e}`))
          return e;
        if (Fe() < 1)
          return null;
        throw new Error(`Font not found: ${e}`);
      } else if (e instanceof ie)
        return e.data ? e.data : e;
      return e;
    }
    __name(Gt, "Gt");
    o(Gt, "resolveFont");
    function pn(e) {
      return e !== void 0 && (he.masterNode.gain.value = e), he.masterNode.gain.value;
    }
    __name(pn, "pn");
    o(pn, "volume");
    function dt(e, n = {}) {
      var _a2, _b2, _c2, _d, _e2;
      let r = he.ctx, i2 = (_a2 = n.paused) != null ? _a2 : false, u = r.createBufferSource(), l = new ve(), a2 = r.createGain(), m = (_b2 = n.seek) != null ? _b2 : 0, f = 0, p = 0, x = false;
      u.loop = !!n.loop, u.detune.value = (_c2 = n.detune) != null ? _c2 : 0, u.playbackRate.value = (_d = n.speed) != null ? _d : 1, u.connect(a2), u.onended = () => {
        var _a3;
        j() >= ((_a3 = u.buffer) == null ? void 0 : _a3.duration) && l.trigger();
      }, a2.connect(he.masterNode), a2.gain.value = (_e2 = n.volume) != null ? _e2 : 1;
      let D = o((O) => {
        u.buffer = O.buf, i2 || (f = r.currentTime, u.start(0, m), x = true);
      }, "start"), q = mn(e);
      q instanceof ie && q.onLoad(D);
      let j = o(() => {
        if (!u.buffer)
          return 0;
        let O = i2 ? p - f : r.currentTime - f, A = u.buffer.duration;
        return u.loop ? O % A : Math.min(O, A);
      }, "getTime"), $ = o((O) => {
        let A = r.createBufferSource();
        return A.buffer = O.buffer, A.loop = O.loop, A.playbackRate.value = O.playbackRate.value, A.detune.value = O.detune.value, A.onended = O.onended, A.connect(a2), A;
      }, "cloneNode");
      return { set paused(O) {
        if (i2 !== O)
          if (i2 = O, O)
            x && (u.stop(), x = false), p = r.currentTime;
          else {
            u = $(u);
            let A = p - f;
            u.start(0, A), x = true, f = r.currentTime - A, p = 0;
          }
      }, get paused() {
        return i2;
      }, play(O = 0) {
        this.seek(O), this.paused = false;
      }, seek(O) {
        var _a3;
        ((_a3 = u.buffer) == null ? void 0 : _a3.duration) && (O > u.buffer.duration || (i2 ? (u = $(u), f = p - O) : (u.stop(), u = $(u), f = r.currentTime - O, u.start(0, O), x = true, p = 0)));
      }, set speed(O) {
        u.playbackRate.value = O;
      }, get speed() {
        return u.playbackRate.value;
      }, set detune(O) {
        u.detune.value = O;
      }, get detune() {
        return u.detune.value;
      }, set volume(O) {
        a2.gain.value = Math.max(O, 0);
      }, get volume() {
        return a2.gain.value;
      }, set loop(O) {
        u.loop = O;
      }, get loop() {
        return u.loop;
      }, duration() {
        var _a3, _b3;
        return (_b3 = (_a3 = u.buffer) == null ? void 0 : _a3.duration) != null ? _b3 : 0;
      }, time() {
        return j() % this.duration();
      }, onEnd(O) {
        return l.add(O);
      }, then(O) {
        return this.onEnd(O);
      } };
    }
    __name(dt, "dt");
    o(dt, "play");
    function Ft(e) {
      return dt(he.burpSnd, e);
    }
    __name(Ft, "Ft");
    o(Ft, "burp");
    function ft(e = _n, n = Hn) {
      let r = Mi.replace("{{user}}", e != null ? e : _n), i2 = Di.replace("{{user}}", n != null ? n : Hn), u = h2.createShader(h2.VERTEX_SHADER), l = h2.createShader(h2.FRAGMENT_SHADER);
      h2.shaderSource(u, r), h2.shaderSource(l, i2), h2.compileShader(u), h2.compileShader(l);
      let a2 = h2.createProgram();
      if (X.push(() => h2.deleteProgram(a2)), h2.attachShader(a2, u), h2.attachShader(a2, l), h2.bindAttribLocation(a2, 0, "a_pos"), h2.bindAttribLocation(a2, 1, "a_uv"), h2.bindAttribLocation(a2, 2, "a_color"), h2.linkProgram(a2), !h2.getProgramParameter(a2, h2.LINK_STATUS)) {
        let m = o((D) => {
          let q = new RegExp("^ERROR:\\s0:(?<line>\\d+):\\s(?<msg>.+)"), j = D.match(q);
          return { line: Number(j.groups.line), msg: j.groups.msg.replace(/\n\0$/, "") };
        }, "formatShaderError"), f = h2.getShaderInfoLog(u), p = h2.getShaderInfoLog(l), x = "";
        if (f) {
          let D = m(f);
          x += `Vertex shader line ${D.line - 14}: ${D.msg}`;
        }
        if (p) {
          let D = m(p);
          x += `Fragment shader line ${D.line - 14}: ${D.msg}`;
        }
        throw new Error(x);
      }
      return h2.deleteShader(u), h2.deleteShader(l), { bind() {
        h2.useProgram(a2);
      }, unbind() {
        h2.useProgram(null);
      }, free() {
        h2.deleteProgram(a2);
      }, send(m) {
        for (let f in m) {
          let p = m[f], x = h2.getUniformLocation(a2, f);
          typeof p == "number" ? h2.uniform1f(x, p) : p instanceof J ? h2.uniformMatrix4fv(x, false, new Float32Array(p.m)) : p instanceof L ? h2.uniform3f(x, p.r, p.g, p.b) : p instanceof v && h2.uniform2f(x, p.x, p.y);
        }
      } };
    }
    __name(ft, "ft");
    o(ft, "makeShader");
    function de(e, n, r, i2) {
      let u = e.width / n, l = {}, a2 = i2.split("").entries();
      for (let [m, f] of a2)
        l[f] = new Q(m % u * n, Math.floor(m / u) * r, n, r);
      return { tex: e, map: l, size: r };
    }
    __name(de, "de");
    o(de, "makeFont");
    function Be(e, n, r, i2 = w2.defTex, u = w2.defShader, l = {}) {
      let a2 = Dt(u);
      if (!a2 || a2 instanceof ie)
        return;
      (i2 !== w2.curTex || a2 !== w2.curShader || !Ln(w2.curUniform, l) || w2.vqueue.length + e.length * Zt > $r || w2.iqueue.length + n.length > zr) && fe();
      let m = r ? w2.transform : T.cam.transform.mult(w2.transform);
      for (let f of e) {
        let p = Bt(m.multVec2(f.pos));
        w2.vqueue.push(p.x, p.y, f.uv.x, f.uv.y, f.color.r / 255, f.color.g / 255, f.color.b / 255, f.opacity);
      }
      for (let f of n)
        w2.iqueue.push(f + w2.vqueue.length / Zt - e.length);
      w2.curTex = i2, w2.curShader = a2, w2.curUniform = l;
    }
    __name(Be, "Be");
    o(Be, "drawRaw");
    function fe() {
      !w2.curTex || !w2.curShader || w2.vqueue.length === 0 || w2.iqueue.length === 0 || (h2.bindBuffer(h2.ARRAY_BUFFER, w2.vbuf), h2.bufferSubData(h2.ARRAY_BUFFER, 0, new Float32Array(w2.vqueue)), h2.bindBuffer(h2.ELEMENT_ARRAY_BUFFER, w2.ibuf), h2.bufferSubData(h2.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(w2.iqueue)), w2.curShader.bind(), w2.curShader.send(w2.curUniform), w2.curTex.bind(), h2.drawElements(h2.TRIANGLES, w2.iqueue.length, h2.UNSIGNED_SHORT, 0), w2.curTex.unbind(), w2.curShader.unbind(), h2.bindBuffer(h2.ARRAY_BUFFER, null), h2.bindBuffer(h2.ELEMENT_ARRAY_BUFFER, null), w2.vqueue.length = 0, w2.iqueue.length = 0, w2.drawCalls++);
    }
    __name(fe, "fe");
    o(fe, "flush");
    function mt() {
      h2.clear(h2.COLOR_BUFFER_BIT), w2.frameBuffer.bind(), h2.viewport(0, 0, w2.frameBuffer.width, w2.frameBuffer.height), h2.clear(h2.COLOR_BUFFER_BIT), w2.bgColor || Ve(() => {
        Oe({ width: we(), height: ye(), quad: new Q(0, 0, we() / Lr, ye() / Lr), tex: w2.bgTex, fixed: true });
      }), w2.drawCalls = 0, w2.transformStack.length = 0, w2.transform = new J();
    }
    __name(mt, "mt");
    o(mt, "frameStart");
    function gn(e, n) {
      w2.postShader = e, w2.postShaderUniform = n != null ? n : null;
    }
    __name(gn, "gn");
    o(gn, "usePostEffect");
    function pt() {
      fe(), w2.frameBuffer.unbind(), h2.viewport(0, 0, h2.drawingBufferWidth, h2.drawingBufferHeight), fe();
      let e = w2.width, n = w2.height;
      w2.width = h2.drawingBufferWidth / I, w2.height = h2.drawingBufferHeight / I, Ie({ flipY: true, tex: w2.frameBuffer.tex, pos: new v(w2.viewport.x, w2.viewport.y), width: w2.viewport.width, height: w2.viewport.height, shader: w2.postShader, uniform: typeof w2.postShaderUniform == "function" ? w2.postShaderUniform() : w2.postShaderUniform, fixed: true }), fe(), w2.width = e, w2.height = n, w2.lastDrawCalls = w2.drawCalls;
    }
    __name(pt, "pt");
    o(pt, "frameEnd");
    function Bt(e) {
      return new v(e.x / we() * 2 - 1, -e.y / ye() * 2 + 1);
    }
    __name(Bt, "Bt");
    o(Bt, "screen2ndc");
    function d(e) {
      w2.transform = e.clone();
    }
    __name(d, "d");
    o(d, "pushMatrix");
    function b(...e) {
      if (e[0] === void 0)
        return;
      let n = S(...e);
      n.x === 0 && n.y === 0 || w2.transform.translate(n);
    }
    __name(b, "b");
    o(b, "pushTranslate");
    function C(...e) {
      if (e[0] === void 0)
        return;
      let n = S(...e);
      n.x === 1 && n.y === 1 || w2.transform.scale(n);
    }
    __name(C, "C");
    o(C, "pushScale");
    function ee(e) {
      e && w2.transform.rotate(e);
    }
    __name(ee, "ee");
    o(ee, "pushRotate");
    function re() {
      w2.transformStack.push(w2.transform.clone());
    }
    __name(re, "re");
    o(re, "pushTransform");
    function V() {
      w2.transformStack.length > 0 && (w2.transform = w2.transformStack.pop());
    }
    __name(V, "V");
    o(V, "popTransform");
    function Oe(e) {
      var _a2;
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let n = e.width, r = e.height, u = ut(e.anchor || Jt).scale(new v(n, r).scale(-0.5)), l = e.quad || new Q(0, 0, 1, 1), a2 = e.color || W(255, 255, 255), m = (_a2 = e.opacity) != null ? _a2 : 1, f = e.tex ? Hr / e.tex.width : 0, p = e.tex ? Hr / e.tex.height : 0, x = l.x + f, D = l.y + p, q = l.w - f * 2, j = l.h - p * 2;
      re(), b(e.pos), ee(e.angle), C(e.scale), b(u), Be([{ pos: new v(-n / 2, r / 2), uv: new v(e.flipX ? x + q : x, e.flipY ? D : D + j), color: a2, opacity: m }, { pos: new v(-n / 2, -r / 2), uv: new v(e.flipX ? x + q : x, e.flipY ? D + j : D), color: a2, opacity: m }, { pos: new v(n / 2, -r / 2), uv: new v(e.flipX ? x : x + q, e.flipY ? D + j : D), color: a2, opacity: m }, { pos: new v(n / 2, r / 2), uv: new v(e.flipX ? x : x + q, e.flipY ? D : D + j), color: a2, opacity: m }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), V();
    }
    __name(Oe, "Oe");
    o(Oe, "drawUVQuad");
    function Ie(e) {
      var _a2;
      if (!e.tex)
        throw new Error('drawTexture() requires property "tex".');
      let n = (_a2 = e.quad) != null ? _a2 : new Q(0, 0, 1, 1), r = e.tex.width * n.w, i2 = e.tex.height * n.h, u = new v(1);
      if (e.tiled) {
        let l = Math.ceil((e.width || r) / r), a2 = Math.ceil((e.height || i2) / i2), f = ut(e.anchor || Jt).add(new v(1, 1)).scale(0.5).scale(l * r, a2 * i2);
        for (let p = 0; p < l; p++)
          for (let x = 0; x < a2; x++)
            Oe(Object.assign({}, e, { pos: (e.pos || new v(0)).add(new v(r * p, i2 * x)).sub(f), scale: u.scale(e.scale || new v(1)), tex: e.tex, quad: n, width: r, height: i2, anchor: "topleft" }));
      } else
        e.width && e.height ? (u.x = e.width / r, u.y = e.height / i2) : e.width ? (u.x = e.width / r, u.y = u.x) : e.height && (u.y = e.height / i2, u.x = u.y), Oe(Object.assign({}, e, { scale: u.scale(e.scale || new v(1)), tex: e.tex, quad: n, width: r, height: i2 }));
    }
    __name(Ie, "Ie");
    o(Ie, "drawTexture");
    function Xr(e) {
      var _a2, _b2, _c2;
      if (!e.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let n = ht(e.sprite);
      if (!n || !n.data)
        return;
      let r = n.data.frames[(_a2 = e.frame) != null ? _a2 : 0];
      if (!r)
        throw new Error(`Frame not found: ${(_b2 = e.frame) != null ? _b2 : 0}`);
      Ie(Object.assign({}, e, { tex: n.data.tex, quad: r.scale((_c2 = e.quad) != null ? _c2 : new Q(0, 0, 1, 1)) }));
    }
    __name(Xr, "Xr");
    o(Xr, "drawSprite");
    function gt(e, n, r, i2, u, l = 1) {
      i2 = Re(i2 % 360), u = Re(u % 360), u <= i2 && (u += Math.PI * 2);
      let a2 = [], m = Math.ceil((u - i2) / Re(8) * l), f = (u - i2) / m;
      for (let p = i2; p < u; p += f)
        a2.push(e.add(n * Math.cos(p), r * Math.sin(p)));
      return a2.push(e.add(n * Math.cos(u), r * Math.sin(u))), a2;
    }
    __name(gt, "gt");
    o(gt, "getArcPts");
    function Ce(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let n = e.width, r = e.height, u = ut(e.anchor || Jt).add(1, 1).scale(new v(n, r).scale(-0.5)), l = [new v(0, 0), new v(n, 0), new v(n, r), new v(0, r)];
      if (e.radius) {
        let a2 = Math.min(Math.min(n, r) / 2, e.radius);
        l = [new v(a2, 0), new v(n - a2, 0), ...gt(new v(n - a2, a2), a2, a2, 270, 360), new v(n, a2), new v(n, r - a2), ...gt(new v(n - a2, r - a2), a2, a2, 0, 90), new v(n - a2, r), new v(a2, r), ...gt(new v(a2, r - a2), a2, a2, 90, 180), new v(0, r - a2), new v(0, a2), ...gt(new v(a2, a2), a2, a2, 180, 270)];
      }
      qe(Object.assign({}, e, __spreadValues({ offset: u, pts: l }, e.gradient ? { colors: e.horizontal ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]] : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]] } : {})));
    }
    __name(Ce, "Ce");
    o(Ce, "drawRect");
    function wt(e) {
      let { p1: n, p2: r } = e;
      if (!n || !r)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let i2 = e.width || 1, u = r.sub(n).unit().normal().scale(i2 * 0.5), l = [n.sub(u), n.add(u), r.add(u), r.sub(u)].map((a2) => {
        var _a2, _b2;
        return { pos: new v(a2.x, a2.y), uv: new v(0), color: (_a2 = e.color) != null ? _a2 : L.WHITE, opacity: (_b2 = e.opacity) != null ? _b2 : 1 };
      });
      Be(l, [0, 1, 3, 1, 2, 3], e.fixed, w2.defTex, e.shader, e.uniform);
    }
    __name(wt, "wt");
    o(wt, "drawLine");
    function qn(e) {
      let n = e.pts;
      if (!n)
        throw new Error('drawLines() requires property "pts".');
      if (!(n.length < 2))
        if (e.radius && n.length >= 3) {
          let r = n[0].sdist(n[1]);
          for (let u = 1; u < n.length - 1; u++)
            r = Math.min(n[u].sdist(n[u + 1]), r);
          let i2 = Math.min(e.radius, Math.sqrt(r) / 2);
          wt(Object.assign({}, e, { p1: n[0], p2: n[1] }));
          for (let u = 1; u < n.length - 2; u++) {
            let l = n[u], a2 = n[u + 1];
            wt(Object.assign({}, e, { p1: l, p2: a2 }));
          }
          wt(Object.assign({}, e, { p1: n[n.length - 2], p2: n[n.length - 1] }));
        } else
          for (let r = 0; r < n.length - 1; r++)
            wt(Object.assign({}, e, { p1: n[r], p2: n[r + 1] })), e.join !== "none" && Qe(Object.assign({}, e, { pos: n[r], radius: e.width / 2 }));
    }
    __name(qn, "qn");
    o(qn, "drawLines");
    function $n(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return qe(Object.assign({}, e, { pts: [e.p1, e.p2, e.p3] }));
    }
    __name($n, "$n");
    o($n, "drawTriangle");
    function Qe(e) {
      if (!e.radius)
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 && zn(Object.assign({}, e, { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    __name(Qe, "Qe");
    o(Qe, "drawCircle");
    function zn(e) {
      var _a2, _b2, _c2;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (e.radiusX === 0 || e.radiusY === 0)
        return;
      let n = (_a2 = e.start) != null ? _a2 : 0, r = (_b2 = e.end) != null ? _b2 : 360, i2 = ut((_c2 = e.anchor) != null ? _c2 : "center").scale(new v(-e.radiusX, -e.radiusY)), u = gt(i2, e.radiusX, e.radiusY, n, r, e.resolution);
      u.unshift(i2);
      let l = Object.assign({}, e, __spreadValues({ pts: u, radius: 0 }, e.gradient ? { colors: [e.gradient[0], ...Array(u.length - 1).fill(e.gradient[1])] } : {}));
      if (r - n >= 360 && e.outline) {
        e.fill !== false && qe(Object.assign(l, { outline: null })), qe(Object.assign(l, { pts: u.slice(1), fill: false }));
        return;
      }
      qe(l);
    }
    __name(zn, "zn");
    o(zn, "drawEllipse");
    function qe(e) {
      var _a2, _b2;
      if (!e.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let n = e.pts.length;
      if (!(n < 3)) {
        if (re(), b(e.pos), C(e.scale), ee(e.angle), b(e.offset), e.fill !== false) {
          let r = (_a2 = e.color) != null ? _a2 : L.WHITE, i2 = e.pts.map((l, a2) => {
            var _a3, _b3;
            return { pos: new v(l.x, l.y), uv: new v(0, 0), color: e.colors ? (_a3 = e.colors[a2]) != null ? _a3 : r : r, opacity: (_b3 = e.opacity) != null ? _b3 : 1 };
          }), u = [...Array(n - 2).keys()].map((l) => [0, l + 1, l + 2]).flat();
          Be(i2, (_b2 = e.indices) != null ? _b2 : u, e.fixed, w2.defTex, e.shader, e.uniform);
        }
        e.outline && qn({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, join: e.outline.join, uniform: e.uniform, fixed: e.fixed, opacity: e.opacity }), V();
      }
    }
    __name(qe, "qe");
    o(qe, "drawPolygon");
    function Kn(e, n, r) {
      fe(), h2.clear(h2.STENCIL_BUFFER_BIT), h2.enable(h2.STENCIL_TEST), h2.stencilFunc(h2.NEVER, 1, 255), h2.stencilOp(h2.REPLACE, h2.REPLACE, h2.REPLACE), n(), fe(), h2.stencilFunc(r, 1, 255), h2.stencilOp(h2.KEEP, h2.KEEP, h2.KEEP), e(), fe(), h2.disable(h2.STENCIL_TEST);
    }
    __name(Kn, "Kn");
    o(Kn, "drawStenciled");
    function Wr(e, n) {
      Kn(e, n, h2.EQUAL);
    }
    __name(Wr, "Wr");
    o(Wr, "drawMasked");
    function Jr(e, n) {
      Kn(e, n, h2.NOTEQUAL);
    }
    __name(Jr, "Jr");
    o(Jr, "drawSubtracted");
    function Yn() {
      return (w2.viewport.width + w2.viewport.height) / (w2.width + w2.height);
    }
    __name(Yn, "Yn");
    o(Yn, "getViewportScale");
    function Ve(e) {
      fe();
      let n = w2.width, r = w2.height;
      w2.width = w2.viewport.width, w2.height = w2.viewport.height, e(), fe(), w2.width = n, w2.height = r;
    }
    __name(Ve, "Ve");
    o(Ve, "drawUnscaled");
    function Xn(e, n) {
      n.pos && (e.pos = e.pos.add(n.pos)), n.scale && (e.scale = e.scale.scale(S(n.scale))), n.angle && (e.angle += n.angle), n.color && (e.color = e.color.mult(n.color)), n.opacity && (e.opacity *= n.opacity);
    }
    __name(Xn, "Xn");
    o(Xn, "applyCharTransform");
    let Wn = new RegExp("\\[(?<style>\\w+)\\](?<text>.*?)\\[\\/\\k<style>\\]", "g");
    function Qr(e) {
      let n = {}, r = e.replace(Wn, "$2"), i2 = 0;
      for (let u of e.matchAll(Wn)) {
        let l = u.index - i2;
        for (let a2 = 0; a2 < u.groups.text.length; a2++)
          n[a2 + l] = [u.groups.style];
        i2 += u[0].length - u.groups.text.length;
      }
      return { charStyleMap: n, text: r };
    }
    __name(Qr, "Qr");
    o(Qr, "compileStyledText");
    let wn = {};
    function $e(e) {
      var _a2, _b2, _c2, _d, _e2, _f, _g;
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let n = Gt(e.font);
      if (e.text === "" || n instanceof ie || !n)
        return { width: 0, height: 0, chars: [], opt: e };
      let { charStyleMap: r, text: i2 } = Qr(e.text + ""), u = i2.split("");
      if (n instanceof _e || typeof n == "string") {
        let _ = n instanceof _e ? n.fontface.family : n, H = n instanceof _e ? { outline: n.outline, filter: n.filter } : { outline: 0, filter: qr }, F = (_a2 = wn[_]) != null ? _a2 : { font: { tex: new K(jr, Nr, { filter: H.filter }), map: {}, size: Ir }, cursor: new v(0), outline: H.outline };
        wn[_] || (wn[_] = F), n = F.font;
        for (let Ue of u)
          if (!F.font.map[Ue]) {
            let y = ce;
            y.clearRect(0, 0, Z.width, Z.height), y.font = `${n.size}px ${_}`, y.textBaseline = "top", y.textAlign = "left", y.fillStyle = "#ffffff";
            let R = y.measureText(Ue), P = Math.ceil(R.width), G = n.size;
            F.outline && (y.lineJoin = "round", y.lineWidth = F.outline * 2, y.strokeStyle = "#000000", y.strokeText(Ue, F.outline, F.outline), P += F.outline * 2, G += F.outline * 3), y.fillText(Ue, F.outline, F.outline);
            let N = y.getImageData(0, 0, P, G);
            if (F.cursor.x + P > jr && (F.cursor.x = 0, F.cursor.y += G, F.cursor.y > Nr))
              throw new Error("Font atlas exceeds character limit");
            n.tex.update(N, F.cursor.x, F.cursor.y), n.map[Ue] = new Q(F.cursor.x, F.cursor.y, P, G), F.cursor.x += P;
          }
      }
      let l = e.size || n.size, a2 = S((_b2 = e.scale) != null ? _b2 : 1).scale(l / n.size), m = (_c2 = e.lineSpacing) != null ? _c2 : 0, f = (_d = e.letterSpacing) != null ? _d : 0, p = 0, x = 0, D = 0, q = [], j = [], $ = 0, O = null, A = null;
      for (; $ < u.length; ) {
        let _ = u[$];
        if (_ === `
`)
          D += l + m, q.push({ width: p - f, chars: j }), O = null, A = null, p = 0, j = [];
        else {
          let H = n.map[_];
          if (H) {
            let F = H.w * a2.x;
            e.width && p + F > e.width && (D += l + m, O != null && ($ -= j.length - O, _ = u[$], H = n.map[_], F = H.w * a2.x, j = j.slice(0, O - 1), p = A), O = null, A = null, q.push({ width: p - f, chars: j }), p = 0, j = []), j.push({ tex: n.tex, width: H.w, height: H.h, quad: new Q(H.x / n.tex.width, H.y / n.tex.height, H.w / n.tex.width, H.h / n.tex.height), ch: _, pos: new v(p, D), opacity: (_e2 = e.opacity) != null ? _e2 : 1, color: (_f = e.color) != null ? _f : L.WHITE, scale: S(a2), angle: 0 }), _ === " " && (O = j.length, A = p), p += F, x = Math.max(x, p), p += f;
          }
        }
        $++;
      }
      q.push({ width: p - f, chars: j }), D += l, e.width && (x = e.width);
      let te = [];
      for (let _ of q) {
        let H = (x - _.width) * Bi((_g = e.align) != null ? _g : "left");
        for (let F of _.chars) {
          let Ue = n.map[F.ch], y = te.length;
          if (F.pos = F.pos.add(H, 0).add(Ue.w * a2.x * 0.5, Ue.h * a2.y * 0.5), e.transform) {
            let R = typeof e.transform == "function" ? e.transform(y, F.ch) : e.transform;
            R && Xn(F, R);
          }
          if (r[y]) {
            let R = r[y];
            for (let P of R) {
              let G = e.styles[P], N = typeof G == "function" ? G(y, F.ch) : G;
              N && Xn(F, N);
            }
          }
          te.push(F);
        }
      }
      return { width: x, height: D, chars: te, opt: e };
    }
    __name($e, "$e");
    o($e, "formatText");
    function Jn(e) {
      ze($e(e));
    }
    __name(Jn, "Jn");
    o(Jn, "drawText");
    function ze(e) {
      var _a2;
      re(), b(e.opt.pos), ee(e.opt.angle), b(ut((_a2 = e.opt.anchor) != null ? _a2 : "topleft").add(1, 1).scale(e.width, e.height).scale(-0.5)), e.chars.forEach((n) => {
        Oe({ tex: n.tex, width: n.width, height: n.height, pos: n.pos, scale: n.scale, angle: n.angle, color: n.color, opacity: n.opacity, quad: n.quad, anchor: "center", uniform: e.opt.uniform, shader: e.opt.shader, fixed: e.opt.fixed });
      }), V();
    }
    __name(ze, "ze");
    o(ze, "drawFormattedText");
    function we() {
      return w2.width;
    }
    __name(we, "we");
    o(we, "width");
    function ye() {
      return w2.height;
    }
    __name(ye, "ye");
    o(ye, "height");
    let Ze = {};
    function Zr(e) {
      return new v((e.x - w2.viewport.x) * we() / w2.viewport.width, (e.y - w2.viewport.y) * ye() / w2.viewport.height);
    }
    __name(Zr, "Zr");
    o(Zr, "windowToContent");
    function es(e) {
      return new v(e.x * w2.viewport.width / w2.width, e.y * w2.viewport.height / w2.height);
    }
    __name(es, "es");
    o(es, "contentToView");
    function Lt() {
      return Zr(U.mousePos());
    }
    __name(Lt, "Lt");
    o(Lt, "mousePos"), Ze.error = (e) => {
      if (e.error)
        Cn(e.error);
      else {
        if (e.message === "Script error.")
          return;
        Cn(new Error(e.message));
      }
    }, Ze.unhandledrejection = (e) => Cn(e.reason);
    for (let e in Ze)
      window.addEventListener(e, Ze[e]);
    let se = { inspect: false, timeScale: 1, showLog: true, fps: () => U.fps(), numFrames: () => U.numFrames(), stepFrame: cr, drawCalls: () => w2.drawCalls, clearLog: () => T.logs = [], log: (e) => {
      var _a2;
      let n = (_a2 = s.logMax) != null ? _a2 : Ri, r = e instanceof Error ? "error" : "info";
      T.logs.unshift(`${`[time]${U.time().toFixed(2)}[/time] `}[${r}]${(e == null ? void 0 : e.toString) ? e.toString() : e}[/${r}]`), T.logs.length > n && (T.logs = T.logs.slice(0, n));
    }, error: (e) => se.log(new Error(e.toString ? e.toString() : e)), curRecording: null, get paused() {
      return U.paused;
    }, set paused(e) {
      U.paused = e, e ? he.ctx.suspend() : he.ctx.resume();
    } };
    function Te() {
      return U.dt();
    }
    __name(Te, "Te");
    o(Te, "dt");
    function ts(...e) {
      return e.length > 0 && (T.cam.pos = S(...e)), T.cam.pos ? T.cam.pos.clone() : _t();
    }
    __name(ts, "ts");
    o(ts, "camPos");
    function ns(...e) {
      return e.length > 0 && (T.cam.scale = S(...e)), T.cam.scale.clone();
    }
    __name(ns, "ns");
    o(ns, "camScale");
    function rs(e) {
      return e !== void 0 && (T.cam.angle = e), T.cam.angle;
    }
    __name(rs, "rs");
    o(rs, "camRot");
    function ss(e = 12) {
      T.cam.shake = e;
    }
    __name(ss, "ss");
    o(ss, "shake");
    function bn(e) {
      return T.cam.transform.multVec2(e);
    }
    __name(bn, "bn");
    o(bn, "toScreen");
    function Qn(e) {
      return T.cam.transform.invert().multVec2(e);
    }
    __name(Qn, "Qn");
    o(Qn, "toWorld");
    function It(e) {
      let n = new J();
      return e.pos && n.translate(e.pos), e.scale && n.scale(e.scale), e.angle && n.rotate(e.angle), e.parent ? n.mult(e.parent.transform) : n;
    }
    __name(It, "It");
    o(It, "calcTransform");
    function vn(e) {
      let n = /* @__PURE__ */ new Map(), r = {}, i2 = new De(), u = null, l = { id: Ar(), hidden: false, paused: false, transform: new J(), children: [], parent: null, add(a2) {
        let m = (() => {
          if (Array.isArray(a2))
            return vn(a2);
          if (a2.parent)
            throw new Error("Cannot add a game obj that already has a parent.");
          return a2;
        })();
        return m.parent = this, m.transform = It(m), this.children.push(m), m.trigger("add", m), T.events.trigger("add", m), m;
      }, readd(a2) {
        let m = this.children.indexOf(a2);
        return m !== -1 && (this.children.splice(m, 1), this.children.push(a2)), a2;
      }, remove(a2) {
        let m = this.children.indexOf(a2);
        if (m !== -1) {
          a2.parent = null, this.children.splice(m, 1);
          let f = o((p) => {
            p.trigger("destroy"), T.events.trigger("destroy", p), p.children.forEach((x) => f(x));
          }, "trigger");
          f(a2);
        }
      }, removeAll(a2) {
        if (a2)
          this.get(a2).forEach((m) => this.remove(m));
        else
          for (let m of [...this.children])
            this.remove(m);
      }, update() {
        this.paused || (this.children.sort((a2, m) => {
          var _a2, _b2;
          return ((_a2 = a2.z) != null ? _a2 : 0) - ((_b2 = m.z) != null ? _b2 : 0);
        }).forEach((a2) => a2.update()), this.trigger("update"));
      }, draw() {
        this.hidden || (re(), b(this.pos), C(this.scale), ee(this.angle), this.trigger("draw"), this.children.sort((a2, m) => {
          var _a2, _b2;
          return ((_a2 = a2.z) != null ? _a2 : 0) - ((_b2 = m.z) != null ? _b2 : 0);
        }).forEach((a2) => a2.draw()), V());
      }, drawInspect() {
        this.hidden || (re(), b(this.pos), C(this.scale), ee(this.angle), this.children.sort((a2, m) => {
          var _a2, _b2;
          return ((_a2 = a2.z) != null ? _a2 : 0) - ((_b2 = m.z) != null ? _b2 : 0);
        }).forEach((a2) => a2.drawInspect()), this.trigger("drawInspect"), V());
      }, use(a2) {
        if (!a2)
          return;
        if (typeof a2 == "string")
          return this.use({ id: a2 });
        let m = [];
        a2.id && (this.unuse(a2.id), r[a2.id] = [], m = r[a2.id], n.set(a2.id, a2));
        for (let p in a2) {
          if (Gi.has(p))
            continue;
          let x = Object.getOwnPropertyDescriptor(a2, p);
          if (typeof x.value == "function" && (a2[p] = a2[p].bind(this)), x.set && Object.defineProperty(a2, p, { set: x.set.bind(this) }), x.get && Object.defineProperty(a2, p, { get: x.get.bind(this) }), Fi.has(p)) {
            let D = p === "add" ? () => {
              u = o((q) => m.push(q), "onCurCompCleanup"), a2[p](), u = null;
            } : a2[p];
            m.push(this.on(p, D).cancel);
          } else if (this[p] === void 0)
            Object.defineProperty(this, p, { get: () => a2[p], set: (D) => a2[p] = D, configurable: true, enumerable: true }), m.push(() => delete this[p]);
          else
            throw new Error(`Duplicate component property: "${p}"`);
        }
        let f = o(() => {
          if (a2.require) {
            for (let p of a2.require)
              if (!this.c(p))
                throw new Error(`Component "${a2.id}" requires component "${p}"`);
          }
        }, "checkDeps");
        a2.destroy && m.push(a2.destroy.bind(this)), this.exists() ? (f(), a2.add && (u = o((p) => m.push(p), "onCurCompCleanup"), a2.add.call(this), u = null)) : a2.require && m.push(this.on("add", f).cancel);
      }, unuse(a2) {
        r[a2] && (r[a2].forEach((m) => m()), delete r[a2]), n.has(a2) && n.delete(a2);
      }, c(a2) {
        return n.get(a2);
      }, get(a2, m = {}) {
        let f = m.recursive ? this.children.flatMap(o(/* @__PURE__ */ __name(function p(x) {
          return [x, ...x.children.flatMap(p)];
        }, "p"), "recurse")) : this.children;
        if (f = f.filter((p) => a2 ? p.is(a2) : true), m.liveUpdate) {
          let p = o((x) => m.recursive ? this.isAncestorOf(x) : x.parent === this, "isChild");
          xn((x) => {
            p(x) && x.is(a2) && f.push(x);
          }), Zn((x) => {
            if (p(x) && x.is(a2)) {
              let D = f.findIndex((q) => q.id === x.id);
              D !== -1 && f.splice(D, 1);
            }
          });
        }
        return f;
      }, isAncestorOf(a2) {
        return a2.parent ? a2.parent === this || this.isAncestorOf(a2.parent) : false;
      }, exists() {
        return T.root.isAncestorOf(this);
      }, is(a2) {
        if (a2 === "*")
          return true;
        if (Array.isArray(a2)) {
          for (let m of a2)
            if (!this.c(m))
              return false;
          return true;
        } else
          return this.c(a2) != null;
      }, on(a2, m) {
        let f = i2.on(a2, m.bind(this));
        return u && u(() => f.cancel()), f;
      }, trigger(a2, ...m) {
        i2.trigger(a2, ...m), T.objEvents.trigger(a2, this, ...m);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let a2 = {};
        for (let [m, f] of n)
          a2[m] = f.inspect ? f.inspect() : null;
        return a2;
      }, onAdd(a2) {
        return this.on("add", a2);
      }, onUpdate(a2) {
        return this.on("update", a2);
      }, onDraw(a2) {
        return this.on("draw", a2);
      }, onDestroy(a2) {
        return this.on("destroy", a2);
      }, clearEvents() {
        i2.clear();
      } };
      for (let a2 of e)
        l.use(a2);
      return l;
    }
    __name(vn, "vn");
    o(vn, "make");
    function je(e, n, r) {
      return T.objEvents[e] || (T.objEvents[e] = new it()), T.objEvents.on(e, (i2, ...u) => {
        i2.is(n) && r(i2, ...u);
      });
    }
    __name(je, "je");
    o(je, "on");
    let yn = o((e, n) => {
      if (typeof e == "function" && n === void 0) {
        let r = vt([{ update: e }]);
        return { get paused() {
          return r.paused;
        }, set paused(i2) {
          r.paused = i2;
        }, cancel: () => r.destroy() };
      } else if (typeof e == "string")
        return je("update", e, n);
    }, "onUpdate"), is = o((e, n) => {
      if (typeof e == "function" && n === void 0) {
        let r = vt([{ draw: e }]);
        return { get paused() {
          return r.hidden;
        }, set paused(i2) {
          r.hidden = i2;
        }, cancel: () => r.destroy() };
      } else if (typeof e == "string")
        return je("draw", e, n);
    }, "onDraw");
    function xn(e, n) {
      if (typeof e == "function" && n === void 0)
        return T.events.on("add", e);
      if (typeof e == "string")
        return je("add", e, n);
    }
    __name(xn, "xn");
    o(xn, "onAdd");
    function Zn(e, n) {
      if (typeof e == "function" && n === void 0)
        return T.events.on("destroy", e);
      if (typeof e == "string")
        return je("destroy", e, n);
    }
    __name(Zn, "Zn");
    o(Zn, "onDestroy");
    function os(e, n, r) {
      return je("collide", e, (i2, u, l) => u.is(n) && r(i2, u, l));
    }
    __name(os, "os");
    o(os, "onCollide");
    function as(e, n, r) {
      return je("collideUpdate", e, (i2, u, l) => u.is(n) && r(i2, u, l));
    }
    __name(as, "as");
    o(as, "onCollideUpdate");
    function us(e, n, r) {
      return je("collideEnd", e, (i2, u, l) => u.is(n) && r(i2, u, l));
    }
    __name(us, "us");
    o(us, "onCollideEnd");
    function Vt(e, n) {
      ar(e, { recursive: true }).forEach(n), xn(e, n);
    }
    __name(Vt, "Vt");
    o(Vt, "forAllCurrentAndFuture");
    function cs(e, n) {
      if (typeof e == "function")
        return U.onMousePress(e);
      {
        let r = [];
        return Vt(e, (i2) => {
          if (!i2.area)
            throw new Error("onClick() requires the object to have area() component");
          r.push(i2.onClick(() => n(i2)));
        }), Ae.join(r);
      }
    }
    __name(cs, "cs");
    o(cs, "onClick");
    function ls(e, n) {
      let r = [];
      return Vt(e, (i2) => {
        if (!i2.area)
          throw new Error("onHover() requires the object to have area() component");
        r.push(i2.onHover(() => n(i2)));
      }), Ae.join(r);
    }
    __name(ls, "ls");
    o(ls, "onHover");
    function hs(e, n) {
      let r = [];
      return Vt(e, (i2) => {
        if (!i2.area)
          throw new Error("onHoverUpdate() requires the object to have area() component");
        r.push(i2.onHoverUpdate(() => n(i2)));
      }), Ae.join(r);
    }
    __name(hs, "hs");
    o(hs, "onHoverUpdate");
    function ds(e, n) {
      let r = [];
      return Vt(e, (i2) => {
        if (!i2.area)
          throw new Error("onHoverEnd() requires the object to have area() component");
        r.push(i2.onHoverEnd(() => n(i2)));
      }), Ae.join(r);
    }
    __name(ds, "ds");
    o(ds, "onHoverEnd");
    function jt(e, n) {
      let r = 0, i2 = [];
      n && i2.push(n);
      let u = yn(() => {
        r += Te(), r >= e && (u.cancel(), i2.forEach((l) => l()));
      });
      return { paused: u.paused, cancel: u.cancel, onEnd(l) {
        i2.push(l);
      }, then(l) {
        return this.onEnd(l), this;
      } };
    }
    __name(jt, "jt");
    o(jt, "wait");
    function fs(e, n) {
      let r = null, i2 = o(() => {
        r = jt(e, i2), n();
      }, "newAction");
      return r = jt(0, i2), { get paused() {
        return r.paused;
      }, set paused(u) {
        r.paused = u;
      }, cancel: () => r.cancel() };
    }
    __name(fs, "fs");
    o(fs, "loop");
    function er() {
      U.onKeyPress("f1", () => {
        se.inspect = !se.inspect;
      }), U.onKeyPress("f2", () => {
        se.clearLog();
      }), U.onKeyPress("f8", () => {
        se.paused = !se.paused;
      }), U.onKeyPress("f7", () => {
        se.timeScale = bt(Ne(se.timeScale - 0.2, 0, 2), 1);
      }), U.onKeyPress("f9", () => {
        se.timeScale = bt(Ne(se.timeScale + 0.2, 0, 2), 1);
      }), U.onKeyPress("f10", () => {
        se.stepFrame();
      });
    }
    __name(er, "er");
    o(er, "enterDebugMode");
    function tr() {
      U.onKeyPress("b", () => Ft());
    }
    __name(tr, "tr");
    o(tr, "enterBurpMode");
    function ms(e) {
      T.gravity = e;
    }
    __name(ms, "ms");
    o(ms, "setGravity");
    function ps() {
      return T.gravity;
    }
    __name(ps, "ps");
    o(ps, "getGravity");
    function gs(...e) {
      e.length === 1 || e.length === 2 ? (w2.bgColor = W(e[0]), e[1] && (w2.bgAlpha = e[1])) : (e.length === 3 || e.length === 4) && (w2.bgColor = W(e[0], e[1], e[2]), e[3] && (w2.bgAlpha = e[3])), h2.clearColor(w2.bgColor.r / 255, w2.bgColor.g / 255, w2.bgColor.b / 255, w2.bgAlpha);
    }
    __name(gs, "gs");
    o(gs, "setBackground");
    function ws() {
      return w2.bgColor.clone();
    }
    __name(ws, "ws");
    o(ws, "getBackground");
    function Nt(...e) {
      return { id: "pos", pos: S(...e), moveBy(...n) {
        this.pos = this.pos.add(S(...n));
      }, move(...n) {
        this.moveBy(S(...n).scale(Te()));
      }, moveTo(...n) {
        if (typeof n[0] == "number" && typeof n[1] == "number")
          return this.moveTo(S(n[0], n[1]), n[2]);
        let r = n[0], i2 = n[1];
        if (i2 === void 0) {
          this.pos = S(r);
          return;
        }
        let u = r.sub(this.pos);
        if (u.len() <= i2 * Te()) {
          this.pos = S(r);
          return;
        }
        this.move(u.unit().scale(i2));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        return this.fixed ? this.pos : bn(this.pos);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        Qe({ color: W(255, 0, 0), radius: 4 / Yn() });
      } };
    }
    __name(Nt, "Nt");
    o(Nt, "pos");
    function kt(...e) {
      return e.length === 0 ? kt(1) : { id: "scale", scale: S(...e), scaleTo(...n) {
        this.scale = S(...n);
      }, scaleBy(...n) {
        this.scale.scale(S(...n));
      }, inspect() {
        return `(${bt(this.scale.x, 2)}, ${bt(this.scale.y, 2)})`;
      } };
    }
    __name(kt, "kt");
    o(kt, "scale");
    function bs(e) {
      return { id: "rotate", angle: e != null ? e : 0, rotateBy(n) {
        this.angle += n;
      }, rotateTo(n) {
        this.angle = n;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(bs, "bs");
    o(bs, "rotate");
    function vs(...e) {
      return { id: "color", color: W(...e), inspect() {
        return this.color.toString();
      } };
    }
    __name(vs, "vs");
    o(vs, "color");
    function bt(e, n) {
      return Number(e.toFixed(n));
    }
    __name(bt, "bt");
    o(bt, "toFixed");
    function ys(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${bt(this.opacity, 1)}`;
      }, fadeOut(n = 1, r = ot.linear) {
        return Tn(this.opacity, 0, n, (i2) => this.opacity = i2, r);
      } };
    }
    __name(ys, "ys");
    o(ys, "opacity");
    function Un(e) {
      if (!e)
        throw new Error("Please define an anchor");
      return { id: "anchor", anchor: e, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    __name(Un, "Un");
    o(Un, "anchor");
    function xs(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    __name(xs, "xs");
    o(xs, "z");
    function Us(e, n) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: n != null ? n : S(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Us, "Us");
    o(Us, "follow");
    function Es(e, n) {
      let r = typeof e == "number" ? v.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(r.scale(n));
      } };
    }
    __name(Es, "Es");
    o(Es, "move");
    let Ss = 200;
    function Cs(e = {}) {
      var _a2;
      let n = (_a2 = e.distance) != null ? _a2 : Ss, r = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let i2 = bn(this.pos), u = new ne(S(0), we(), ye());
        return !xt(u, i2) && u.sdistToPoint(i2) > n * n;
      }, onExitScreen(i2) {
        return this.on("exitView", i2);
      }, onEnterScreen(i2) {
        return this.on("enterView", i2);
      }, update() {
        this.isOffScreen() ? (r || (this.trigger("exitView"), r = true), e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy()) : (r && (this.trigger("enterView"), r = false), e.hide && (this.hidden = false), e.pause && (this.paused = false));
      } };
    }
    __name(Cs, "Cs");
    o(Cs, "offscreen");
    function Ts(e = {}) {
      var _a2, _b2, _c2, _d;
      let n = {}, r = /* @__PURE__ */ new Set();
      return { id: "area", collisionIgnore: (_a2 = e.collisionIgnore) != null ? _a2 : [], add() {
        this.area.cursor && this.onHover(() => U.setCursor(this.area.cursor)), this.onCollideUpdate((i2, u) => {
          n[i2.id] || this.trigger("collide", i2, u), n[i2.id] = u, r.add(i2.id);
        });
      }, update() {
        for (let i2 in n)
          r.has(Number(i2)) || (this.trigger("collideEnd", n[i2].target), delete n[i2]);
        r.clear();
      }, drawInspect() {
        let i2 = this.localArea();
        re(), C(this.area.scale), b(this.area.offset);
        let u = { outline: { width: 4 / Yn(), color: W(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: this.fixed };
        i2 instanceof ne ? Ce(__spreadProps(__spreadValues({}, u), { pos: i2.pos, width: i2.width, height: i2.height })) : i2 instanceof Pe ? qe(__spreadProps(__spreadValues({}, u), { pts: i2.pts })) : i2 instanceof ke && Qe(__spreadProps(__spreadValues({}, u), { pos: i2.center, radius: i2.radius })), V();
      }, area: { shape: (_b2 = e.shape) != null ? _b2 : null, scale: e.scale ? S(e.scale) : S(1), offset: (_c2 = e.offset) != null ? _c2 : S(0), cursor: (_d = e.cursor) != null ? _d : null }, isClicked() {
        return U.isMousePressed() && this.isHovering();
      }, isHovering() {
        let i2 = this.fixed ? Lt() : Qn(Lt());
        return this.hasPoint(i2);
      }, checkCollision(i2) {
        var _a3;
        return (_a3 = n[i2.id]) != null ? _a3 : null;
      }, getCollisions() {
        return Object.values(n);
      }, isColliding(i2) {
        return !!n[i2.id];
      }, isOverlapping(i2) {
        let u = n[i2.id];
        return u && u.hasOverlap();
      }, onClick(i2) {
        let u = U.onMousePress("left", () => {
          this.isHovering() && i2();
        });
        return this.onDestroy(() => u.cancel()), u;
      }, onHover(i2) {
        let u = false;
        return this.onUpdate(() => {
          u ? u = this.isHovering() : this.isHovering() && (u = true, i2());
        });
      }, onHoverUpdate(i2) {
        return this.onUpdate(() => {
          this.isHovering() && i2();
        });
      }, onHoverEnd(i2) {
        let u = false;
        return this.onUpdate(() => {
          u ? this.isHovering() || (u = false, i2()) : u = this.isHovering();
        });
      }, onCollide(i2, u) {
        if (typeof i2 == "function" && u === void 0)
          return this.on("collide", i2);
        if (typeof i2 == "string")
          return this.onCollide((l, a2) => {
            l.is(i2) && u(l, a2);
          });
      }, onCollideUpdate(i2, u) {
        if (typeof i2 == "function" && u === void 0)
          return this.on("collideUpdate", i2);
        if (typeof i2 == "string")
          return this.on("collideUpdate", (l, a2) => l.is(i2) && u(l, a2));
      }, onCollideEnd(i2, u) {
        if (typeof i2 == "function" && u === void 0)
          return this.on("collideEnd", i2);
        if (typeof i2 == "string")
          return this.on("collideEnd", (l) => l.is(i2) && u(l));
      }, hasPoint(i2) {
        return Bn(this.worldArea(), i2);
      }, resolveCollision(i2) {
        let u = this.checkCollision(i2);
        u && !u.resolved && (this.pos = this.pos.add(u.displacement), u.resolved = true);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        var _a3;
        let i2 = this.localArea();
        if (!(i2 instanceof Pe || i2 instanceof ne))
          throw new Error("Only support polygon and rect shapes for now");
        let u = this.transform.clone().scale(S((_a3 = this.area.scale) != null ? _a3 : 1)).translate(this.area.offset);
        if (i2 instanceof ne) {
          let l = ut(this.anchor || Jt).add(1, 1).scale(-0.5).scale(i2.width, i2.height);
          u.translate(l);
        }
        return i2.transform(u);
      }, screenArea() {
        let i2 = this.worldArea();
        return this.fixed ? i2 : i2.transform(T.cam.transform);
      } };
    }
    __name(Ts, "Ts");
    o(Ts, "area");
    function et(e) {
      return { color: e.color, opacity: e.opacity, anchor: e.anchor, outline: e.outline, fixed: e.fixed, shader: e.shader, uniform: e.uniform };
    }
    __name(et, "et");
    o(et, "getRenderProps");
    function En(e, n = {}) {
      var _a2, _b2, _c2;
      let r = null, i2 = null, u = new ve();
      if (!e)
        throw new Error("Please pass the resource name or data to sprite()");
      let l = o((a2, m, f, p) => {
        let x = S(1, 1);
        return f && p ? (x.x = f / (a2.width * m.w), x.y = p / (a2.height * m.h)) : f ? (x.x = f / (a2.width * m.w), x.y = x.x) : p && (x.y = p / (a2.height * m.h), x.x = x.y), x;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: n.frame || 0, quad: n.quad || new Q(0, 0, 1, 1), animSpeed: (_a2 = n.animSpeed) != null ? _a2 : 1, flipX: (_b2 = n.flipX) != null ? _b2 : false, flipY: (_c2 = n.flipY) != null ? _c2 : false, draw() {
        var _a3, _b3;
        if (!r)
          return;
        let a2 = r.frames[(_a3 = this.frame) != null ? _a3 : 0];
        if (!a2)
          throw new Error(`Frame not found: ${(_b3 = this.frame) != null ? _b3 : 0}`);
        if (r.slice9) {
          let { left: m, right: f, top: p, bottom: x } = r.slice9, D = r.tex.width * a2.w, q = r.tex.height * a2.h, j = this.width - m - f, $ = this.height - p - x, O = m / D, A = f / D, te = 1 - O - A, _ = p / q, H = x / q, F = 1 - _ - H, Ue = [ue(0, 0, O, _), ue(O, 0, te, _), ue(O + te, 0, A, _), ue(0, _, O, F), ue(O, _, te, F), ue(O + te, _, A, F), ue(0, _ + F, O, H), ue(O, _ + F, te, H), ue(O + te, _ + F, A, H), ue(0, 0, m, p), ue(m, 0, j, p), ue(m + j, 0, f, p), ue(0, p, m, $), ue(m, p, j, $), ue(m + j, p, f, $), ue(0, p + $, m, x), ue(m, p + $, j, x), ue(m + j, p + $, f, x)];
          for (let y = 0; y < 9; y++) {
            let R = Ue[y], P = Ue[y + 9];
            Ie(Object.assign(et(this), { pos: P.pos(), tex: r.tex, quad: a2.scale(R), flipX: this.flipX, flipY: this.flipY, tiled: n.tiled, width: P.w, height: P.h }));
          }
        } else
          Ie(Object.assign(et(this), { tex: r.tex, quad: a2, flipX: this.flipX, flipY: this.flipY, tiled: n.tiled, width: this.width, height: this.height }));
      }, add() {
        let a2 = o((f) => {
          let p = f.frames[0].clone();
          n.quad && (p = p.scale(n.quad));
          let x = l(f.tex, p, n.width, n.height);
          this.width = f.tex.width * p.w * x.x, this.height = f.tex.height * p.h * x.y, n.anim && this.play(n.anim), r = f, u.trigger(r);
        }, "setSpriteData"), m = ht(e);
        m ? m.onLoad(a2) : Sn(() => a2(ht(e).data));
      }, update() {
        if (!i2)
          return;
        let a2 = r.anims[i2.name];
        if (typeof a2 == "number") {
          this.frame = a2;
          return;
        }
        if (a2.speed === 0)
          throw new Error("Sprite anim speed cannot be 0");
        i2.timer += Te() * this.animSpeed, i2.timer >= 1 / i2.speed && (i2.timer = 0, a2.from > a2.to ? (this.frame--, this.frame < a2.to && (i2.loop ? this.frame = a2.from : (this.frame++, i2.onEnd(), this.stop()))) : (this.frame++, this.frame > a2.to && (i2.loop ? this.frame = a2.from : (this.frame--, i2.onEnd(), this.stop()))));
      }, play(a2, m = {}) {
        var _a3, _b3, _c3, _d, _e2, _f, _g;
        if (!r) {
          u.add(() => this.play(a2, m));
          return;
        }
        let f = r.anims[a2];
        if (f === void 0)
          throw new Error(`Anim not found: ${a2}`);
        i2 && this.stop(), i2 = typeof f == "number" ? { name: a2, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: a2, timer: 0, loop: (_b3 = (_a3 = m.loop) != null ? _a3 : f.loop) != null ? _b3 : false, pingpong: (_d = (_c3 = m.pingpong) != null ? _c3 : f.pingpong) != null ? _d : false, speed: (_f = (_e2 = m.speed) != null ? _e2 : f.speed) != null ? _f : 10, onEnd: (_g = m.onEnd) != null ? _g : () => {
        } }, this.frame = typeof f == "number" ? f : f.from, this.trigger("animStart", a2);
      }, stop() {
        if (!i2)
          return;
        let a2 = i2.name;
        i2 = null, this.trigger("animEnd", a2);
      }, numFrames() {
        var _a3;
        return (_a3 = r == null ? void 0 : r.frames.length) != null ? _a3 : 0;
      }, curAnim() {
        return i2 == null ? void 0 : i2.name;
      }, onAnimEnd(a2) {
        return this.on("animEnd", a2);
      }, onAnimStart(a2) {
        return this.on("animStart", a2);
      }, renderArea() {
        return new ne(S(0), this.width, this.height);
      }, inspect() {
        if (typeof e == "string")
          return `"${e}"`;
      } };
    }
    __name(En, "En");
    o(En, "sprite");
    function As(e, n = {}) {
      var _a2;
      function r(i2) {
        var _a3, _b2;
        let u = $e(Object.assign(et(i2), { text: i2.text + "", size: i2.textSize, font: i2.font, width: n.width && i2.width, align: i2.align, letterSpacing: i2.letterSpacing, lineSpacing: i2.lineSpacing, transform: i2.textTransform, styles: i2.textStyles }));
        return n.width || (i2.width = u.width / (((_a3 = i2.scale) == null ? void 0 : _a3.x) || 1)), i2.height = u.height / (((_b2 = i2.scale) == null ? void 0 : _b2.y) || 1), u;
      }
      __name(r, "r");
      return o(r, "update"), { id: "text", text: e, textSize: (_a2 = n.size) != null ? _a2 : Oi, font: n.font, width: n.width, height: 0, align: n.align, lineSpacing: n.lineSpacing, letterSpacing: n.letterSpacing, textTransform: n.transform, textStyles: n.styles, add() {
        Sn(() => r(this));
      }, draw() {
        ze(r(this));
      }, renderArea() {
        return new ne(S(0), this.width, this.height);
      } };
    }
    __name(As, "As");
    o(As, "text");
    function Os(e, n, r = {}) {
      return { id: "rect", width: e, height: n, radius: r.radius || 0, draw() {
        Ce(Object.assign(et(this), { width: this.width, height: this.height, radius: this.radius }));
      }, renderArea() {
        return new ne(S(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Os, "Os");
    o(Os, "rect");
    function Ps(e, n) {
      return { id: "rect", width: e, height: n, draw() {
        Oe(Object.assign(et(this), { width: this.width, height: this.height }));
      }, renderArea() {
        return new ne(S(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Ps, "Ps");
    o(Ps, "uvquad");
    function Rs(e) {
      return { id: "circle", radius: e, draw() {
        Qe(Object.assign(et(this), { radius: this.radius }));
      }, renderArea() {
        return new ne(new v(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(Rs, "Rs");
    o(Rs, "circle");
    function Ms(e = 1, n = W(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: n } };
    }
    __name(Ms, "Ms");
    o(Ms, "outline");
    function nr() {
      return { id: "timer", wait(e, n) {
        let r = [];
        n && r.push(n);
        let i2 = 0, u = this.onUpdate(() => {
          i2 += Te(), i2 >= e && (r.forEach((l) => l()), u.cancel());
        });
        return { get paused() {
          return u.paused;
        }, set paused(l) {
          u.paused = l;
        }, cancel: u.cancel, onEnd(l) {
          r.push(l);
        }, then(l) {
          return this.onEnd(l), this;
        } };
      }, loop(e, n) {
        let r = null, i2 = o(() => {
          r = this.wait(e, i2), n();
        }, "newAction");
        return r = this.wait(0, i2), { get paused() {
          return r.paused;
        }, set paused(u) {
          r.paused = u;
        }, cancel: () => r.cancel() };
      }, tween(e, n, r, i2, u = ot.linear) {
        let l = 0, a2 = [], m = this.onUpdate(() => {
          l += Te();
          let f = Math.min(l / r, 1);
          i2(Me(e, n, u(f))), f === 1 && (m.cancel(), i2(n), a2.forEach((p) => p()));
        });
        return { get paused() {
          return m.paused;
        }, set paused(f) {
          m.paused = f;
        }, onEnd(f) {
          a2.push(f);
        }, then(f) {
          return this.onEnd(f), this;
        }, cancel() {
          m.cancel();
        }, finish() {
          m.cancel(), i2(n), a2.forEach((f) => f());
        } };
      } };
    }
    __name(nr, "nr");
    o(nr, "timer");
    let Ds = 640, Gs = 65536;
    function Fs(e = {}) {
      var _a2, _b2, _c2, _d;
      let n = S(0), r = null, i2 = null, u = false;
      return { id: "body", require: ["pos", "area"], jumpForce: (_a2 = e.jumpForce) != null ? _a2 : Ds, gravityScale: (_b2 = e.gravityScale) != null ? _b2 : 1, isStatic: (_c2 = e.isStatic) != null ? _c2 : false, mass: (_d = e.mass) != null ? _d : 1, add() {
        if (this.mass === 0)
          throw new Error("Can't set body mass to 0");
        this.onCollideUpdate((l, a2) => {
          if (l.is("body") && !a2.resolved && (this.trigger("beforePhysicsResolve", a2), l.trigger("beforePhysicsResolve", a2.reverse()), !a2.resolved && !(this.isStatic && l.isStatic))) {
            if (!this.isStatic && !l.isStatic) {
              let m = this.mass + l.mass;
              this.pos = this.pos.add(a2.displacement.scale(l.mass / m)), l.pos = l.pos.add(a2.displacement.scale(-this.mass / m)), this.transform = It(this), l.transform = It(l);
            } else {
              let m = !this.isStatic && l.isStatic ? a2 : a2.reverse();
              m.source.pos = m.source.pos.add(m.displacement), m.source.transform = It(m.source);
            }
            a2.resolved = true, this.trigger("physicsResolve", a2), l.trigger("physicsResolve", a2.reverse());
          }
        }), this.onPhysicsResolve((l) => {
          T.gravity && (l.isBottom() && this.isFalling() ? (n.y = 0, r = l.target, i2 = l.target.pos, u ? u = false : this.trigger("ground", r)) : l.isTop() && this.isJumping() && (n.y = 0, this.trigger("headbutt", l.target)));
        });
      }, update() {
        var _a3;
        if (!T.gravity || this.isStatic)
          return;
        if (u && (r = null, i2 = null, this.trigger("fallOff"), u = false), r)
          if (!this.isOverlapping(r) || !r.exists() || !r.is("body"))
            u = true;
          else {
            !r.pos.eq(i2) && e.stickToPlatform !== false && this.moveBy(r.pos.sub(i2)), i2 = r.pos;
            return;
          }
        let l = n.y;
        n.y += T.gravity * this.gravityScale * Te(), n.y = Math.min(n.y, (_a3 = e.maxVelocity) != null ? _a3 : Gs), l < 0 && n.y >= 0 && this.trigger("fall"), this.move(n);
      }, onPhysicsResolve(l) {
        return this.on("physicsResolve", l);
      }, onBeforePhysicsResolve(l) {
        return this.on("beforePhysicsResolve", l);
      }, curPlatform() {
        return r;
      }, isGrounded() {
        return r !== null;
      }, isFalling() {
        return n.y > 0;
      }, isJumping() {
        return n.y < 0;
      }, jump(l) {
        r = null, i2 = null, n.y = -l || -this.jumpForce;
      }, onGround(l) {
        return this.on("ground", l);
      }, onFall(l) {
        return this.on("fall", l);
      }, onFallOff(l) {
        return this.on("fallOff", l);
      }, onHeadbutt(l) {
        return this.on("headbutt", l);
      } };
    }
    __name(Fs, "Fs");
    o(Fs, "body");
    function Bs(e = 2) {
      let n = e;
      return { id: "doubleJump", require: ["body"], numJumps: e, add() {
        this.onGround(() => {
          n = this.numJumps;
        });
      }, doubleJump(r) {
        n <= 0 || (n < this.numJumps && this.trigger("doubleJump"), n--, this.jump(r));
      }, onDoubleJump(r) {
        return this.on("doubleJump", r);
      }, inspect() {
        return `${n}`;
      } };
    }
    __name(Bs, "Bs");
    o(Bs, "doubleJump");
    function Ls(e, n) {
      return __spreadValues({ id: "shader", shader: e }, typeof n == "function" ? { uniform: n(), update() {
        this.uniform = n();
      } } : { uniform: n });
    }
    __name(Ls, "Ls");
    o(Ls, "shader");
    function Is() {
      return { id: "fixed", fixed: true };
    }
    __name(Is, "Is");
    o(Is, "fixed");
    function rr(e) {
      return { id: "stay", stay: true, scenesToStay: e };
    }
    __name(rr, "rr");
    o(rr, "stay");
    function Vs(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(n = 1) {
        this.setHP(e - n), this.trigger("hurt", n);
      }, heal(n = 1) {
        this.setHP(e + n), this.trigger("heal", n);
      }, hp() {
        return e;
      }, setHP(n) {
        e = n, e <= 0 && this.trigger("death");
      }, onHurt(n) {
        return this.on("hurt", n);
      }, onHeal(n) {
        return this.on("heal", n);
      }, onDeath(n) {
        return this.on("death", n);
      }, inspect() {
        return `${e}`;
      } };
    }
    __name(Vs, "Vs");
    o(Vs, "health");
    function js(e, n = {}) {
      var _a2;
      if (e == null)
        throw new Error("lifespan() requires time");
      let r = (_a2 = n.fade) != null ? _a2 : 0;
      return { id: "lifespan", add() {
        return __async(this, null, function* () {
          yield jt(e), r > 0 && this.opacity && (yield Tn(this.opacity, 0, r, (i2) => this.opacity = i2, ot.linear)), this.destroy();
        });
      } };
    }
    __name(js, "js");
    o(js, "lifespan");
    function Ns(e, n, r) {
      if (!e)
        throw new Error("state() requires an initial state");
      let i2 = {};
      function u(f) {
        i2[f] || (i2[f] = { enter: new ve(), end: new ve(), update: new ve(), draw: new ve() });
      }
      __name(u, "u");
      o(u, "initStateEvents");
      function l(f, p, x) {
        return u(p), i2[p][f].add(x);
      }
      __name(l, "l");
      o(l, "on");
      function a2(f, p, ...x) {
        u(p), i2[p][f].trigger(...x);
      }
      __name(a2, "a");
      o(a2, "trigger");
      let m = false;
      return { id: "state", state: e, enterState(f, ...p) {
        if (m = true, n && !n.includes(f))
          throw new Error(`State not found: ${f}`);
        let x = this.state;
        if (r) {
          if (!(r == null ? void 0 : r[x]))
            return;
          let D = typeof r[x] == "string" ? [r[x]] : r[x];
          if (!D.includes(f))
            throw new Error(`Cannot transition state from "${x}" to "${f}". Available transitions: ${D.map((q) => `"${q}"`).join(", ")}`);
        }
        a2("end", x, ...p), this.state = f, a2("enter", f, ...p), a2("enter", `${x} -> ${f}`, ...p);
      }, onStateTransition(f, p, x) {
        return l("enter", `${f} -> ${p}`, x);
      }, onStateEnter(f, p) {
        return l("enter", f, p);
      }, onStateUpdate(f, p) {
        return l("update", f, p);
      }, onStateDraw(f, p) {
        return l("draw", f, p);
      }, onStateEnd(f, p) {
        return l("end", f, p);
      }, update() {
        m || (a2("enter", e), m = true), a2("update", this.state);
      }, draw() {
        a2("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(Ns, "Ns");
    o(Ns, "state");
    function ks(e = 1) {
      let n = 0, r = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        r || (n += Te(), this.opacity = $t(n, 0, e, 0, 1), n >= e && (this.opacity = 1, r = true));
      } };
    }
    __name(ks, "ks");
    o(ks, "fadeIn");
    function Sn(e) {
      B.loaded ? e() : T.events.on("load", e);
    }
    __name(Sn, "Sn");
    o(Sn, "onLoad");
    function _s(e, n) {
      T.scenes[e] = n;
    }
    __name(_s, "_s");
    o(_s, "scene");
    function Hs(e, ...n) {
      if (!T.scenes[e])
        throw new Error(`Scene not found: ${e}`);
      T.events.onOnce("frameEnd", () => {
        T.events.trigger("sceneLeave", e), U.events.clear(), T.events.clear(), T.objEvents.clear(), [...T.root.children].forEach((r) => {
          (!r.stay || r.scenesToStay && !r.scenesToStay.includes(e)) && T.root.remove(r);
        }), T.root.clearEvents(), T.cam = { pos: null, scale: S(1), angle: 0, shake: 0, transform: new J() }, T.scenes[e](...n), s.debug !== false && er(), s.burp && tr();
      });
    }
    __name(Hs, "Hs");
    o(Hs, "go");
    function qs(e) {
      return T.events.on("sceneLeave", e);
    }
    __name(qs, "qs");
    o(qs, "onSceneLeave");
    function $s(e, n) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (e6) {
        return n ? (sr(e, n), n) : null;
      }
    }
    __name($s, "$s");
    o($s, "getData");
    function sr(e, n) {
      window.localStorage[e] = JSON.stringify(n);
    }
    __name(sr, "sr");
    o(sr, "setData");
    function ir(e) {
      let n = e(tt);
      for (let r in n)
        tt[r] = n[r], s.global !== false && (window[r] = n[r]);
      return tt;
    }
    __name(ir, "ir");
    o(ir, "plug");
    function _t() {
      return S(we() / 2, ye() / 2);
    }
    __name(_t, "_t");
    o(_t, "center");
    let zs;
    ((A) => (A[A.None = 0] = "None", A[A.Left = 1] = "Left", A[A.Top = 2] = "Top", A[A.LeftTop = 3] = "LeftTop", A[A.Right = 4] = "Right", A[A.Horizontal = 5] = "Horizontal", A[A.RightTop = 6] = "RightTop", A[A.HorizontalTop = 7] = "HorizontalTop", A[A.Bottom = 8] = "Bottom", A[A.LeftBottom = 9] = "LeftBottom", A[A.Vertical = 10] = "Vertical", A[A.LeftVertical = 11] = "LeftVertical", A[A.RightBottom = 12] = "RightBottom", A[A.HorizontalBottom = 13] = "HorizontalBottom", A[A.RightVertical = 14] = "RightVertical", A[A.All = 15] = "All"))(zs || (zs = {}));
    function or(e = {}) {
      var _a2, _b2, _c2, _d;
      let n = S(0), r = (_a2 = e.isObstacle) != null ? _a2 : false, i2 = (_b2 = e.cost) != null ? _b2 : 0, u = (_c2 = e.edges) != null ? _c2 : [], l = o(() => {
        let m = { left: 1, top: 2, right: 4, bottom: 8 };
        return u.map((f) => m[f] || 0).reduce((f, p) => f | p, 0);
      }, "getEdgeMask"), a2 = l();
      return { id: "tile", tilePosOffset: (_d = e.offset) != null ? _d : S(0), set tilePos(m) {
        let f = this.getLevel();
        n = m.clone(), this.pos = S(this.tilePos.x * f.tileWidth(), this.tilePos.y * f.tileHeight()).add(this.tilePosOffset);
      }, get tilePos() {
        return n;
      }, set isObstacle(m) {
        r !== m && (r = m, this.getLevel().invalidateNavigationMap());
      }, get isObstacle() {
        return r;
      }, set cost(m) {
        i2 !== m && (i2 = m, this.getLevel().invalidateNavigationMap());
      }, get cost() {
        return i2;
      }, set edges(m) {
        u = m, a2 = l(), this.getLevel().invalidateNavigationMap();
      }, get edges() {
        return u;
      }, get edgeMask() {
        return a2;
      }, getLevel() {
        return this.parent;
      }, moveLeft() {
        this.tilePos = this.tilePos.add(S(-1, 0));
      }, moveRight() {
        this.tilePos = this.tilePos.add(S(1, 0));
      }, moveUp() {
        this.tilePos = this.tilePos.add(S(0, -1));
      }, moveDown() {
        this.tilePos = this.tilePos.add(S(0, 1));
      } };
    }
    __name(or, "or");
    o(or, "tile");
    function Ks(e, n) {
      var _a2;
      if (!n.tileWidth || !n.tileHeight)
        throw new Error("Must provide tileWidth and tileHeight.");
      let r = vt([Nt((_a2 = n.pos) != null ? _a2 : S(0))]), i2 = e.length, u = 0, l = null, a2 = null, m = null, f = null, p = o((y) => y.x + y.y * u, "tile2Hash"), x = o((y) => S(Math.floor(y % u), Math.floor(y / u)), "hash2Tile"), D = o(() => {
        l = [];
        for (let y of r.children)
          q(y);
      }, "createSpatialMap"), q = o((y) => {
        let R = p(y.tilePos);
        l[R] ? l[R].push(y) : l[R] = [y];
      }, "insertIntoSpatialMap"), j = o((y) => {
        let R = p(y.tilePos);
        if (l[R]) {
          let P = l[R].indexOf(y);
          P >= 0 && l[R].splice(P, 1);
        }
      }, "removeFromSpatialMap"), $ = o(() => {
        let y = false;
        for (let R of r.children) {
          let P = r.pos2Tile(R.pos);
          (R.tilePos.x != P.x || R.tilePos.y != P.y) && (y = true, j(R), R.tilePos.x = P.x, R.tilePos.y = P.y, q(R));
        }
        y && r.trigger("spatial_map_changed");
      }, "updateSpatialMap"), O = o(() => {
        let y = r.getSpatialMap(), R = r.numRows() * r.numColumns();
        a2 ? a2.length = R : a2 = new Array(R), a2.fill(1, 0, R);
        for (let P = 0; P < y.length; P++) {
          let G = y[P];
          if (G) {
            let N = 0;
            for (let Y of G)
              if (Y.isObstacle) {
                N = 1 / 0;
                break;
              } else
                N += Y.cost;
            a2[P] = N || 1;
          }
        }
      }, "createCostMap"), A = o(() => {
        let y = r.getSpatialMap(), R = r.numRows() * r.numColumns();
        m ? m.length = R : m = new Array(R), m.fill(15, 0, R);
        for (let P = 0; P < y.length; P++) {
          let G = y[P];
          if (G) {
            let N = G.length, Y = 15;
            for (let oe = 0; oe < N; oe++)
              Y |= G[oe].edgeMask;
            m[P] = Y;
          }
        }
      }, "createEdgeMap"), te = o(() => {
        let y = r.numRows() * r.numColumns(), R = o((G, N) => {
          let Y = [];
          for (Y.push(G); Y.length > 0; ) {
            let oe = Y.pop();
            F(oe).forEach((me) => {
              f[me] < 0 && (f[me] = N, Y.push(me));
            });
          }
        }, "traverse");
        f ? f.length = y : f = new Array(y), f.fill(-1, 0, y);
        let P = 0;
        for (let G = 0; G < a2.length; G++) {
          if (f[G] >= 0) {
            P++;
            continue;
          }
          R(G, P), P++;
        }
      }, "createConnectivityMap"), _ = o((y, R) => a2[R], "getCost"), H = o((y, R) => {
        let P = x(y), G = x(R);
        return P.dist(G);
      }, "getHeuristic"), F = o((y, R) => {
        let P = [], G = Math.floor(y % u), N = G > 0 && m[y] & 1 && a2[y - 1] !== 1 / 0, Y = y >= u && m[y] & 2 && a2[y - u] !== 1 / 0, oe = G < u - 1 && m[y] & 4 && a2[y + 1] !== 1 / 0, me = y < u * i2 - u - 1 && m[y] & 8 && a2[y + u] !== 1 / 0;
        return R ? (N && (Y && P.push(y - u - 1), P.push(y - 1), me && P.push(y + u - 1)), Y && P.push(y - u), oe && (Y && P.push(y - u + 1), P.push(y + 1), me && P.push(y + u + 1)), me && P.push(y + u)) : (N && P.push(y - 1), Y && P.push(y - u), oe && P.push(y + 1), me && P.push(y + u)), P;
      }, "getNeighbours"), Ue = { id: "level", tileWidth() {
        return n.tileWidth;
      }, tileHeight() {
        return n.tileHeight;
      }, spawn(y, ...R) {
        let P = S(...R), G = (() => {
          if (typeof y == "string") {
            if (n.tiles[y]) {
              if (typeof n.tiles[y] != "function")
                throw new Error("Level symbol def must be a function returning a component list");
              return n.tiles[y](P);
            } else if (n.wildcardTile)
              return n.wildcardTile(y, P);
          } else {
            if (Array.isArray(y))
              return y;
            throw new Error("Expected a symbol or a component list");
          }
        })();
        if (!G)
          return null;
        let N = false, Y = false;
        for (let me of G)
          me.id === "tile" && (Y = true), me.id === "pos" && (N = true);
        N || G.push(Nt()), Y || G.push(or());
        let oe = r.add(G);
        return N && (oe.tilePosOffset = oe.pos.clone()), oe.tilePos = P, l && (q(oe), this.trigger("spatial_map_changed"), this.trigger("navigation_map_invalid")), oe;
      }, numColumns() {
        return u;
      }, numRows() {
        return i2;
      }, levelWidth() {
        return u * this.tileWidth();
      }, levelHeight() {
        return i2 * this.tileHeight();
      }, tile2Pos(...y) {
        return S(...y).scale(this.tileWidth(), this.tileHeight());
      }, pos2Tile(...y) {
        let R = S(...y);
        return S(Math.floor(R.x / this.tileWidth()), Math.floor(R.y / this.tileHeight()));
      }, getSpatialMap() {
        return l || D(), l;
      }, onSpatialMapChanged(y) {
        return this.on("spatial_map_changed", y);
      }, onNavigationMapInvalid(y) {
        return this.on("navigation_map_invalid", y);
      }, getAt(y) {
        l || D();
        let R = p(y);
        return l[R] || [];
      }, update() {
        l && $();
      }, invalidateNavigationMap() {
        a2 = null, m = null, f = null;
      }, onNavigationMapChanged(y) {
        return this.on("navigation_map_changed", y);
      }, getTilePath(y, R, P = {}) {
        var _a3;
        if (a2 || O(), m || A(), f || te(), y.x < 0 || y.x >= u || y.y < 0 || y.y >= i2 || R.x < 0 || R.x >= u || R.y < 0 || R.y >= i2)
          return null;
        let G = p(y), N = p(R);
        if (a2[N] === 1 / 0)
          return null;
        if (G === N)
          return [];
        if (f[G] != -1 && f[G] !== f[N])
          return null;
        let Y = new Et((Le, On) => Le.cost < On.cost);
        Y.insert({ cost: 0, node: G });
        let oe = /* @__PURE__ */ new Map();
        oe.set(G, G);
        let me = /* @__PURE__ */ new Map();
        for (me.set(G, 0); Y.length !== 0; ) {
          let Le = (_a3 = Y.remove()) == null ? void 0 : _a3.node;
          if (Le === N)
            break;
          let On = F(Le, P.allowDiagonals);
          for (let Ke of On) {
            let Pn = (me.get(Le) || 0) + _(Le, Ke) + H(Ke, N);
            (!me.has(Ke) || Pn < me.get(Ke)) && (me.set(Ke, Pn), Y.insert({ cost: Pn, node: Ke }), oe.set(Ke, Le));
          }
        }
        let An = [], yt = N, di = x(yt);
        for (An.push(di); yt !== G; ) {
          yt = oe.get(yt);
          let Le = x(yt);
          An.push(Le);
        }
        return An.reverse();
      }, getPath(y, R, P = {}) {
        let G = this.tileWidth(), N = this.tileHeight(), Y = this.getTilePath(this.pos2Tile(y), this.pos2Tile(R), P);
        return Y ? [y, ...Y.slice(1, -1).map((oe) => oe.scale(G, N).add(G / 2, N / 2)), R] : null;
      } };
      return r.use(Ue), r.onNavigationMapInvalid(() => {
        r.invalidateNavigationMap(), r.trigger("navigation_map_changed");
      }), e.forEach((y, R) => {
        let P = y.split("");
        u = Math.max(P.length, u), P.forEach((G, N) => {
          r.spawn(G, S(N, R));
        });
      }), r;
    }
    __name(Ks, "Ks");
    o(Ks, "addLevel");
    function Ys(e = {}) {
      var _a2, _b2;
      let n = null, r = null, i2 = null, u = null;
      return { id: "agent", require: ["pos", "tile"], agentSpeed: (_a2 = e.speed) != null ? _a2 : 100, allowDiagonals: (_b2 = e.allowDiagonals) != null ? _b2 : true, getDistanceToTarget() {
        return n ? this.pos.dist(n) : 0;
      }, getNextLocation() {
        return r && i2 ? r[i2] : null;
      }, getPath() {
        return r ? r.slice() : null;
      }, getTarget() {
        return n;
      }, isNavigationFinished() {
        return r ? i2 === null : true;
      }, isTargetReachable() {
        return r !== null;
      }, isTargetReached() {
        return n ? this.pos.eq(n) : true;
      }, setTarget(l) {
        n = l, r = this.getLevel().getPath(this.pos, n, { allowDiagonals: this.allowDiagonals }), i2 = r ? 0 : null, r ? (u || (u = this.getLevel().onNavigationMapChanged(() => {
          r && i2 !== null && (r = this.getLevel().getPath(this.pos, n, { allowDiagonals: this.allowDiagonals }), i2 = r ? 0 : null, r ? this.trigger("navigation-next", this, r[i2]) : this.trigger("navigation-ended", this));
        }), this.onDestroy(() => u.cancel())), this.trigger("navigation-started", this), this.trigger("navigation-next", this, r[i2])) : this.trigger("navigation-ended", this);
      }, update() {
        if (r && i2 !== null) {
          if (this.pos.sdist(r[i2]) < 2)
            if (i2 === r.length - 1) {
              this.pos = n.clone(), i2 = null, this.trigger("navigation-ended", this), this.trigger("target-reached", this);
              return;
            } else
              i2++, this.trigger("navigation-next", this, r[i2]);
          this.moveTo(r[i2], this.agentSpeed);
        }
      }, onNavigationStarted(l) {
        return this.on("navigation-started", l);
      }, onNavigationNext(l) {
        return this.on("navigation-next", l);
      }, onNavigationEnded(l) {
        return this.on("navigation-ended", l);
      }, onTargetReached(l) {
        return this.on("target-reached", l);
      }, inspect() {
        return JSON.stringify({ target: JSON.stringify(n), path: JSON.stringify(r) });
      } };
    }
    __name(Ys, "Ys");
    o(Ys, "agent");
    function Xs(e) {
      let n = U.canvas().captureStream(e), r = he.ctx.createMediaStreamDestination();
      he.masterNode.connect(r);
      let i2 = new MediaRecorder(n), u = [];
      return i2.ondataavailable = (l) => {
        l.data.size > 0 && u.push(l.data);
      }, i2.onerror = () => {
        he.masterNode.disconnect(r), n.getTracks().forEach((l) => l.stop());
      }, i2.start(), { resume() {
        i2.resume();
      }, pause() {
        i2.pause();
      }, stop() {
        return i2.stop(), he.masterNode.disconnect(r), n.getTracks().forEach((l) => l.stop()), new Promise((l) => {
          i2.onstop = () => {
            l(new Blob(u, { type: "video/mp4" }));
          };
        });
      }, download(l = "kaboom.mp4") {
        this.stop().then((a2) => Vn(l, a2));
      } };
    }
    __name(Xs, "Xs");
    o(Xs, "record");
    function Ws() {
      return document.activeElement === U.canvas();
    }
    __name(Ws, "Ws");
    o(Ws, "isFocused");
    function Js(e) {
      e.destroy();
    }
    __name(Js, "Js");
    o(Js, "destroy");
    let vt = T.root.add.bind(T.root), Qs = T.root.readd.bind(T.root), Zs = T.root.removeAll.bind(T.root), ar = T.root.get.bind(T.root);
    function ur(e = 2, n = 1) {
      let r = 0;
      return { id: "boom", require: ["scale"], update() {
        let i2 = Math.sin(r * e) * n;
        i2 < 0 && this.destroy(), this.scale = S(i2), r += Te();
      } };
    }
    __name(ur, "ur");
    o(ur, "boom");
    let ei = He(null, Gr), ti = He(null, Fr);
    function ni(e, n = {}) {
      var _a2, _b2;
      let r = vt([Nt(e), rr()]), i2 = (n.speed || 1) * 5, u = n.scale || 1;
      r.add([En(ti), kt(0), Un("center"), ur(i2, u), ...(_a2 = n.comps) != null ? _a2 : []]);
      let l = r.add([En(ei), kt(0), Un("center"), nr(), ...(_b2 = n.comps) != null ? _b2 : []]);
      return l.wait(0.4 / i2, () => l.use(ur(i2, u))), l.onDestroy(() => r.destroy()), r;
    }
    __name(ni, "ni");
    o(ni, "addKaboom");
    function cr() {
      T.root.update();
    }
    __name(cr, "cr");
    o(cr, "updateFrame");
    class Ht {
      constructor(n, r, i2, u = false) {
        __publicField(this, "source");
        __publicField(this, "target");
        __publicField(this, "displacement");
        __publicField(this, "resolved", false);
        this.source = n, this.target = r, this.displacement = i2, this.resolved = u;
      }
      reverse() {
        return new Ht(this.target, this.source, this.displacement.scale(-1), this.resolved);
      }
      hasOverlap() {
        return !this.displacement.isZero();
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolution() {
        this.resolved = true;
      }
    }
    __name(Ht, "Ht");
    o(Ht, "Collision");
    function ri() {
      let e = {}, n = s.hashGridSize || Pi, r = new J(), i2 = [];
      function u(l) {
        if (i2.push(r.clone()), l.pos && r.translate(l.pos), l.scale && r.scale(l.scale), l.angle && r.rotate(l.angle), l.transform = r.clone(), l.c("area") && !l.paused) {
          let a2 = l, f = a2.worldArea().bbox(), p = Math.floor(f.pos.x / n), x = Math.floor(f.pos.y / n), D = Math.ceil((f.pos.x + f.width) / n), q = Math.ceil((f.pos.y + f.height) / n), j = /* @__PURE__ */ new Set();
          for (let $ = p; $ <= D; $++)
            for (let O = x; O <= q; O++)
              if (!e[$])
                e[$] = {}, e[$][O] = [a2];
              else if (!e[$][O])
                e[$][O] = [a2];
              else {
                let A = e[$][O];
                e:
                  for (let te of A) {
                    if (!te.exists() || j.has(te.id))
                      continue;
                    for (let H of a2.collisionIgnore)
                      if (te.is(H))
                        continue e;
                    for (let H of te.collisionIgnore)
                      if (a2.is(H))
                        continue e;
                    let _ = Er(a2.worldArea(), te.worldArea());
                    if (_) {
                      let H = new Ht(a2, te, _);
                      a2.trigger("collideUpdate", te, H);
                      let F = H.reverse();
                      F.resolved = H.resolved, te.trigger("collideUpdate", a2, F);
                    }
                    j.add(te.id);
                  }
                A.push(a2);
              }
        }
        l.children.forEach(u), r = i2.pop();
      }
      __name(u, "u");
      o(u, "checkObj"), u(T.root);
    }
    __name(ri, "ri");
    o(ri, "checkFrame");
    function si() {
      var _a2;
      let e = T.cam, n = v.fromAngle(Ut(0, 360)).scale(e.shake);
      e.shake = Me(e.shake, 0, 5 * Te()), e.transform = new J().translate(_t()).scale(e.scale).rotate(e.angle).translate(((_a2 = e.pos) != null ? _a2 : _t()).scale(-1).add(n)), T.root.draw(), fe();
    }
    __name(si, "si");
    o(si, "drawFrame");
    function ii() {
      let e = Fe();
      T.events.numListeners("loading") > 0 ? T.events.trigger("loading", e) : Ve(() => {
        let n = we() / 2, r = 24, i2 = S(we() / 2, ye() / 2).sub(S(n / 2, r / 2));
        Ce({ pos: S(0), width: we(), height: ye(), color: W(0, 0, 0) }), Ce({ pos: i2, width: n, height: r, fill: false, outline: { width: 4 } }), Ce({ pos: i2, width: n * e, height: r });
      });
    }
    __name(ii, "ii");
    o(ii, "drawLoadScreen");
    function lr(e, n) {
      Ve(() => {
        let r = S(8);
        re(), b(e);
        let i2 = $e({ text: n, font: Qt, size: 16, pos: r, color: W(255, 255, 255), fixed: true }), u = i2.width + r.x * 2, l = i2.height + r.x * 2;
        e.x + u >= we() && b(S(-u, 0)), e.y + l >= ye() && b(S(0, -l)), Ce({ width: u, height: l, color: W(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), ze(i2), V();
      });
    }
    __name(lr, "lr");
    o(lr, "drawInspectText");
    function oi() {
      if (se.inspect) {
        let e = null;
        for (let n of T.root.get("*", { recursive: true }))
          if (n.c("area") && n.isHovering()) {
            e = n;
            break;
          }
        if (T.root.drawInspect(), e) {
          let n = [], r = e.inspect();
          for (let i2 in r)
            r[i2] ? n.push(`${i2}: ${r[i2]}`) : n.push(`${i2}`);
          lr(es(Lt()), n.join(`
`));
        }
        lr(S(8), `FPS: ${se.fps()}`);
      }
      se.paused && Ve(() => {
        re(), b(we(), 0), b(-8, 8);
        let e = 32;
        Ce({ width: e, height: e, anchor: "topright", color: W(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let n = 1; n <= 2; n++)
          Ce({ width: 4, height: e * 0.6, anchor: "center", pos: S(-e / 3 * n, e * 0.5), color: W(255, 255, 255), radius: 2, fixed: true });
        V();
      }), se.timeScale !== 1 && Ve(() => {
        re(), b(we(), ye()), b(-8, -8);
        let e = 8, n = $e({ text: se.timeScale.toFixed(1), font: Qt, size: 16, color: W(255, 255, 255), pos: S(-e), anchor: "botright", fixed: true });
        Ce({ width: n.width + e * 2 + e * 4, height: n.height + e * 2, anchor: "botright", color: W(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let r = 0; r < 2; r++) {
          let i2 = se.timeScale < 1;
          $n({ p1: S(-n.width - e * (i2 ? 2 : 3.5), -e), p2: S(-n.width - e * (i2 ? 2 : 3.5), -e - n.height), p3: S(-n.width - e * (i2 ? 3.5 : 2), -e - n.height / 2), pos: S(-r * e * 1 + (i2 ? -e * 0.5 : 0), 0), color: W(255, 255, 255), fixed: true });
        }
        ze(n), V();
      }), se.curRecording && Ve(() => {
        re(), b(0, ye()), b(24, -24), Qe({ radius: 12, color: W(255, 0, 0), opacity: Dn(0, 1, U.time() * 4), fixed: true }), V();
      }), se.showLog && T.logs.length > 0 && Ve(() => {
        re(), b(0, ye()), b(8, -8);
        let e = 8, n = $e({ text: T.logs.join(`
`), font: Qt, pos: S(e, -e), anchor: "botleft", size: 16, width: we() * 0.6, lineSpacing: e / 2, fixed: true, styles: { time: { color: W(127, 127, 127) }, info: { color: W(255, 255, 255) }, error: { color: W(255, 0, 127) } } });
        Ce({ width: n.width + e * 2, height: n.height + e * 2, anchor: "botleft", color: W(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), ze(n), V();
      });
    }
    __name(oi, "oi");
    o(oi, "drawDebug"), s.debug !== false && er(), s.burp && tr();
    function ai(e) {
      T.events.on("loading", e);
    }
    __name(ai, "ai");
    o(ai, "onLoading");
    function ui(e) {
      U.onResize(e);
    }
    __name(ui, "ui");
    o(ui, "onResize");
    function ci(e) {
      T.events.on("error", e);
    }
    __name(ci, "ci");
    o(ci, "onError");
    function Cn(e) {
      U.run(() => {
        Ve(() => {
          let i2 = we(), u = ye(), l = { size: 36, width: i2 - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: Qt, fixed: true };
          Ce({ width: i2, height: u, color: W(0, 0, 255), fixed: true });
          let a2 = $e(__spreadProps(__spreadValues({}, l), { text: e.name, pos: S(32), color: W(255, 128, 0), fixed: true }));
          ze(a2), Jn(__spreadProps(__spreadValues({}, l), { text: e.message, pos: S(32, 32 + a2.height + 16), fixed: true })), V(), T.events.trigger("error", e);
        });
      });
    }
    __name(Cn, "Cn");
    o(Cn, "handleErr");
    function li(e) {
      X.push(e);
    }
    __name(li, "li");
    o(li, "onCleanup");
    function hi() {
      T.events.onOnce("frameEnd", () => {
        U.quit();
        for (let n in Ze)
          window.removeEventListener(n, Ze[n]);
        h2.clear(h2.COLOR_BUFFER_BIT | h2.DEPTH_BUFFER_BIT | h2.STENCIL_BUFFER_BIT);
        let e = h2.getParameter(h2.MAX_TEXTURE_IMAGE_UNITS);
        for (let n = 0; n < e; n++)
          h2.activeTexture(h2.TEXTURE0 + n), h2.bindTexture(h2.TEXTURE_2D, null), h2.bindTexture(h2.TEXTURE_CUBE_MAP, null);
        h2.bindBuffer(h2.ARRAY_BUFFER, null), h2.bindBuffer(h2.ELEMENT_ARRAY_BUFFER, null), h2.bindRenderbuffer(h2.RENDERBUFFER, null), h2.bindFramebuffer(h2.FRAMEBUFFER, null), X.forEach((n) => n()), h2.deleteBuffer(w2.vbuf), h2.deleteBuffer(w2.ibuf);
      });
    }
    __name(hi, "hi");
    o(hi, "quit");
    function Tn(e, n, r, i2, u = ot.linear) {
      let l = 0, a2 = [], m = yn(() => {
        l += Te();
        let f = Math.min(l / r, 1);
        i2(Me(e, n, u(f))), f === 1 && (m.cancel(), i2(n), a2.forEach((p) => p()));
      });
      return { get paused() {
        return m.paused;
      }, set paused(f) {
        m.paused = f;
      }, onEnd(f) {
        a2.push(f);
      }, then(f) {
        return this.onEnd(f), this;
      }, cancel() {
        m.cancel();
      }, finish() {
        m.cancel(), i2(n), a2.forEach((f) => f());
      } };
    }
    __name(Tn, "Tn");
    o(Tn, "tween");
    let qt = true;
    U.run(() => {
      B.loaded || Fe() === 1 && !qt && (B.loaded = true, T.events.trigger("load")), !B.loaded && s.loadingScreen !== false || qt ? (mt(), ii(), pt()) : (se.paused || cr(), ri(), mt(), si(), s.debug !== false && oi(), pt()), qt && (qt = false), T.events.trigger("frameEnd");
    });
    function hr() {
      let e = I, n = h2.drawingBufferWidth / e, r = h2.drawingBufferHeight / e;
      if (U.isFullscreen()) {
        let i2 = window.innerWidth, u = window.innerHeight, l = i2 / u, a2 = n / r;
        if (l > a2) {
          let m = window.innerHeight * a2;
          w2.viewport = { x: (i2 - m) / 2, y: 0, width: m, height: u };
        } else {
          let m = window.innerWidth / a2;
          w2.viewport = { x: 0, y: (u - m) / 2, width: i2, height: m };
        }
        return;
      }
      if (s.letterbox) {
        if (!s.width || !s.height)
          throw new Error("Letterboxing requires width and height defined.");
        let i2 = n / r, u = s.width / s.height;
        if (i2 > u) {
          let l = r * u, a2 = (n - l) / 2;
          w2.viewport = { x: a2, y: 0, width: l, height: r };
        } else {
          let l = n / u, a2 = (r - l) / 2;
          w2.viewport = { x: 0, y: a2, width: n, height: l };
        }
        return;
      }
      if (s.stretch && (!s.width || !s.height))
        throw new Error("Stretching requires width and height defined.");
      w2.viewport = { x: 0, y: 0, width: n, height: r };
    }
    __name(hr, "hr");
    o(hr, "updateViewport"), U.onResize(() => {
      if (U.isFullscreen())
        return;
      let e = s.width && s.height;
      e && !s.stretch && !s.letterbox || (c.width = c.offsetWidth * I, c.height = c.offsetHeight * I, hr(), e || (w2.frameBuffer.free(), w2.frameBuffer = new Ge(h2.drawingBufferWidth, h2.drawingBufferHeight), w2.width = h2.drawingBufferWidth / I, w2.height = h2.drawingBufferHeight / I));
    }), hr();
    let tt = { VERSION: Ti, loadRoot: en, loadProgress: Fe, loadSprite: He, loadSpriteAtlas: Ct, loadSound: hn, loadBitmapFont: on, loadFont: sn, loadShader: cn, loadShaderURL: ln, loadAseprite: un, loadPedit: an, loadBean: dn, loadJSON: rn, load: ct, getSprite: At, getSound: Ot, getFont: Pt, getBitmapFont: Rt, getShader: Mt, getAsset: fn, Asset: ie, SpriteData: le, SoundData: ge, width: we, height: ye, center: _t, dt: Te, time: U.time, screenshot: U.screenshot, record: Xs, isFocused: Ws, setCursor: U.setCursor, getCursor: U.getCursor, setCursorLocked: U.setCursorLocked, isCursorLocked: U.isCursorLocked, setFullscreen: U.setFullscreen, isFullscreen: U.isFullscreen, isTouchscreen: U.isTouchscreen, onLoad: Sn, onLoading: ai, onResize: ui, onGamepadConnect: U.onGamepadConnect, onGamepadDisconnect: U.onGamepadDisconnect, onError: ci, onCleanup: li, camPos: ts, camScale: ns, camRot: rs, shake: ss, toScreen: bn, toWorld: Qn, setGravity: ms, getGravity: ps, setBackground: gs, getBackground: ws, getGamepads: U.getGamepads, add: vt, make: vn, destroy: Js, destroyAll: Zs, get: ar, readd: Qs, pos: Nt, scale: kt, rotate: bs, color: vs, opacity: ys, anchor: Un, area: Ts, sprite: En, text: As, rect: Os, circle: Rs, uvquad: Ps, outline: Ms, body: Fs, doubleJump: Bs, shader: Ls, timer: nr, fixed: Is, stay: rr, health: Vs, lifespan: js, z: xs, move: Es, offscreen: Cs, follow: Us, state: Ns, fadeIn: ks, tile: or, agent: Ys, on: je, onUpdate: yn, onDraw: is, onAdd: xn, onDestroy: Zn, onClick: cs, onCollide: os, onCollideUpdate: as, onCollideEnd: us, onHover: ls, onHoverUpdate: hs, onHoverEnd: ds, onKeyDown: U.onKeyDown, onKeyPress: U.onKeyPress, onKeyPressRepeat: U.onKeyPressRepeat, onKeyRelease: U.onKeyRelease, onMouseDown: U.onMouseDown, onMousePress: U.onMousePress, onMouseRelease: U.onMouseRelease, onMouseMove: U.onMouseMove, onCharInput: U.onCharInput, onTouchStart: U.onTouchStart, onTouchMove: U.onTouchMove, onTouchEnd: U.onTouchEnd, onScroll: U.onScroll, onGamepadButtonDown: U.onGamepadButtonDown, onGamepadButtonPress: U.onGamepadButtonPress, onGamepadButtonRelease: U.onGamepadButtonRelease, onGamepadStick: U.onGamepadStick, mousePos: Lt, mouseDeltaPos: U.mouseDeltaPos, isKeyDown: U.isKeyDown, isKeyPressed: U.isKeyPressed, isKeyPressedRepeat: U.isKeyPressedRepeat, isKeyReleased: U.isKeyReleased, isMouseDown: U.isMouseDown, isMousePressed: U.isMousePressed, isMouseReleased: U.isMouseReleased, isMouseMoved: U.isMouseMoved, isGamepadButtonPressed: U.isGamepadButtonPressed, isGamepadButtonDown: U.isGamepadButtonDown, isGamepadButtonReleased: U.isGamepadButtonReleased, charInputted: U.charInputted, loop: fs, wait: jt, play: dt, volume: pn, burp: Ft, audioCtx: he.ctx, Timer: at, Line: Se, Rect: ne, Circle: ke, Polygon: Pe, Vec2: v, Color: L, Mat4: J, Quad: Q, RNG: rt, rand: Ut, randi: Gn, randSeed: pr, vec2: S, rgb: W, hsl2rgb: mr, quad: ue, choose: wr, chance: gr, lerp: Me, tween: Tn, easings: ot, map: $t, mapc: fr, wave: Dn, deg2rad: Re, rad2deg: st, testLineLine: nt, testRectRect: br, testRectLine: vr, testRectPoint: xt, testCirclePolygon: Ur, testLinePoint: yr, testLineCircle: Fn, drawSprite: Xr, drawText: Jn, formatText: $e, drawRect: Ce, drawLine: wt, drawLines: qn, drawTriangle: $n, drawCircle: Qe, drawEllipse: zn, drawUVQuad: Oe, drawPolygon: qe, drawFormattedText: ze, drawMasked: Wr, drawSubtracted: Jr, pushTransform: re, popTransform: V, pushTranslate: b, pushScale: C, pushRotate: ee, pushMatrix: d, usePostEffect: gn, debug: se, scene: _s, go: Hs, onSceneLeave: qs, addLevel: Ks, getData: $s, setData: sr, download: zt, downloadJSON: Cr, downloadText: In, downloadBlob: Vn, plug: ir, ASCII_CHARS: Br, canvas: U.canvas(), addKaboom: ni, LEFT: v.LEFT, RIGHT: v.RIGHT, UP: v.UP, DOWN: v.DOWN, RED: L.RED, GREEN: L.GREEN, BLUE: L.BLUE, YELLOW: L.YELLOW, MAGENTA: L.MAGENTA, CYAN: L.CYAN, WHITE: L.WHITE, BLACK: L.BLACK, quit: hi, Event: ve, EventHandler: De, EventController: Ae };
    if (s.plugins && s.plugins.forEach(ir), s.global !== false)
      for (let e in tt)
        window[e] = tt[e];
    return U.canvas().focus(), tt;
  }, "default");

  // code/main.ts
  mo({
    font: "joystix"
  });
  var docs = document.querySelector("#ver-test");
  function DebugButton() {
    addButton("Debug", vec2(w / 100 * 90, h / 100 * 10), () => {
      debugS();
      onUpdate(() => {
        if (dHover) {
          debug.log("dHover");
        } else if (gHover) {
          debug.log("gHover");
        } else {
          debug.log("Not Hovering");
        }
      });
    });
  }
  __name(DebugButton, "DebugButton");
  function debugS() {
    if (!debug.inspect) {
      debug.inspect = true;
    } else {
      debug.inspect = false;
    }
  }
  __name(debugS, "debugS");
  var w = window.innerWidth;
  var h = window.innerHeight;
  var isDrag = true;
  var curDraggin = null;
  var curDraw = null;
  var curShuffle = null;
  var hSlotA = false;
  var hSlotB = false;
  var hSlotC = false;
  var hSlotD = false;
  var hSlotE = false;
  var hSlotF = false;
  var hSlotG = false;
  var hSlotH = false;
  var hSlotI = false;
  var sDraw = true;
  var a = false;
  var deckOn = false;
  var graveOn = false;
  var dHover = false;
  var gHover = false;
  var Turno;
  var Mana;
  var enyHover = false;
  var enyAtk = false;
  var enyT = 0;
  var pHover = false;
  var pAtk = false;
  var sCard = false;
  var pBuff = false;
  var actionTarget;
  var Player;
  var Eny1;
  var Eny2;
  var Eny3;
  var Eny4;
  var Eny5;
  var PowerBuff;
  var sWait;
  var sEffect;
  var sHeal;
  var sAtk;
  var iconMana;
  var CartaHit;
  var CartaBurn;
  var CartaHeal;
  var deck = [];
  var hand = [];
  var grave = [];
  var Hit;
  var Burn;
  var Heal;
  var Buff;
  var Fire;
  var Fira;
  var Water;
  var PLAYER_DANO = 6;
  var PLAYER_HEALTH = 300;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var handPositions = [
    C1 = make([
      pos(w / 100 * 21, h / 100 * 82),
      "C1"
    ]),
    C2 = make([
      pos(w / 100 * 29, h / 100 * 82),
      "C2"
    ]),
    C3 = make([
      pos(w / 100 * 37, h / 100 * 82),
      "C3"
    ]),
    C4 = make([
      pos(w / 100 * 45, h / 100 * 82),
      "C4"
    ]),
    C5 = make([
      pos(w / 100 * 53, h / 100 * 82),
      "C5"
    ]),
    C6 = make([
      pos(w / 100 * 61, h / 100 * 82),
      "C6"
    ]),
    C7 = make([
      pos(w / 100 * 65, h / 100 * 82),
      "C7"
    ]),
    C8 = make([
      pos(w / 100 * 72.5, h / 100 * 82),
      "C8"
    ])
  ];
  var handPosR = [
    C1 = make([
      pos(w / 100 * 40, h / 100 * 82),
      "C1"
    ]),
    C2 = make([
      pos(w / 100 * 45, h / 100 * 80),
      "C2"
    ]),
    C3 = make([
      pos(w / 100 * 50, h / 100 * 78),
      "C3"
    ]),
    C4 = make([
      pos(w / 100 * 55, h / 100 * 78),
      "C4"
    ]),
    C5 = make([
      pos(w / 100 * 60, h / 100 * 80),
      "C5"
    ]),
    C6 = make([
      pos(w / 100 * 65, h / 100 * 82),
      "C6"
    ]),
    C7 = make([
      pos(w / 100 * 70, h / 100 * 82),
      "C7"
    ]),
    C8 = make([
      pos(w / 100 * 75, h / 100 * 82),
      "C8"
    ])
  ];
  var G1;
  var G2;
  var G3;
  var G4;
  var G5;
  var G6;
  var G7;
  var G8;
  var G9;
  var G10;
  var gravePos = [
    G1 = make([
      pos(w / 100 * 32, h / 100 * 22),
      "G1"
    ]),
    G2 = make([
      pos(w / 100 * 40, h / 100 * 22),
      "G2"
    ]),
    G3 = make([
      pos(w / 100 * 48, h / 100 * 22),
      "G3"
    ]),
    G4 = make([
      pos(w / 100 * 56, h / 100 * 22),
      "G4"
    ]),
    G5 = make([
      pos(w / 100 * 64, h / 100 * 22),
      "G5"
    ]),
    G6 = make([
      pos(w / 100 * 32, h / 100 * 40),
      "G6"
    ]),
    G7 = make([
      pos(w / 100 * 40, h / 100 * 40),
      "G7"
    ]),
    G8 = make([
      pos(w / 100 * 48, h / 100 * 40),
      "G8"
    ]),
    G9 = make([
      pos(w / 100 * 56, h / 100 * 40),
      "G9"
    ]),
    G10 = make([
      pos(w / 100 * 64, h / 100 * 40),
      "G10"
    ])
  ];
  var p1;
  var e1;
  var e2;
  var e3;
  var e4;
  var e5;
  var pPos = [
    p1 = make([
      pos(w / 100 * 26, h / 100 * 48),
      "p1Pos"
    ])
  ];
  var ePos = [
    e1 = make([
      pos(w / 100 * 65, h / 100 * 52)
    ]),
    e2 = make([
      pos(w / 100 * 79, h / 100 * 55)
    ]),
    e3 = make([
      pos(w / 100 * 83, h / 100 * 58)
    ]),
    e4 = make([
      pos(w / 100 * 87, h / 100 * 55)
    ]),
    e5 = make([
      pos(w / 100 * 91, h / 100 * 52)
    ])
  ];
  var SlotAP;
  var SlotBP;
  var SlotAE;
  var SlotBE;
  var SupCard = [
    SlotAP = add([
      sprite("CartaSlot"),
      pos(w / 100 * 7, h / 100 * 65),
      area(),
      anchor("center"),
      scale(2.6)
    ]),
    SlotBP = add([
      sprite("CartaSlot"),
      pos(w / 100 * 12, h / 100 * 65),
      area(),
      anchor("center"),
      scale(2.6)
    ]),
    SlotAE = add([
      sprite("CartaSlot"),
      pos(w / 100 * 88, h / 100 * 65),
      area(),
      anchor("center"),
      scale(2.6)
    ]),
    SlotBE = add([
      sprite("CartaSlot"),
      pos(w / 100 * 93, h / 100 * 65),
      area(),
      anchor("center"),
      scale(2.6)
    ])
  ];
  var CartasGerais = [
    CartaHit = add([
      sprite("CartaHit"),
      pos(handPositions[0].pos),
      area({
        cursor: "grab",
        shape: new Rect(vec2(0), 41.5, 53)
      }),
      scale(3),
      anchor(vec2(0.093, -0.2)),
      drag(),
      "CartaHit"
    ]),
    CartaHeal = add([
      sprite("CartaHeal"),
      pos(handPositions[1].pos),
      area({
        cursor: "grab",
        shape: new Rect(vec2(0), 41.5, 53)
      }),
      scale(3),
      anchor(vec2(0.093, -0.2)),
      drag(),
      "CartaHeal"
    ]),
    CartaBurn = add([
      sprite("CartaBurn"),
      pos(handPositions[2].pos),
      area({
        cursor: "grab",
        shape: new Rect(vec2(0), 41.5, 53)
      }),
      scale(3),
      anchor(vec2(0.093, -0.2)),
      drag(),
      "CartaBurn"
    ])
  ];
  function start() {
    Turno = 1;
    Mana = 4;
    go("menu");
  }
  __name(start, "start");
  function addButton(txt, p, f) {
    const btn = add([
      rect(100, 100, { radius: 8 }),
      pos(p),
      area(),
      scale(1),
      anchor("center"),
      outline(4)
    ]);
    btn.add([
      text(txt, {
        size: 13
      }),
      anchor("center"),
      color(0, 0, 0)
    ]);
    btn.onHoverUpdate(() => {
      const t = time() * 10;
      btn.scale = vec2(1.2);
      setCursor("pointer");
    });
    btn.onHoverEnd(() => {
      btn.scale = vec2(1);
      setCursor("default");
    });
    btn.onClick(f);
    return btn;
  }
  __name(addButton, "addButton");
  function addButtonSprite(SpriteName, p, f) {
    const SpriteButton = add([
      sprite(SpriteName),
      pos(p),
      scale(1.6),
      anchor("center"),
      area()
    ]);
    SpriteButton.onHoverUpdate(() => {
      const t = time() * 10;
      SpriteButton.scale = vec2(2);
      setCursor("pointer");
    });
    SpriteButton.onHoverEnd(() => {
      SpriteButton.scale = vec2(1.6);
      setCursor("default");
    });
    SpriteButton.onClick(f);
    return SpriteButton;
  }
  __name(addButtonSprite, "addButtonSprite");
  function drag() {
    let offset = vec2(0);
    return {
      id: "drag",
      require: ["pos", "area"],
      add() {
        this.onClick(() => {
          if (curDraggin) {
            return;
          }
          curDraggin = this;
          offset = mousePos().sub(this.pos);
          readd(this);
          setCursor("grabbing");
        });
      },
      update() {
        if (!isDrag) {
          if (curDraggin) {
            setCursor("default");
            curDraggin = null;
            return;
          }
        }
        if (curDraggin === this) {
          this.pos = mousePos().sub(offset);
        }
      },
      inpect() {
        return isDrag ? "on" : "off";
      },
      setDragOff() {
        isDrag = true;
      },
      setDragOn() {
        isDrag = false;
      },
      dragEnd() {
        if (curDraggin === this) {
          this.moveTo(handPositions[hand.indexOf(this)].pos);
          sCard = false;
          setCursor("default");
        }
      },
      cardUse() {
        if (curDraggin == this) {
          Mana--;
          if (this === hand[0]) {
            hSlotA = false;
          } else if (this === hand[1]) {
            hSlotB = false;
          } else if (this === hand[2]) {
            hSlotC = false;
          } else if (this === hand[3]) {
            hSlotD = false;
          } else if (this === hand[4]) {
            hSlotE = false;
          } else if (this === hand[5]) {
            hSlotF = false;
          } else if (this === hand[6]) {
            hSlotG = false;
          } else if (this === hand[7]) {
            hSlotH = false;
          } else if (this === hand[8]) {
            hSlotI = false;
          }
          createShuffleCard(this);
          sCard = false;
          setCursor("default");
        }
      },
      rand(i2) {
        if (curDraggin === null)
          return;
        this.moveTo(handPositions[i2].pos);
        curDraggin = null;
      }
    };
  }
  __name(drag, "drag");
  function draw() {
    return {
      id: "draw",
      require: [],
      pick() {
        if (curDraw) {
          return;
        }
        curDraw = this;
      },
      draw() {
        if (curDraw === null)
          return;
        if (curDraw === this) {
          createDragCard(this);
          curDraw = null;
        }
      },
      show() {
        if (curDraw === null)
          return;
        this.hidden = false;
        readd(this);
        curDraw = null;
      },
      hide() {
        if (curDraw === null)
          return;
        this.hidden = true;
        curDraw = null;
      },
      rand(i2) {
        if (curDraw === null)
          return;
        this.moveTo(gravePos[i2].pos);
        curDraw = null;
      }
    };
  }
  __name(draw, "draw");
  function shuffle() {
    return {
      id: "shuffle",
      require: [],
      pick() {
        if (curShuffle) {
          return;
        }
        curShuffle = this;
      },
      shuffle() {
        if (curShuffle === null)
          return;
        if (curShuffle === this) {
          createDrawCard(this);
          curShuffle = null;
        }
      },
      show() {
        if (curShuffle === null)
          return;
        this.hidden = false;
        readd(this);
        curShuffle = null;
      },
      hide() {
        if (curShuffle === null)
          return;
        this.hidden = true;
        curShuffle = null;
      },
      rand(i2) {
        if (curShuffle === null)
          return;
        this.moveTo(gravePos[i2].pos);
        curShuffle = null;
      }
    };
  }
  __name(shuffle, "shuffle");
  function addCardDrag(S2) {
    let Card = add([
      sprite(S2),
      pos(),
      area({
        shape: new Rect(vec2(0), 41.5, 53)
      }),
      scale(3),
      anchor(vec2(0.093, -0.2)),
      rotate(0),
      drag(),
      {
        name: `${S2}`,
        whoHover: "nonHover"
      }
    ]);
    Card.onHover(() => {
      readd(Card);
      setCursor("grab");
    });
    Card.onHoverEnd(() => {
      setCursor("default");
    });
    return Card;
  }
  __name(addCardDrag, "addCardDrag");
  function addCardDraw(S2) {
    let Card = add([
      sprite(S2),
      pos(),
      area({
        shape: new Rect(vec2(0), 41.5, 53)
      }),
      scale(3),
      anchor(vec2(0.093, -0.2)),
      draw(),
      {
        name: `${S2}`
      }
    ]);
    Card.onHoverEnd(() => {
      setCursor("default");
    });
    return Card;
  }
  __name(addCardDraw, "addCardDraw");
  function addCardShuffle(S2) {
    let Card = add([
      sprite(S2),
      pos(),
      area({
        shape: new Rect(vec2(0), 41.5, 53)
      }),
      scale(3),
      anchor(vec2(0.093, -0.2)),
      shuffle(),
      {
        name: `${S2}`
      }
    ]);
    Card.onHoverEnd(() => {
      setCursor("default");
    });
    return Card;
  }
  __name(addCardShuffle, "addCardShuffle");
  function handCard(card) {
    let ind = deck.indexOf(card);
    deck.splice(ind, 1);
    if (!hSlotA) {
      card.moveTo(handPositions[0].pos);
      hSlotA = true;
      hand[0] = card;
    } else if (!hSlotB) {
      card.moveTo(handPositions[1].pos);
      hSlotB = true;
      hand[1] = card;
    } else if (!hSlotC) {
      card.moveTo(handPositions[2].pos);
      hSlotC = true;
      hand[2] = card;
    } else if (!hSlotD) {
      card.moveTo(handPositions[3].pos);
      hSlotD = true;
      hand[3] = card;
    } else if (!hSlotE) {
      card.moveTo(handPositions[4].pos);
      hSlotE = true;
      hand[4] = card;
    } else if (!hSlotF) {
      card.moveTo(handPositions[5].pos);
      hSlotF = true;
      hand[5] = card;
    } else if (!hSlotG) {
      card.moveTo(handPositions[6].pos);
      hSlotG = true;
      hand[6] = card;
    } else if (!hSlotH) {
      card.moveTo(handPositions[7].pos);
      hSlotH = true;
      hand[7] = card;
    } else if (!hSlotI) {
      card.moveTo(handPositions[8].pos);
      hSlotI = true;
      hand[8] = card;
    }
    readd(card);
  }
  __name(handCard, "handCard");
  function deckCard(card) {
    card.hidden = true;
    let ind = grave.indexOf(card);
    grave.splice(ind, 1);
    deck.push(card);
    card.moveTo(gravePos[deck.length - 1].pos);
    readd(card);
  }
  __name(deckCard, "deckCard");
  function graveCard(card) {
    card.hidden = true;
    if (!hSlotA) {
      delete hand[0];
    }
    if (!hSlotB) {
      delete hand[1];
    }
    if (!hSlotC) {
      delete hand[2];
    }
    if (!hSlotD) {
      delete hand[3];
    }
    if (!hSlotE) {
      delete hand[4];
    }
    if (!hSlotF) {
      delete hand[5];
    }
    if (!hSlotG) {
      delete hand[6];
    }
    if (!hSlotH) {
      delete hand[7];
    }
    if (!hSlotI) {
      delete hand[8];
    }
    grave.push(card);
    card.moveTo(gravePos[grave.length - 1].pos);
    readd(card);
  }
  __name(graveCard, "graveCard");
  function createDragCard(Card) {
    destroy(Card);
    Card = addCardDrag(`${Card.name}`);
    handCard(Card);
  }
  __name(createDragCard, "createDragCard");
  function createDrawCard(Card) {
    destroy(Card);
    Card = addCardDraw(`${Card.name}`);
    deckCard(Card);
  }
  __name(createDrawCard, "createDrawCard");
  function createShuffleCard(Card) {
    destroy(Card);
    Card = addCardShuffle(`${Card.name}`);
    graveCard(Card);
  }
  __name(createShuffleCard, "createShuffleCard");
  function drawCard() {
    wait(0.1, () => {
      if (sDraw) {
        if (deck.length > 0) {
          if (Mana > 0) {
            for (let i2 = 0; i2 < 6; i2++) {
              if (hand[i2] == void 0) {
                curDraw = deck[deck.length - 1];
                curDraw.hidden = false;
                curDraw.draw();
              }
            }
          } else if (Mana === 0) {
            curDraw = deck[deck.length - 1];
            curDraw.hidden = false;
            curDraw.draw();
            Mana--;
          }
        } else {
          for (let i2 = grave.length - 1; i2 >= 0; i2--) {
            shuffleCard();
          }
          drawCard();
        }
      }
    });
  }
  __name(drawCard, "drawCard");
  function shuffleCard() {
    if (grave.length > 0) {
      curShuffle = grave[grave.length - 1];
      curShuffle.shuffle();
    } else {
      debug.log("Sem cartas para embaralhar");
    }
  }
  __name(shuffleCard, "shuffleCard");
  function splitCards(arr) {
    arr.sort(function() {
      return 0.5 - Math.random();
    });
    if (arr === deck) {
      for (let i2 = 0; i2 < deck.length; i2++) {
        curDraw = deck[i2];
        curDraw.rand(i2);
      }
    } else if (arr === grave) {
      for (let i2 = 0; i2 < grave.length; i2++) {
        curShuffle = grave[i2];
        curShuffle.rand(i2);
      }
    } else if (arr === hand) {
      for (let i2 = 0; i2 < hand.length; i2++) {
        curDraggin = hand[i2];
        curDraggin.rand(i2);
      }
    }
  }
  __name(splitCards, "splitCards");
  function InimigoTurn(enemy) {
    const EnyRate = 80;
    if (EnyRate <= 2) {
      sWait = true;
      enemy.actIcon = add([
        sprite("espera"),
        pos(enemy.pos.x, enemy.pos.y - h / 100 * 12),
        anchor("center"),
        scale(1)
      ]);
      EnyActions(enemy);
    } else if (2 < EnyRate && EnyRate <= 10) {
      let healPoint = enemy.maxHealth - enemy.hp();
      if (healPoint >= 8) {
        sHeal = true;
        enemy.actIcon = add([
          sprite("cura", {
            anim: "idle"
          }),
          pos(enemy.pos.x, enemy.pos.y - h / 100 * 12),
          anchor("center"),
          scale(1.5)
        ]);
        debug.log("Heal");
        EnyActions(enemy);
      } else {
        sAtk = true;
        enemy.actIcon = add([
          sprite("Atk"),
          pos(enemy.pos.x, enemy.pos.y - h / 100 * 12),
          anchor("center"),
          scale(1)
        ]);
        debug.log("Attack");
        EnyActions(enemy);
      }
    } else if (10 < EnyRate && EnyRate <= 18) {
      sEffect = true;
      enemy.actIcon = add([
        sprite("efeito"),
        pos(enemy.pos.x, enemy.pos.y - h / 100 * 12),
        anchor("center"),
        scale(1)
      ]);
      debug.log("Efeito");
      EnyActions(enemy);
    } else {
      sAtk = true;
      enemy.actIcon = add([
        sprite("Atk"),
        pos(enemy.pos.x, enemy.pos.y - h / 100 * 12),
        anchor("center"),
        scale(1)
      ]);
      debug.log("Attack");
    }
  }
  __name(InimigoTurn, "InimigoTurn");
  var i = true;
  function EnyActions(enemy) {
    onUpdate(() => {
      if (!i) {
        return;
      }
      debug.log("BBB");
      if (Turno == 2 && sWait) {
        wait(0.1, () => {
          destroy(enemy.actIcon);
        });
        sWait = false;
        enemyPass();
      }
      if (Turno == 2 && sHeal) {
        let maxHeal = enemy.maxHealth - enemy.hp();
        pAtk = true;
        enyAtk = true;
        if (maxHeal <= 9) {
          enemy.heal(maxHeal);
          NumLog(maxHeal, enemy);
        } else {
          enemy.heal(10);
          NumLog(10, enemy);
        }
        wait(0.1, () => {
          destroy(enemy.actIcon);
        });
        sHeal = false;
        enemyPass();
      }
      if (Turno == 2 && sAtk) {
        Player.hurt(enemy.damage);
        enyAtk = true;
        NumLog(enemy.damage, Player);
        enyAtk = false;
        wait(0.1, () => {
          destroy(enemy.actIcon);
        });
        sAtk = false;
        enyT++;
        i = false;
        if (enyT = 3) {
          enemyPass();
        }
      }
      if (Turno == 2 && sEffect) {
        const efeitos = [
          "-dano",
          "ferido",
          "-turno"
        ];
        const efeitoE = choose(efeitos);
        switch (efeitoE) {
          case "-dano":
            Player.damage = Player.damage - Player.damage / 2;
            break;
          case "ferido":
            Player.hurt(Player.damage);
            break;
          case "-turno":
            Turno = Turno - 1;
            break;
        }
        wait(0.1, () => {
          destroy(enemy.actIcon);
        });
        sEffect = false;
        enemyPass();
      }
    });
  }
  __name(EnyActions, "EnyActions");
  function NumLog(Number2, char) {
    let TxtN = Number2.toString();
    if (pAtk && !enyAtk) {
      let LogDmg = add([
        text("-" + TxtN),
        pos(char.pos.x, char.pos.y),
        area(),
        anchor("center"),
        scale(0.5),
        color(255, 0, 0),
        lifespan(0.8, { fade: 0.5 })
      ]);
      AnimActs("pA", char.pos);
      pAtk = false;
    } else if (!pAtk && !enyAtk && !pBuff) {
      let LogHeal = add([
        text("+" + TxtN),
        pos(char.pos.x, char.pos.y),
        area(),
        anchor("center"),
        scale(0.5),
        color(0, 255, 0),
        lifespan(0.8, { fade: 0.5 })
      ]);
    } else if (!pAtk && !enyAtk && pBuff) {
      let LogBuff = add([
        text("+" + TxtN),
        pos(char.pos.x, char.pos.y),
        area(),
        anchor("center"),
        scale(0.5),
        color(0, 0, 255),
        lifespan(0.8, { fade: 0.5 })
      ]);
    } else if (enyAtk && !pAtk) {
      let LogEDmg = add([
        text("-" + TxtN),
        pos(char.pos.x, char.pos.y),
        area(),
        anchor("center"),
        scale(0.5),
        color(255, 0, 0),
        lifespan(0.8, { fade: 0.5 })
      ]);
      AnimActs("eA", char.pos);
      enyAtk = false;
    } else if (enyAtk && pAtk) {
      let LogEHeal = add([
        text("+" + TxtN),
        pos(char.pos.x, char.pos.y),
        area(),
        anchor("center"),
        scale(0.5),
        color(0, 255, 0),
        lifespan(0.8, { fade: 0.5 })
      ]);
      enyAtk = false;
      pAtk = false;
    }
  }
  __name(NumLog, "NumLog");
  function AnimActs(target, targetPos) {
    if (target == "pA") {
      let pHitEff = add([
        sprite("PlayerHit", {
          anim: "idle"
        }),
        pos(targetPos),
        area(),
        anchor("center"),
        scale(2),
        lifespan(0.8, { fade: 0.5 })
      ]);
    } else if (target == "p") {
    } else if (target == "eA") {
      let enyHitEff = add([
        sprite("MouseHit", {
          anim: "idle"
        }),
        pos(targetPos),
        anchor("center"),
        scale(2),
        lifespan(0.8, { fade: 0.5 })
      ]);
    } else if (target == "e") {
    }
  }
  __name(AnimActs, "AnimActs");
  function enemyPass() {
    const eTurnA = add([
      text("Player", { size: 70 }),
      pos(w / 100 * 65, h / 100 * 40),
      anchor("center"),
      color(0, 0, 0),
      outline(2),
      move(LEFT, 350),
      lifespan(1.5, { fade: 0.5 })
    ]);
    const eTurnB = add([
      text("Turn", { size: 70 }),
      pos(w / 100 * 65, h / 100 * 50),
      anchor("center"),
      color(0, 0, 0),
      move(LEFT, 350),
      lifespan(1.5, { fade: 0.5 })
    ]);
    wait(1.8, () => {
      Turno = 1;
      curDraggin = null;
      Mana = 4;
      enyT = 0;
      wait(0.1, () => {
        if (Eny1.alive) {
          InimigoTurn(Eny1);
        }
      });
    });
    wait(0.5, () => {
      for (let i2 = 0; i2 <= 4; i2++) {
        if (hand[i2] === void 0) {
          wait(0.2, () => {
            drawCard();
          });
        }
      }
    });
  }
  __name(enemyPass, "enemyPass");
  function PassTurn() {
    PowerBuff = 1;
    const eTurnA = add([
      text("Enemy", { size: 70 }),
      pos(w / 100 * 65, h / 100 * 40),
      anchor("center"),
      color(0, 0, 0),
      outline(2),
      move(LEFT, 350),
      lifespan(1.5, { fade: 0.5 })
    ]);
    const eTurnB = add([
      text("Turn", { size: 70 }),
      pos(w / 100 * 65, h / 100 * 50),
      anchor("center"),
      color(0, 0, 0),
      move(LEFT, 350),
      lifespan(1.5, { fade: 0.5 })
    ]);
    wait(1.8, () => {
      Turno = 2;
    });
    if (Eny1.alive) {
      i = true;
      wait(3, () => {
        EnyActions(Eny1);
      });
    }
  }
  __name(PassTurn, "PassTurn");
  function ManaActions() {
    iconMana = add([
      sprite("Mana"),
      pos(w / 100 * 19, h / 100 * 66),
      scale(2.5),
      anchor("center"),
      "mana",
      {
        manaTxt: add([
          text(Mana, {
            size: 30
          }),
          pos(w / 100 * 19, h / 100 * 66),
          anchor(vec2(0.1, -0.18)),
          color(240, 248, 255)
        ])
      }
    ]);
    readd(iconMana.manaTxt);
    iconMana.manaTxt.onUpdate(() => {
      if (Mana < 0) {
        iconMana.manaTxt.text = "0";
      } else {
        iconMana.manaTxt.text = `${Mana}`;
      }
    });
    onUpdate(() => {
      if (Mana == 0) {
        isDrag = false;
        iconMana.use(sprite("Mana0"));
      }
      if (Mana == 4) {
        isDrag = true;
        iconMana.use(sprite("Mana"));
      }
    });
  }
  __name(ManaActions, "ManaActions");
  function Combat() {
    PowerBuff = 1;
    onKeyRelease("q", () => {
      debugS();
    });
    onKeyRelease("r", () => {
      if (hSlotA) {
        hand[0].angle = 335;
        hand[0].moveTo(handPosR[0].pos);
      }
      if (hSlotB) {
        hand[1].angle = 345;
        hand[1].moveTo(handPosR[1].pos);
      }
      if (hSlotC) {
        hand[2].angle = 355;
        hand[2].moveTo(handPosR[2].pos);
      }
      if (hSlotD) {
        hand[3].angle = 5;
        hand[3].moveTo(handPosR[3].pos);
      }
      if (hSlotE) {
        hand[4].angle = 15;
        hand[4].moveTo(handPosR[4].pos);
      }
      if (hSlotF) {
        hand[5].angle = 25;
        hand[5].moveTo(handPosR[5].pos);
      }
      if (hSlotG) {
        hand[6].angle = 35;
        hand[6].moveTo(handPosR[6].pos);
      }
    });
    onKeyRelease("m", () => {
      splitCards(hand);
    });
    onKeyRelease("f", () => {
      onUpdate(() => {
        docs.innerHTML = `<p id='ver-test'>d.len:${deck.length} || h.len:${hand.length} || g.len:${grave.length} || Mana:${Mana} || Turno:${Turno} || A:${a} || W:${w} || enyT:${enyT}</p>`;
      });
    });
    ManaActions();
    onClick(() => {
      wait(0.1, () => {
        if (curDraggin !== null) {
          if (curDraggin.name == "CartaHeal") {
            sCard = true;
          } else if (curDraggin.name == "CartaBuff") {
            sCard = true;
          }
        }
        if (!isDrag) {
          return;
        }
      });
    });
    function checkTarget(dmg) {
      if (Eny1.hover == true) {
        Eny1.hurt(dmg);
        NumLog(dmg, Eny1);
      } else if (Eny2.hover == true) {
        Eny2.hurt(dmg);
        NumLog(dmg, Eny2);
      } else if (Eny3.hover == true) {
        Eny3.hurt(dmg);
        NumLog(dmg, Eny3);
      } else if (Eny4.hover == true) {
        Eny4.hurt(dmg);
        NumLog(dmg, Eny4);
      } else if (Eny5.hover == true) {
        Eny5.hurt(dmg);
        NumLog(dmg, Eny5);
      }
    }
    __name(checkTarget, "checkTarget");
    onMouseRelease(() => {
      if (!isDrag) {
        return;
      }
      if (curDraggin) {
        actionTarget = curDraggin.whoHover;
        if (curDraggin.name == "CartaHit") {
          pAtk = true;
          if (enyHover) {
            debug.log("Damaged");
            let Player_Dano_Buff = PLAYER_DANO * PowerBuff;
            checkTarget(Player.damage);
            curDraggin.cardUse();
          } else {
            curDraggin.dragEnd();
          }
        }
        if (curDraggin.name == "CartaHeal") {
          if (pHover) {
            if (Player.hp() == PLAYER_HEALTH) {
              debug.log("Vida Cheia");
              curDraggin.dragEnd();
            } else {
              pAtk = false;
              let MaxHeal = PLAYER_HEALTH - Player.hp();
              if (MaxHeal <= 9) {
                Player.heal(MaxHeal);
                NumLog(MaxHeal, Player);
                curDraggin.cardUse();
              } else {
                Player.heal(10);
                NumLog(10, Player);
                curDraggin.cardUse();
              }
            }
          } else {
            curDraggin.dragEnd();
          }
        }
        if (curDraggin.name == "CartaBurn") {
          pAtk = true;
          if (enyHover) {
            debug.log("Burning");
            checkTarget(Player.damage);
            enyHover = false;
            curDraggin.cardUse();
          } else {
            curDraggin.dragEnd();
          }
        }
        if (curDraggin.name == "CartaBuff") {
          pAtk = false;
          pBuff = true;
          if (pHover) {
            PowerBuff = PowerBuff * 2;
            debug.log("Power Buff");
            NumLog(PowerBuff, Player);
            curDraggin.cardUse();
          } else {
            curDraggin.dragEnd();
          }
        }
        if (curDraggin.name == "CartaFire") {
          pAtk = true;
          if (enyHover) {
            checkTarget(Player.damage / 2 + 1);
            curDraggin.cardUse();
          } else {
            curDraggin.dragEnd();
          }
        }
        if (curDraggin.name == "CartaFira") {
          pAtk = true;
          if (enyHover) {
            checkTarget(Player.damage / 2 + 1);
            curDraggin.cardUse();
          } else {
            curDraggin.dragEnd();
          }
        }
        if (curDraggin.name == "CartaWater") {
          pAtk = true;
          if (enyHover) {
            checkTarget(Player.damage / 2 + 1);
            curDraggin.cardUse();
          } else {
            curDraggin.dragEnd();
          }
        }
        curDraggin = null;
      }
    });
  }
  __name(Combat, "Combat");
  function addEnemy(spr, i2, healthNum, dmg) {
    let enemy = add([
      sprite(spr),
      health(healthNum),
      pos(ePos[i2].pos),
      area({
        scale: 0.6
      }),
      scale(3),
      anchor(vec2(0.01, -0.1)),
      {
        name: spr,
        enyNumber: `Eny${i2 + 1}`,
        maxHealth: healthNum,
        damage: dmg,
        hover: false,
        turnOn: true,
        alive: true,
        actIcon: "",
        healthbar: add([
          rect(140, 20, { radius: 8 }),
          pos(ePos[i2].pos.x - w / 100 * 4, ePos[i2].pos.y - w / 100 * 4),
          color(127, 255, 127),
          anchor("left"),
          {
            max: healthNum,
            set(hp) {
              this.width = 140 * hp / this.max;
              this.flash = false;
            }
          }
        ]),
        numVida: add([
          text(healthNum + "/" + healthNum, { size: 16 }),
          pos(ePos[i2].pos.x - w / 100 * 4, ePos[i2].pos.y - w / 100 * 4),
          anchor("left"),
          color(0, 0, 0)
        ])
      }
    ]);
    enemy.onHurt(() => {
      enemy.healthbar.flash = true;
      enemy.healthbar.set(enemy.hp());
      enemy.numVida.onUpdate(() => {
        if (enemy.hp() <= 0) {
          enemy.numVida.text = 0 + "/" + healthNum;
          enemy.alive = false;
          enemy.hover = false;
          destroy(enemy);
          destroy(enemy.actIcon);
          enemy.numVida.text = "";
        } else {
          enemy.numVida.text = enemy.hp() + "/" + healthNum;
        }
      });
      if (enemy.healthbar.flash) {
        enemy.healthbar.color = rgb(255, 255, 255);
        wait(0.1, () => {
          enemy.healthbar.flash = false;
        });
      } else {
        enemy.healthbar.color = rgb(127, 255, 127);
      }
    });
    enemy.onHoverUpdate(() => {
      enemy.hover = true;
      if (curDraggin) {
        curDraggin.whoHover = enemy.enyNumber;
        enyHover = true;
        if (!sCard) {
          setCursor("crosshair");
        } else {
          setCursor("no-drop");
        }
      }
    });
    enemy.onHoverEnd(() => {
      enemy.hover = false;
      enyHover = false;
      if (curDraggin) {
        setCursor("grabbing");
        curDraggin.whoHover = "nonHover";
      }
    });
    return enemy;
  }
  __name(addEnemy, "addEnemy");
  function addPlayer(spr, i2, healthNum, dmg) {
    let player = add([
      sprite(spr),
      health(healthNum),
      pos(pPos[i2].pos),
      scale(2.8),
      anchor(vec2(0, 0.01)),
      area({
        scale: 0.7
      }),
      {
        alive: true,
        name: spr,
        maxHealth: healthNum,
        damage: dmg,
        healthbar: add([
          rect(140, 20, { radius: 8 }),
          pos(w / 100 * 21, h / 100 * 37.5),
          color(107, 201, 108),
          anchor("left"),
          {
            max: healthNum,
            set(hp) {
              this.width = 140 * hp / this.max;
              this.flash = true;
            }
          }
        ]),
        numVida: add([
          text(healthNum + "/" + healthNum, { size: 16 }),
          pos(w / 100 * 25.6, h / 100 * 37.5),
          anchor("center"),
          color(0, 0, 0)
        ])
      }
    ]);
    onUpdate(() => {
      if (player.healthbar.flash) {
        player.healthbar.color = rgb(255, 255, 255);
        player.healthbar.flash = false;
      } else {
        player.healthbar.color = rgb(127, 255, 127);
      }
    });
    player.onHoverUpdate(() => {
      pHover = true;
      if (curDraggin) {
        if (sCard) {
          setCursor("crosshair");
        } else {
          setCursor("no-drop");
        }
      }
    });
    player.onHoverEnd(() => {
      pHover = false;
      if (curDraggin) {
        setCursor("grabbing");
      }
    });
    player.onHurt(() => {
      player.healthbar.set(player.hp());
      player.numVida.onUpdate(() => {
        if (player.hp() < 0) {
          player.numVida.text = 0 + "/" + healthNum;
        } else {
          player.numVida.text = player.hp() + "/" + healthNum;
        }
      });
    });
    return player;
  }
  __name(addPlayer, "addPlayer");
  function addHand() {
    const hand2 = add([
      pos(w / 100 * 50, h / 100 * 88),
      rect(w, h / 100 * 30, { radius: 8 }),
      anchor("center"),
      outline(4),
      color(10, 10, 10)
    ]);
  }
  __name(addHand, "addHand");
  function InitHand() {
    Hit = addCardShuffle("CartaHit");
    graveCard(Hit);
    Heal = addCardShuffle("CartaHeal");
    graveCard(Heal);
    Burn = addCardShuffle("CartaBurn");
    graveCard(Burn);
    Buff = addCardShuffle("CartaBuff");
    graveCard(Buff);
    Fira = addCardShuffle("CartaFira");
    graveCard(Fira);
    Water = addCardShuffle("CartaWater");
    graveCard(Water);
    Fire = addCardShuffle("CartaFire");
    graveCard(Fire);
    for (let i2 = grave.length - 1; i2 >= 0; i2--) {
      shuffleCard();
    }
    for (let i2 = 0; i2 < 4; i2++) {
      wait(0.2, () => {
      });
    }
    for (let i2 = 0; i2 < 5; i2++) {
      wait(0.2, () => {
        splitCards(deck);
        wait(0.1, () => {
          drawCard();
        });
      });
    }
  }
  __name(InitHand, "InitHand");
  function DecknGrave() {
    let deckMenu = add([
      rect(w / 100 * 50, h / 100 * 80, { radius: 8 }),
      pos(w / 2, h / 2),
      area(),
      anchor("center"),
      outline(4),
      color(255, 255, 255)
    ]);
    deckMenu.hidden = true;
    deckMenu.onHoverUpdate(() => {
      dHover = true;
    });
    deckMenu.onHoverEnd(() => {
      dHover = false;
    });
    wait(0.1, () => {
      onClick(() => {
        if (deckOn) {
          if (!dHover) {
            deckMenu.hidden = true;
            deckOn = false;
            hideD();
          }
        }
      });
    });
    let DeckButton = addButton("D", vec2(w / 100 * 7, h / 100 * 82), () => {
      if (deckMenu.hidden) {
        readd(deckMenu);
        deckMenu.hidden = false;
        wait(0.1, () => {
          deckOn = true;
        });
        showD();
      } else {
        deckMenu.hidden = true;
        deckOn = false;
        hideD();
      }
    });
    let graveMenu = add([
      rect(w / 100 * 50, h / 100 * 80, { radius: 8 }),
      pos(w / 2, h / 2),
      area(),
      anchor("center"),
      outline(4),
      color(255, 255, 10)
    ]);
    graveMenu.hidden = true;
    graveMenu.onHoverUpdate(() => {
      gHover = true;
    });
    graveMenu.onHoverEnd(() => {
      gHover = false;
    });
    wait(0.1, () => {
      onClick(() => {
        if (graveOn) {
          if (!gHover) {
            graveMenu.hidden = true;
            graveOn = false;
            hideG();
          }
        }
      });
    });
    let GrvyButton = addButton("G", vec2(w / 100 * 93, h / 100 * 82), () => {
      if (graveMenu.hidden) {
        readd(graveMenu);
        graveMenu.hidden = false;
        wait(0.1, () => {
          graveOn = true;
        });
        showG();
      } else {
        graveMenu.hidden = true;
        graveOn = false;
        hideG();
      }
    });
  }
  __name(DecknGrave, "DecknGrave");
  function showD() {
    for (let i2 = 0; i2 < deck.length; i2++) {
      curDraw = deck[i2];
      curDraw.show();
    }
  }
  __name(showD, "showD");
  function hideD() {
    for (let i2 = 0; i2 < deck.length; i2++) {
      curDraw = deck[i2];
      curDraw.hide();
    }
    splitCards(deck);
  }
  __name(hideD, "hideD");
  function showG() {
    for (let i2 = 0; i2 < grave.length; i2++) {
      curShuffle = grave[i2];
      curShuffle.show();
    }
  }
  __name(showG, "showG");
  function hideG() {
    for (let i2 = 0; i2 < grave.length; i2++) {
      curShuffle = grave[i2];
      curShuffle.hide();
    }
    splitCards(grave);
  }
  __name(hideG, "hideG");
  scene("Lv1", () => {
    setCursor("default");
    const Lv1Background = add([
      sprite("Lv1", { width: width(), height: height() }),
      pos(w / 2, h / 2),
      scale(1),
      anchor("center")
    ]);
    DebugButton();
    addButton("Pass", vec2(w / 100 * 7, h / 100 * 30), () => {
      PassTurn();
    });
    addHand();
    InitHand();
    Eny1 = addEnemy("Rato", 0, 10, 6);
    InimigoTurn(Eny1);
    Player = addPlayer("Hero", 0, 60, 6);
    onUpdate(() => {
      if (!Eny1.alive) {
        let tCards = grave.length + deck.length;
        wait(0.1, () => {
          for (let i2 = 0; i2 < 6; i2++) {
            wait(0.1, () => {
              if (hand[i2] !== void 0) {
                createShuffleCard(hand[i2]);
                if (i2 == hand.length - 1) {
                }
              }
            });
          }
          curDraggin = null;
        });
        Mana = 4;
        Turno = 1;
        sCard = false;
        onUpdate(() => {
        });
      }
    });
    Combat();
    DecknGrave();
  });
  scene("Lv2", () => {
    Mana = 4;
    Turno = 1;
    sCard = false;
    curDraggin = null;
    setCursor("default");
    const Lv2Fundo = add([
      sprite("Lv2B", { width: w / 100 * 99, height: h / 100 * 80 }),
      pos(w / 2, h / 100 * 35),
      scale(1),
      anchor("center")
    ]);
    const Lv2Paredes = add([
      sprite("Lv2A", { width: width(), height: h / 100 * 75 }),
      pos(w / 2, h / 100 * 35),
      scale(1),
      anchor("center")
    ]);
    DebugButton();
    addButton("Pass", vec2(w / 100 * 7, h / 100 * 30), () => {
      PassTurn();
    });
    addHand();
    hand.splice(0, hand.length - 1);
    addEnemy("phantomKnight", 0, 20, 6);
    addPlayer("Hero", 0, 60, 6);
    Player.hurt(100);
    Eny1.hurt(190);
    Combat();
    DecknGrave();
  });
  scene("menu", () => {
    const BackMenu = add([
      sprite("MainMenu", { width: width() + 75, height: height() }),
      scale(1),
      pos(w / 2 + 28, h / 2),
      anchor("center")
    ]);
    const Grail = add([
      sprite("Grail"),
      scale(3),
      pos(w / 2, h / 100 * 15),
      anchor("center")
    ]);
    DebugButton();
    addButtonSprite("Start", vec2(w / 2, h / 100 * 65), () => go("Lv1"));
    addButtonSprite("Settings", vec2(w / 2, h / 100 * 76), () => debug.log(
      "Configura\xE7\xF5es em breve..."
    ));
    addButtonSprite("About", vec2(w / 2, h / 100 * 87), () => debug.log(
      "Criado pela Equipe RockSolid. Fabio -> Art Director, Programmer, Game Design; Diego -> Programmer; Davi -> Ex-Programmer"
    ));
  });
  scene("Itens", () => {
    const AreaItens = add([
      sprite("areaItens", {
        width: width(),
        height: height()
      }),
      pos(w / 2, h / 2),
      scale(1),
      anchor("center")
    ]);
    curDraggin = null;
    hSlotA = false;
    hSlotB = false;
    hSlotC = false;
    hSlotD = false;
    hSlotE = false;
    hSlotF = false;
    onKeyRelease("f", () => {
      onUpdate(() => {
        docs.innerHTML = `<p id='ver-test'>d.len:${deck.length} || h.len:${hand.length} || g.len:${grave.length} || Mana:${Mana} || Turno:${Turno} || SlotA:${hSlotA} || SlotB:${hSlotB} || SlotC:${hSlotC} || SlotD:${hSlotD} || SlotE:${hSlotE} || SlotF:${hSlotF}</p>`;
      });
    });
    onKeyRelease("space", () => {
      go("Lv2");
    });
  });
  scene("intro", () => {
  });
  loadSprite("Grail", "https://i.imgur.com/WpdThJv.png");
  loadSprite("Start", "https://i.imgur.com/nMlYCRx.png");
  loadSprite("About", "https://i.imgur.com/Z1G1M4J.png");
  loadSprite("Settings", "https://i.imgur.com/uAAQN4m.png");
  loadSprite("Hero", "https://i.imgur.com/wc6Qh8X.png");
  loadSprite("Gato", "https://i.imgur.com/tZBOtvw.png");
  loadSprite("Rato", "https://i.imgur.com/EU8kLUD.png");
  loadSprite("slime", "https://i.imgur.com/RN0SSGe.png");
  loadSprite("phantomKnight", "https://i.imgur.com/tpeY5Fr.png");
  loadSprite("CartaSlot", "https://i.imgur.com/NwPuzi3.png");
  loadSprite("CartaHit", "https://i.imgur.com/IurYaYh.png");
  loadSprite("CartaBurn", "https://i.imgur.com/0Iv1gXv.png");
  loadSprite("CartaHeal", "https://i.imgur.com/HSdVPGi.png");
  loadSprite("CartaFire", "https://i.imgur.com/d4KrmZF.png");
  loadSprite("CartaWater", "https://i.imgur.com/7edUgsm.png");
  loadSprite("CartaBuff", "https://i.imgur.com/FZcUAWn.png");
  loadSprite("CartaFira", "https://i.imgur.com/2qSbZWC.png");
  loadSprite("PlayerHit", "https://i.imgur.com/rLDgcfX.png", {
    sliceX: 5,
    anims: {
      "idle": {
        from: 0,
        to: 4,
        speed: 10,
        loop: true
      }
    }
  });
  loadSprite("MouseHit", "https://i.imgur.com/d8PW6Eb.png", {
    sliceX: 6,
    anims: {
      "idle": {
        from: 0,
        to: 5,
        speed: 10,
        loop: true
      }
    }
  });
  loadSprite("GenericHit", "https://i.imgur.com/3fFtvor.png", {
    sliceX: 8,
    anims: {
      "idle": {
        from: 0,
        to: 7,
        speed: 5,
        loop: true
      }
    }
  });
  loadSprite("waterSpell", "https://i.imgur.com/3fFtvor.png", {
    sliceX: 8,
    anims: {
      "idle": {
        from: 0,
        to: 7,
        speed: 5,
        loop: true
      }
    }
  });
  loadSprite("healthBar", "https://i.imgur.com/0MdqpJT.png");
  loadSprite("espera", "https://i.imgur.com/UjKsVFe.png");
  loadSprite("cura", "https://i.imgur.com/VzbdjwK.png", {
    sliceX: 7,
    anims: {
      "idle": {
        from: 0,
        to: 6,
        speed: 6,
        loop: true
      }
    }
  });
  loadSprite("efeito", "https://i.imgur.com/2q7ZGPs.png");
  loadSprite("Atk", "https://i.imgur.com/HFeq8Nn.png");
  loadSprite("Mana", "https://i.imgur.com/TWMmSfE.png");
  loadSprite("Mana0", "https://i.imgur.com/i8I5rfl.png");
  loadSprite("MainMenu", "https://i.imgur.com/CmzvHa5.png");
  loadSprite("areaItens", "https://i.imgur.com/4o78xRb.png");
  loadSprite("Lv1", "https://cdn.discordapp.com/attachments/1137793513719865444/1147255657565798430/stage1v2XXL.png");
  loadSprite("Lv2A", "https://i.imgur.com/37iH5oG.png");
  loadSprite("Lv2B", "https://i.imgur.com/iL6aCsZ.png");
  loadFont("joystix", "fonts/joystixMonospace.otf");
  start();
})();
//# sourceMappingURL=game.js.map
