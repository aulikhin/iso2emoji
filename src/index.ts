import { COUNTRY_EMOJIES } from './const';

export type TAlpha2Code = keyof typeof COUNTRY_EMOJIES;
export type TFlagEmoji = (typeof COUNTRY_EMOJIES)[TAlpha2Code];

/**
 * Returns the flag emoji corresponding to the given ISO alpha-2 country code.
 * @param countryCode - The ISO alpha-2 country code.
 * @returns The corresponding emoji or undefined if the country code is not found.
 */
export const getEmojiByCountryCode = (countryCode: TAlpha2Code): TFlagEmoji | undefined => COUNTRY_EMOJIES[countryCode];
