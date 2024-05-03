"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ask = (question, yes, no) => {
    if (confirm(question))
        yes();
    else
        (no());
};
ask("Do you agree", () => (alert("you agreed!")), () => (alert("You disagreed!")));
