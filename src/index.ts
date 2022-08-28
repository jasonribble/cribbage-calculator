import { redditExample3 } from "./hands";
import { flush, nobs, kinds, fifteens, straights, calculateHand } from "./app";
import { Hand } from "./types";

const twoFifteens = new Hand(redditExample3.hand).cards;

let handObj = {};

handObj["flush"] = flush(twoFifteens);
handObj["nobs"] = nobs(twoFifteens);
handObj["kinds"] = kinds(twoFifteens);
handObj["fifteens"] = fifteens(twoFifteens);
handObj["straights"] = straights(twoFifteens);
handObj["total"] = calculateHand(twoFifteens);

console.log(handObj);
