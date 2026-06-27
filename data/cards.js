import { dailyConversation } from './Dailyconversation.js';
import { expressingOpinions } from './Expressingopinions.js';
// import { homeAppliances } from './data/homeAppliances.js';  ← add new categories here

export const cards = [
  ...dailyConversation,
  ...expressingOpinions,
  // ...homeAppliances,
];