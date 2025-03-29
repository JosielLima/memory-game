import { atom } from "jotai"

// Atom for the configured game
export const selectedThemeAtom = atom()
export const selectedNumberPlayersAtom = atom()
export const selectedGridSizeAtom = atom()

export const gameConfig = atom((get) => ({
  themeAtom: get(selectedThemeAtom),
  numberPlayersAtom: get(selectedNumberPlayersAtom),
  gridSizeAtom: get(selectedGridSizeAtom)
}))
