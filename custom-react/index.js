/*
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};


const reactElement = {
  type: "div",
  props: {},
  children: [
    {
      type: "h1",
      props: {},
      children: "Hello World! Custom React using VanilaJS",
    },
    {
      type: "a",
      props: {
        href: "https://google.com",
        target: "_blank",
      },
      children: "Click me to visit google",
    },
  ],
};


*/

const reactElement = {
  type: "h1",
  props: {},
  children: "Hello World! Custom React using VanilaJS",
};

function renderDOM(reactElement, root) {
  const { type, props, children } = reactElement;
  const domElement = document.createElement(type);
  const isTextNode = typeof children === "string";

  if (isTextNode) {
    const textNode = document.createTextNode(children);
    domElement.appendChild(textNode);
  } else {
    children.forEach((child) => renderDOM(child, domElement));
  }

  Object.keys(props).forEach((propName) => {
    domElement.setAttribute(propName, props[propName]);
  });

  root.appendChild(domElement);
}

const root = document.getElementById("root");

renderDOM(reactElement, root);
