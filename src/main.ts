import "./style.css";

const foo = [1, 2, 3, null];

const bar = foo.filter(Boolean);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  ${JSON.stringify(bar)}
  </div>
`;
