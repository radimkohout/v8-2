// Copyright 2021 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --harmony_intl_enumeration

// Test the return items of timeZone is sorted
let name = "timeZone";
let items = Intl.supportedValuesOf(name);
assertEquals([...items].sort(), items,
      "return value of Intl.supportedValuesOf('" + name + "') should be sorted");
