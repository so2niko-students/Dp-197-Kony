export const reactFunc = ev => {
    console.log(ev.target.value);
    header1.innerText = ev.target.value;
}