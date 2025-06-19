function customRender(reactElement, container) {
  // const domeElement = document.createElement(reactElement.type)
  // domeElement.innerHTML = reactElement.childen
  // domeElement.setAttribute('href', reactElement.props.href)
  // domeElement.setAttribute('target', reactElement.props.target)
  // container.appendChild(domeElement)

  const domeElement = document.createElement(reactElement.type);
  domeElement.innerHTML = reactElement.childen;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domeElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domeElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  childen: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
