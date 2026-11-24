// Copyright 2026 Thomas Christopher Nevin
// SPDX-License-Identifier: LicenseRef-OpenLetter-Enterprise
// copy of crates/host/package/host-breakpoints/breakpoints.js (host/EXP-host_breakpoints one_sheet)
export const BREAKPOINTS = Object.freeze({ medium: 600, wide: 1024 });
const WINDOWS = ['compact', 'medium', 'wide'];
const ORIENTATIONS = ['portrait', 'landscape'];

export function classify(width, height) {
  const window = width >= BREAKPOINTS.wide ? 'wide' : width >= BREAKPOINTS.medium ? 'medium' : 'compact';
  return { window, orientation: height > width ? 'portrait' : 'landscape' };
}

export function install(scope = globalThis, root = scope.document?.documentElement) {
  if (!root) return;
  root.dataset.window = root.dataset.window || 'wide';
  root.dataset.orientation = root.dataset.orientation || 'landscape';
  scope.zdrWindowClass = (push) => {
    if (WINDOWS.includes(push?.window)) root.dataset.window = push.window;
    if (ORIENTATIONS.includes(push?.orientation)) root.dataset.orientation = push.orientation;
  };
}

install();
