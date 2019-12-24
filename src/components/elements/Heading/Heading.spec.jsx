import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Heading from "./Heading";

configure({ adapter: new Adapter() });

describe("<Heading />", () => {
  it("should be defined", () => {
    expect(Heading).toBeDefined();
  });

  it("renders base component correctly", () => {
    const tree = renderer.create(<Heading level="1">Heading</Heading>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders level 2 size medium variation correctly", () => {
    const tree = renderer
      .create(
        <Heading level="2" size="medium">
          Heading
        </Heading>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
