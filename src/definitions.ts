import type { Plugin } from '@capacitor/core';

export interface AppAction {
  /**
   * Unique identifier across all app actions.
   */
  id: string;
  title: string;
  subtitle?: string;
  /**
   * iOS: icon name for the system icon e.g. "star.fill"
   * Android: icon name for the system icon e.g. "ic_menu_search"
   */
  icon?: string;
}

export interface AddAppActionOptions {
  actions: AppAction[];
}

export interface AppActionsPlugin extends Plugin {
  /**
   * Set app actions for the app. Overrides any existing app actions.
   */
  set(options: AddAppActionOptions): Promise<void>;
}
