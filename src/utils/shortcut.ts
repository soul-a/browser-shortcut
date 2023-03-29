export interface IShortcut {
  code: string;
  callback: Function;
}

// const DOCUMENT_EVENT_DEFAULT: IEvent[] = [
//   { eventName: "keypress", onlyPreventDefault: true },
//   { eventName: "keydown", onlyPreventDefault: true },
//   { eventName: "keyup", onlyPreventDefault: false },
// ];

const shortcuts: IShortcut[] = [];

function configure(shortcutsArr: IShortcut[]) {
  // Set shortcuts
  if (shortcutsArr) shortcuts.push(...shortcutsArr);
}

// Default prevent
function handlePreventDefault(ev: KeyboardEvent): any {
  const { code, altKey } = ev;
  const shortcutExists = shortcuts.find((e) => e.code === code);

  if (altKey && shortcutExists) ev.preventDefault();
}

// Shortcut handler
function handleShortcuts(ev: KeyboardEvent): any {
  const { code, altKey } = ev;
  const shortcut = shortcuts.find((e) => e.code === code);

  if (altKey && shortcut) {
    ev.preventDefault();
    shortcut.callback();
  }
}

function subscribe() {
  document.addEventListener("keydown", handlePreventDefault);
  document.addEventListener("keypress", handlePreventDefault);
  document.addEventListener("keyup", handleShortcuts);
}

function unsubscribe() {
  document.removeEventListener("keydown", handlePreventDefault);
  document.removeEventListener("keypress", handlePreventDefault);
  document.removeEventListener("keyup", handleShortcuts);
}

export const ShortcutHandler = {
  shortcut: shortcuts,
  configure: configure,
  subscribe: subscribe,
  unsubscribe: unsubscribe,
};
