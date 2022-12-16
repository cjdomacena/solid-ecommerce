import { Component, JSX } from "solid-js";

interface ComponentProps {
  children: JSX.Element | JSX.Element[];
}

export const Container: Component<ComponentProps> = ({ children }) => {
  return <div class="container mx-auto my-12 p-4">{children}</div>;
};
