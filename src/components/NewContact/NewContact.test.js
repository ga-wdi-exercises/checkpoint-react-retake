import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import NewContact from "./NewContact";

let contact = {
  name: "Aquaman",
  email: "Atlantis@gmail.com",
  profile_picture:
    "https://upload.wikimedia.org/wikipedia/en/9/9d/Aquaman_Rebirth_1.png",
  super_power: "talks to fish"
};

describe("Contact component:", () => {
  it("renders without crashing", () => {
    shallow(<NewContact />);
  });

  it("has a title", () => {
    const component = shallow(<NewContact />);
    expect(component.contains(<h1>New Contact</h1>)).toBe(true);
  });

  it("has a form", () => {
    const component = shallow(<NewContact />);
    expect(component.find("form").exists()).toBe(true);
  });

  it("has a name input", () => {
    const component = shallow(<NewContact />);
    expect(component.find("input[name='name']").exists()).toBe(true);
  });

  it("has an email input", () => {
    const component = shallow(<NewContact />);
    expect(component.find("input[name='email']").exists()).toBe(true);
  });

  it("has an image input", () => {
    const component = shallow(<NewContact />);
    expect(component.find("input[name='profile_picture']").exists()).toBe(true);
  });

  it("has an super power input", () => {
    const component = shallow(<NewContact />);
    expect(component.find("input[name='super_power']").exists()).toBe(true);
  });
});
