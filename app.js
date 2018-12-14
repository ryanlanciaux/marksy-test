import React from "react";
import marksy from "marksy/components";
import { markdown } from "./test";

const Something = () => <h1>This is a component</h1>;

const compile = marksy({
  createElement: React.createElement,
  components: {
    Something
  }
});

export default class extends React.Component {
  render() {
    return compile(markdown).tree;
  }
}
