console.log("conncted");

async function handleGetPic() {
    try {
        //@ts-ignore
        const { data } = await axios.get("/api/v1/pics");
        const { picSrc } = data;
        console.log(data);
        renderPic(picSrc);
    } catch (error) {
        console.error(error);
    }
}

async function renderPic(picSrc: string) {
    const root = (document.querySelector("#root") as HTMLDivElement);
    let img = document.createElement("img");
    img.setAttribute(`src`, `${picSrc}`);
    if (root.hasChildNodes()) root.removeChild(root.lastChild!);
    root.appendChild(img);
}