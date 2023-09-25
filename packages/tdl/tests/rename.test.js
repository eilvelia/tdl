// @flow

/* eslint-disable quotes, semi, comma-dangle */

const { deepRenameKey, deepRenameKey_ } = require("../dist/util");

const OBJ = Object.freeze({
  _: "chat",
  order: "0",
  is_pinned: false,
  type: {
    _: "chatTypeSupergroup",
    is_channel: true,
  },
  innerObjWithoutType: {
    k1: "v1",
    k2: "v2",
    nil: null,
    und: undefined,
  },
  nullField: null,
  undefinedField: undefined,
  numbers: 1234,
  emptyStr: "",
  typeInStr: "@type",
  underscoreInStr: "_",
  arrayTest: [
    {
      _: "chatPermissions",
      can_send_messages: false,
      can_send_media_messages: false,
      can_send_polls: false,
      innerArray: [
        {
          _: "type",
        },
      ],
    },
    {
      _: "chatNotificationSettings",
      use_default_mute_for: true,
      mute_for: 0,
    },
  ],
});

test("immutable deepRenameKey", () => {
  const obj = { ...OBJ };
  const newObj = deepRenameKey("_", "@type", obj);
  expect(obj).toStrictEqual(OBJ);
  expect(newObj).toMatchInlineSnapshot(`
{
  "@type": "chat",
  "arrayTest": [
    {
      "@type": "chatPermissions",
      "can_send_media_messages": false,
      "can_send_messages": false,
      "can_send_polls": false,
      "innerArray": [
        {
          "@type": "type",
        },
      ],
    },
    {
      "@type": "chatNotificationSettings",
      "mute_for": 0,
      "use_default_mute_for": true,
    },
  ],
  "emptyStr": "",
  "innerObjWithoutType": {
    "k1": "v1",
    "k2": "v2",
    "nil": null,
    "und": undefined,
  },
  "is_pinned": false,
  "nullField": null,
  "numbers": 1234,
  "order": "0",
  "type": {
    "@type": "chatTypeSupergroup",
    "is_channel": true,
  },
  "typeInStr": "@type",
  "undefinedField": undefined,
  "underscoreInStr": "_",
}
`);
});

test("mutable deepRenameKey_", () => {
  const obj = { ...OBJ };
  const newObj = deepRenameKey_("_", "@type", obj);
  expect(obj).toBe(newObj);
  expect(newObj).toMatchInlineSnapshot(`
{
  "@type": "chat",
  "arrayTest": [
    {
      "@type": "chatPermissions",
      "can_send_media_messages": false,
      "can_send_messages": false,
      "can_send_polls": false,
      "innerArray": [
        {
          "@type": "type",
        },
      ],
    },
    {
      "@type": "chatNotificationSettings",
      "mute_for": 0,
      "use_default_mute_for": true,
    },
  ],
  "emptyStr": "",
  "innerObjWithoutType": {
    "k1": "v1",
    "k2": "v2",
    "nil": null,
    "und": undefined,
  },
  "is_pinned": false,
  "nullField": null,
  "numbers": 1234,
  "order": "0",
  "type": {
    "@type": "chatTypeSupergroup",
    "is_channel": true,
  },
  "typeInStr": "@type",
  "undefinedField": undefined,
  "underscoreInStr": "_",
}
`);
});
