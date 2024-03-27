import { shallow } from "enzyme";
import Card from "./Card";
import React from "react";


it('testing shallow', () => {
    const mockRobots = [
        {
            id: 1,
            name: "John Snow",
            username: "JohnJohn",
            email: "John@gmail.com"
        }
    ]
    expect(shallow(<Card robots={mockRobots}/>)).toMatchSnapshot();
})

