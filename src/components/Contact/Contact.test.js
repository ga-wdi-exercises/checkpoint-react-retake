import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import Contact from "./Contact";

let contact = {
  name: "Aquaman",
  email: "Atlantis@gmail.com",
  profile_picture:
    "https://upload.wikimedia.org/wikipedia/en/9/9d/Aquaman_Rebirth_1.png",
  super_power: "talks to fish"
};

describe("Contact component:", () => {
  it("renders without crashing", () => {
    shallow(<Contact {...contact} />);
  });

  it("has a `.contact` class", () => {
    const wrapper = shallow(<Contact {...contact} />);
    expect(wrapper.hasClass("contact")).toEqual(true);
  });

  it("has an image, h2, h3, h4", () => {
    const wrapper = shallow(<Contact {...contact} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <img src={contact.profile_picture} />,
        <h2>{contact.name}</h2>,
        <h3>{contact.email}</h3>,
        <h4>{contact.super_power}</h4>
      ])
    ).toEqual(true);
  });

  it("passes through props", () => {
    const wrapper = shallow(<Contact {...contact} />);
    expect(wrapper.find("img").prop("src")).toBe(contact.profile_picture);
    expect(wrapper.find("h2").text()).toBe(contact.name);
    expect(wrapper.find("h3").text()).toBe(contact.email);
    expect(wrapper.find("h4").text()).toBe(contact.super_power);
  });
});
