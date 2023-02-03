"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("conncted");
function handleGetPic() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/pics");
            const { picSrc } = data;
            console.log(data);
            renderPic(picSrc);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function renderPic(picSrc) {
    return __awaiter(this, void 0, void 0, function* () {
        const root = document.querySelector("#root");
        let img = document.createElement("img");
        img.setAttribute(`src`, `${picSrc}`);
        if (root.hasChildNodes())
            root.removeChild(root.lastChild);
        root.appendChild(img);
    });
}
