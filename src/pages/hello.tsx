import * as React from "react";

import { pageLink } from "./index";
import SayJapanese from "../sayJapanese";

class Hello extends React.Component {
  state: {
    sey: string;
  };

  constructor(props) {
    super(props);
    this.state = {
      sey: "",
    };
  }

  render() {
    return (
      <>
        {pageLink}
        <h1>Hello!!</h1>
        <button
          onClick={() => {
            let str = SayJapanese();
            this.setState({ sey: str });
          }}
        >
          日本語でおｋ
        </button>
        <p>{this.state.sey}</p>
      </>
    );
  }
}

export default Hello;
