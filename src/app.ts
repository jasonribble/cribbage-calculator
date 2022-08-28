import { redditExample3 } from "./hands";
import { calculateHand } from "./scoring";
import { straights } from "./scoring/straights";
import { fifteens } from "./scoring/fifteens";
import { kinds } from "./scoring/kinds";
import { flush } from "./scoring/flush";
import { nobs } from "./scoring/nobs";
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
