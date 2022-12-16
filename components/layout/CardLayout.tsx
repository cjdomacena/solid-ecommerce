import { Component, JSX, JSXElement } from "solid-js";

export const CardLayout: Component<{
  children: JSX.Element | JSXElement[];
}> = ({ children }) => {
  return (
    <div class="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-x-4 gap-y-12 mt-4">
      {children}
    </div>
  );
};
